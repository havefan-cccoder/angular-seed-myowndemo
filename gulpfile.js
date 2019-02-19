// 引入 gulp
var gulp = require('gulp'); 
 
// 引入组件
var jshint = require('gulp-jshint');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require("gulp-minify-css");
var sass = require("gulp-sass");
var htmlmin = require('gulp-html-minifier');
var htmlreplace = require('gulp-html-replace');
var templateCache = require('gulp-angular-templatecache');
var clean = require('gulp-clean');

gulp.task('lint', function() {
        gulp.src('app/**/*.js')
            .pipe(jshint())
            .pipe(jshint.reporter('default'));
    });
    