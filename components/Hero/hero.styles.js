import styled from 'styled-components'
import { theme } from 'styles'

const { colors, vars: { maxPhoneBreakpoint } } = theme

export const Title = styled.h1`
	font-size: 48px;

	@media (min-width: ${maxPhoneBreakpoint}px) {
		font-size: 82px;
	}
`

export const Text = styled.p`
	font-size: 24px;
	text-transform: uppercase;

	@media (min-width: ${maxPhoneBreakpoint}px) {
		font-size: 42px;
	}
`

export const CTAs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1.5em;
	width: 100%;
`

export const Container = styled.div`
	color: ${colors.neutral.light};
	display: grid;
	margin: 6rem 0;
	padding: 1rem;
	place-items: center;

	@media (min-width: ${maxPhoneBreakpoint}px) {
		padding: 10rem;
	}

	${Title}, ${Text} {
		margin: 0;
	}
`
