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
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        // use: 'babel-loader?a=b',
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
    ],
  },
};
