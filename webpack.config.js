const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/foo',
        vendor: ['preact']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'runtime']
        }),
    ]
}