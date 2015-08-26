/* 
* @Author: pedromello
* @Date:   2015-08-27 01:50:35
* @Last Modified by:   Pedro Mello
* @Last Modified time: 2015-08-27 02:42:17
*/

'use strict';

var webpack = require('webpack');

module.exports = {
    entry: [
        //"bootstrap-webpack!./app/config/bootstrap.config.js",
        "./app/app.js"
    ],
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: "style!css"},
            // the file-loader emits files. 
            {test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&minetype=application/font-woff"},
            {test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"},
            {test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/, loader: "file-loader"},
            {test: /\.ejs$/, loader: "ejs-loader?variable=data"},
            {test: /\.less$/,loader: "style!css!less?strictMath&noIeCompat"}
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ProvidePlugin({_: "underscore"}),
        new webpack.ProvidePlugin({$: "jquery",jQuery: "jquery","window.jQuery": "jquery"})
    ],
    resolve: {
        extensions: ['', '.js', '.json'] 
    }
};