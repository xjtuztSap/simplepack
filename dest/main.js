(function(modules){
        function simplePackRequire(filename){
            var fn=modules[filename];
            var module={exports:{}};
            fn(module,simplePackRequire,module.exports);
            return module.exports;
        }
        simplePackRequire('/Users/aaron/Documents/tryproject/simplepack/src/index.js')
    })({'/Users/aaron/Documents/tryproject/simplepack/src/index.js':function(module,require,exports){"use strict";

var _greet = require("./greet.js");

document.write((0, _greet.greet)("Aaron"));},'./greet.js':function(module,require,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.greet = greet;

var _sentence = require("./sentence.js");

function greet(name) {
  var text = (0, _sentence.sentence)(name);
  return "\n    Happy New Year !\n   " + text + "\n   ";
}},'./sentence.js':function(module,require,exports){"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sentence = sentence;
function sentence(name) {
  return "Hello, " + name + " !";
}},})