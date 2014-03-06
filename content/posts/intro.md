---
title: Hugo + gulp.js = Huggle.
subtitle: Build a highly customizable personal blog blazing fast
date: 2014-03-04
slug: intro
---

## Introduction

[Hugo](http://hugo.spf13.com/) is a fast and flexible static site generator written in Go.
It does an amazing job in **organizing**, **templating** and **building** contents.

There's only one thing missing: **a more organized way to write CSS/JavaScript** your site will need.
Of course we shouldn't expect Hugo to do everything for us, while there are already kinds
of solutions for this, which designers and front-end developers may found quite familar with:

- [Grunt](http://gruntjs.com/)      - The most well-known JavaScript task runner
- [Brunch](http://brunch.io/)       - An all-in-one toolset emphasized on building rich HTML5 apps
- [gulp.js](http://gulpjs.com/)     - The streaming build system
- [Yeoman](http://yeoman.io/)       - Modern webapp scaffolding tool


There is alreay an existing static site building tool, called [Assemble](http://assemble.io/),
which is built as a grunt plugin. It provides highly customizable configure options,
and a seamless integration with existing Grunt plugins. Unfortunately, it's not fast enough,
and with all that big bunch of tasks to run, the `gruntfile.js` can be very hard to read and maintain.

It's all about speed and ease, right? So here we are, trying to combine two useful tools, 
[Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/), which are both designed to be
fast and easy to use.


By running two tasks respectively, **generate html from organized markdowns** and
**build assets from programmable css/js**, we gain the maximum speed and flexibility.

### What can you get?

- Build a 200+ blogs site in seconds
- Edit, save, and see live changes in less than on second
- Organize contents in [a meaningful way](http://hugo.spf13.com/content/organization)
- Simple yet powerful golang html template, with partials and [shortcodes](http://hugo.spf13.com/extras/shortcodes) support
- Write site UI in coffee/stylus/sass/less, anything you like
- Write browser code like your are in node.js

## Quick start

1. [Install hugo](http://hugo.spf13.com/overview/installing) //
   Long story short: [download the binary](https://github.com/spf13/hugo/releases)
1. Fork and clone [this repo](https://github.com/ktmud/huggle)
1. `npm install`
1. Create a `your-post.md` under `content/posts/` and edit it
1. `make server` to see the result

If you want to edit css/js of your site:

1. (optional) Install [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
1. `make watch`
1. Edit files under `/assets` and `/layouts`

When you'd like to publish your site, run `make gh-pages`.

Also, don't forget to look into docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## Trouble shooting

#### Rendering error: html/template: "xxx.html" is an incomplete template

It is because you have grammer error in your golange html template.
Remember, you can only use double quote for strings.

{{% highlight jinja %}}
{{ template "chrome/includes.html" . }}
{{% /highlight %}}

Use `"` instead of `'`, and blankspace after the `.` are all mandatory.
