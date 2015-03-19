famfamfam-silk
===============

[![NPM version](https://img.shields.io/npm/v/famfamfam-silk.svg)](https://www.npmjs.org/package/famfamfam-silk)
[![Bower version](https://img.shields.io/bower/v/famfamfam-silk.svg)](http://bower.io/search/?q=famfamfam-silk)
[![Packagist version](https://img.shields.io/packagist/v/t1st3/famfamfam-silk.svg)](https://packagist.org/packages/t1st3/famfamfam-silk)


About
----------

The `Silk` icon pack, as available on [famfamfam website](http://www.famfamfam.com/lab/icons/silk/).

All credits for these icons go to their original author: mjames@gmail.com

The aim of this project is to make this icon pack available through various package managers, such as:

- [NPM](https://npmjs.org)
- [Bower](http://bower.io)
- [Packagist](https://packagist.org)


All icons are supplied in PNG format.



CSS spritesheets
----------

You can insert the icons directly into your HTML with a common IMG tag:

```
    <img alt="Delete" src="dist/png/key_delete.png" width="16" height="11">
```


In addition to the icons by themselves, this project also ships a CSS spritesheet for the icon-pack. This spritesheet allows to load the entire icon-pack in just 1 image, and thus reduce HTTP calls.

All the positioning of the icons inside this alone image is made through CSS, which allows you to just add block-type tags with the proper class and get the same result:

```
    <div class="famfamfam-silk key_delete"></div>
```

Just remember to add the CSS stylesheet to the HEAD of your HTML page!




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



Get the package
----------

**NPM**

Get it with:

```
npm install famfamfam-silk
```


**Bower**

Get it with:

```
bower install famfamfam-silk
```


**Composer / Packagist**

[famfamfam-silk on Packagist](https://packagist.org/packages/t1st3/famfamfam-silk)




Dev dependencies and build status
----------

[![Dependency Status](https://img.shields.io/david/dev/T1st3/famfamfam-silk.svg)](https://david-dm.org/t1st3/famfamfam-silk)
[![Build Status](https://img.shields.io/travis/T1st3/famfamfam-silk.svg)](https://travis-ci.org/T1st3/famfamfam-silk)



