const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: {
        main: './src/foo',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].[hash].js',
    },
}