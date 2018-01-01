const pdfPath   = '_assets/pdf/*.pdf';
const destPath  = 'assets/pdf';

module.exports = gulp => {
  gulp.task('pdfs', () => {
    gulp.src(pdfPath)
    .pipe(gulp.dest(destPath));
  });
};
