import PropTypes from 'prop-types'
import { Wrapper } from 'styles'
import { Hero } from 'components'
import { Section } from './welcome.styles'

const Welcome = ({ background, hero: { title, subtitle } }) => (
	<Section background={background}>
		<Wrapper>
			<Hero title={title} subtitle={subtitle} />
		</Wrapper>
	</Section>
)

Welcome.propTypes = {
	background: PropTypes.string,
	hero: PropTypes.shape(Hero.propTypes).isRequired,
}
Welcome.defaultProps = {
	background: null,
}

export default Welcome
