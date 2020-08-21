import styled from 'styled-components'
import { theme } from 'styles'

export const Title = styled.h1`
	font-size: 82px;
`

export const Text = styled.p`
	font-size: 42px;
	text-transform: uppercase;
`

export const CTAs = styled.div`
	display: flex;
	justify-content: space-evenly;
	margin-top: 1.5em;
	width: 100%;
`

export const Container = styled.div`
	color: ${theme.colors.neutral.light};
	display: grid;
	margin: 6rem 0;
	padding: 10rem;
	place-items: center;

	${Title}, ${Text} {
		margin: 0;
	}
`
