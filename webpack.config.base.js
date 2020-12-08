const path = require('path');

module.exports = {
  target: 'web',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/Pages'),
      '@reducers': path.resolve(__dirname, 'src/store/reducers'),
      '@actions': path.resolve(__dirname, 'src/store/actions'),
      '@actionTypes': path.resolve(__dirname, 'src/store/actionTypes'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@api': path.resolve(__dirname, 'src/api'),
    }
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-react',
              ['@babel/env', { targets: { browsers: ['last 3 versions'] } }]
            ]
          }
        }
      },
    ]
  }

}