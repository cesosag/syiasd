import styled from 'styled-components'
import { theme } from 'styles'

const { colors, typography, mediaQueries: { phoneOnly, tabletPortraitUp } } = theme

export const Wrapper = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(176px, 1fr));

	${phoneOnly} {
		padding: 0 1.2rem;
		width: 280%;
	}
`

export const Container = styled.div`
	${phoneOnly} {
		margin: 2rem -1.2rem 0;
		overflow: scroll;
	}
`

export const Title = styled.h2`
	color: ${colors.neutral.light};
	font-family: ${typography.primaryFont};
	font-size: 18px;
	margin: 24px 0;

	${tabletPortraitUp} {
		font-size: 24px;
	}
`

export const CTAs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1.5em;
	width: 100%;
`
