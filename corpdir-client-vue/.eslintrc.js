// http://eslint.org/docs/user-guide/configuring

module.exports = {
	root: true,
	parser: 'babel-eslint',
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
// required to lint *.vue files
	plugins: [
		'html'
	],
	extends: "eslint:recommended",
	rules: {
		"no-console": 0,
		"no-use-before-define": 0,
		"no-shadow": 0,
		"dot-notation": 0,
		"no-underscore-dangle": 0,
		"no-mixed-spaces-and-tabs": 0,
		"no-labels": 0,
		"no-constant-condition": 0,
		"no-return-assign": 0,
		"no-extend-native": 0,
		"no-debugger": 0,
		"no-alert": 0,
		"brace-style": [2, "1tbs", {"allowSingleLine": false}],
		"semi": [2, "always"],
		"space-before-blocks": [2, "always"],
		"spaced-comment": [2, "always"],
		"keyword-spacing": 2,
		"indent": [2, "tab", {"SwitchCase": 1}],
		"quotes": 0
	},
};
