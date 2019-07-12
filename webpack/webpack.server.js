const path = require('path');
const nodeExternals = require('webpack-node-externals');
const baseConfig = require('./webpack.base')
const webpackMerge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const NodemonPlugin = require('nodemon-webpack-plugin')
const isDev = process.env.NODE_ENV !== 'production';

const config = webpackMerge(baseConfig, {
  mode: isDev ? 'development' : 'production',
  target: 'node',
  externals: [nodeExternals()],
  entry: {
    server: path.join(__dirname, "../server/app.ts"),
  },
  output: {
    filename: 'server.js',
    libraryTarget: 'commonjs2'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new NodemonPlugin({
      watch: path.resolve(__dirname, '../dist/server.js'),
      script: path.resolve(__dirname, '../dist/server.js')
    })
  ]
});

module.exports = config;
