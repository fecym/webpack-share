const less = require('less');
// less-loader 是把 less 转换为 css
function loader(source) {
  const callback = this.async();
  less.render(source, (err, result) => {
    callback(err, result.css);
  });
}

module.exports = loader;
