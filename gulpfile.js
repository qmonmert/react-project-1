var gulp        = require('gulp'),
    gulpConcat = require('gulp-concat')
    browserSync = require('browser-sync').create(),
    reload      = browserSync.reload;

gulp.task('build:js', function() {
    return gulp.src('scripts/*.js')
        .pipe(gulpConcat('bundle.js'))
        .pipe(gulp.dest('build'))
        .pipe(browserSync.stream());
});

gulp.task('reload', function() {
    return gulp.src('index.html')
        .pipe(browserSync.stream());
});

//////////////////////////////////////
/////////// WATCH and SYNC ///////////
//////////////////////////////////////
gulp.task('watch', function() {
    gulp.watch(['scripts/*.js'], ['build:js']);
    gulp.watch(['index.html'], ['reload']);
});
gulp.task('browser-sync', function() {
    browserSync.init({
        proxy: "http://localhost:8080"
    });
});

////////////////////////////////////
/////////// DEFAULT TASK ///////////
////////////////////////////////////
gulp.task('default', ['browser-sync', 'watch']);
