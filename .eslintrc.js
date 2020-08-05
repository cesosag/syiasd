module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint-config-cs'],
	rules: {
		'react/react-in-jsx-scope': 0,
	},
	globals: {
		React: 'writable',
	},
}
