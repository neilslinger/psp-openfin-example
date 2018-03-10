const path = require("path");
const webpack = require("webpack");

module.exports = {
    devtool: "inline-source-map",
    entry: {
        viewer: "./src/viewer.js",
        controller: "./src/controller.js"
    },
    module: {
        rules: [
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.css$/, loader: 'css-loader' }
        ]
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, "build"),
        historyApiFallback: true,
        publicPath: "/"
    }
}