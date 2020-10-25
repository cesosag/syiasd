import PropTypes from 'prop-types'
import Head from 'next/head'
import { Welcome, Give, Contact } from 'components'
import { cms, youtube } from 'services'
import { queries } from 'queries'

const Home = ({ welcome, give, contact }) => (
	<>
		<Head>
			<title>{`${welcome.hero.title} - ${welcome.hero.subtitle}`}</title>
			<meta name="Description" content={`${welcome.hero.title} - ${welcome.hero.subtitle}`} />
		</Head>
		<Welcome {...welcome} />
		<Give {...give} />
		<Contact {...contact} />
	</>
)

Home.propTypes = {
	welcome: PropTypes.shape(Welcome.propTypes).isRequired,
	give: PropTypes.shape(Give.propTypes).isRequired,
	contact: PropTypes.shape(Contact.propTypes).isRequired,
}

export default Home

export async function getStaticProps() {
	const { data: { data: { siteConfiguration, hero, give, contactDatum } } } = await cms.query({
		query: queries.HOME,
	})

	const videos = await youtube.get('/playlistItems', {
		params: {
			playlistId: siteConfiguration?.youtube?.mainPlaylist,
			maxResults: 4,
		},
	})

	return {
		props: {
			config: siteConfiguration,
			welcome: {
				background: hero?.background?.url,
				hero: {
					title: hero?.title,
					subtitle: hero?.subtitle,
					giveURL: siteConfiguration.URLs.adventistGiving,
				},
				latestVideo: videos.data.items.shift().snippet,
				videos: videos.data.items.map((video) => video.snippet),
				channelURL: siteConfiguration.URLs.youtube,
			},
			give: {
				background: give?.background?.url,
				title: give?.title,
				subtitle: give?.subtitle,
				text: give?.text,
				giveURL: siteConfiguration.URLs.adventistGiving,
			},
			contact: {
				title: contactDatum?.title,
				text: contactDatum?.text,
				address: contactDatum?.address,
				open: contactDatum?.open_hours,
				phone: contactDatum?.phone,
				email: contactDatum?.email,
				socialLinks: siteConfiguration.URLs,
			},
		},
		revalidate: 1,
	}
}
