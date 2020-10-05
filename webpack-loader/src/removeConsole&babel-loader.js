console.log(1111);
function fn() {
  return 'fn';
}

const a = fn();
console.log('a', a);
console.info('a', a);
console.table('a', a);
console.warn('a', a);
console.error('a', a);

class Parent {}

const p = new Parent();
console.log('p', p.getName());
