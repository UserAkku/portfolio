const { compile } = require('@mdx-js/mdx');

async function main() {
  const code = await compile('<DiagramBox title="Test" text={`Hello\nWorld`} />', { outputFormat: 'function-body', development: false });
  console.log(code.value);
}

main().catch(console.error);
