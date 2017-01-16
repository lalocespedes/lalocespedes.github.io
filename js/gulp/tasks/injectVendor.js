var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');

gulp.task('injectVendor', ['vendor'], function() {

    gulp.src('index.html')
    .pipe(inject(gulp.src(['./scripts/vendor*.js'], {
            read: false
        }),
        {
            name: 'vendor',
            addRootSlash: true,
            ignorePath: 'public'
        }
    ))
    .pipe(gulp.dest('./'));

    return browserSync.reload();

});
