import styled from 'styled-components'
import { theme } from 'styles'

const { colors, gradients, mediaQueries: { phoneOnly } } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: url('/images/hero-gradient.svg'), url(${background});` : null)}
	background-color: ${colors.violet};
	background-repeat: no-repeat;
	background-size: contain;

	${phoneOnly} {
		background-size: 200% auto;
	}
`
