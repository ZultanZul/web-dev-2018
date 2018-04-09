var gulp = require('gulp'),
svgSprite = require('gulp-svg-sprite'),
rename = require('gulp-rename'),
del = require('del');

var config = {

	mode: {
		css: {
			sprite: 'sprite.svg',
			render: {
				css:{
					template: './gulp/templates/sprite.css'
				}
			}
		}
	}
}

gulp.task ('beginClean', function(){

	return del(['./src/temp/sprite', './src/assets/images/sprites']);

});


gulp.task ('createSprite', ['beginClean'], function(){

	return gulp.src('./src/assets/images/icons/**/*.svg')

		.pipe(svgSprite(config))

		.pipe(gulp.dest('./src/temp/sprite/'));

});

gulp.task('copySpriteGraphic', ['createSprite'], function (){

		return gulp.src('./src/temp/sprite/css/**/*.svg')
			.pipe(gulp.dest('./src/assets/images/sprites'));
});


gulp.task('copySpriteCSS', ['createSprite'], function(){

	return gulp.src('./src/temp/sprite/css/*.css')
		.pipe(rename('_sprite.css'))
		.pipe(gulp.dest('./src/assets/styles/modules'));
});

gulp.task('endClean', ['copySpriteGraphic', 'copySpriteCSS'], function(){

	return del('./src/temp/sprite');

});


gulp.task('icons', ['beginClean', 'createSprite','copySpriteGraphic', 'copySpriteCSS', 'endClean']);