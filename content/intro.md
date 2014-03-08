---
title: Hugo + gulp.js = Huggle.
subtitle: Build a highly customizable personal blog blazing fast
date: 2014-03-04
otherlangs: ["zh"]
otherslugs: ["zh/intro"]
slug: intro
---

## Introduction

**Huggle** is not a new tool, it's just an demonstation of how to integrate
[Hugo](http://hugo.spf13.com/) + [gulp.js](http://gulpjs.com/).

**Hugo** is a fast and flexible static site generator written in Go.
It does an amazing job in organizing, templating and building contents.
**Gulp.js** is a streaming build system (mostly) for front-end code, which is also very fast.

You may be familiar with [jekyll](http://jekyllrb.com/), or [MiddleMan](http://middlemanapp.com), etc.
Well, Hugo does the same thing, but much faster. And for manage the JavaScript/CSS code in brower,
there are also plenty of solutions in the market,
which designers and front-end developers may find quite familiar with:

- [Grunt](http://gruntjs.com/)      - The most well-known JavaScript task runner
- [Brunch](http://brunch.io/)       - An all-in-one toolset emphasized on building rich HTML5 apps
- [gulp.js](http://gulpjs.com/)     - The streaming build system
- [Yeoman](http://yeoman.io/)       - Modern webapp scaffolding tool

Actually, there is alreay an all-in-one static site building tool, called [Assemble](http://assemble.io/),
which runs as a grunt plugin. It provides highly customizable configure options,
and a seamless integration with existing Grunt plugins. Unfortunately, it's just not fast enough,
and with all that big loads of tasks to run, the `gruntfile.js` can be very hard to read and maintain.

It's all about speed and ease, right? So here we are, trying to combine two useful tools, 
[Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/), which are both designed to be
the fastest of its kind.

By running the two tasks, **generate html from organized markdowns** and
**build assets from programmable css/js**, seperately, we gain the maximum speed and flexibility.

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

If you want to update the appearance of your site:

1. (optional) Install [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
1. `make watch`
1. Edit files under `/assets` and `/layouts`

When you are ready to publish your site, use `make gh-pages`.

Also, don't forget to look into docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## Trouble shooting

#### Rendering error: html/template: "xxx.html" is an incomplete template

It is because there is grammer error in your golange html template.
Remember, you can only use double quote for strings.

```gotmpl
{{ template "chrome/includes.html" . }}
```

Use `"` instead of `'`, and blankspace after the `.` are all mandatory.
