const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function defaultTestJs(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,        // Não permite que arquivos de comentarios sejam transferidos para o arquivo final.
            presets: ["env"],       // JS mais novo.

        }))

        .pipe(uglify())             // Pega todo código e converte para ser unificado.
        .on('error', err => console.log(err))           
        .pipe(concat('codigo.min.js'))              // Pega todos os arquivos que foram compilados usando babel e já foi feito o freamento (unica linha, sem espaço) e o resultado concatenado e o nome do arquivo que será gerado.
        .pipe(gulp.dest('build'))                   // Destino do arquivo que sera gerado.

    return  callback()
}

function end(cb) {
    console.log('The end!')
    return cb()
}

exports.default = series(defaultTestJs, end)