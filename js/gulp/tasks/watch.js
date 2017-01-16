var gulp = require('gulp');

gulp.task('watch', function() {

    gulp.watch(['./js/src/**/*.js'], ['injectAngular']);
    gulp.watch(['./js/src/**/*.html'], ['injectTemplates']);

});
