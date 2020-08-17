import PropTypes from 'prop-types'
import { YTVideo as Video, Button } from 'components'
import { texts } from 'services'
import { Wrapper } from './videos.styles'

const Videos = ({ videos }) => (
	<>
		<h3>Ver sermones anteriores</h3>
		<Wrapper>
			{videos.map(({ snippet: { resourceId: { videoId } } }) => <Video key={videoId} videoID={videoId} />)}
		</Wrapper>
		<Button
			href={`https://www.youtube.com/channel/${videos[0]?.snippet?.channelId}/`}
			target="_blank"
			rel="noreferrer"
			size="small"
		>
			{texts.BUTTONS.VIEW_MORE}
		</Button>
	</>
)

Videos.propTypes = {
	videos: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
}

export default Videos
