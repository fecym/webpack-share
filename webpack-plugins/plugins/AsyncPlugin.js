class AsyncPlugin {
  apply(compiler) {
    // tap call
    // tap callAsync
    // tapAsync callAsync
    // tapPromise promise
    compiler.hooks.emit.tap('assets-analyse', function (compilation) {
      // console.log('AsyncPlugin -> apply -> compilation', Object.keys(compilation));
      console.log('AsyncPlugin -> apply -> compilation', Object.keys(compilation.assets));
      console.log('AsyncPlugin -> apply -> compilation', compilation.assets['index.html']);
      compilation.assets['index.txt'] = {
        source() {
          return 'hello world'
        },
        size() {
          return 5
        }
      }
    });
  }
}

module.exports = AsyncPlugin;
