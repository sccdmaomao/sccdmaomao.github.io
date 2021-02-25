const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './src/index.html',
    filename: 'index.html',
    inject: 'body'
})

const isDev = process.env.NODE_ENV !== 'production'
module.exports = {
    entry: ['@babel/polyfill', './src/index.tsx'],
    output: {
        publicPath: '/sccdmaomao',
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    devtool: isDev ? 'source-map' : '',
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.json', 'css']
    },
    mode: isDev ? 'development' : 'production',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    {loader: 'babel-loader'},
                    {
                        loader: 'ts-loader'
                    }
                ],
                include: path.resolve('src')
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    cacheDirectory: true,
                    plugins: ['transform-runtime'],
                    presets: ['es2015', 'react', 'stage-0']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$|\.ttf$|\.eot$|\.svg$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'assets'
                        }
                    }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/fontwoff'
            }
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /en/)
    ],
    devServer: {
        historyApiFallback: true,
        disableHostCheck: true,
        inline: true
    }
}
