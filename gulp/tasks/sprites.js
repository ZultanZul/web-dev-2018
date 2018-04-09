var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite');

var config = {

	mode: {
		css: {
			render: {
				css:{
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}

}


gulp.task ('createSprite', function(){

	return gulp.src('./src/assets/images/icons/**/*.svg')

		.pipe(svgSprite(config))

		.pipe(gulp.dest('./src/temp/sprite/'));

});