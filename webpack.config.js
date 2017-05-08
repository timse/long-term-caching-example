const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/foo',
        vendor: ['preact']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor']
        })
    ]
}