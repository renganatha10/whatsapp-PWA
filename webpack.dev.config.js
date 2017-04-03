const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerPlugin = require('serviceworker-webpack-plugin');


module.exports = {
  devtool: 'inline-source-map',
  entry: [
    './app'
  ],
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'WhatsApp Clone',
      template: './index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new ServiceWorkerPlugin({
      entry: path.join(__dirname, './app/sw.js')
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2)(\?.*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(jpg|png|gif)$/,
        include: /images/,
        loader: 'url-loader'
      }
    ]
  }
};
