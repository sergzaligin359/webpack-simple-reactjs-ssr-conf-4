const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const webpackNodeExternals = require('webpack-node-externals');

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  target: 'node',
  entry: './src/server/index.js',
  externals: [webpackNodeExternals()],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: 'null-loader'
      }
    ]
  },
  plugins: [

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        IS_SERVER: true
      }
    }),

  ],
});
