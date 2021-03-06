const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
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
        test: /\.(less|css)$/,
        use: ['style-loader', 'less-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
};
