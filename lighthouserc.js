module.exports = {
	ci: {
		assert: {
			assertions: {
				'categories:performance': ['warn', { minScore: 0.7 }],
				'first-contentful-paint': ['warn', {
					// minScore: 0.8,
					maxNumericValue: 1000,
				}],
				'largest-contentful-paint': ['warn', { minScore: 0.8 }],
				'first-meaningful-paint': ['warn', { minScore: 0.8 }],
				'speed-index': ['warn', { minScore: 0.8 }],
				'first-cpu-idle': ['warn', { minScore: 0.8 }],
				interactive: ['warn', { minScore: 0.8 }],
				'total-blocking-time': ['warn', { minScore: 0.8 }],
				'server-response-time': ['warn', { minScore: 0.8 }],
			},
		},
		collect: {
			numberOfRuns: 10,
			settings: {
				onlyAudits: [
					'first-contentful-paint',
					'largest-contentful-paint',
					'first-meaningful-paint',
					'speed-index',
					'first-cpu-idle',
					'interactive',
					'total-blocking-time',
					'server-response-time',
				],
				/* onlyCategories: [
					'performance',
					'accessibility',
					'best-practices',
					'seo',
				], */
			},
			startServerCommand: 'yarn start',
			url: [
				'http://localhost:3000',
				'http://localhost:3000/tos',
			],
		},
		upload: {
			target: 'filesystem',
			outputDir: './.lhci',
		},
	},
}
