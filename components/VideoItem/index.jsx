/* eslint-disable max-len */
import PropTypes from 'prop-types'
import { YTVideo as Video } from 'components'
import { texts } from 'services'
import { VideoWrapper, VideoInfo, VideoTitle, VideoDate, VideoLink } from './video-item.styles'

const VideoItem = ({ video, hasDate, hasLink, type }) => {
	const { title, description, publishedAt, resourceId: { videoId } } = video
	/* const formatter = new Intl.DateTimeFormat('es-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	})
	let date = formatter.formatToParts(new Date(publishedAt))
	date = `${date[0].value} · ${date[2].value} ${date[3].value} ${date[4].value}, ${date[6].value}` */
	const date = new Date(publishedAt)

	return (
		<VideoWrapper type={type}>
			<Video videoID={videoId} title={title} />
			<VideoInfo>
				{hasDate && date && <VideoDate>{`${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`}</VideoDate>}
				<VideoTitle>{title}</VideoTitle>
				<p>{description}</p>
				{hasLink && <VideoLink href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank" rel="noopener noreferrer">{texts.BUTTONS.VIEW_MORE}</VideoLink>}
			</VideoInfo>
		</VideoWrapper>
	)
}

VideoItem.propTypes = {
	video: PropTypes.shape({
		title: PropTypes.string.isRequired,
		description: PropTypes.string.isRequired,
		publishedAt: PropTypes.string.isRequired,
		resourceId: PropTypes.shape({
			videoId: PropTypes.string.isRequired,
		}).isRequired,
	}).isRequired,
	hasDate: PropTypes.bool,
	hasLink: PropTypes.bool,
	type: PropTypes.string,
}

VideoItem.defaultProps = {
	hasDate: false,
	hasLink: false,
	type: null,
}

export default VideoItem
