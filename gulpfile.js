'use strict';

var gulp = require('gulp');
var bitcoreTasks = require('bitcore-build-btcp');

bitcoreTasks('p2p', {skipBrowser: false});

gulp.task('default', ['lint', 'coverage']);
