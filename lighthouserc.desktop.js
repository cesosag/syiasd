const { ci } = require('./lighthouserc')

const { assert, collect, upload } = ci

module.exports = {
	ci: {
		assert,
		collect: {
			...collect,
			settings: {
				...collect.settings,
				preset: 'desktop',
			},
		},
		upload,
	},
}
