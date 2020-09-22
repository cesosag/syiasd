import styled from 'styled-components'
import { theme, Wrapper } from 'styles'

const { colors, mediaQueries: { tabletPortraitUp } } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: url('/images/hero-gradient.svg'), url(${background});` : null)}
	background-color: ${colors.violet};
	background-repeat: no-repeat;
	background-size: 200% auto;

	${tabletPortraitUp} {
		background-size: contain;
	}

	${Wrapper} {
		padding-bottom: 3rem;

		${tabletPortraitUp} {
			padding-bottom: 5rem;
		}
	}
`
