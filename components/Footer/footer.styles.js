import styled from 'styled-components'

import { dynamicElement, theme, Wrapper } from 'styles'

const { colors, mediaQueries: { tabletPortraitUp, desktopUp } } = theme

export const FooterContainer = styled(dynamicElement('footer', true))`
	background-color: ${colors.violet};

	${Wrapper} {
		display: grid;
		grid-template-areas:
			'logo'
			'subscribe'
			'menu'
			'social'
			'copyright';
		justify-content: stretch;
		padding: 3rem 1.2rem;

		${tabletPortraitUp} {
			grid-template-areas:
				'logo logo subscribe subscribe'
				'menu menu menu menu'
				'social none none none'
				'copyright none none none';
			justify-content: start;

		}

		${desktopUp} {
			padding: 3rem 5rem;
		}
	}

	.logo {
		display: inline-block;
		grid-area: logo;
		margin: 2rem auto;
	}

	nav[class*=social-links] {
		color: white;
		grid-area: social;

		ul {
			${tabletPortraitUp} {
				justify-content: space-between;
			}
		}

		a {
			color: ${colors.orange};

			&:hover {
				color: ${colors.neutral.light};
			}
		}
	}
`

export const Copyright = styled.div`
	grid-area: copyright;
	margin-top: 1.5rem;
	text-align: center;
	text-transform: uppercase;
`
