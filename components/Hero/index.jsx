import PropTypes from 'prop-types'
import { Button } from 'components'
import { Container, CTAs, Text, Title } from './hero.styles'

const Hero = ({ title, subtitle }) => (
	<Container>
		<Title>{title}</Title>
		<Text>{subtitle}</Text>
		<CTAs>
			<Button kind="secondary">Ver mensajes</Button>
			<Button>Donar</Button>
		</CTAs>
	</Container>
)

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Hero
