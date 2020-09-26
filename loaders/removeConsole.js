const babel = require('@babel/core');
const t = require('@babel/types');

function loader(source) {
  const removeConsolePlugin = {
    visitor: {
      CallExpression(path) {
        // 要求移除所有的 console 的打印
        const { callee } = path.node;
        // console.log(path.node);
        // 根据 ast 结构树要找到 console.log() 语句的特征，callee 为 MemberExpression 并且 callee.object.name 为 console
        if (t.isMemberExpression(callee) && t.isIdentifier(callee.object, { name: 'console' })) {
          path.remove();
        }
      },
    },
  };
  const ret = babel.transform(source, { plugins: [removeConsolePlugin] });
  console.log('loader -> ret.code', ret.code);
  return ret.code;
}

module.exports = loader;
