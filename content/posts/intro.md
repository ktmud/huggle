---
title: Hugo + gulp.js
subtitle: Build a highly customizable personal blog really fast
date: 2014-03-04
slug: intro
---

## Overview

[Hugo](http://hugo.spf13.com/) is a fast and flexible static site generator written in Go.
It has done an amazing job in organizing contents, watching changes and building contents,
providing an easy to use templating API.

There's only one thing missing: a more organized way to write CSS/JavaScript your site will need.
Of course we shouldn't expect Hugo to do this for us, because there are already kinds
of solutions for it, which designers and front-end developers may found familar with:

- [Grunt](http://gruntjs.com/)      - The most well-known and mature JavaScript task runner
- [Brunch](http://brunch.io/)       - An all-in-one toolset emphasized on building rich HTML5 apps
- [gulp.js](http://gulpjs.com/)     - The streaming build system
- [Yeoman](http://yeoman.io/)       - Modern webapp scaffolding tool
- [Assemble](http://assemble.io/)   - Pure JavaScript static site generator built on Grunt (and possiblely, gulp)

In fact, [Assemble](http://assemble.io/), as a static site generator itself,
is targeting the same problem Hugo does. With `grunt` and many configure options,
it can fully exploit what designer fron-end developers comunity


## Trouble shooting

#### Rendering error: html/template: "xxx.html" is an incomplete template

It is because you have grammer error in your golang html template. Rember, you can only use double quote for strings.

{{% highlight jinja %}}
{{ template "chrome/includes.html" . }}
{{% /highlight %}}

Use `"` instead of `'`, and blankspace after the `.` are all mandatory.
