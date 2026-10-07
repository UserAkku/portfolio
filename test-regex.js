const line = "|-- version: Version";
const tokenRegex = /(\(.*?\))|([│├─└┌┐┘┼┬┴▼▲]+|\|--|\||(?<=\s|^)v(?=\s|$)|->|<-)|(\b[A-Z][a-zA-Z0-9_]*\b|\[.*?\]|<.*?>|&lt;.*?&gt;)/g;

let lastIndex = 0;
line.replace(tokenRegex, (match, parens, box, keyword, index) => {
  console.log(`Match: "${match}" - box: ${!!box}, keyword: ${!!keyword}`);
  return match;
});
