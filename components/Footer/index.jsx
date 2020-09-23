import PropTypes from 'prop-types'
import Link from 'next/link'
import { texts } from 'services'
import { SocialLinks } from 'components'
import { FooterContainer, Copyright } from './footer.styles'

const Footer = ({ logo, logoText, socialLinks }) => (
	<FooterContainer>
		<Link href="/">
			<a className="logo">
				<img src={logo} alt={logoText} />
			</a>
		</Link>
		<SocialLinks className="social-links" {...socialLinks} />
		<Copyright>{texts.FOOTER.COPYRIGHT}</Copyright>
	</FooterContainer>
)

Footer.propTypes = {
	logo: PropTypes.string.isRequired,
	logoText: PropTypes.string.isRequired,
	socialLinks: PropTypes.shape({}).isRequired,
}

export default Footer
