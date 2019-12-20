var even = require("./even.js");

module.exports = function odd(n) {
  return n != 0 && even(n - 1);
};
