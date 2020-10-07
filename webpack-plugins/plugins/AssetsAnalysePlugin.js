class AssetsAnalysePlugin {
  constructor({ filename = 'analyse.md' }) {
    this.filename = filename;
  }
  apply(compiler) {
    // 在生成资源并输出到目录之前注册事件
    compiler.hooks.emit.tap('AssetsAnalysePlugin', compilation => {
      const assets = compilation.assets;
      // 字符串拼接大法
      let content = `# 资源统计 \r\n\r\n| 资源名称 | 资源大小 |\r\n| ------ | ------ |`;
      let size = 0;
      const assetsEntries = Object.entries(assets);
      assetsEntries.forEach(([filename, fileObj]) => {
        content += `\r\n| ${filename} | ${fileObj.size()} b |`;
        size += fileObj.size();
      });
      content += `\r\n\r\n共有 ${assetsEntries.length} 个资源，共 ${(size / 1024).toFixed(2)} kb`;
      assets[this.filename] = {
        source() {
          return content;
        },
        size() {
          return content.length;
        },
      };
    });
  }
}

module.exports = AssetsAnalysePlugin;
