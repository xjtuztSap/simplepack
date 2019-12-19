const { getAST, transform, getDependencies } = require("./parser");
const path = require("path");
const fs = require("fs");

module.exports = class Compiler {
  constructor(options) {
    const { entry, output } = options;
    this.entry = entry;
    this.output = output;
    this.modules = [];
  }

  run() {
    const entryModule = this.buildModule(this.entry, true);
    this.lookupModules(entryModule);
    this.emitFiles();
  }

  lookupModules(module) {
    this.modules.push(module);
    if (module.dependencies.length) {
      module.dependencies.map(dependency => {
        const _module = this.buildModule(dependency);
        this.lookupModules(_module);
      });
    }
  }

  buildModule(filename, isEntry) {
    let ast;
    if (isEntry) {
      ast = getAST(filename);
    } else {
      const absolutePath = path.join(process.cwd(), "src", filename);
      ast = getAST(absolutePath);
    }

    return {
      filename,
      dependencies: getDependencies(ast),
      source: transform(ast)
    };
  }

  emitFiles() {
    const outputPath = path.join(this.output.path, this.output.filename);

    let modules = "";
    this.modules.map(_module => {
      modules += `'${_module.filename}':function(module,require,exports){${_module.source}},`;
    });

    const bundle = `(function(modules){
        function simplePackRequire(filename){
            var fn=modules[filename];
            var module={exports:{}};
            fn(module,simplePackRequire,module.exports);
            return module.exports;
        }
        simplePackRequire('${this.entry}')
    })({${modules}})`;

    fs.writeFileSync(outputPath, bundle, "utf-8");
  }
};
