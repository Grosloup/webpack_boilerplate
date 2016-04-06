var webpack = require('webpack')
var webpackConfig = require('./webpack.base.conf.js')
var defaults = require('./defaults')

webpackConfig.entry.app.unshift('./build/dev-client.js')

webpackConfig.plugins = [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
].concat(webpackConfig.plugins)

module.exports = webpackConfig