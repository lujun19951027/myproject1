//var gulp = require('gulp');
var gulp = require('gulp');
var babel = require('gulp-babel'); 
var uglify = require('gulp-uglify'); 

gulp.task('jsTask2', function(){
	gulp.src('js/*.js')
	.pipe(babel({"presets": ["es2015"]})) 
	.pipe(uglify()) 
	.pipe(gulp.dest('dest/js'));
});


gulp.task("default", ["jsTask2"]);
