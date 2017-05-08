const path = require('path');
const webpack = require('webpack');

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
            name: ['vendor', 'runtime']
        }),
        {
            apply(compiler) {
                compiler.plugin("compilation", (compilation) => {
                    compilation.plugin("before-module-ids", (modules) => {
                        modules.forEach((module) => {
                            if (module.id !== null) {
                                return;
                            }

                            module.id = module.identifier();
                        });
                    });
                });
            }
        }
    ]
}