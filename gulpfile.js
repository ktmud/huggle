var gulp = require('gulp')
var coffee = require('gulp-coffee')
var uglify = require('gulp-uglify')
var bower = require('gulp-bower-files')
var stylus = require('gulp-stylus')
var livereload = require('gulp-livereload')
var include = require('gulp-include')
var concat = require('gulp-concat')
var browserify = require('gulp-browserify')
var gulpFilter = require('gulp-filter')
var rename = require('gulp-rename')

var production = process.env.NODE_ENV === 'production'

var src = {
  styl: ['assets/css/**/*.styl'],
  css: ['assets/css/**/*.css'],
  coffee: ['assets/js/**/*.coffee'],
  js: ['assets/js/**/*.js']
}
var dist = {
  all: ['public/**/*'],
  css: 'static/static/',
  js: 'static/static/',
  vendor: 'static/static/'
}
var jsFilter = gulpFilter('**/*.js')
var cssFilter = gulpFilter('**/*.css')

//
// concat *.js to `vendor.js`
// and *.css to `vendor.css`
// rename fonts to `fonts/*.*`
//
gulp.task('bower', function() {
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

gulp.task('css', function() {
  return gulp.src(src.styl)
    .pipe(stylus({use: ['nib']}))
    .pipe(concat('app.css'))
    .pipe(gulp.dest(dist.css))
})

gulp.task('js', function() {
  return gulp.src(src.coffee)
    .pipe(include())
    .pipe(coffee())
    .pipe(browserify({
      insertGlobals: true,
      extensions: ['.coffee'],
      debug: !production
    }))
    .pipe(concat('app.js'))
    .pipe(gulp.dest(dist.js))
})

gulp.task('watch', function() {
  var server = livereload()
  function change(file) {
    server.changed(file.path)
  }
  gulp.watch(src.js, ['js'])
  gulp.watch(src.css, ['css'])
  gulp.watch(dist.all).on('change', change)
})

gulp.task('default', ['js', 'css', 'watch']) // development
gulp.task('build', ['js', 'css', 'compress']) // build for production
