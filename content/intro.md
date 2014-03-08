---
title: Hugo + gulp.js = Huggle.
subtitle: Build a highly customizable personal blog blazing fast
date: 2014-03-04
slug: intro

otherlangs: ["zh"]
otherurls: ["/zh/intro/"]

---

## Introduction

**Huggle** is not an independent tool, it's just a demonstation of how to integrate
[Hugo](http://hugo.spf13.com/) + [gulp.js](http://gulpjs.com/).

**Hugo** is a fast and flexible static site generator written in Go.
It does an amazing job in organizing, templating and building contents.
**Gulp.js** is a streaming build system (mostly) for front-end code, which is also very fast.

Huggle to Hugo, is much like [Octopress](http://octopress.org/) to [jekyll](http://jekyllrb.com/).
But with the ability to reuse what NodeJS compunity has created.

Actually, there is a Huggle equivalent in pure NodeJS, called [Assemble](http://assemble.io/),
which run itself as a grunt plugin. It provides highly customizable configure options,
and a seamless integration with many existing Grunt plugins. Unfortunately, it's just not fast enough.
To me, the `Gruntfile.js` is not as readable as `gulpfile.js`, too.

To gain more speed and ease, I choose to use 
[Hugo](http://hugo.spf13.com/) with [gulp.js](http://gulpjs.com/). The two are both designed to be
the fastest of its kind.

By running two tasks -- **generating html from organized markdowns** and
**building programmable css/js**, seperately, we gain the maximum speed and flexibility.

### What are the benefits?

- Build a 200+ blogs site in seconds
- Edit, save, and see live changes in less than on second
- Organize contents in [a meaningful way](http://hugo.spf13.com/content/organization)
- Simple yet powerful golang html template, with partials and [shortcodes](http://hugo.spf13.com/extras/shortcodes) support
- Write site UI in coffee/stylus/sass/less, anything you like
- Write browser code like your are in node.js
- Lightweight client site or pre-rendered syntax highlight

## Quick start

1. [Install hugo](http://hugo.spf13.com/overview/installing) //
   Long story short: [download the binary](https://github.com/spf13/hugo/releases)
1. Fork and clone [this repo](https://github.com/ktmud/huggle)
1. `make init`
1. Create a `your-post.md` under `content/posts/` and edit it
1. `make server` to see the result

If you want to update the appearance of your site:

1. (optional) Install [livereload](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)
1. `make watch`
1. Edit files under `/assets` and `/layouts`

When you are ready to publish your site, use `make gh-pages`.

Also, don't forget to look into docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## Dive in

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
