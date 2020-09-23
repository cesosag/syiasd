import styled from 'styled-components'
import { theme, Wrapper } from 'styles'
import { SocialLinks } from 'components'

const { colors, typography, mediaQueries: { tabletPortraitUp } } = theme

export const Section = styled.section`
	background: ${colors.neutral.light};
	color: ${colors.violet};

	${Wrapper} {
		display: grid;
		grid-template-areas:
			'title'
			'form'
			'map'
			'contact-info'
			'social';

		${tabletPortraitUp} {
			align-items: self-start;
			display: grid;
			grid-template-areas:
				'title title title title title title'
				'form form form map map map'
				'contact-info contact-info contact-info contact-info social social';
			grid-gap: 4rem 2rem;
		}
	}
`

export const Title = styled.h2`
	font-family: ${typography.primaryFont};
	font-size: 36px;
	font-weight: normal;
	grid-area: title;
`

export const Text = styled.p`
	margin: 0;
`

export const ContactForm = styled.form`
	grid-area: form;

	[type="submit"] {
		margin-top: 1em;
	}
`

export const ContactInfo = styled.div`
	grid-area: contact-info;
	margin: 2rem 0;

	${tabletPortraitUp} {
		display: flex;
		justify-content: space-between;
		margin: 0;
	}
`

export const ContactInfoGroup = styled.div`
	&:not(:last-of-type) {
		margin-bottom: 1rem;
	}

	p {
		margin: 0;
	}
`

export const MapWrapper = styled.div`
	grid-area: map;
	margin-top: 3rem;

	${tabletPortraitUp} {
		margin-top: 0;
	}

	iframe {
		height: 300px;
		margin-top: 1.2rem;
		width: 100%;
	}
`

export const Social = styled.div`
	grid-area: social;

	${tabletPortraitUp} {
		${SocialLinks} {
			ul {
				justify-content: space-between;
			}
		}
	}
`
