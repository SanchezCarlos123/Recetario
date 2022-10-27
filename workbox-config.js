module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{css,scss,js,jfif,html,png,json}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};