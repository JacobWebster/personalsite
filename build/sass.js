const sass        = require('gulp-sass');
const prefix      = require('gulp-autoprefixer');
const cleanCSS    = require('gulp-clean-css');

const scssPath    = '_assets/css/*.scss';
const destPath    = 'assets/css';

module.exports = gulp => {

  gulp.task('sass', () => {
    gulp.src(scssPath)
    .pipe(sass())
    .pipe(prefix({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('_site/' + destPath))
    .pipe(gulp.dest(destPath));
  });

};
