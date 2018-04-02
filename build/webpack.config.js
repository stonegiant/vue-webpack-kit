
const HtmlWebpackPlugin = require('html-webpack-plugin'); //通过 npm 安装
const webpack = require('webpack'); //访问内置的插件
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        vix: path.resolve(__dirname, '../src/index.ts'),
        app: path.resolve(__dirname, '../demo/index.ts'),
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash].js'
    },
    mode:'development',
    module: {
        rules: [
            {
                test: /\.html$/,
                exclude: /demo/,
                use: 'vue-render-loader'
            },
            {
                test: /\.ts?$/,
                exclude: /node_modules/,
                use: [
                    'template-string-optimize-loader',
                    'ts-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ExtractTextPlugin.extract({
                    use: 'css-loader!less-loader',
                    fallback: 'style-loader'
                })
            },
            {
                test: /\.vue$/,
                use: [
                    {
                        loader: 'vue-loader',
                        options: {
                            loaders: {
                                less: ExtractTextPlugin.extract({
                                    use: 'css-loader?minimize!less-loader',
                                    fallback: 'vue-style-loader'
                                })
                            },
                            preserveWhitespace: false,
                            esModule: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
        ]
    },
    resolve: {
        extensions: [ '.ts', '.js', '.html', '.vue' ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '首页',
            template: path.resolve(__dirname, '../demo/index.html')
        }),
        new ExtractTextPlugin({
            filename: 'style.css',
            allChunks: true
        })
        // new webpack.optimize.CommonsChunkPlugin({
        //     name: 'common' // 指定公共 bundle 的名称。
        // })
    ]
}