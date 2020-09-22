import styled from 'styled-components'
import { theme, Wrapper } from 'styles'

const { colors, mediaQueries: { tabletPortraitUp }, typography } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: url(${background});` : null)}
	background-color: ${colors.violet};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	text-align: center;

	${Wrapper} {
		padding:2.5rem 2.5rem 8rem;

		${tabletPortraitUp} {
			padding: 6rem 6rem 15rem;
		}
	}
`

export const Title = styled.h2`
	font-family: ${typography.secondaryFont};
	font-size: 24px;
	font-weight: normal;
	line-height: 1.33;
	margin: 0 auto;

	${tabletPortraitUp} {
		font-size: 66px;
	}
`

export const Subtitle = styled.h3`
	font-size: 14px;
	font-weight: normal;
	line-height: 1.29;
	margin: 0.7em auto;

	${tabletPortraitUp} {
		margin: 0.2em auto;
		font-size: 42px;
	}
`

export const Text = styled.p`
	margin: 2em auto;

	${tabletPortraitUp} {
		max-width: 500px;
		text-align: left;
	}
`
