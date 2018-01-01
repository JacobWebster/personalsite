const eslint   = require('gulp-eslint');
const uglify   = require('gulp-uglify');
const babel    = require('gulp-babel');

const jsPath   = '_assets/js/*.js';
const destPath = 'assets/js';

module.exports = gulp => {


  gulp.task('scripts', () => {
    return gulp.src(jsPath)
    .pipe(eslint({
      useEslintrc: true
    }))
    .pipe(babel({
      presets: ['babel-preset-env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('_site/' + destPath))
    .pipe(gulp.dest(destPath));
  });
};
