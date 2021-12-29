const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
// const postcssJitProps = require('postcss-jit-props');
// const OpenProps = require('open-props');

const mode = process.env.NODE_ENV;
const dev = mode === 'development';

const config = {
	plugins: [
		autoprefixer(),
		// postcssJitProps(OpenProps),

		!dev &&
			cssnano({
				preset: 'default'
			})
	]
};

module.exports = config;
