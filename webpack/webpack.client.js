const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isDev = process.env.NODE_ENV !== 'production';

const config = webpackMerge(baseConfig, {
  mode: isDev ? 'development' : 'production',
  entry: {
    app: path.join(__dirname, "../client/client-entry.tsx"),
    // vendor: path.join(__dirname, "../client/vendor.ts"),
  },
  output: {
    filename: '[name].[hash].js'
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, '../client/index.html'),
      favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    new HTMLWebpackPlugin({
      template: '!!ejs-webpack-loader!' + path.resolve(__dirname, '../client/server-template.ejs'),
      filename: 'server.ejs',
      favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*', '!server.js']
    }),
    new ForkTsCheckerWebpackPlugin(),
  ],
})

if (isDev) {
  config.devServer = {
    host: '0.0.0.0',
    port: '8888',
    liveReload: false,
    overlay: {
      errors: true
    },
    publicPath: '/public/',
    historyApiFallback: {
      index: '/public/index.html'
    },
  }
  config.plugins.push(new webpack.SourceMapDevToolPlugin())
}

module.exports = config;
