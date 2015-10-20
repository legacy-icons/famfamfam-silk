'use strict';

var pkg = require('./package.json'),

fs = require('fs'),
path = require('path'),

chalk = require('chalk'),
del = require('del'),
somebody = require('somebody'),
pkgAuthor = somebody.parse(pkg.author),

figletShown = 0,
figlet = require('figlet'),
cowsay = require('cowsay'),
qrcode = require('qrcode-terminal'),

gulp = require('gulp'),
imagemin = require('gulp-imagemin'),
rename = require('gulp-rename'),
minifyCSS = require('gulp-minify-css'),
spriteBuilder = require( 'node-spritesheet' ).Builder,
notify = require('gulp-notify');

function displayCowsay (txt, cb) {
  console.log('\n\n');
  console.log(chalk.magenta(cowsay.say({
    text: pkg.name + ' - ' + txt,
    e: 'oO',
    T: 'U '
  })));
  console.log('\n\n');
  cb();
}

function triggerNotification (title, txt, cb) {
  gulp.src('./')
    .pipe(notify({
      title: pkg.name + ' - ' + title,
      message: txt
    }));
  cb();
}

gulp.task('figlet', [], function (cb) {
  if (figletShown === 0) {
    figlet.text(pkg.name, {
      font: 'Small',
      horizontalLayout: 'default',
      verticalLayout: 'default'
    }, function(err, data) {
      if (err) {
        console.log('Something went wrong with FIGlet');
        console.dir(err);
        return;
      }
      console.log('\n\n');
      console.log(chalk.green(data));
      console.log(chalk.blue(pkg.version));
      console.log('\n\n');
      figletShown = 1;
      cb();
    });
  }
});

/*
 * BUILD TASK
 */

gulp.task('build_clean', ['figlet'], function () {
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
        .pipe(minifyCSS({keepSpecialComments: '*'}))
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
  triggerNotification ('Builder', 'Successfully built application', function () {
    displayCowsay('gulp build - DONE', cb);
  });
});

/*
 * INFO TASK
 */

gulp.task('info', ['figlet'], function (cb) {
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
  triggerNotification ('Info', 'Rendered the info...', function () {
    displayCowsay('gulp info - DONE', cb);
  });
});

gulp.task('default', ['info', 'build']);
