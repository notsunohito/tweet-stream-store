import del from 'del';
import path from 'path';
import gulp from 'gulp';
import gutil from 'gulp-util';
import gulpIgnore from 'gulp-ignore';
import babel from 'gulp-babel';
import webpack from 'webpack-stream';
import runSequence from 'run-sequence';
import config from '../config.babel';


gulp.task('compile', (callback)=> {
    return runSequence('compile:clean', 'compile:server', 'compile:client', 'compile:copy', callback);
});


gulp.task('compile:clean', (callback)=> {
    return del(config.dist, callback);
});


gulp.task('compile:server', ()=> {
    const target = path.join(config.srcServer, '**/*.js');
    return gulp.src(target)
        .on('error', gutil.log)
        .pipe(babel())
        .pipe(gulp.dest(config.distServer));
});


gulp.task('compile:client', (callback)=> {
    return runSequence('compile:client:move', 'compile:webpack', callback);
});


gulp.task('compile:client:move', ()=> {
    const target = path.join(config.srcClient, '**/*.js');
    return gulp.src(target)
        .on('error', gutil.log)
        .pipe(gulp.dest(config.distTempClient));
});


gulp.task('compile:copy', ()=> {
    const target = path.join(config.src, '**/*.{css,mustache}');
    return gulp.src(target)
        .on('error', gutil.log)
        .pipe(gulp.dest(config.dist));
});


gulp.task('compile:webpack', ()=> {
    const target = config.webpackEntry;
    return gulp.src(target)
        .on('error', gutil.log)
        .pipe(webpack(config.webpackOption))
        .pipe(gulp.dest(config.distClient));
});
