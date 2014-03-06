# Huggle

Blog (static site) boilerplate for front-end developers.

Combine the power of [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/),
it becomes incrediblely easy & fast to generate a static site of your own.

Write posts in Markdown, polish UI in stylus/less/sass/coffee,
build the entire site in seconds.

Ships with a simplistic theme.

## Usage

1. [Install hugo](http://hugo.spf13.com/overview/installing)
1. Fork and clone this repo, checkout your own branch
1. `make init`
1. Write your blog in content/posts/
1. `make watch` to develop, `make server` to build for production.

### Why need a branch?

In case you want to sync any further updates of this project.

## Directories

- **content** is your post contents written in Markdown.
- **templates** are html layouts of your site.
- **assets** is the source of your css/js files, i.e. `*.coffee` and `*.styl`.
- **static** is dist static files built with gulp.js

Also, don't forget to look into docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## License

the MIT license.
