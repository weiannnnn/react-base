const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, 'src') + '/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(jpg|png|gif|svg|ico)$/,
                use: { loader: 'url-loader' }
            },
            {
                test: /\.(ttf|eot|woff|woff2|otf)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    // Resolves webpack error fr 'fs'
    node: {
        fs: 'empty'
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin('main.css'),
        new webpack.DefinePlugin({
            'URL': JSON.stringify(process.env.API_URL ? process.env.API_URL : 'http://0.0.0.0:4003')
        })
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'public'),
        port: process.env.PORT || 3200,
        host: process.env.HOST || '0.0.0.0',
        hot: true,
        historyApiFallback: true
    }
};