var BatchStream = require('batch-stream2')
var gulp = require('gulp')
var uglify = require('gulp-uglify')
var cssmin = require('gulp-minify-css')
var bower = require('gulp-bower-files')
var stylus = require('gulp-stylus')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var browserify = require('gulp-browserify')
var gulpFilter = require('gulp-filter')
var watch = require('gulp-watch')
var plumber = require('gulp-plumber')
var livereload = require('gulp-livereload')

var src = {
  bower: ['bower.json', '.bowerrc'],
  styles: ['assets/styles/**/*.css', 'assets/styles/**/*.styl'],
  scripts: ['assets/**/*.coffee', 'assets/**/*.js'],
  // The entry point of a browserify bundle
  // add as many bundles as you wish
  main: 'assets/app.coffee',
}
var publishdir = 'public'
var dist = {
  all: [publishdir + '/**/*'],
  css: publishdir + '/static/',
  js: publishdir + '/static/',
  vendor: publishdir + '/static/'
}
var debug = true

//
// concat *.js to `vendor.js`
// and *.css to `vendor.css`
// rename fonts to `fonts/*.*`
//
gulp.task('bower', function() {
  var jsFilter = gulpFilter('**/*.js')
  var cssFilter = gulpFilter('**/*.css')
  return bower()
    .pipe(jsFilter)
    .pipe(concat('vendor.js'))
    .pipe(gulp.dest(dist.js))
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(concat('vendor.css'))
    .pipe(gulp.dest(dist.css))
    .pipe(cssFilter.restore())
    .pipe(rename(function(path) {
      if (~path.dirname.indexOf('fonts')) {
        path.dirname = '/fonts'
      }
    }))
    .pipe(gulp.dest(dist.vendor))
})

function buildCSS() {
  // all css goes to one file
  return gulp.src(src.styles)
    .pipe(plumber())
    .pipe(stylus({use: ['nib']}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dist.css))
}

function buildJS() {
  return gulp.src(src.main, { read: false })
    .pipe(plumber())
    .pipe(browserify({
      transform: ['coffeeify'],
      extensions: ['.coffee'],
      debug: debug
    }))
    .pipe(rename(function(file) {
      file.extname = '.js'
    }))
    .pipe(gulp.dest(dist.js))
}

gulp.task('css', buildCSS)
gulp.task('js', buildJS)


function delayed(fn, time) {
  var t
  return function() {
    var _this = this
    var args = arguments
    try {
      clearTimeout(t)
    } catch (e) {}
    t = setTimeout(function() {
      fn.apply(_this, args)
    }, time || 50)
  }
}

gulp.task('watch', function() {
  gulp.watch(src.bower, ['bower'])
  watch({ glob: src.styles, name: 'styles' }, delayed(buildCSS))
  watch({ glob: src.scripts, name: 'scripts' }, delayed(buildJS))
})
//
// live reload can emit changes only when at lease one build is done
//
gulp.task('livereload', ['bower', 'css', 'js', 'watch'], function() {
  var server = livereload()
  var batch = new BatchStream({ timeout: 50 })
  gulp.watch(dist.all).on('change', function change(file) {
    // clear directories
    var urlpath = file.path.replace(__dirname + '/' + publishdir, '')
    // also clear the tailing index.html
    urlpath = urlpath.replace('/index.html', '/')
    batch.write(urlpath)
  })
  batch.on('data', function(files) {
    server.changed(files.join(','))
  })
})
gulp.task('compress-css', ['css'], function() {
  return gulp.src(dist.css)
    .pipe(cssmin())
    .pipe(gulp.dest(dist.css))
})
gulp.task('compress-js', ['js'], function() {
  return gulp.src(dist.js)
    .pipe(uglify())
    .pipe(gulp.dest(dist.js))
})
gulp.task('compress', ['compress-css', 'compress-js'])

gulp.task('default', ['bower', 'css', 'js', 'livereload']) // development

gulp.task('nodebug', function() {
  // set debug to false,
  // then browserify will not output sourcemap
  debug = false
})
gulp.task('build', ['nodebug', 'bower', 'compress']) // build for production
