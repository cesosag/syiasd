export const colors = {
	neutral: {
		dark: '#1b0939',
		light: '#e2e0e5',
	},
	blue: '#59c6b8',
	violet: '#36008d',
	yellow: '#f6d247',
	pink: '#f4b6c1',
	orange: '#fe5e54',
}

export const gradients = {
	violet: `linear-gradient(to bottom, rgba(40, 1, 49, 0) 9%, rgba(40, 1, 49, 0.53) 38%, rgba(54, 0, 141, 0.87) 72%, ${colors.violet} 93%)`,
}

export const typography = {
	primaryFont: 'Montserrat, sans-serif',
	secondaryFont: '\'Bebas Neue\', serif',
	typeScale: {
		h1: '1.8rem',
		h2: '1.6rem',
		h3: '1.4rem',
		h4: '1.2rem',
		h5: '1.1rem',
		h6: '1rem',
		paragraph: '1rem',
		helper: '0.8rem',
		copyright: '0.7rem',
	},
}

export const vars = {
	maxWidth: 1280,
	transitionTime: '0.3s',
	wrapperMaxWidth: 1024,
}
