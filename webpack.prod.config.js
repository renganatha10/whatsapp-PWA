const path = require('path');
const webpack = require('webpack');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ServiceWorkerPlugin = require('serviceworker-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
  devtool: 'source-map',
  entry: {
    app: './app',
    vendor: [
      'react',
      'react-dom',
      'react-redux',
      'redux',
      'react-router',
      'classnames',
      'react-router-redux',
      'redux-devtools-extension',
      'redux-persist'
    ]
  },
  output: {
    path: path.join(__dirname, 'static'),
    filename: 'bundle.[name].[chunkhash].js',
    publicPath: '/static/'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      minify: {
        minifyCSS: true,
        removeEmptyAttributes: true,
        removeComments: true
      }
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vendor'],
      minChunks: Infinity
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin('app.[chunkhash].css'),
    new webpack.optimize.AggressiveMergingPlugin(),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer'
    }),
    new ServiceWorkerPlugin({
      entry: path.join(__dirname, './app/sw.js')
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.css$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
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
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader!sass-loader'
        })
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader!postcss-loader'
        })
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
