const merge = require('webpack-merge');
const config = require('./webpack.config.js');

// 编译代码
module.exports = merge(config, {
    mode: 'release',
    plugins: [
        
    ]
});