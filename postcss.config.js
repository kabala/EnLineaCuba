const tailwindcss = require('tailwindcss');

const IS_DEVELOPMENT = process.env.NODE_ENV === 'development';

const atImport = require("postcss-import")
const nested = require("postcss-nested")
const nestedAncestor = require("postcss-nested-ancestors")

const plugins = [];
plugins.push(atImport)
plugins.push(nestedAncestor)
plugins.push(nested)
plugins.push(tailwindcss('tailwind.config.js'))
// This is if you want to include your custom config

if (!IS_DEVELOPMENT) {
	const purgecss = require('@fullhuman/postcss-purgecss');

	class TailwindExtractor {
		static extract(content) {
			return content.match(/[A-z0-9-:\/]+/g) || [];
		}
	}

	plugins.push(
		purgecss({
			content: ['src/*.pug'],
			extractors: [
				{
					extractor: TailwindExtractor,
					extensions: ['html', "pug"]
				}
			],
		})
	);
}

module.exports = { plugins }