const loaderUtils = require('loader-utils');
const babel = require('@babel/core');
function loader(source) {
  // loader 传递过来的参数在 this 上可以获取到
  // console.log(this.query);
  const callback = this.async();
  const options = loaderUtils.getOptions(this);
  console.log('loader -> options', options);
  babel.transform(
    source,
    {
      ...options,
      // sourceMap: true,
      // filename: this.resourcePath.split('/').pop()
    },
    (err, result) => {
      // 可以把 sourceMap 返回去
      callback(err, result.code, result.map);
    }
  );
}

module.exports = loader;
