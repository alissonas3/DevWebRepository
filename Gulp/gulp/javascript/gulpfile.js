const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function defaultTest(callback) {
    gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"],

        }))

        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))

    return  callback()
}

function end(cb) {
    console.log('The end!')
    return cb()
}

exports.default = series(defaultTest, end)