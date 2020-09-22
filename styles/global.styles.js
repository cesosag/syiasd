/* eslint-disable max-len */
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colors, typography, vars, mediaQueries } from './theme'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	a {
		color: ${colors.orange};
	}

	body {
		background-color: ${colors.neutral.dark};
		color: ${colors.neutral.light};
		font-family: ${typography.primaryFont};
		font-size: ${typography.typeScale.paragraph};
		font-weight: 300;
		height: 100%;
		margin: 0 auto;
		max-width: ${vars.desktopUpperBoundary}px;
		min-height: 100vh;
		overscroll-behavior: none;
	}

	figure {
		text-align: center;
	}

	footer {
		grid-area: footer;
	}

	header {
		grid-area: header;
	}

	h1, h2, h3, h4, h5, h6 {
		text-transform: uppercase;
	}
	h1 {
		font-family: ${typography.secondaryFont};
		font-size: ${typography.typeScale.h1};
	}
	h2 {
		font-size: ${typography.typeScale.h2};
	}
	h3 {
		font-size: ${typography.typeScale.h3};
	}
	h4 {
		font-size: ${typography.typeScale.h4};
	}
	h5 {
		font-size: ${typography.typeScale.h5};
	}
	h6 {
		font-size: ${typography.typeScale.h6};
	}

	img {
		max-width: 100%;
		vertical-align: middle;
	}

	main {
		grid-area: main;
	}

	p {
		font-size: 16px;
		line-height: 1.63;
		margin: 32px 0 0;
	}

	#__next {
		display: grid;
		grid-template-areas:
			'header'
			'main'
			'footer';
	}
`

export const Wrapper = styled.div`
	margin: 0 auto;
	max-width: ${vars.desktopUpperBoundary}px;
	padding: 1.2rem;
	width: 100vw;

	${mediaQueries.desktopUp} {
		padding: 5rem;
	}
`
