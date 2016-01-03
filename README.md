famfamfam-silk
===============

[![NPM version](https://img.shields.io/npm/v/famfamfam-silk.svg)](https://www.npmjs.org/package/famfamfam-silk)
[![Bower version](https://img.shields.io/bower/v/famfamfam-silk.svg)](http://bower.io/search/?q=famfamfam-silk)
[![Packagist version](https://img.shields.io/packagist/v/t1st3/famfamfam-silk.svg)](https://packagist.org/packages/t1st3/famfamfam-silk)
[![Nuget version](https://img.shields.io/nuget/v/famfamfam-silk.svg)](https://www.nuget.org/packages/famfamfam-silk/)

[![Dependency Status](https://img.shields.io/david/dev/T1st3/famfamfam-silk.svg)](https://david-dm.org/t1st3/famfamfam-silk)
[![Build Status](https://img.shields.io/travis/T1st3/famfamfam-silk.svg)](https://travis-ci.org/T1st3/famfamfam-silk)




About
----------

The `Silk` icon pack, as available on [famfamfam website](http://www.famfamfam.com/lab/icons/silk/).

All credits for these icons go to their original author: Mark James (mjames@gmail.com)

The aim of this project is to make this icon pack available through various package managers, such as:

- [NPM](https://npmjs.org)
- [Bower](http://bower.io)
- [Packagist](https://packagist.org)
- [NuGet](https://www.nuget.org)


All icons are supplied in PNG format.



CSS spritesheets
----------

You can insert the icons directly into your HTML with a common IMG tag:

```
    <img alt="Delete" src="dist/png/key_delete.png" width="16" height="16">
```


In addition to the icons by themselves, this project also ships a CSS spritesheet for the icon-pack. This spritesheet allows to load the entire icon-pack in just 1 image, and thus reduce HTTP calls.

This is what it actually looks:

![Spritesheet](https://raw.githubusercontent.com/T1st3/famfamfam-silk/master/dist/sprite/famfamfam-silk.png)


All the positioning of the icons inside this alone image is made through CSS, which allows you to just add block-type tags with the proper class and get the same result:

```
    <div class="famfamfam-silk key_delete"></div>
```

Just remember to add the CSS stylesheet to the HEAD of your HTML page!



Get the package with NPM
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
npm install famfamfam-silk
```



Get the package with Bower
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
bower install famfamfam-silk
```


Get the package with Composer / Packagist
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
composer require t1st3/famfamfam-silk
```


Get the package with NuGet
----------

Just run the following on the CLI (provided your CLI is directed to your work directory)

```
Install-Package famfamfam-silk
```



Original readme (from author of the icons)
----------

Silk icon set 1.3

_________________________________________

Mark James
http://www.famfamfam.com/lab/icons/silk/

_________________________________________

This work is licensed under a
Creative Commons Attribution 2.5 License.
[ http://creativecommons.org/licenses/by/2.5/ ]

This means you may use it for any purpose,
and make any changes you like.
All I ask is that you include a link back
to this page in your credits.

Are you using this icon set? Send me an email
(including a link or picture if available) to
mjames@gmail.com

Any other questions about this icon set please
contact mjames@gmail.com



About the rest (all this repository but the icons)
----------

All the content of this repository (excepted the icon pack) 
is licensed under the [MIT license](http://opensource.org/licenses/MIT).

Though, it is just composed a few trivial json files and a Readme.




Build (the whole project or your custom project)
----------


We use [Gulp](http://gulpjs.com/) to build the project, so if you want to re-build or customize this project, you'll need Gulp.

After gulp is installed, and your CLI is pointed to your work directory, first install the dependencies:

```
     npm install
```


then, you can run the `gulp build` task to build the project:


```
     gulp build
```




**What the build task does?**

First, it takes PNG files from the `src` folder, and pastes them to the `dist` folder.

Then it creates a spritesheet from the PNG images located in the `src` folder, and thus creates the `sprite` folder in `dist`.

If, for example you just want `application_put` and `monitor_edit` icons in a spritesheet, you just have to fork this project, point your CLI to the working directory, 
empty the `src` directory, except `application_put` and `monitor_edit` icons in PNG format, and then run the `gulp build` task.

You'll get the proper spritesheet and copies of the icons directly in the `dist` folder.
