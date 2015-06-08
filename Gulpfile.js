var gulp = require('gulp');
var jscs = require('gulp-jscs');
var browserify = require('gulp-browserify');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Js code linter
gulp.task('lint', function() {
  return gulp.src('server.js')
    .pipe(jscs());
});

// Compile sass to css
gulp.task('sass', function() {
  gulp.src('./app/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function() {
  gulp.watch('./app/sass/**/*.scss', ['sass']);
});

// Css autoprefixer
gulp.task('autoprefixer', function() {
  return gulp.src('public/css/styles.css')
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./public/css/'));
});

// Browserify and reactify app
gulp.task('scripts', function() {

  gulp.src(['app/main.js'])
    .pipe(browserify({
      debug: true,
      transform: ['reactify']
    }))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['lint', 'scripts', 'sass', 'autoprefixer']);
