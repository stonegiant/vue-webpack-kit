'use strict';

const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');

module.exports = merge(config,{
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, "../dist"),
        hot: true,
        host: 'localhost',
        port: 9000,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})
