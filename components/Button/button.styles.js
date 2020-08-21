import styled, { css } from 'styled-components'
import { theme } from 'styles'

const { colors, vars } = theme

const button = css`
	${({ kind }) => {
		let styles
		if (kind === 'primary') {
			styles = css`
				background-color: ${colors.blue.light};
				border: 1px solid ${colors.blue.light};

				&:hover {
					background-color: ${colors.blue.dark};
					border-color: ${colors.blue.dark};
				}
			`
		} else {
			styles = css`
				background-color: transparent;
				border: 1px solid ${colors.neutral.light};

				&:hover {
					background-color: ${colors.neutral.light};
					color: ${colors.neutral.semiDark}
				}
			`
		}
		return styles
	}}
	border-radius: 0.8em;
	color: ${colors.neutral.light};
	cursor: pointer;
	font-size: ${({ size }) => (size === 'small' ? 12 : 20)}px;
	display: inline-block;
	padding: 0.8em 1.6em;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color ${vars.transitionTime}, border-color ${vars.transitionTime}, color ${vars.transitionTime};
`

export const StyledLink = styled.a`
	${button}
`

export const StyledButton = styled.button`
	${button}
`
