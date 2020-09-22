import PropTypes from 'prop-types'
import { Welcome } from 'components'
import { youtube } from 'services'

const Home = ({ welcome }) => (
	<>
		<Welcome {...welcome} />
	</>
)

Home.propTypes = {
	welcome: PropTypes.shape(Welcome.propTypes).isRequired,
}

export default Home

export async function getStaticProps() {
	const videos = await youtube.get('/playlistItems', {
		params: {
			playlistId: 'PLpH9JcquIu4PQU3C63G5BTUfpQXXlHCXo',
			maxResults: 4,
		},
	})

	return {
		props: {
			welcome: {
				background: '/images/hero-bg.jpg',
				hero: {
					title: 'San Ysidro',
					subtitle: 'Tu comunidad de fe',
				},
				latestVideo: videos.data.items.shift().snippet,
				videos: videos.data.items.map((video) => video.snippet),
			},
		},
	}
}
