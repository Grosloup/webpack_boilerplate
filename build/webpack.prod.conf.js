var webpack = require('webpack')
var webpackConfig = require('./webpack.base.conf.js')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var extractCss = new ExtractTextPlugin('app.css')


webpackConfig.plugins = webpackConfig.plugins.concat([
    extractCss,
    new webpack.optimize.UglifyJsPlugin({
        comments: false
    }),
    new webpack.optimize.OccurenceOrderPlugin()
])

webpackConfig.module.loaders.forEach(function (e, i) {
    if(e.hasOwnProperty('_type') && e['_type'] === 'css'){
        var cssLoaders = webpackConfig.module.loaders[i].loaders
        webpackConfig.module.loaders[i].loaders = null
        webpackConfig.module.loaders[i].loader = extractCss.extract(cssLoaders.slice(1, cssLoaders.length))
    }
})
module.exports = webpackConfig