import axios from 'axios'

const youtube = axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3/',
	headers: {
		'Accept-Encoding': 'gzip',
	},
})

youtube.interceptors.request.use((config) => {
	const params = {
		part: 'snippet',
		...config.params,
		key: process.env.YOUTUBE_API_KEY,
	}
	return { ...config, params }
})

export default youtube
