const { src, dest } = require('gulp');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const tailwindcss = require('tailwindcss');

exports.css = function () {
	const plugins = [autoprefixer(), tailwindcss()];

	return src('./src/**/*.css').pipe(postcss(plugins)).pipe(dest('./public'));
};
