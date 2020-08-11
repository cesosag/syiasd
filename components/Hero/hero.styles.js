import styled from 'styled-components'
import { theme } from 'styles'

export const Container = styled.div`
	color: ${theme.colors.neutral.light};
	display: grid;
	margin: 6rem 0;
	padding: 10rem;
	place-items: center;

	h1, p {
		margin: 0;
		text-transform: uppercase;
	}

	h1 {
		font-size: 82px;
	}

	p {
		font-size: 42px;
	}
`
