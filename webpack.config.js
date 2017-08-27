const path = require('path');
var webpack = require('webpack');

module.exports = {
    include: path.resolve(__dirname, "src/client/index.ts"),
    output: {
        path: path.resolve(__dirname, 'dist/build/'),  
        filename: 'bundle.js',
        publicPath: '/dist/build/'
    },
    resolve: {
        // Add `.ts` and `.tsx` as a resolvable extension.
        extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
    },
    module: {
        loaders: [
            // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
            { test: /\.tsx?$/, loader: 'ts-loader' }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new webpack.optimize.UglifyJsPlugin({
          compress: { warnings: false },
          mangle: true,
          sourcemap: false,
          beautify: false,
          dead_code: true
        })
      ]
};