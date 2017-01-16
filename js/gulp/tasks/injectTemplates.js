var gulp = require('gulp');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');

gulp.task('injectTemplates', ['ngtemplates'], function() {

    gulp.src('./index.html')
        .pipe(inject(gulp.src(['./scripts/templates*.js'], {
            read: false
        })
            , {
                name: 'ngtemplates',
                addRootSlash: true,
                ignorePath: 'public'
            }
        ))
        .pipe(gulp.dest('./'));

    return browserSync.reload();

});
