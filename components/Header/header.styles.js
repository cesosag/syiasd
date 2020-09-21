import styled from 'styled-components'
import { dynamicElement, Wrapper, theme } from 'styles'

const { colors, vars, zIndex } = theme

export const Head = styled(dynamicElement('header', true))`
	/* mix-blend-mode: darken; */
	background-color: ${({ contrast }) => (contrast === 'true' ? `${colors.neutral.dark}cc` : 'transparent')};
	max-width: ${vars.desktopUpperBoundary}px;
	padding: 1rem 1.2rem;
	position: fixed;
	transition: background-color ${vars.transitionTime};
	width: 100%;
	z-index: ${zIndex.header};


	${Wrapper} {
		border-bottom: 1px solid ${colors.neutral.light};
		display: grid;
		padding: 0 0 1rem 0;
  	place-items: center;
		width: 100%;
	}
`
