import PropTypes from 'prop-types'
import Link from 'next/link'
import { theme } from 'styles'
import { Head } from './header.styles'

const { vars: { maxPhoneBreakpoint } } = theme

const Header = ({ logo, logoMobile, logoText }) => (
	<Head>
		<Link href="/">
			<a>
				<picture>
					<source media={`(min-width: ${maxPhoneBreakpoint}px)`} srcSet={logo} />
					<img src={logoMobile} alt={logoText} />
				</picture>
			</a>
		</Link>
	</Head>
)

Header.propTypes = {
	logo: PropTypes.string.isRequired,
	logoMobile: PropTypes.string.isRequired,
	logoText: PropTypes.string.isRequired,
}

export default Header
