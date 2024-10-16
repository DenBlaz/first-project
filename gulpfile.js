// html task
const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');

gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'));
});

//scss task
const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

gulp.task('scss', function() {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(cleanCSS())
        .pipe(gulp.dest('dist/css'));
});

//js task
const gulp = require('gulp');
const uglify = require('gulp-uglify');

gulp.task('js', function() {
    return gulp.src('src/js/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});

//img task
const gulp = require('gulp');
const imagemin = require('gulp-imagemin');

gulp.task('img', function() {
    return gulp.src('src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

//browserSync task
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });
});

//watch task
const gulp = require('gulp');
const browserSync = require('browser-sync').create();

gulp.task('watch', function() {
    gulp.watch('src/*.html', gulp.series('html')).on('change', browserSync.reload);
    gulp.watch('src/scss/**/*.scss', gulp.series('scss')).on('change', browserSync.reload);
    gulp.watch('src/js/**/*.js', gulp.series('js')).on('change', browserSync.reload);
    gulp.watch('src/images/*', gulp.series('img')).on('change', browserSync.reload);
});