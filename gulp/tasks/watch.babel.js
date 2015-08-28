import path from 'path';
import gulp from 'gulp';
import config from '../config.babel';


gulp.task('watch', ['watch:server', 'watch:client']);


gulp.task('watch:server', ()=> {
    const globs = [
        path.join(config.srcServer, '**/*.js')
    ];
    gulp.watch(globs, ['compile:server']);
});


gulp.task('watch:client', ()=> {
    config.webpackWatch = true;
    const globs = [
        path.join(config.srcClient, '**/*.js')
    ];
    gulp.watch(globs, ['compile:client']);
});
