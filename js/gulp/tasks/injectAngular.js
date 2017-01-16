var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');

gulp.task('injectAngular', ['angular'], function() {

    gulp.src('./index.html')
        .pipe(inject(gulp.src(['./scripts/scripts*.js'], {
                read: false
            })
            , {
                name: 'angular',
                addRootSlash: true,
                ignorePath: 'public'
            }
        ))
        .pipe(gulp.dest('./'));

    return browserSync.reload();

});
