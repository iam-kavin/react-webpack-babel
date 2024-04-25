const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html")
        })
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, "build")
        },
        port: 3000
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']

            },

        ]
    },
    resolve: {
        extensions: ["*", ".js", ".jsx"],

    }
    // module: {
    //     rules: [
    //         { test: /\.(js)$/, use: 'babel-loader' },
    //         { test: /\.css$/, use: ['style-loader', 'css-loader'] }
    //     ]
    // },
    // devServer: {
    //     historyApiFallback: true,
    // },

};