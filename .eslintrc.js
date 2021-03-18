module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['@csjs/eslint-config-cs'],
	rules: {
		'import/no-unresolved': [2, { ignore: ['assets', 'components', 'styles', 'services', 'utils', 'queries'] }],
		'jsx-a11y/anchor-is-valid': 0,
		'node/no-missing-import': [2, { resolvePaths: [__dirname], tryExtensions: ['.js', '.jsx', '.json', '.node'] }],
		'react/react-in-jsx-scope': 0,
		'react/jsx-indent-props': [0],
	},
	globals: {
		React: 'writable',
	},
	parser: '@babel/eslint-parser',
}
