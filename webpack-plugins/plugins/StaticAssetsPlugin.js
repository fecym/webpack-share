const fs = require('fs');
class StaticAssetsPlugin {
  constructor({ isProd = true, outputPath = 'dist', staticPath = 'static', cdnAddr = '/' }) {
    this.isProd = isProd;
    this.outputPath = outputPath;
    this.staticPath = staticPath;
    this.cdnAddr = cdnAddr;
  }
  apply(compiler) {
    if (!this.isProd) return;
    compiler.hooks.done.tapAsync('StaticAssetsPlugin', compilation => {
      const outputPath = compiler.options.context + '/' + this.outputPath;
      const assets = compilation.toJson().assets;
      const staticPathReg = new RegExp('([../]+)/' + this.staticPath + '/', 'g');
      assets.forEach(fileObj => {
        const filePath = outputPath + '/' + fileObj.name;
        // console.log("apply -> filePath", filePath)
        fs.readFile(filePath, (err, res) => {
          if (err) throw err;
          let result = res.toString();
          result = result.replace(staticPathReg, this.cdnAddr);
          fs.writeFileSync(filePath, result);
        });
      });
    });
  }
}

module.exports = StaticAssetsPlugin;
