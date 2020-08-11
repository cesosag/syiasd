import PropTypes from 'prop-types'
import { Container } from './hero.styles'

const Hero = ({ title, subtitle }) => (
	<Container>
		<h1>{title}</h1>
		<p>{subtitle}</p>
	</Container>
)

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Hero
