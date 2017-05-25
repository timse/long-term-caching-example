const path = require('path');
const webpack = require('webpack');
const NameAllModulesPlugin = require('name-all-modules-plugin');

module.exports = {
    entry: {
        main: './src/foo',
        other: './src/foo-two',
        vendor: ['preact']
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[chunkhash].js',
    },
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.NamedModulesPlugin(),
        new webpack.NamedChunksPlugin((chunk) => {
            if (chunk.name) {
                return chunk.name;
            }
            return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'runtime'
        }),
        new NameAllModulesPlugin()
    ]
}
