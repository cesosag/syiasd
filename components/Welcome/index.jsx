import PropTypes from 'prop-types'
import { Wrapper } from 'styles'
import { Hero, Videos } from 'components'
import { Section } from './welcome.styles'

const Welcome = ({ background, hero, videos, latestVideo, channelURL }) => (
	<Section background={background}>
		<Wrapper>
			<Hero {...hero} />
			<Videos latestVideo={latestVideo} videos={videos} channelURL={channelURL} />
		</Wrapper>
	</Section>
)

Welcome.propTypes = {
	background: PropTypes.string,
	hero: PropTypes.shape(Hero?.propTypes).isRequired,
	latestVideo: PropTypes.shape({}).isRequired,
	videos: PropTypes.arrayOf(PropTypes.shape({})),
	channelURL: PropTypes.string.isRequired,
}
Welcome.defaultProps = {
	background: null,
	videos: null,
}

export default Welcome
