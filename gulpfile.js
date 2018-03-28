var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssimport = require('postcss-import');

gulp.task('default', function(){
	console.log("Hurray!");
});

gulp.task('html', function(){
	console.log("HTML stuff here");
});

gulp.task('styles', function(){
	return gulp.src('./src/assets/styles/styles.css')
		.pipe(postcss([cssimport, cssvars, nested, autoprefixer]))
		.pipe(gulp.dest('./src/temp/styles'));
});

gulp.task('watch', function(){

	watch('./src/index.html', function(){
		gulp.start('html');
	});

	watch('./src/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});