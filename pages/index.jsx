import PropTypes from 'prop-types'
import { Welcome, Give } from 'components'
import { config, youtube } from 'services'

const Home = ({ welcome, give }) => (
	<>
		<Welcome {...welcome} />
		<Give {...give} />
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
					giveURL: config.urls.adventistGiging,
				},
				latestVideo: videos.data.items.shift().snippet,
				videos: videos.data.items.map((video) => video.snippet),
				channelURL: config.urls.youtube,
			},
			give: {
				background: '/images/give-bg.jpg',
				title: 'De lo recibido de tu mano te damos.',
				subtitle: '1ª de Crónicas 29:14',
				// eslint-disable-next-line max-len
				text: 'Con tus diezmos y ofrendas podemos llevar el mensaje del Evangelio a muchos más lugares y además apoyar a nuestra comunidad.',
				giveURL: config.urls.adventistGiging,
			},
			contact: {
				title: 'Contáctanos',
				text: '¿En qué podemos ayudarte?',
				address: {
					street: '521 Blackshaw Ln',
					city: 'San Ysidro',
					state: 'CA',
					zipCode: '92173',
				},
				open: {
					days: 'Lunes a Viernes',
					hours: '8:30 AM - 5:00 PM',
				},
				phone: '(987) 654-3210',
				email: 'hola@sanysidrosda.com',
				socialLinks: config.urls,
			},
		},
	}
}
