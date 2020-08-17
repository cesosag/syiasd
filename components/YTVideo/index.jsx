/* eslint-disable no-undef */
import { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import { Video } from './ytvideo.styles'

const SCRIPT_ID = 'yt-iframe-api'

const loadIframeAPI = () => {
	const isLoaded = !!document.getElementById(SCRIPT_ID)
	if (!isLoaded) {
		const tag = document.createElement('script')
		tag.src = 'https://www.youtube.com/iframe_api'
		tag.id = SCRIPT_ID
		const firstScriptElement = document.querySelector('script')
		firstScriptElement.parentNode.insertBefore(tag, firstScriptElement)
	}
}

const YTVideo = ({ videoID, onReady, onStateChange }) => {
	const player = useRef()
	useEffect(() => {
		loadIframeAPI()
		const setPlayer = () => {
			try {
				player.current = new window.YT.Player(videoID, {
					videoId: videoID,
					playerVars: {
						enablejsapi: 1,
						origin: window.location.origin,
						modestbranding: 1,
					},
					events: {
						onReady,
						onStateChange,
					},
				})
			} catch {
				setTimeout(setPlayer, 400)
			}
		}
		setPlayer()
	}, [onStateChange, onReady, videoID])

	return (
		<Video>
			<div id={videoID} />
		</Video>
	)
}

YTVideo.propTypes = {
	videoID: PropTypes.string.isRequired,
	onReady: PropTypes.func,
	onStateChange: PropTypes.func,
}
YTVideo.defaultProps = {
	onReady: () => {},
	onStateChange: () => {},
}

export default YTVideo
