import styled, { css } from 'styled-components'
import { theme } from 'styles'
import { darken } from 'polished'

const { colors, mediaQueries: { tabletPortraitUp }, vars } = theme

const button = css`
	${({ kind }) => {
		let styles
		if (kind === 'primary') {
			styles = css`
				background-color: ${colors.orange};
				border: 1px solid ${colors.orange};

				&:hover {
					background-color: ${darken(0.1, colors.orange)};
					border-color: ${darken(0.1, colors.orange)};
				}
			`
		} else {
			styles = css`
				background-color: transparent;
				border: 1px solid ${colors.neutral.light};

				&:hover {
					background-color: ${colors.neutral.light};
					color: ${colors.neutral.dark}
				}
			`
		}
		return styles
	}}
	border-radius: 0.8em;
	color: ${colors.neutral.light};
	cursor: pointer;
	font-size: ${({ size }) => (size === 'small' ? 12 : 16)}px;
	display: inline-block;
	padding: 0.8em 1.6em;
	text-decoration: none;
	text-transform: uppercase;
	transition: background-color ${vars.transitionTime}, border-color ${vars.transitionTime}, color ${vars.transitionTime};

	${tabletPortraitUp} {
		font-size: ${({ size }) => (size === 'small' ? 12 : 20)}px;
	}
`

export const StyledLink = styled.a`
	${button}
`

export const StyledButton = styled.button`
	${button}
`
