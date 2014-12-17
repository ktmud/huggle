---
title: Hugo + gulp.js = Huggle.
subtitle: Build a highly customizable personal blog blazing fast
date: 2014-03-08T16:59:24+08:00
slug: /en/intro

lang: en
otherlangs: ["zh"]
otherurls: ["/zh/intro/"]

---

## Introduction

**Huggle** is a simple demonstation of how to integrate
[Hugo](http://hugo.spf13.com/) + [gulp.js](http://gulpjs.com/) with multi-language support.

**Hugo** is a fast and flexible static site generator written in Go.
It does an amazing job in organizing, templating and building contents.
**Gulp.js** is a streaming build system (mostly) for front-end code, which is also super fast.

Huggle to Hugo, is much like [Octopress](http://octopress.org/) to [jekyll](http://jekyllrb.com/).
But with the ability to reuse what node.js compunity has offered.

You may have seen some equivalents in pure node.js, like [Assemble](http://assemble.io/).
But unfortunately, they are just not fast enough.

To gain more speed and ease, let's try
[Hugo](http://hugo.spf13.com/) + [gulp.js](http://gulpjs.com/). The two are both designed to be
the fastest of its kind.

By running two tasks -- **generating html from organized markdowns** and
**building programmable css/js**, seperately, we gain the maximum speed and flexibility.

### What are the benefits?

- Build a 200+ blogs site in seconds
- Edit, save, and see live changes in less than one second
- Write site UI in coffee/stylus/sass/less, anything you like
- Write browser code like your are in node.js
- Lightweight client site or pre-rendered syntax highlight

## Quick start

1. [Install hugo](http://hugo.spf13.com/overview/installing) //
   Long story short: `brew install hugo`
1. Create a site: `hugo new site /path/to/site`
1. `cd /path/to/site`
1. `git clone https://github.com/ktmud/huggle.git theme/huggle`
1. `cd them/huggle && make init`

If you want to update the appearance of your site, you can just edit the theme and update source files under "static/assets" and "layouts".

## Dive in

Don't forget to check out docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## Extras

### Syntax Highlighting

Hugo comes with a built in Syntax Highlighting support, based on [pygments](http://pygments.org/).
To maximize the build speed, [Prism.js](http://prismjs.com/) is used by Huggle, so you can just write Github flavored
code block, then render syntax highlighting on the client side.

<pre class="language-markdown">
```javascript
console.log("Give me a Huggle!")
```
</pre>

The output:

```javascript
console.log("Give me a Huggle!")
```

### Trouble shooting

#### Rendering error: html/template: "xxx.html" is an incomplete template

It is because there is grammer error in your golange html template.
Remember, you can only use double quote for strings.

```gotmpl
{{ template "chrome/includes.html" . }}
```

Use `"` instead of `'`, and blankspace after the `.` are all mandatory.


### Limitations

Hugo is relative new, there are some limitations if you want to try it now:

1. no pagination support yet
2. will rebuild the whole site when changes detected by `hugo --watch`,
   though total time consumed may be negligible.
3. no easy way to import a Wordpress/jekyll blog yet.

See the [roadmap][1] for what's missing (and coming) now.

[1]: https://github.com/spf13/hugo/blob/master/docs/content/meta/roadmap.md


