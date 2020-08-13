import PropTypes from 'prop-types'
import { Wrapper } from 'styles'
import { Hero, YTVideo as Video } from 'components'
import { Section } from './welcome.styles'

const Welcome = ({ background, hero: { title, subtitle }, videos }) => (
	<Section background={background}>
		<Wrapper>
			<Hero title={title} subtitle={subtitle} />
			<Video videoID={videos[0].snippet.resourceId.videoId} />
		</Wrapper>
	</Section>
)

Welcome.propTypes = {
	background: PropTypes.string,
	hero: PropTypes.shape(Hero?.propTypes).isRequired,
}
Welcome.defaultProps = {
	background: null,
}

export default Welcome
