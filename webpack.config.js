/**
 * @file webpack.config.js
 * Exports configuration for Webpack.
 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

// Construct an array of Webpack plugins.
const plugins = [];
plugins.push(
  new HtmlWebpackPlugin({
    template: 'src/index.html',
    inject: 'body',
    filename: 'index.html'
  })
);

const rules = [];
rules.push({
  test: /\.js|jsx$/,
  exclude: /node_modules/,
  use: 'babel-loader'
});
rules.push({
  test: /\.(jpe?g|png|gif|svg|mp3|dae)$/i,
  exclude: /node_modules/,
  use: 'file-loader'
});

module.exports = {
  plugins,
  module: {
    rules
  }
};
