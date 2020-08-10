module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['eslint-config-cs'],
	rules: {
		'import/no-unresolved': [2, { ignore: ['assets', 'components', 'styles'] }],
		'jsx-a11y/anchor-is-valid': 0,
		'node/no-missing-import': [2, { resolvePaths: [__dirname], tryExtensions: ['.js', '.jsx', '.json', '.node'] }],
		'react/jsx-props-no-spreading': 0,
		'react/react-in-jsx-scope': 0,
	},
	globals: {
		React: 'writable',
	},
}
