
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fileLoader = require('file-loader');
const CopyPlugin = require('copy-webpack-plugin');
const htmlLoader = require('html-loader');
const ConcatPlugin = require('webpack-concat-plugin');



//bu hissədə yeni yaradılan html fayllarını qeyd edirik

// const htmlFile = {
//     index: "index.html",

// };

module.exports = {
    entry: {
        app: './src/js/app.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'build')
    },
    output: {

        path: path.resolve(__dirname, 'build'),
        filename: './js/[name].js'
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: 'src/', to: path.join(__dirname, 'build') }
            ],
        }),
        new ConcatPlugin({
            uglify: false,
            useHash: false,
            sourceMap: false,
            name: 'all',
            fileName: 'js/all.js',
            filesToConcat: ['./src/js/**', './src/js/**'],
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: ['html-loader']
            },
        ]
    }
}













