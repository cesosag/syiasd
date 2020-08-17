export const colors = {
	neutral: {
		dark: '#000',
		semiDark: '#151515',
		semiLight: '#ababab',
		light: '#fff',
	},
	blue: {
		light: '#49c1c7',
	},
}

export const gradients = {
	hero: `linear-gradient(to bottom, ${colors.neutral.dark} 9%, rgba(255, 255, 255, 0.53) 38%, rgba(255, 255, 255, 0.87) 72%, ${colors.neutral.light} 93%)`,
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
	wrapperMaxWidth: 1024,
}
