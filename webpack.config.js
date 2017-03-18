const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = { 
  entry: [
    path.join(__dirname, 'src/index.js'),
  ],
  output: {
    path: path.join(__dirname, 'www'),
    filename: 'bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
        filename: 'index.html',
        template: './src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'src'),
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-2'
              ],
            }
          },

        ]
      },
      {
        test: /\.(css|scss|sass)$/,
        loader: 'style!css!sass',
      },
    ]
  },
  devServer: {
    hot: true
  }
};