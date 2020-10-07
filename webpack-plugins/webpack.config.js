const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const AssetsAnalysePlugin = require('./plugins/AssetsAnalysePlugin');
const StaticAssetsPlugin = require('./plugins/StaticAssetsPlugin');
const InnerWebpackPlugin = require('./plugins/InnerWebpackPlugin');
module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name]-[hash:6].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env'] },
        },
      },
      {
        oneOf: [
          {
            test: /\.(jpg|jpeg|png)$/,
            use: {
              loader: 'file-loader',
              options: { name: 'images/[name]-[hash:6].[ext]' },
            },
          },
          {
            test: /\.css$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            loader: 'file-loader',
            exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
            options: {
              name: 'media/[name]-[hash:6].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ filename: 'css/[name]-[hash:6].css' }),
    new HtmlWebpackPlugin({
      template: path.resolve('./public/index.html'),
      filename: 'index.html',
    }),
    new StaticAssetsPlugin({
      isProd: true,
      outputPath: 'dist',
      staticPath: 'static',
      cdnAddr: 'http://chengyuming.cn/',
    }),
    new AssetsAnalysePlugin({ filename: 'analyse.md' }),
    // new InnerWebpackPlugin({ match: /\.(js|css)$/ }),
  ],
};
