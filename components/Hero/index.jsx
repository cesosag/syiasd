import PropTypes from 'prop-types'
import { Button } from 'components'
import { Container } from './hero.styles'

const Hero = ({ title, subtitle }) => (
	<Container>
		<h1>{title}</h1>
		<p>{subtitle}</p>
		<Button kind="secondary">Ver mensajes</Button>
		<Button>Donar</Button>
	</Container>
)

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Hero
