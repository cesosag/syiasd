import styled from 'styled-components'
import { dynamicElement, Wrapper, theme } from 'styles'

export const Head = styled(dynamicElement('header', true))`
	${Wrapper} {
		border-bottom: 1px solid ${theme.colors.neutral.light};
		display: grid;
  	place-items: center;
	}
`
