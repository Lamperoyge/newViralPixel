'use strict';

const webpack = require('webpack');
var path = require('path');
module.exports = {
    'output': {
        'filename': 'main.js',
        'path': path.join(__dirname, 'public'),
    },
    'resolve': {
        'extensions': [".js", ".jsx", ".json", "scss"]
      },
    'devServer': {
        'publicPath': '/javascripts',
        'https':true,
        host: '0.0.0.0',
        port:8080,
        headers: {
            "Access-Control-Allow-Origin": "*" 
        }
    },
    'watchOptions': {
        aggregateTimeout: 300,
        poll:1000
    },
    'entry': {
        'main': [__dirname + '/src/App.jsx'],
    },
    'module': {
        'rules': [
            {
                'test': /\.json$/,
                'loader': 'json-loader',
            },
            {
                'test': /\.svg$/,
                'loader': 'svg-inline-loader'
            },
            {
                'test': /\.jsx?$/,
                'exclude': /(node_modules|bower_components|\/vendor)/,
                'loader': 'babel-loader', // 'babel-loader' is also a legal name to reference
            },
            {
                'test': /\.css$/,
                'loader': 'style-loader!css-loader',
            },
            {
                'test': /\.scss$/,
                'loader': 'style-loader!sass-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'pixmes': {
                'static': {
                    'host': JSON.stringify(process.env.NODE_ENV === "development" ? 'http://127.0.0.1:8080' : 'http://127.0.0.1'),
                }
            },
        }),
    ],
};
