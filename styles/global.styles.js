/* eslint-disable max-len */
import styled, { createGlobalStyle } from 'styled-components'
import { normalize } from 'polished'
import { colors, typography, vars } from './theme'

export const GlobalStyle = createGlobalStyle`
	${normalize()}

	*,
	*::after,
	*::before {
		box-sizing: border-box;
	}

	body {
		background-color: ${colors.neutral.semiLight};
		color: ${colors.neutral.dark};
		font-family: ${typography.primaryFont};
		font-size: ${typography.typeScale.paragraph};
		height: 100%;
		margin: 0 auto;
		max-width: ${vars.maxWidth}px;
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
		font-family: ${typography.secondaryFont};
	}
	h1 {
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
	max-width: ${vars.wrapperMaxWidth}px;
	padding: 1rem;
	width: 100vw;
`
