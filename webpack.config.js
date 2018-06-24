const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const BUILD_DIR = path.resolve(__dirname, './build');
const APP_DIR = path.resolve(__dirname, './src/js/app');
const HTML_DIR = path.resolve(__dirname, './src/html');
const languages = require('./webpack.lang.config');

module.exports = {
    context: path.resolve(__dirname, './'),
    mode: "development", // "production",
    entry: {
        main: APP_DIR + '/index.js'
    },
    output: {
        filename: 'bundle.js',
        path: BUILD_DIR,
    },
    // target: 'node',
    // output: {
    //     path: path.resolve(__dirname, './build'),
    //     libraryTarget: "var",
    //     filename: '[name].js'
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    query: {
                        presets: ['es2017', 'stage-0', 'react'],
                        plugins: [
                            ["transform-decorators-legacy"],
                        ]
                    }
                },

            }, {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader', // creates style nodes from JS strings
                    use: [
                        "css-loader", // translates CSS into CommonJS
                        "sass-loader", // compiles Sass to CSS
                    ]
                })
            },
        ]
    },
    plugins: [
        // new ExtractTextPlugin("styles.css")
        new HtmlWebpackPlugin({
            template: `${HTML_DIR}/index.html`
        }),
        new ExtractTextPlugin({filename: '[name].css'}),

    ],
    stats: {
        colors: true
    },
    devtool: 'source-map'
};