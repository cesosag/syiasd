import styled from 'styled-components'
import { theme } from 'styles'

const { gradients } = theme

export const Section = styled.section`
	${({ background }) => (background ? `background-image: ${gradients.violet}, url(${background});` : null)}
`
