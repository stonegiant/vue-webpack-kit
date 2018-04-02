const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

// 编译代码
module.exports = merge(config, {
    mode: 'production',
    plugins: [
        new webpack.optimize.SplitChunksPlugin({
            chunks: "all",
            minSize: 20000,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            name: false,
            cacheGroups: {
                vendor: {
                  test: /node_modules/,
                  chunks: 'initial',
                  name: 'vendor',
                  priority: 10,
                  enforce: true
                }
            },
            runtimeChunk: true
        }),
        // 清理旧文件
        new CleanWebpackPlugin('dist',{
            root: path.resolve(__dirname,'../')
        }),
        // 压缩代码
        // new UglifyJSPlugin()
    ]
});