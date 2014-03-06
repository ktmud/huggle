---
title: Hugo + gulp.js
subtitle: Build a highly customizable personal blog blazing fast
date: 2014-03-04
slug: intro
---

## Overview

[Hugo](http://hugo.spf13.com/) is a fast and flexible static site generator written in Go.
It has done an amazing job in **organizing**, **templating** and **building** contents.

There's only one thing missing: **a more organized way to write CSS/JavaScript** your site will need.
Of course we shouldn't expect Hugo to do everything for us, while there are already kinds
of solutions out there, which designers and front-end developers may found familar with:

- [Grunt](http://gruntjs.com/)      - The most well-known JavaScript task runner
- [Brunch](http://brunch.io/)       - An all-in-one toolset emphasized on building rich HTML5 apps
- [Yeoman](http://yeoman.io/)       - Modern webapp scaffolding tool
- [Assemble](http://assemble.io/)   - A grunt plugin to generate static site
- [gulp.js](http://gulpjs.com/)     - The streaming build system

Among those, [Assemble](http://assemble.io/) is targeting the same problem Hugo does, but with a
seamless integration with existing Grunt plugins. Unfortunately, it's not fast enough.

## Trouble shooting

#### Rendering error: html/template: "xxx.html" is an incomplete template

It is because you have grammer error in your golang html template. Rember, you can only use double quote for strings.

{{% highlight jinja %}}
{{ template "chrome/includes.html" . }}
{{% /highlight %}}

Use `"` instead of `'`, and blankspace after the `.` are all mandatory.
