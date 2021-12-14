/*====================================================
    Using Gulp to watch and concat files into a 
    single file in a specific order.

    Gulp Sass also is piped to an autoprefixer to
    apply browser specific styles.

    A single command is used to watch & concat files.
====================================================*/

const gulp = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const concat = require('gulp-concat');

// SASS
gulp.task('watch-sass', () => {
   gulp
      .src([
         'app/styles/sass/main.scss',
         'app/styles/sass/navigation.scss',
         'app/styles/sass/content.scss',
         'app/styles/sass/mylists.scss',
      ])
      .pipe(concat('style.scss'))
      .pipe(sass().on('error', sass.logError))
      .pipe(
         autoprefixer({
            browsers: ['last 1 version'],
         })
      )
      .pipe(gulp.dest('app/styles/css'));
});

// JS
gulp.task('watch-js', () => {
   gulp
      .src([
         'app/js/src/main.js',
         'app/js/src/navigation.js',
         'app/js/src/localStorage.js',
         'app/js/src/content.js',
         'app/js/src/api.js',
         'app/js/src/sampleData.js',
         'app/js/src/init.js',
      ])
      .pipe(concat('script.js'))
      .pipe(gulp.dest('app/js/dist'));
});

gulp.task('watch', () => {
   gulp.watch('app/styles/sass/*.scss ', ['watch-sass']);
   gulp.watch('app/js/src/*.js ', ['watch-js']);
});
