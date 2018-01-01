const imagemin  = require('gulp-imagemin');

const imgPath   = '_assets/img/**/*.+(png|jpg|gif|svg)';
const destPath  = 'assets/img';

module.exports = gulp => {

  gulp.task('images', () => {
    return gulp.src(imgPath)
    .pipe(imagemin())
    .pipe(gulp.dest('_site/' + destPath))
    .pipe(gulp.dest(destPath));
  });

};
