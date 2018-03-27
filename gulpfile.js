var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function(){
	console.log("Hurray!");
});

gulp.task('html', function(){
	console.log("HTML stuff here");
});

gulp.task('styles', function(){
	console.log("Imagine SASS of Prefixes Here");
});

gulp.task('watch', function(){

	watch('./app/index.html', function(){
		gulp.start('html');
	});

	watch('./app/assets/styles/**/*.css', function(){
		gulp.start('styles');
	});

});