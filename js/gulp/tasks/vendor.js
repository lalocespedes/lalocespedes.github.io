var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rev = require('gulp-rev');
var revDel = require('rev-del');
var inject = require('gulp-inject');
var browserSync = require('browser-sync');

gulp.task('vendor', function() {
	gulp.src([
        './bower_components/angular/angular.js',
        './bower_components/angular-ui-router/release/angular-ui-router.js',
        './bower_components/angular-sanitize/angular-sanitize.js',
        './bower_components/angular-resource/angular-resource.js',
        './bower_components/ngstorage/ngStorage.js',
        './bower_components/angular-bootstrap/ui-bootstrap.js',
        './bower_components/file-saver/FileSaver.js',
        './bower_components/angular-file-saver/dist/angular-file-saver.js'
    ])
	.pipe(concat('vendor.js'))
	.pipe(uglify())
    .pipe(rev())
	.pipe(gulp.dest('./scripts'))
    .pipe(rev.manifest('rev-manifiest-vendor'))
    .pipe(revDel({ dest: './scripts' }))
    .pipe(gulp.dest('./scripts'));

    return browserSync.reload();

});
