var webpack = require('webpack')
var webpackConfig = require('./webpack.prod.conf.js')
var ora = require('ora')
require('shelljs/global')
var spinner = ora('build...')
spinner.start()
rm('-rf', 'dist')


webpack(webpackConfig, function (err, stats) {
    spinner.stop()
    if (err) {
        throw err
    }
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false,
        chunks: false,
        chunkModules: false
    }) + '\n')
})