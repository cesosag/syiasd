import styled from 'styled-components'
import { theme } from 'styles'

const { colors, gradients, mediaQueries: { phoneOnly } } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: ${gradients.violet}, url(${background});` : null)}
	background-color: ${colors.violet};
	background-repeat: no-repeat;
	background-size: contain;

	${phoneOnly} {
		background-size: 100% 41%, 200% auto;
	}
`
