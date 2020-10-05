const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'build.js',
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'loaders'), 'node_modules'],
  },
  module: {
    rules: [
      // {
      //   test: /\.(jpg|jpeg|png)$/,
      //   use: 'file-loader'
      // },
      {
        test: /\.(jpg|jpeg|png)$/,
        use: {
          loader: 'url-loader',
          options: { limit: 15 * 1024 }
        }
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
