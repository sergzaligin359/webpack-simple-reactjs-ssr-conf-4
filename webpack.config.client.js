const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const CompressionPlugin = require('compression-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

const TerserPlugin = require("terser-webpack-plugin");

const baseConfig = require('./webpack.config.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  entry: './src/client.js',
  output: {
    filename: 'bundle.[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({
      terserOptions: {
        ecma: 6,
        parse: {},
        compress: {},
        mangle: true,
        module: false,
      }
    })],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CompressionPlugin(),
    new CleanWebpackPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
        IS_CLIENT: true
      }
    }),
    new StatsWriterPlugin({
      stats: {
        all: false,
        assets: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.[chunkhash].css'
    })
  ],
  devtool: 'inline-source-map'
})