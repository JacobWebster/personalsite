const fontPath   = '_assets/fonts/**/*.+(eot|svg|ttf|woff|woff2)';
const destPath  = 'assets/fonts';

module.exports = gulp => {
  gulp.task('fonts', () => {
    gulp.src(fontPath)
    .pipe(gulp.dest(destPath));
  });
};
