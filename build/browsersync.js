const browserSync  = require('browser-sync').create();
const cp           = require('child_process');


const scssPath     = '_assets/css/**/*';
const imgPath      = '_assets/img/**/*.+(png|jpg|gif|svg)';
const jsPath       = '_assets/js/*.js';
const pdfPath      = '_assets/pdf/*.pdf';
const fontPath     = '_assets/fonts/**/*.+(eot|svg|ttf|woff|woff2)';
const pugPath      = '_pugfiles/*.pug';
const tempPath = ['*.html', '+(_includes|_layouts)/*.html',
  '*.yml', '_data/*.yml', '_posts/*'];

const jekyll   = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';
const messages = {
  jekyllBuild: '<span style="color: grey">Running:</span> $ jekyll build'
};


module.exports = gulp => {

  // run `jekyll build`
  gulp.task('jekyll-build', done => {
    browserSync.notify(messages.jekyllBuild);
    return cp.spawn(jekyll, ['build'], {stdio: 'inherit'})
    .on('close', done);
  });

  // Rebuild Jekyll then reload the page
  gulp.task('jekyll-rebuild', ['jekyll-build'], () => {
    browserSync.reload();
  });

  gulp.task('serve', ['jekyll-build'], () => {
    browserSync.init({
      server: {
        baseDir: '_site'
      }
    });
  });

  gulp.task('watch', () => {
    gulp.watch(scssPath, ['sass', browserSync.reload]);
    gulp.watch(jsPath, ['scripts', browserSync.reload]);
    gulp.watch(imgPath, ['images', browserSync.reload]);
    gulp.watch(pdfPath, ['pdfs', browserSync.reload]);
    gulp.watch(fontPath, ['fonts', browserSync.reload]);
    gulp.watch(pugPath, ['pug',  browserSync.reload]);
    gulp.watch(tempPath, ['jekyll-rebuild']);
  });
};
