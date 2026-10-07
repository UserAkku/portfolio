import re

path = '/Users/Akhilesh/ak-projects/portfolio-ak/portfolio/content/blog/what-does-bitcoin-look-like-rust-type-system.mdx'
with open(path, 'r') as f:
    content = f.read()

# First, restore the previous state by finding <DiagramBox> tags and escaping < inside them if we want,
# but it's easier to just use the original file. Let's recreate it from the original content string we have in our python script from earlier!

original = '''---
title: "What Does Bitcoin Look Like When You Design It as a Rust Type System?"
slug: "what-does-bitcoin-look-like-rust-type-system"
date: "2024-10-07"
tags: ["Rust", "Bitcoin", "Systems Design", "API Design"]
excerpt: "Bitcoin is a protocol full of precise meanings: amounts, hashes, addresses, scripts, transaction states and serialization rules. A deep dive into how rust-bitcoin uses Rust types to model those distinctions - and where type safety stops short of consensus correctness."
featured: true
status: "published"
---

Imagine you are looking at this function:

```rust
fn send_money(
    amount: u64,
    address: String,
    hash: [u8; 32],
) { ... }
```

A clean signature. Reads clearly. Compiles fine.

A Bitcoin developer reads it and immediately has questions. Is `u64` in satoshis or some other unit? Which network is that `String` address for — mainnet or testnet? Is `[u8; 32]` a transaction ID, a block hash, or something else entirely? Has the address been validated? Are those bytes in consensus encoding?

The function carries no answers. The information exists somewhere — in documentation, in the caller's head, in runtime checks that might or might not be there. But the types themselves say nothing.

This is the primitive-type trap. And it is where the rust-bitcoin project gets interesting.

---

## The Primitive-Type Trap

Rust's primitive types are powerful precisely because they are general. `u64` can represent anything that fits in 64 bits. `String` can hold any Unicode text. `[u8; 32]` is just thirty-two bytes.

That generality is a liability in a domain like Bitcoin, where meaning matters everywhere.

Consider what a 32-byte array could be in the Bitcoin protocol:

<DiagramBox title="[u8; 32] — same shape, different meanings" text={`[u8; 32]
│
├── Txid          (hash of a non-witness transaction serialization)
├── Wtxid         (hash of the full transaction including witness)
├── BlockHash     (hash of a block header)
├── TapLeafHash   (hash of a Tapscript leaf in a Merkle tree)
├── TapNodeHash   (hash of an internal Taproot node)
└── TapTweakHash  (the tweak applied to the internal key)`} />

All six look identical at the byte level. A function that expects a `Txid` and receives a `BlockHash` by mistake compiles without complaint. The bug lives at runtime — or worse, silently on-chain.

Rust's own API Guidelines describe this situation directly. When different interpretations of the same underlying primitive need to be distinguished, the recommended solution is a newtype: a distinct named type that wraps the primitive and gives it a domain identity.

<Callout type="insight">
A type can carry semantic information even when the underlying bytes look identical. The representation is the same; the meaning is different.
</Callout>

---

## From Bitcoin Concepts to Rust Domain Types

The pattern that repeats throughout the library:

<DiagramBox title="Domain modeling pattern" text={`Raw primitive
     │
     ▼
Bitcoin concept     (what does this value mean?)
     │
     ▼
Rust domain type    (how is that meaning encoded?)
     │
     ▼
Engineering consequence  (what mistake does this prevent?)`} />

A `u64` becomes an `Amount`. A `[u8; 32]` becomes a `Txid` or `BlockHash` depending on what it hashes. A `Vec<u8>` becomes a `ScriptBuf`. A `String` becomes an `Address<...>` parameterized by network validation state.

The library does not simply rename primitives. It gives them invariants, operations, and boundaries that match the Bitcoin protocol rather than the capabilities of the underlying machine.

---

## A Bitcoin Address Has a State

The most instructive single example in rust-bitcoin is how it represents a Bitcoin address.

When you parse an address from user input, you get back an `Address<NetworkUnchecked>`. The address exists — the bytes decoded correctly — but you do not yet know whether it belongs to the network you intend to use.

That distinction matters. Sending a testnet address to a mainnet transaction, or vice versa, is a real mistake that real software has made.

The rust-bitcoin API makes it structural:

<DiagramBox title="Address state transition" text={`User input: "bc1q..."
     │
     ▼
Address<NetworkUnchecked>
     │
     │  require_network(Network::Bitcoin)
     │
     ├────────────────────┬──────────────────────┐
     │                    │                      │
  success              failure               (methods
     │                    │                  requiring
     ▼                    ▼                  validation
Address<NetworkChecked>  Error               unavailable)`} />

The official docs state this directly: the marker type parameter represents whether network validation has happened, and certain operations are only available after validation succeeds.

Think of it like a passport. A document exists before an official verifies it. After verification, it carries a stronger status. The rust-bitcoin address type encodes that status in the type itself — not in a boolean field the caller might forget to check.

This is the typestate pattern. The Rust Embedded Book describes such marker types as zero-cost abstractions: the compile-time state distinction disappears entirely at runtime. There is no performance cost.

<Callout type="insight">
Address validation is not merely an input-validation function. It is a state transition modeled in the API. The type system records whether validation has happened and enforces that you cannot skip it.
</Callout>

The rust-bitcoin maintainers have actively debated the precise implementation of this pattern. A GitHub issue discusses whether the network state should be encoded using a type parameter (the current design) or a const generic boolean. This is not a theoretical concern — it is an ongoing engineering tradeoff about how to express the same invariant more precisely.

---

## Types Can Represent States, Not Just Data

The address example generalizes.

Traditional design puts validation state in a field:

```rust
struct Address {
    value: String,
    validated: bool,  // caller must remember to check this
}
```

Every caller has to remember to check `validated`. Nothing in the API prevents you from using an unvalidated address.

The typestate approach makes the state part of the type:

```rust
// cannot call methods requiring validation
let unchecked: Address<NetworkUnchecked> = parse(&input)?;

// full API available after explicit validation
let checked: Address<NetworkChecked> = unchecked
    .require_network(Network::Bitcoin)?;
```

The wrong operation is a compile error, not a runtime mistake.

<Callout type="warning">
Type systems do not magically prove Bitcoin correctness. They only encode the invariants the library chooses to represent. The typestate pattern for addresses does not verify that the address is funded, that the transaction will be accepted, or that consensus rules are satisfied. It encodes one specific invariant: whether network validation happened.
</Callout>

Choosing which invariants deserve a type is itself the engineering decision.

---

## Money Is More Than a Number

```rust
let amount: u64 = 50_000;
```

50,000 what? Satoshis? Bitcoin? Millisatoshis? The type does not say.

rust-bitcoin represents monetary amounts as `Amount`. The type carries unit semantics — amounts in the Bitcoin domain are satoshis unless explicitly converted — and enforces Bitcoin-specific monetary invariants.

<DiagramBox title="u64 vs Amount" text={`u64
│
"just a number — any value the machine can represent"
│
▼
Amount
│
├── unit:       satoshis (explicit, no ambiguity)
├── validity:   enforced MAX_MONEY limit
├── arithmetic: checked operations, no silent overflow
└── conversion: explicit BTC ↔ satoshi methods`} />

A key detail in the changelog for recent releases: the `Amount` type has been tightened around Bitcoin's `MAX_MONEY` invariant. The previous design allowed values up to `u64::MAX`. The new design enforces that amounts cannot exceed the total supply of bitcoin that will ever exist.

This is more than documentation. The type's API encodes what values are legal, not just what values are representable.

<Callout type="insight">
A good domain type shrinks the gap between "the machine can represent this" and "the protocol considers this meaningful." Representable is not the same as valid.
</Callout>

---

## When 32 Bytes Are Not the Same Thing

The danger of mixing up 32-byte types is not memory corruption. Rust is memory-safe regardless. The danger is semantic: the program compiles because both values are 32 bytes, but the programmer passed the wrong one.

<Callout type="insight">
Memory safety and semantic correctness are different things. A program can be entirely memory-safe and still be semantically wrong. Rust can help with both — but they require different tools.
</Callout>

The rust-bitcoin docs expose `Txid`, `Wtxid`, `BlockHash`, `TapLeafHash`, `TapNodeHash`, and `TapTweakHash` as separate types. A function expecting a `Txid` will not accept a `BlockHash`. The compiler rejects the mistake before it reaches a node.

---

## Txid vs Wtxid — Where Types Meet Protocol History

The `Txid`/`Wtxid` distinction has a concrete origin in Bitcoin's protocol history.

Before SegWit (BIP 141), a transaction had one identifier: the hash of its complete serialization. After SegWit, Bitcoin introduced a second serialization form that includes witness data separately. The two hashes can identify the same transaction from different protocol perspectives.

<DiagramBox title="Transaction identifiers after BIP 141" text={`Transaction
│
├─────────────────────────────┬──────────────────────────────────┐
│                             │                                  │
Non-witness serialization     Full serialization                 │
(inputs, outputs, version)    (includes witness data)            │
│                             │                                  │
▼                             ▼                                  │
txid                          wtxid                              │
(legacy identifier)           (segwit identifier)                │
                                                                  │
Used in:                      Used in:                           │
- Script inputs               - Wtxid commitment                 │
- UTXO references             - Witness Merkle tree              │
- Block explorer links        - Peer-to-peer messaging`} />

BIP 141 defines both serialization forms explicitly. rust-bitcoin exposes them as distinct types. Mixing them in code is a type error.

---

## Script vs ScriptBuf — When Ownership Becomes Part of the Model

Bitcoin scripts are sequences of opcodes that define spending conditions. In rust-bitcoin, scripts have two representations: `Script` and `ScriptBuf`.

`Script` is a borrowed view of existing script data. `ScriptBuf` is an owned, growable buffer. The official docs describe `ScriptBuf` as analogous to `String`, with `Script` as its counterpart analogous to `str`.

```
Script      →   borrowed view, cannot grow, zero-copy
ScriptBuf   →   owned buffer, can append, heap-allocated
```

Think of `Script` as reading a script that already exists somewhere. `ScriptBuf` is your own copy that you can modify.

This distinction reflects Rust's ownership model directly. Whether a type is borrowed or owned affects how it can be used: passed by reference, stored in a struct, returned from a function, appended to. Scripts that are read from transactions should be borrowed. Scripts that are constructed for new transactions should be owned and growable.

---

## Bitcoin Transactions as a Type Graph

Individual types are interesting. What becomes more interesting is how they compose.

<DiagramBox title="Transaction type graph" text={`Transaction
│
├── version:  Version
├── locktime: LockTime
├── input:    Vec<TxIn>
│    └── TxIn
│         ├── previous_output: OutPoint
│         │    ├── txid: Txid
│         │    └── vout: u32
│         ├── script_sig: ScriptBuf
│         ├── sequence:   Sequence
│         └── witness:    Witness
│
└── output: Vec<TxOut>
     └── TxOut
          ├── value:         Amount
          └── script_pubkey: ScriptBuf`} />

Every field is a domain type rather than a raw primitive. `Txid` instead of `[u8; 32]`. `Amount` instead of `u64`. `ScriptBuf` instead of `Vec<u8>`. `Sequence` instead of `u32`.

The library's type graph mirrors the protocol's conceptual graph. This is where the title starts paying off: when you design Bitcoin as a Rust type system, the result looks like the protocol's own structure — made explicit, named, and enforced.

---

## But Bitcoin Eventually Becomes Bytes

At some point, a transaction has to become bytes. Bitcoin nodes speak in bytes. The blockchain stores bytes. Hashes are computed over bytes.

Bitcoin's protocol requires exact byte sequences. The serialization of a transaction is part of what gets hashed to produce its `Txid`. A single extra byte, or bytes in the wrong order, produces a different hash and breaks the protocol.

Generic serialization libraries — serde, JSON, protobuf — do not produce Bitcoin consensus encoding. They produce their own formats, which may be useful for application-level storage but must never be confused with the encoding Bitcoin nodes expect.

The bitcoin-consensus-encoding crate uses a sans-IO design: the codec logic operates on byte chunks rather than directly on `std::io::Read` or `std::io::Write`. The same codec works across file I/O, socket I/O, hash functions, and PSBT — because it does not assume how the bytes will be consumed.

<DiagramBox title="Sans-IO consensus encoding" text={`Bitcoin domain type
     │
     ▼
Consensus encoder
(no I/O assumptions)
     │
     ▼
Byte chunks
     │
     ├─────────────┬─────────────┬──────────────┐
     ▼             ▼             ▼              ▼
  Write to      Send over    Feed into      Pass to
   a file        a socket    a hash fn      PSBT`} />

<Callout type="insight">
Separate what the Bitcoin object is from where its bytes are going. The sans-IO design lets the encoding logic be reused in contexts the original author never anticipated — including no_std environments with no runtime I/O at all.
</Callout>

---

## The Architecture Is Also a Type-System Decision

rust-bitcoin is organized as a multi-crate workspace:

<DiagramBox title="rust-bitcoin crate architecture" text={`bitcoin (high-level API)
│
├── bitcoin-primitives         (Transaction, Script, blocks, keys)
├── bitcoin-units              (Amount, Weight, FeeRate, BlockHeight)
├── bitcoin-consensus-encoding (codec layer)
├── bitcoin_hashes             (Txid, BlockHash, all hash types)
├── bitcoin-addresses          (Address and network types)
└── bitcoin-taproot-primitives (Taproot-specific types)`} />

GitHub issue #549, which proposed the original workspace split, explains the historical reasoning: maintainers wanted to reduce dependency weight, support `no_std`, and avoid forcing users of basic Bitcoin structures to pull in heavier cryptographic dependencies. A developer who only needs to parse transaction data should not have to depend on the secp256k1 signing library.

<Callout type="insight">
Rust's language rules influence the architecture of the Bitcoin library. It is not just Bitcoin → Rust. The flow runs in both directions: Bitcoin protocol constraints shape which types to create; Rust language constraints shape where those types can live.
</Callout>

---

## PSBT — Modeling a Partially Completed Workflow

Partially Signed Bitcoin Transactions (PSBT, BIP 174) represent a more complex design challenge: not just a data structure, but a workflow.

Signing a transaction often involves multiple parties or devices. A hardware wallet needs to sign without having network access. A coordinator needs to assemble partial signatures from multiple participants.

<DiagramBox title="PSBT signing workflow" text={`Unsigned transaction
     │
     ▼
PSBT (Partially Signed Bitcoin Transaction)
     │
     ├─────────────────┬───────────────────┐
     ▼                 ▼                   ▼
  Wallet           Hardware            Another
  (adds UTXO      wallet               signer
   info)          (signs input)        (co-signs)
     │                 │                   │
     └─────────────────┴───────────────────┘
                       │
                       ▼
               Finalized transaction
                       │
                       ▼
               Broadcast to network`} />

rust-bitcoin's PSBT module carries transaction-associated metadata including scripts, BIP32 derivation paths, and Taproot fields. The type organizes the metadata that different participants need, making the protocol's multi-party intent visible in the API.

---

## Taproot — When the Type Model Gets More Complex

Taproot (BIPs 340–342) introduced a new spending model where a Bitcoin output can be spent either by a single key or by one of many scripts hidden in a Merkle tree. This complexity stresses the domain model.

<DiagramBox title="Taproot semantic types" text={`Taproot output key
│
├── Internal key: XOnlyPublicKey
│
└── Script tree (optional)
     │
     ├── Leaf 1 → TapLeafHash
     ├── Leaf 2 → TapLeafHash
     │
     ├── Node hash: TapNodeHash
     │
     └── Tree root → TapTweakHash (tweaks the internal key)

Spending paths:
  Key path:    sign with tweaked internal key (no script revealed)
  Script path: reveal one leaf and its Merkle proof`} />

The library exposes `TapLeafHash`, `TapNodeHash`, `TapTweakHash`, `XOnlyPublicKey`, `TapSighash`, and `TapSighashType` as distinct semantic types. They are all 32-byte values at the machine level. The protocol gives them different roles.

When Bitcoin introduced Taproot, the library did not just add functions. It added new semantic types — because the protocol introduced new concepts that deserved distinct identities.

---

## The Cost of Type Safety

More semantic types means more types to learn, more explicit conversions, more trait implementations to maintain, and a steeper learning curve for beginners.

The maintainers experience these costs directly. The debate about whether to encode address validation state using a type parameter or a const generic boolean is a real engineering discussion about the tradeoff between expressiveness and simplicity. There has also been discussion about script tagging — adding type markers to distinguish scripts by their protocol role — which would add safety at the cost of more conversion friction.

<Callout type="note">
The goal is not maximum types. The goal is the right types at the right boundaries — the ones where meaning, state, ownership, or invariant is important enough to deserve a name.
</Callout>

---

## Where the Type System Stops

The rust-bitcoin README is explicit: do not use this library as a Bitcoin consensus implementation. The project acknowledges known and unknown deviations from Bitcoin Core's consensus behavior. Using rust-bitcoin to fully validate blockchain data is, in the maintainers' own words, ill-advised.

<DiagramBox title="What the type system can and cannot enforce" text={`Bitcoin correctness
│
├── Type safety          ← Rust can help here
│    ├── Semantic distinctions (Txid vs BlockHash)
│    ├── Validation state (Address<Checked>)
│    ├── Monetary invariants (Amount + MAX_MONEY)
│    └── Ownership distinctions (Script vs ScriptBuf)
│
├── API validation       ← Rust can help here
│    ├── Construction-time range checks
│    └── Parsing error handling
│
└── Consensus correctness ← Outside rust-bitcoin scope
     ├── Full script validation
     ├── UTXO set management
     ├── Signature edge cases
     └── Protocol equivalence with Bitcoin Core`} />

<Callout type="insight">
Memory safety ≠ type safety ≠ protocol correctness ≠ consensus correctness.

These are four distinct properties. Rust can help enforce the first two in the context of a library. The fourth requires being Bitcoin Core.
</Callout>

---

## Conclusion — Protocols Have Types Hiding Inside Them

Bitcoin's specification describes its objects in terms of bytes, integers, hashes, and serialized fields. Those are accurate at the machine level. But they erase meaning.

A 32-byte sequence is a `Txid` or a `BlockHash` or a `TapLeafHash` — and those are different. An amount is in satoshis, has a maximum value, and should be checked at arithmetic. An address has a network, and that network must be verified before the address is used.

rust-bitcoin makes those distinctions explicit. Not all of them — the library is not a full consensus implementation and does not claim to be. But the ones it does encode move Bitcoin's meaning from the programmer's head into the type system, where the compiler can help enforce it.

The broader lesson, which applies anywhere you are designing an API for a precise domain:

> Good type-safe API design is not about creating the maximum number of types. It is about choosing the boundaries where meaning, state, ownership, and invariants matter enough to deserve a type. Make the wrong program harder to write than the right program. Move as many mistakes as possible to compile time. And be honest about where the type system's reach ends.

---

## FAQ

**What is rust-bitcoin?**

A Rust library for representing, parsing, serializing, and manipulating Bitcoin data structures and protocol formats. It explicitly does not claim to be a consensus implementation and warns against using it to validate blockchain data.

**Why does rust-bitcoin use so many different types?**

Because Bitcoin contains many values that have similar underlying representations but different meanings or invariants. A `Txid` and a `BlockHash` are both 32 bytes, but they hash different things and are used differently.

**What is `Address<NetworkUnchecked>`?**

An address that has been parsed but whose network has not yet been validated. Calling `require_network(...)` either returns `Address<NetworkChecked>` or an error. Certain operations are only available on the checked form.

**Why isn't a Bitcoin amount just a `u64`?**

A domain-specific `Amount` type carries unit semantics, enforces Bitcoin's `MAX_MONEY` invariant, and provides checked arithmetic that does not silently overflow.

**What is the difference between `Script` and `ScriptBuf`?**

`Script` is a borrowed, read-only view of script data. `ScriptBuf` is an owned, growable script buffer. The distinction mirrors Rust's `str` vs `String`.

**What is consensus encoding?**

The exact byte representation that Bitcoin nodes use to transmit and hash transaction and block data. Distinct from generic serialization formats like JSON or serde.

**What is PSBT?**

Partially Signed Bitcoin Transaction (BIP 174). A format for carrying an unsigned transaction together with the information different parties need to contribute signatures.

**Does rust-bitcoin support `no_std`?**

Yes. The project is designed to work without the Rust standard library, enabling use in embedded environments and hardware wallets.

**Is rust-bitcoin a Bitcoin node?**

No. It handles Bitcoin data structures, encoding, signing, and protocol formats. It does not run a full node or validate the blockchain.

**Can rust-bitcoin validate the Bitcoin blockchain?**

The project explicitly advises against this. Full consensus validation requires Bitcoin Core.
'''

with open(path, 'w') as f:
    f.write(original)
print("Done")
