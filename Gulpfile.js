const postcss = require('gulp-postcss')
const precss = require('precss')
const cssnext = require('postcss-cssnext')
const inlineSVG = require('postcss-inline-svg')
const gulp = require('gulp')

const task = gulp.task.bind(gulp)
const src = gulp.src.bind(gulp)
const dest = gulp.dest.bind(gulp)

task('css', () =>
  src('./css/basestyles.css')
  .pipe(postcss([
    precss(),
    cssnext(),
    inlineSVG()
  ]))
  .pipe(dest('./dest'))
)
