const webpackContext = require.context('../static/text/', false, /\.txt$/);
const requireAll = ctx => ctx.keys().map(ctx);
const imgs = requireAll(webpackContext).map(r => r.default);

const fragment = document.createDocumentFragment();

imgs.forEach(item => {
  const div = document.createElement('div')
  div.innerHTML = `../static/${item}`
  fragment.appendChild(div);
});

document.getElementById('root').appendChild(fragment);
