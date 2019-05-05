const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')
const config = {
    entry: {
        main: path.join(__dirname, "../src/index.tsx")
    },
    output: {
        filename: '[name].[hash]js',
        path: path.join(__dirname, "../dist")
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: "awesome-typescript-loader"}
        ]
    },
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /node_modules/,
                    name: 'vendors', // 这个字段不写结果会不一样，可以尝试一下，我目前没整明白，求大佬解答
                    chunks: 'initial',
                }
            }
        },
    },
    plugins: [
        new htmlWebpackPlugin({
            template: "index.html"
        })
    ]
}

module.exports = exports = config;
