import * as path from 'path';
import * as webpack from 'webpack';

const config: webpack.Configuration = {
    entry: {
        main: path.join(__dirname, "../src/index.tsx")
    },
    output: {
        filename: '[name].[hash]js',
        path: path.join(__dirname, "../dist")
    },
    mode: 'development',
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
    }
}

export default config;
