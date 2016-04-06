var path = require('path');
var defaults = require('./defaults')
var autoprefixer = require('autoprefixer')
var root = path.resolve(__dirname, '../')

module.exports = {
    entry: {
        app: [
            './src/scss/' + defaults.entries.scss,
            './src/js/' + defaults.entries.js
        ]
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].js',
        publicPath: '/dist/'
    },
    module: {
        preLoaders: [
            {
                test: /\.js$/,
                loader: 'eslint',
                exclude: /(node_modules|bower_components|build)/
            }
        ],
        loaders: [
            {
                _type: 'css',
                test: /\.scss$/,
                loaders: ['style', 'css', 'postcss', 'sass']
            },
            {
                _type: 'css',
                test: /\.css$/,
                loaders: ['style', 'css', 'postcss']
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: root,
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.(png|jpg|gif|svg|woff2?|eot|ttf)(\?.*)?$/,
                loader: 'url',
                query: {
                    limit: 10000,
                    name: '[name]-[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [],
    eslint: {
        configFile: path.resolve(root, './.eslintrc'),
        formatter: require('eslint-friendly-formatter')
    },
    postcss: function () {
        return [autoprefixer({browsers: defaults.autoprefixer})];
    }
}