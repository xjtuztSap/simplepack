const { getAST, getDependencies,transform } = require("./parser");
const path = require("path");
console.log(getDependencies(getAST(path.join(__dirname, "../src/index.js"))));
