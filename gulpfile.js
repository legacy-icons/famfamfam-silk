'use strict';

var pkg = require('./package.json'),

fs = require('fs'),
path = require('path'),

chalk = require('chalk'),
del = require('del'),
somebody = require('somebody'),
pkgAuthor = somebody.parse(pkg.author),

qrcode = require('qrcode-terminal'),

gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
cssnano = require('gulp-cssnano'),
spriteBuilder = require( 'node-spritesheet' ).Builder;

/*
 * BUILD TASK
 */

gulp.task('build_clean', [], function () {
  return del(['./dist/*']);
});

gulp.task('sprite', ['build_clean'], function (cb) {
  var builder = null,
  images = [];
  fs.readdir('./src', function (err, files) {
    if (err) {
      throw err;
    }
    files.forEach(function (file) {
      if (path.extname(file) === '.png') {
        images.push('./src/' + file);
      }
    });
    builder = new spriteBuilder({
      outputDirectory: './dist/sprite',
      outputImage: pkg.name + '.png',
      outputCss: pkg.name + '.css',
      selector: '.' + pkg.name,
      images: images
    });
    builder.build(function() {
      gulp.src('./dist/sprite/' + pkg.name + '.css')
        .pipe(cssnano())
        .pipe(rename(pkg.name + '.min.css'))
        .pipe(gulp.dest('./dist/sprite'));
      cb();
    });
  });
});

gulp.task('imagemin', ['sprite'], function (cb) {
  gulp.src('./src/*.png')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/png'));
  cb();
});

gulp.task('build', ['imagemin'], function (cb) {
  cb();
});

/*
 * INFO TASK
 */

gulp.task('info', [], function (cb) {
  var txt;
  console.log('\n\n');
  console.log('[' + chalk.green('NAME') + '] ' + pkg.name);
  console.log('[' + chalk.green('DESCRIPTION') + '] ' + pkg.description);
  console.log('[' + chalk.green('VERSION') + '] ' + pkg.version);
  console.log('[' + chalk.green('HOMEPAGE') + '] ' + pkg.homepage);
  console.log('[' + chalk.green('GITHUB REPOSITORY') + '] ' + pkg.repository.url);
  console.log('[' + chalk.green('NPM URL') + '] https://npmjs.org/package/' + pkg.name);
  console.log('[' + chalk.green('BOWER URL') + '] http://bower.io/search/?q=' + pkg.name);
  console.log('[' + chalk.green('BUG TRACKER') + '] ' + pkg.bugs.url);
  console.log('\n');
  txt = '[' + chalk.green('DOWNLOAD LATEST') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/archive/master.zip';
  console.log(txt);
  txt = '[' + chalk.green('ALL VERSION TAGS') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/tags';
  console.log(txt);
  txt = '[' + chalk.green('RSS/ATOM FOR VERSION TAGS') + '] ';
  txt += 'https://github.com/' + pkgAuthor.name + '/' + pkg.name + '/tags.atom';
  console.log(txt);
  console.log('\n\n');
  qrcode.generate(pkg.homepage);
  console.log('\n\n');
  cb();
});

gulp.task('default', ['info', 'build']);
