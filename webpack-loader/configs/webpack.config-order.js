const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  resolveLoader: {
    // alias: {
    //   loader1: path.resolve(__dirname, 'loaders', 'loader1.js')
    // }
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'loader1',
        // 改变 loader 的执行顺序
        // enforce: 'pre'
      },
      {
        test: /\.js$/,
        use: 'loader2',
      },
      {
        test: /\.js$/,
        use: 'loader3',
        // enforce: 'post'
      },
    ],
  },
};
