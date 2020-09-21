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
	transitionTime: '0.3s',
	phoneUpperBoundary: 600,
	tabletPortraitUpperBoundary: 900,
	tabletLandscapeUpperBoundary: 1200,
	desktopUpperBoundary: 1800,
}

export const zIndex = {
	modal: 900,
	overlay: 800,
	dropdown: 700,
	header: 600,
	footer: 500,
}

// Based on https://www.freecodecamp.org/news/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862/
export const mediaQueries = {
	phoneOnly: `@media (max-width: ${vars.phoneUpperBoundary - 1}px)`,
	tabletPortraitUp: `@media (min-width: ${vars.phoneUpperBoundary}px)`,
	tabletLandscapeUp: `@media (min-width: ${vars.tabletPortraitUpperBoundary}px)`,
	desktopUp: `@media (min-width: ${vars.tabletLandscapeUpperBoundary}px)`,
	largeDesktop: `@media (min-width: ${vars.desktopUpperBoundary}px)`,
}
