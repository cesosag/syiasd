import PropTypes from 'prop-types'
import { Button, VideoItem } from 'components'
import { texts } from 'services'
import { Container, Wrapper, Title, CTAs } from './videos.styles'

const Videos = ({ latestVideo, videos }) => (
	<>
		<Title id="videos">{texts.HOME.VIDEOS.LATEST_TRANSMITIONS}</Title>
		<VideoItem video={latestVideo} type="featured" />
		<Container>
			<Wrapper>
				{videos.map((video) => <VideoItem key={video?.resourceId?.videoId} video={video} hasDate hasLink />)}
			</Wrapper>
		</Container>
		<CTAs>
			<Button
				href={`https://www.youtube.com/channel/${videos[0]?.channelId}/`}
				target="_blank"
				rel="noreferrer"
				size="small"
			>
				{texts.BUTTONS.VIEW_CHANNEL}
			</Button>
		</CTAs>
	</>
)

Videos.propTypes = {
	latestVideo: PropTypes.shape({}).isRequired,
	videos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Videos
