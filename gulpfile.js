const gulp = require('gulp');

gulp.task('copy', function () {
    gulp.src([
        `./index.php`,
        `./style.css`,
        `./fonts/*`,
        `./img/*`
    ],  {base: './'})
        .pipe(gulp.dest('d:/server/nginx/www'));
});