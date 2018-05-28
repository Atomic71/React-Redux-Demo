const path = require("path");
const autoprefixer = require("autoprefixer");
const webpack = require("webpack");
const HTMLwebpackPlugin = require("html-webpack-plugin");

module.exports = {
    devtool: "cheap-module-source-map",
    entry: "./src/index.js",
    
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        chunkFilename: "[id].js",
        publicPath: '/',
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader", "sass-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [
                                autoprefixer({
                                    browsers: [
                                        ">1%",
                                        "last 2 versions"
                                    ]
                                })
                            ]

                        }
                    }
                ],
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]"
            },
            {
                test: /\.svg/,
                use: {
                    loader: 'svg-sprite-loader'
                }
            }
        ]
    },
    plugins: [
        new HTMLwebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: "body"
        }),
    ]
}