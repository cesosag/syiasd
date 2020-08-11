import PropTypes from 'prop-types'
import { Welcome } from 'components'

const Home = ({ welcome }) => (
	<>
		<Welcome {...welcome} />
	</>
)

Home.propTypes = {
	welcome: PropTypes.shape(Welcome.PropTypes).isRequired,
}

export default Home

export async function getStaticProps() {
	return {
		props: {
			welcome: {
				background: '/images/hero.jpg',
				hero: {
					title: 'San Ysidro',
					subtitle: 'Tu comunidad de fe',
				},
			},
		},
	}
}
