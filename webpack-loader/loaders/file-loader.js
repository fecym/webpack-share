const loaderUtils = require('loader-utils');
function loader(content) {
  console.log('loader -> content', content);
  const fileUrl = loaderUtils.interpolateName(this, '[hash].[ext]', { content });
  console.log('loader -> fileUrl', fileUrl);
  // 把文件发射到dist目录下
  this.emitFile(fileUrl, content);
  return `module.exports="${fileUrl}"`;
}
loader.raw = true;

module.exports = loader;
