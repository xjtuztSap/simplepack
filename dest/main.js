(function(modules){
        function simplePackRequire(filename){
            var fn=modules[filename];
            var module={exports:{}};
            fn(module,simplePackRequire,module.exports);
            return module.exports;
        }
        simplePackRequire('/Users/aaron/Documents/github/simplepack/src/main.js')
    })({'/Users/aaron/Documents/github/simplepack/src/main.js':function(module,require,exports){"use strict";

setTimeout(function () {
  document.write("Simple Pack!!");
}, 2000);},})