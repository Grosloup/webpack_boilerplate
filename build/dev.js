var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var chokidar = require('chokidar')
var webpackConfig = require('./webpack.dev.conf.js')
var defaults = require('./defaults')
var compiler = webpack(webpackConfig)
var hotMiddleware = require("webpack-hot-middleware")(compiler)

var serverOptions = {
    contentBase: defaults.base,
    hot: true,
    historyApiFallback: false,
    quiet: false,
    noInfo: false,
    publicPath: webpackConfig.output.publicPath,
    watchOptions: {
        aggregateTimeout: 300,
        poll: 50
    },
    stats: {colors: true}
}
chokidar.watch(['./**/*.html'])
    .on('change', function(){
        hotMiddleware.publish({action: 'reload'})
    })
    .on('add', function(){
        hotMiddleware.publish({action: 'reload'})
    })
var server = new WebpackDevServer(compiler, serverOptions)

server.use(hotMiddleware);

server.listen(defaults.port, function (err) {
    if (err) {
        console.log(err)
        return
    }
    console.log('====> http://localhost:' + defaults.port + '\n')
})