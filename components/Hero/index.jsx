import PropTypes from 'prop-types'
import { Button } from 'components'
import { texts } from 'services'
import { Container, CTAs, Text, Title } from './hero.styles'

const scrollToVideos = (e) => {
	e.preventDefault()
	document.querySelector('#videos').scrollIntoView({ behavior: 'smooth' })
}

const Hero = ({ title, subtitle }) => (
	<Container>
		<Title>{title}</Title>
		<Text>{subtitle}</Text>
		<CTAs>
			<Button kind="secondary" onClick={scrollToVideos}>{texts.BUTTONS.WATCH}</Button>
			<Button href="https://adventistgiving.org/#/org/ANPMOV/envelope/start" target="_blank">{texts.BUTTONS.GIVE}</Button>
		</CTAs>
	</Container>
)

Hero.propTypes = {
	title: PropTypes.string.isRequired,
	subtitle: PropTypes.string.isRequired,
}

export default Hero
