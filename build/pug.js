const pug       = require('gulp-pug');

const pugPath   = '_pugfiles/*.pug';
const destPath  = '_includes';

module.exports = gulp => {

  gulp.task('pug', () => {
    return gulp.src(pugPath)
    .pipe(pug())
    .pipe(gulp.dest(destPath));
  });

};
