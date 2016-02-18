
# famfamfam-silk

[![NPM version](https://img.shields.io/npm/v/famfamfam-silk.svg)](https://www.npmjs.org/package/famfamfam-silk)
[![Bower version](https://img.shields.io/bower/v/famfamfam-silk.svg)](http://bower.io/search/?q=famfamfam-silk)
[![Packagist version](https://img.shields.io/packagist/v/legacy-icons/famfamfam-silk.svg)](https://packagist.org/packages/legacy-icons/famfamfam-silk)
[![Nuget version](https://img.shields.io/nuget/v/famfamfam-silk.svg)](https://www.nuget.org/packages/famfamfam-silk/)

[![Dependency Status](https://img.shields.io/david/dev/legacy-icons/famfamfam-silk.svg)](https://david-dm.org/legacy-icons/famfamfam-silk)
[![Build Status](https://img.shields.io/travis/legacy-icons/famfamfam-silk.svg)](https://travis-ci.org/legacy-icons/famfamfam-silk)


## About

The `Silk` icon pack, as available on [famfamfam website](http://www.famfamfam.com/lab/icons/silk/).

All credits for these icons go to their original author: Mark James (mjames@gmail.com)

The aim of this project is to make this icon pack available through various package managers, such as:

- [NPM](https://npmjs.org)
- [Bower](http://bower.io)
- [Packagist](https://packagist.org)
- [NuGet](https://www.nuget.org)

All icons are supplied in PNG format.


## CSS spritesheets

You can insert the icons directly into your HTML with a common IMG tag:

```html
<img alt="Delete" src="dist/png/key_delete.png" width="16" height="16">
```


In addition to the icons by themselves, this project also ships a CSS spritesheet for the icon-pack. This spritesheet allows to load the entire icon-pack in just 1 image, and thus reduce HTTP calls.

This is what it actually looks:

![Spritesheet](https://raw.githubusercontent.com/legacy-icons/famfamfam-silk/master/dist/sprite/famfamfam-silk.png)


All the positioning of the icons inside this alone image is made through CSS, which allows you to just add block-type tags with the proper class and get the same result:

```html
<div class="famfamfam-silk key_delete"></div>
```

Just remember to add the CSS stylesheet to the HEAD of your HTML page!


## Install

### Get the package with NPM

> npm install famfamfam-silk


### Get the package with Bower

> bower install famfamfam-silk


### Get the package with Composer / Packagist

> composer require legacy-icons/famfamfam-silk


### Get the package with NuGet

> Install-Package famfamfam-silk


## Build the whole project or your custom project

We use [Gulp](http://gulpjs.com/) to build the project, so if you want to re-build or customize this project, you'll need Gulp.

After gulp is installed, and your CLI is pointed to your work directory, first install the dependencies:

**with NPM 2.x.x**

> npm install

**with NPM 3.x.x** (resolve dependencies for `node-spritesheet` before this module's ones)

> npm install grunt grunt-contrib-coffee grunt-contrib-clean

> npm install

then be sure that you have *[ImageMagick](http://www.imagemagick.org/script/binary-releases.php)* installed for building spritesheet.

then, you can run the `gulp build` task to build the project:

> gulp build


### What the build task does?

First, it takes PNG files from the `src` folder, and pastes them to the `dist` folder.

Then it creates a spritesheet from the PNG images located in the `src` folder, and thus creates the `sprite` folder in `dist`.

If, for example you just want `application_put` and `monitor_edit` icons in a spritesheet, you just have to fork this project, point your CLI to the working directory, 
empty the `src` directory, except `application_put` and `monitor_edit` icons in PNG format, and then run the `gulp build` task.

You'll get the proper spritesheet and copies of the icons directly in the `dist` folder.


## License

See [License](https://github.com/legacy-icons/famfamfam-silk/blob/master/LICENSE.md)
