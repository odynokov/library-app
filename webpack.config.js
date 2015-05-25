var webpack = require('webpack');
//var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: {
        main: ['./modules/site/main.coffee'],
        books: ['./modules/books/module.coffee'],
        storage: ['./components/WebStorage.coffee']
    },
    output: {
        path: 'public/assets',
        filename: '[name].js'
    },
    module: {
        loaders: [
            {
                test: /\.coffee$/,
                loader: 'coffee'
            },
            {
                test: /\.styl$/,
                loader: 'style!css!stylus'
                //loader: ExtractTextPlugin.extract("style-loader", "css-loader!stylus-loader")
            },
            {
                test: /\.jade$/,
                loader: 'jade'
            }
        ]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('commons', 'commons.js', 2)
        //new webpack.optimize.UglifyJsPlugin(),
        //new ExtractTextPlugin("[name].css")
    ]
}