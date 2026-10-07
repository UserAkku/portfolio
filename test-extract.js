const React = require('react');
function extractText(node) {
  if (typeof node === "string") return node;
  if (typeof node === "number") return node.toString();
  if (Array.isArray(node)) return node.map(extractText).join("");
  if (node && node.props && node.props.children) {
    return extractText(node.props.children);
  }
  return "";
}
const el = React.createElement("div", {}, React.createElement("p", {}, "hello\n"), "world");
console.log(extractText(el));
