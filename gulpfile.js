/**
 * Created by 지선 on 2016-03-10.
 */

var gulp = require('gulp'),
    styles = require('./gulp/scss');

gulp.task('scss:compile', styles.compile);
gulp.task('scss:watch', styles.watch);

gulp.task('scss',['scss:compile', 'scss:watch']);

