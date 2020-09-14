import styled from 'styled-components'
import { theme } from 'styles'

const { colors, typography } = theme

export const Wrapper = styled.div`
	display: grid;
	grid-gap: 1em;
	grid-template-columns: repeat(auto-fit, minmax(320px, 1fr))
`

export const Title = styled.h3`
	color: ${colors.neutral.light};
	font-family: ${typography.primaryFont};
`

export const CTAs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1.5em;
	width: 100%;
`
