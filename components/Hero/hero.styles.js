import styled from 'styled-components'
import { theme } from 'styles'

const { colors, mediaQueries: { phoneOnly, tabletPortraitUp } } = theme

export const Title = styled.h1`
	font-size: 48px;
	line-height: 1.31;

	${tabletPortraitUp} {
		font-size: 82px;
	}
`

export const Text = styled.p`
	font-size: 24px;
	line-height: 1.21;
	text-transform: uppercase;

	${tabletPortraitUp} {
		font-size: 42px;
	}
`

export const CTAs = styled.div`
	display: flex;
	margin-top: 2.5rem;
	text-align: center;
	width: 70%;

	${phoneOnly} {
		flex-direction: column;

		button:first-of-type {
			margin-bottom: 1.25rem;
		}
	}

	${tabletPortraitUp} {
		justify-content: space-evenly;
		margin-top: 1.5em;
		max-width: 550px;
	}
`

export const Container = styled.div`
	color: ${colors.neutral.light};
	display: grid;
	margin: 4.2rem 0;
	padding: 2.5rem 1rem;
	place-items: center;

	${tabletPortraitUp} {
		padding: 10rem;
	}

	${Title}, ${Text} {
		margin: 0;
	}
`
