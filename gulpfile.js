'use strict';

var gulp = require('gulp');
var gutil = require('gulp-util');
var wrench = require('wrench');

var options = {
    src: 'src/main/webapp',
    dist: 'src/main/webapp/dist',
    tmp: '.tmp',
    e2e: 'src/test/webapp/e2e',
    errorHandler: function (title) {
        return function (err) {
            gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
            this.emit('end');
        };
    },
    wiredep: {
        directory: 'bower_components'
    }
};

wrench.readdirSyncRecursive('./gulp').filter(function (file) {
    return (/\.(js|coffee)$/i).test(file);
}).map(function (file) {
    require('./gulp/' + file)(options);
});

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});