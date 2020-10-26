import { useEffect } from 'react'
import PropTypes from 'prop-types'

const GoogleAnalytics = ({ measurementID }) => {
	function gtag(...args) {
		window.dataLayer.push(args)
	}

	useEffect(() => {
		window.dataLayer = window.dataLayer || []
		gtag('js', new Date())
		gtag('config', measurementID)
	}, [measurementID])

	return null
}

GoogleAnalytics.propTypes = {
	measurementID: PropTypes.string.isRequired,
}

export default GoogleAnalytics
