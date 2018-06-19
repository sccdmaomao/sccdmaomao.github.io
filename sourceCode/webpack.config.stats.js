const config = require('./webpack.config')
const webpack = require('webpack')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const optimize = require('webpack').optimize
const StatsWriterPlugin = require('webpack-stats-plugin').StatsWriterPlugin

const statsOptions = {
  filename: 'stats.json',
  fields: null,
  transform: function(data) {
    data.modules.forEach(function(m) {
      delete m.source
    })
    delete data.children
    return JSON.stringify(data, null, 2)
  }
}

config.output.path = __dirname + '/stats'

config.plugins.push(
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false
    },
    comments: /^\**!|^ [0-9]+ $|@preserve|@license/
  }),
  new StatsWriterPlugin(statsOptions)
)

module.exports = config
