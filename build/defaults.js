module.exports = {
    entries: {
        scss: './src/scss/master.scss',
        js: './src/js/main.js'
    },
    output: {
        path: '../dist',
        publicPath: '/dist/'
    },
    port: 8080,
    base: './',
    autoprefixer: ['last 3 versions']/*,
    proxy: {
        target: "http://127.0.0.1:8000"
    }*/
}