const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  resolveLoader: {
    modules: ['node_modules', path.resolve(__dirname, 'loaders')]
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: 'removeConsole',
  //     },
  //   ],
  // },
};
