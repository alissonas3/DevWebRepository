const gulp = require('gulp');
const { series, parallel } = require('gulp')
// const series = gulp.series;

const antes1 = cb => {
  console.log('Tarefa Antes1!')
  return cb()
}

const antes2 = cb => {
  console.log('Tarefa antes2!')
  return cb()
}

function copiar(cb) {
  gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
    .pipe(gulp.dest('pastaB'))
    // .pipe(gulp.src('pastaA/**/*.txt'))
    // .pipe(imageMetade())
    // .pipe(imagemPretoBranco())
    // .pipe(imagemNova())
  return cb();
}

const fim = cb => {
  console.log('Tarefa Final!')
  return cb()
}

module.exports.default = series(
  parallel (antes1, antes2),
  copiar,
  fim,  
);
