const HtmlWebpackPlugin = require('html-webpack-plugin');
// 把 link 引入 css 变成 style 标签内的样式
class InnerWebpackPlugin {
  constructor({ match }) {
    this.match = match;
  }
  apply(compiler) {
    compiler.hooks.compilation.tap('InnerWebpackPlugin', compilation => {
      console.log('The compiler is starting a new compilation...');
      // 修改标签
      HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
        'InnerWebpackPlugin', // <-- Set a meaningful name here for stack traces
        (data, cb) => {
          // console.log('InnerWebpackPlugin -> apply -> data', JSON.stringify(data));
          data = this.processData(data, compilation);
          cb(null, data);
        }
      );
    });
  }
  processData(data, compilation) {
    let { headTags, bodyTags } = data;
    headTags = headTags.map(tag => {
      return this.processTag(tag, compilation);
    });
    // bodyTags = bodyTags.map(tag => {
    //   return this.processTag(tag, compilation);
    // });
    return { ...data, headTags };
  }
  processTag(tag, compilation) {
    const url = tag.attributes.href || tag.attributes.src;
    if (this.match.test(url)) {
      if (tag.tagName === 'link') {
        tag = {
          tagName: 'style',
          innerHTML: compilation.assets[url].source(),
        };
      }
      // if (tag.tagName === 'script') {
      //   tag = {
      //     tagName: 'script',
      //     innerHTML: compilation.assets[url].source(),
      //   };
      // }
      delete compilation.assets[url];
    }
    return tag;
  }
}

module.exports = InnerWebpackPlugin;
