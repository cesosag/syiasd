import styled from 'styled-components'
import { theme } from 'styles'

const { colors, gradients, mediaQueries: { phoneOnly } } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: ${gradients.violet}, url(${background});` : null)}
	background-color: ${colors.violet};

	${phoneOnly} {
		background-repeat: no-repeat;
		background-size: 100% 41%, 200% auto;
	}
`
