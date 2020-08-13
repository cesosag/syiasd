/* eslint-disable no-undef */
import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Video } from './ytvideo.styles'

const SCRIPT_ID = 'yt-iframe-api'

const YTVideo = ({ videoID, onVideoReady, onStateChange }) => {
	const player = useRef()
	useEffect(() => {
		const isLoaded = !!document.getElementById(SCRIPT_ID)
		if (!isLoaded) {
			const tag = document.createElement('script')
			tag.src = 'https://www.youtube.com/iframe_api'
			tag.id = SCRIPT_ID
			const firstScriptElement = document.querySelector('script')
			firstScriptElement.parentNode.insertBefore(tag, firstScriptElement)
		}
		window.onYouTubeIframeAPIReady = () => {
			player.current = new YT.Player(videoID, {
				videoId: videoID,
				events: {
					onReady: () => onVideoReady(player.current),
					onStateChange,
				},
			})
		}
	}, [videoID, onVideoReady, onStateChange])

	return (
		<Video>
			<div id={videoID} />
		</Video>
	)
}

YTVideo.propTypes = {
	videoID: PropTypes.string.isRequired,
	onVideoReady: PropTypes.func,
	onStateChange: PropTypes.func,
}
YTVideo.defaultProps = {
	onVideoReady: () => {},
	onStateChange: () => {},
}

export default YTVideo
