import styled from 'styled-components'
import { dynamicElement, Wrapper, theme } from 'styles'

export const Head = styled(dynamicElement('header', true))`
	/* mix-blend-mode: darken; */
	max-width: ${theme.vars.maxWidth}px;
	position: fixed;
	width: 100%;

	${Wrapper} {
		border-bottom: 1px solid ${theme.colors.neutral.light};
		display: grid;
		padding: 1.5rem;
  	place-items: center;
	}
`
