import PropTypes from 'prop-types'
import { Wrapper } from 'styles'
import { Hero, Videos } from 'components'
import { Section } from './welcome.styles'

const Welcome = ({ background, hero: { title, subtitle }, videos }) => (
	<Section background={background}>
		<Wrapper>
			<Hero title={title} subtitle={subtitle} />
			<Videos videos={videos} />
		</Wrapper>
	</Section>
)

Welcome.propTypes = {
	background: PropTypes.string,
	hero: PropTypes.shape(Hero?.propTypes).isRequired,
	videos: PropTypes.arrayOf(PropTypes.shape({})),
}
Welcome.defaultProps = {
	background: null,
	videos: null,
}

export default Welcome
