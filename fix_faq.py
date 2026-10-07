import re

with open('content/blog/what-does-bitcoin-look-like-rust-type-system.mdx', 'r') as f:
    content = f.read()

# The FAQ section starts at `## FAQ` and goes to the end of the file.
parts = content.split("## FAQ\n")
if len(parts) == 2:
    faq_text = parts[1]
    
    # We want to match:
    # **Question**
    # 
    # Answer paragraph(s) up to the next **Question** or EOF
    
    pattern = re.compile(r'\*\*(.*?)\*\*\n\n(.*?)(?=\n\*\*|$)', re.DOTALL)
    
    def repl(m):
        q = m.group(1).strip()
        a = m.group(2).strip()
        return f'<Accordion title="{q}">\n{a}\n</Accordion>\n\n'
    
    new_faq = pattern.sub(repl, faq_text)
    
    new_content = parts[0] + "## FAQ\n\n<div className=\"flex flex-col gap-2\">\n\n" + new_faq + "\n</div>\n"
    
    with open('content/blog/what-does-bitcoin-look-like-rust-type-system.mdx', 'w') as f:
        f.write(new_content)
    
    print("Done")
else:
    print("Could not find FAQ section")
