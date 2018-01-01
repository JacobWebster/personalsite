'use strict';

const gulp    = require('gulp');
const sass    = require('./build/sass');
const scripts = require('./build/scripts');
const images  = require('./build/images');
const pug     = require('./build/pug');
const pdfs    = require('./build/pdfs');
const fonts   = require('./build/fonts');
const sync    = require('./build/browsersync');

[ sass, scripts, images, pug, pdfs, fonts, sync ].forEach( task => {
  task( gulp );
});

gulp.task( 'build', [ 'sass', 'scripts', 'images', 'pug', 'pdfs', 'fonts', 'jekyll-build' ]);

gulp.task( 'default', [ 'build', 'watch', 'serve' ]);
