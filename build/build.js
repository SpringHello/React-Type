//import * as webpack from 'webpack'
const webpack = require('webpack')
//import webpack = require('webpack');
//import webpackConfig from '../config/webpack.conf'
const webpackConfig = require('../config/webpack.conf')

webpack(webpackConfig, (err, stats) => {
    if (err) throw err
    process.stdout.write(stats.toString({
        colors: true,
        modules: false,
        children: false, // If you are using ts-loader, setting this to true will make TypeScript errors show up during build.
        chunks: false,
        chunkModules: false
    }) + '\n\n')

    if (stats.hasErrors()) {
        process.exit(1)
    }
})
