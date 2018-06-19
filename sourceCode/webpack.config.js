const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: './src/index.html',
  filename: 'index.html',
  inject: 'body'
})

module.exports = {
  entry: ['babel-polyfill', './src/index.tsx'],
  output: {
    publicPath: '/',
    filename: 'bundle.js',
    path: __dirname + '/dist'
  },
  devtool: 'source-map',
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.json', '.scss', 'css', 'less']
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          { loader: 'babel-loader' },
          {
            loader: 'ts-loader'
          }
        ],
        include: path.resolve('src')
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          plugins: ['transform-runtime'],
          presets: ['es2015', 'react', 'stage-0']
        }
      },
      {
        test: /\.scss$/,
        loaders: [
          'style-loader',
          'typings-for-css-modules-loader?localIdentName=[name]_[local]_[hash:base64:5]&modules&namedExport&camelCase',
          'sass-loader?sourceMap&sourceMapContents&outputStyle=expanded'
        ],
        include: path.join(__dirname, 'src'),
        exclude: [path.join(__dirname, 'src/thirdParty.scss')]
      },
      {
        test: /thirdParty.scss$/,
        loaders: [
          'style-loader',
          'typings-for-css-modules-loader',
          'sass-loader?sourceMap&sourceMapContents&outputStyle=expanded'
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
        use: 'file-loader?name=[name].[ext]'
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
      }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
  ],
  devServer: {
    historyApiFallback: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: { '^/api': '/' }
      }
    },
    inline: true
  }
}
