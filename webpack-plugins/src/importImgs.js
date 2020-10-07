const webpackContext = require.context('../static/imgs/', false, /\.(jpg|jpeg|png)$/);
const requireAll = ctx => ctx.keys().map(ctx);
const imgs = requireAll(webpackContext).map(r => r.default);

const fragment = document.createDocumentFragment();

imgs.forEach(item => {
  const img = new Image();
  img.src = `<img src="../static/${item}">`;
  fragment.appendChild(img);
});

document.getElementById('root').appendChild(fragment);
