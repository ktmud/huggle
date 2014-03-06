# Huggle

Blog (static site) boilerplate for front-end developers.

Combine the power of [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/),
it becomes incrediblely easy & fast to generate a static site of your own.

Write posts in Markdown, polish UI in stylus/less/sass/coffee,
build the entire site in seconds.

Ships with a simplistic theme.

## Usage

1. [Install hugo](http://hugo.spf13.com/overview/installing) //
   Long story short: [download the binary](https://github.com/spf13/hugo/releases)
1. Fork and clone [this repo](https://github.com/ktmud/huggle)
1. `npm install`
1. Create a `your-post.md` under `content/posts/` and edit it
1. `make server` to see the result

## Directories

- **content** is your post contents written in Markdown.
- **layouts** are html templates of your site.
- **assets** is the source of your css/js files, i.e. `*.coffee` and `*.styl`.
- **static** files in it will be copied directly into `/public`

Also, don't forget to look into docs on [Hugo](http://hugo.spf13.com/) and [gulp.js](http://gulpjs.com/).

## License

the MIT license.
