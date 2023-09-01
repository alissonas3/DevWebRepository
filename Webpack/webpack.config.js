const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: { main: './src/person.js'},
    output: {
        filename: 'main.js',
        path: __dirname + '/public'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',         // Adiciona CSS a DOM injetando a tag <style>
                    'css-loader'        // Interpreta @import, url()...
                ]
            }
        ]
    }
}