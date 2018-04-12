var gulp = require('gulp'),
modernizr = require('gulp-modernizr');

gulp.task('modernizr', function(){

	return gulp.src(['./src/assets/styles/**/*.css','./src/assets/scripts/**/*.js'])
		.pipe(modernizr({
			"options": [
				"setClasses"
			]
		}))
		.pipe(gulp.dest('./src/temp/scripts/'));
});