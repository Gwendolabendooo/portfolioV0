'use strict';
var Prism = require('prismjs');
var loadLanguages = require('prismjs/components/');
loadLanguages(['haml']);

// The code snippet you want to highlight, as a string
var code = "= ['hi', 'there', 'reader!'].join \" \"";

// Returns a highlighted HTML string
var html = Prism.highlight(code, Prism.languages.haml, 'haml');
var gulp = require('gulp');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');
var del = require('del');
var autoprefixer = require('gulp-autoprefixer');

var paths = {
    styles: {
        src: './App/src/sass/**/*.scss',
        dest: './App/assets/styles/'
    },
    scripts: {
        src: ['./App/src/assets/jQuery.js', './App/src/assets/bootstrap/js/bootstrap.js', './App/src/scripts/**/*.js'],
        dest: './App/assets/scripts/'
    }
};

/* Not all tasks need to use streams, a gulpfile is just another node program and you can use all packages available on npm, but it must return either a Promise, a Stream or take a callback and call it */
function clean() {
// You can use multiple globbing patterns as you would with `gulp.src`,
// for example if you are using del 2.0 or above, return its promise
    return del(['./App/assets/styles/style.css', './App/assets/scripts/main.js']);
}

/* Define our tasks using plain functions */
function styles() {
    return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass())
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(cleanCSS())
// pass in options to the stream
    .pipe(rename({basename: 'style', suffix: '.min'}))
    .pipe(gulp.dest(paths.styles.dest));
}

function stylesDev() {
    return gulp.src(paths.styles.src)
    .pipe(plumber())
    .pipe(sass({outputStyle: 'nested'}))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    // pass in options to the stream
    .pipe(rename({basename: 'style'}))
    .pipe(gulp.dest(paths.styles.dest));
}

function scripts() {
    return gulp.src(paths.scripts.src, {sourcemaps: true})
    .pipe(uglify())
    .pipe(concat('main.min.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function scriptsDev() {
    return gulp.src(paths.scripts.src, {sourcemaps: true})
    .pipe(concat('main.js'))
    .pipe(gulp.dest(paths.scripts.dest));
}

function watch() {
    gulp.watch(paths.scripts.src, scripts);
    gulp.watch(paths.styles.src, styles);
}

function watchDev() {
    gulp.watch(paths.scripts.src, scriptsDev);
    gulp.watch(paths.styles.src, stylesDev);
}

/* Specify if tasks run in series or parallel using `gulp.series` and `gulp.parallel` */
var prod = gulp.series(clean, gulp.parallel(watch));
var dev = gulp.series(clean, gulp.parallel(watchDev));

/* You can use CommonJS `exports` module notation to declare tasks */
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.watch = watch;
exports.prod = prod;
exports.dev = dev;
/* Define default task that can be called by just running `gulp` from cli */
exports.default = dev;