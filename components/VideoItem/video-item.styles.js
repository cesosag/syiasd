/* eslint-disable no-use-before-define */
import styled, { css } from 'styled-components'
import { theme } from 'styles'

const { colors, mediaQueries: { tabletPortraitUp } } = theme

export const VideoWrapper = styled.div`
	${({ type }) => (type === 'featured' ? css`
		${tabletPortraitUp} {
			display: grid;
			grid-template-columns: 60% 40%;
			margin-bottom: 48px;

			${VideoInfo} {
				padding-left: 4rem;
			}
		}
	` : null)}
`

export const VideoInfo = styled.div`
	padding: 1rem 0;
`

export const VideoTitle = styled.h3`
	font-size: 18px;
	margin: 1rem 0 0;
`

export const VideoDate = styled.span`
	display: block;
	font-size: 12px;
	margin: 0 0 8px;
	text-transform: capitalize;

	& + ${VideoTitle} {
		margin-top: 0;
	}
`

export const VideoLink = styled.a`
	color: ${colors.orange};
	display: inline-block;
	font-size: 12px;
	text-decoration: none;
	width: auto;

	&::after {
		display: inline-block;
		content: '>';
		margin-left: 1em;
	}
`
