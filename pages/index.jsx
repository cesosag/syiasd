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
			playlistId: 'PLOqMc4wUtGMv8sPyHiW1CiJDsGdXFzRRk',
			maxResults: 3,
		},
	})

	return {
		props: {
			welcome: {
				background: '/images/hero.jpg',
				hero: {
					title: 'San Ysidro',
					subtitle: 'Tu comunidad de fe',
				},
				videos: videos.data.items,
			},
		},
	}
}
