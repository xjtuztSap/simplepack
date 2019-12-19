const sentence = require("./sentence.js");
function greet(name) {
  const text = sentence(name);
  return `
    Happy New Year !
   ${text}
   `;
}
module.exports = greet;
