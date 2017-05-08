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
        new webpack.NamedChunksPlugin((chunk) => {
            if (chunk.name) {
                return chunk.name;
            }
            return chunk.modules.map(m => path.relative(m.context, m.request)).join("_");
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['vendor', 'runtime']
        }),
    ]
}