import styled, { css } from 'styled-components'
import { theme } from 'styles'

const button = css`
	${({ kind }) => {
		let styles
		if (kind === 'primary') {
			styles = css`
				background-color: ${theme.colors.blue.light};
				border: 1px solid ${theme.colors.blue.light};
			`
		} else {
			styles = css`
				background-color: transparent;
				border: 1px solid ${theme.colors.neutral.light};
			`
		}
		return styles
	}}
	border-radius: 0.8em;
	color: ${theme.colors.neutral.light};
	cursor: pointer;
	font-size: ${({ size }) => (size === 'small' ? 12 : 20)}px;
	display: inline-block;
	padding: 0.8em 1.6em;
	text-decoration: none;
	text-transform: uppercase;
`

export const StyledLink = styled.a`
	${button}
`

export const StyledButton = styled.button`
	${button}
`
