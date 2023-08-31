const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: { main: './src/person.js'},
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    }
}