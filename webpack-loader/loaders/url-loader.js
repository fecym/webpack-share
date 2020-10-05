const loaderUtils = require('loader-utils');
const mime = require('mime');
function loader(source) {
  const { limit } = loaderUtils.getOptions(this);
  console.log("loader -> limit", limit, source.length)
  if (limit > source.length) {
    // base64的格式：data:{文件格式};base64,{文件内容}
    const base64 = `data:${mime.getType(this.resourcePath)};base64,${source.toString('base64')}`;
    return `module.exports = "${base64}"`;
  } else {
    return require('./file-loader').call(this, source);
  }
}

loader.raw = true;

module.exports = loader;
