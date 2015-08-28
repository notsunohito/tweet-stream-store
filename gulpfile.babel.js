import gulp from 'gulp';
import runSequence from 'run-sequence';
import requireDir from 'require-dir';

requireDir('gulp/tasks');


gulp.task('default', (callback)=> {
    return runSequence('compile', 'watch', callback);
});
