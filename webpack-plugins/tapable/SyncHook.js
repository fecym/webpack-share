const { SyncHook } = require('tapable');
// 创建实列
const syncHook = new SyncHook(['name', 'age']);

// 注册事件
syncHook.tap('one', (name, age) => {
  console.log('one', name, age);
});
syncHook.tap('two', (name, age) => {
  console.log('two', name, age);
});
syncHook.tap('three', (name, age) => {
  console.log('three', name, age);
});

// 触发事件，让监听函数执行
syncHook.call('fecym', 25);

export { syncHook };

export default syncHook
