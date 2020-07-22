
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const fileLoader = require('file-loader');
const CopyPlugin = require('copy-webpack-plugin');
const htmlLoader = require('html-loader');
const ConcatPlugin = require('webpack-concat-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './src/js/main.js',
        css: './src/css/main.scss'

    },
    output: {

        path: path.resolve(__dirname, 'build'),
        filename: './js/main.js',
    },
    devServer: {
        contentBase: path.join(__dirname, 'build')
    },
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
            }
        ]
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: { sourceMap: true }
                    }, {
                        loader: 'sass-loader',
                        options: { sourceMap: true }
                    }
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/main.css'
        }),
        // new ConcatPlugin({
        //     uglify: false,
        //     useHash: false,
        //     sourceMap: false,
        //     name: 'all',
        //     fileName: 'js/all.js',
        //     filesToConcat: ['./src/js/**', './src/js/**'],
        // }),
        new ConcatPlugin({
            uglify: false,
            sourceMap: false,
            name: 'result',
            outputPath: 'js/',
            fileName: 'result.js',
            filesToConcat: ['./src/js/**', ['./src/css/**', '!./src/css/**']],
            attributes: {
                async: true
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: 'src/',
                    to: path.join(__dirname, 'build'),
                    globOptions: {
                        ignore: [
                            '**/css/main.scss',
                            '**/css/pages/**',
                            '**/js/main.js'
                        ]
                    }
                },
            ],
        }),
    ],


}













