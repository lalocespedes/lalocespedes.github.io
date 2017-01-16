var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browser-sync', function () {

  browserSync({
    proxy: '127.0.0.1:8000',
    port: 8000,
    open: true,
    notify: true,
    browser: "google-chrome"
  });

});
