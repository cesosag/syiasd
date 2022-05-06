import PropTypes from 'prop-types'
import Head from 'next/head'
import { Welcome, Give, Contact } from 'components'
import { cms, youtube } from 'services'
import { cloudinaryAutoFormat } from 'utils'
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

	let videos
	try {
		videos = await youtube.get('/playlistItems', {
			params: {
				playlistId: siteConfiguration?.youtube?.mainPlaylist,
				maxResults: 4,
			},
		})
	} catch (err) {
		// eslint-disable-next-line no-console
		console.error(`Videos: ${err.message}`)
	}

	return {
		props: {
			config: siteConfiguration,
			welcome: {
				background: cloudinaryAutoFormat(hero?.background?.url),
				hero: {
					title: hero?.title,
					subtitle: hero?.subtitle,
					giveURL: siteConfiguration.URLs.adventistGiving,
				},
				latestVideo: videos?.data?.items?.shift().snippet ?? null,
				videos: videos?.data?.items?.map((video) => video.snippet) ?? null,
				channelURL: siteConfiguration.URLs.youtube,
			},
			give: {
				background: cloudinaryAutoFormat(give?.background?.url),
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
