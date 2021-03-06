import PropTypes from 'prop-types'
import { Wrapper } from 'styles'
import { Button } from 'components'
import { texts } from 'services'
import { Section, Title, Subtitle, Text } from './give.styles'

const Give = ({ background, title, subtitle, text, giveURL }) => (
	<Section background={background}>
		<Wrapper>
			<Title>{title}</Title>
			<Subtitle>{subtitle}</Subtitle>
			<Text>{text}</Text>
			<Button href={giveURL}>{texts.BUTTONS.GIVE}</Button>
		</Wrapper>
	</Section>
)

Give.propTypes = {
	background: PropTypes.string,
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	giveURL: PropTypes.string.isRequired,
}
Give.defaultProps = {
	background: null,
}

export default Give
