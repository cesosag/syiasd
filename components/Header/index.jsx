import PropTypes from 'prop-types'
import Link from 'next/link'
import { Head } from './header.styles'

const Header = ({ logo, logoText }) => (
	<Head>
		<Link href="/">
			<a>
				<img src={logo} alt={logoText} />
			</a>
		</Link>
	</Head>
)

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	logoText: PropTypes.string.isRequired,
}

export default Header
