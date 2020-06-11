
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const fileLoader = require('file-loader');
const CopyPlugin = require('copy-webpack-plugin');


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
    }
}













