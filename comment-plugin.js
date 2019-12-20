const { ConcatSource } = require("webpack-sources");
module.exports = class CommentPlugin {
  constructor(comment) {
    this.comment = comment;
  }
  apply(compiler) {
    const comment = this.comment;
    compiler.hooks.compilation.tap("CommentPlugin", compilation => {
      compilation.hooks.optimizeChunkAssets.tap("CommentPlugin", chunks => {
        for (const chunk of chunks) {
          const { files } = chunk;
          for (const file of files) {
            if (file.match(/\.js$/)) {
              compilation.assets[file] = new ConcatSource(
                `// ${comment}`,
                "\n",
                compilation.assets[file]
              );
            }
          }
        }
      });
    });
  }
};
