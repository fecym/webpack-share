// style-loader 是把 css 代码插入到 html 标签内
function loader(source) {
  const result = `
    const style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style)
  `
  return result
}

module.exports = loader