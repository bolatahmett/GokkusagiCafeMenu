const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require('webpack');

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth()).padStart(2, '0');
const dd = String(today.getDate()).padStart(2, '0');
const hh = today.getHours();
const min = today.getMinutes();
const second = today.getSeconds();

const uniqueId = `${yyyy}${mm}${dd}${hh}${min}${second}`;

module.exports = env => {
    console.log(env);
    return {
        entry: './app/src/index.js',
        target: "web",
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: `bundle${uniqueId}.js`,
            publicPath: './'
        },
        devServer: {
            port: 9000,
            historyApiFallback: true,
        },
        resolve: {
            extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
        },
        module: {
            rules: [
                { test: /\.(js)$/, use: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules/') },
                { test: /\.css$/, use: ['style-loader', 'css-loader'] },
                {
                    test: /\.m?js/,
                    resolve: {
                        fullySpecified: false
                    }
                },
                {
                    test: /\.(png|jpe?g|gif|mp3)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                        },
                    ],
                },
            ]
        },
        mode: 'development',
        plugins: [
            new HtmlWebpackPlugin({
                template: 'app/index.html',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    FIREBASE_CONFIG: JSON.stringify(process.env.FIREBASE_CONFIG),
                },
            }),
            new CopyWebpackPlugin({
                patterns: [
                    { from: "images", to: "images" },
                ],
            }),
        ]

    }
};