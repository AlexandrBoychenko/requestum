const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('copy', function () {
    gulp.src([
        `./index.php`,
        `./style.css`,
        `./fonts/*`,
        `./img/*`,
        `./scripts/*`
    ],  {base: './'})
        .pipe(gulp.dest('d:/server/nginx/www'));
});

gulp.task('sass', function () {
    gulp.src('./style/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('build', ['sass', 'copy']);