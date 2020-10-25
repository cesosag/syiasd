import PropTypes from 'prop-types'
import Link from 'next/link'
import { texts } from 'services'
import { SocialLinks } from 'components'
import { FooterContainer, Copyright } from './footer.styles'

const Footer = ({ logo, logoText, socialLinks }) => (
	<FooterContainer>
		{logo && (
			<Link href="/">
				<a className="logo">
					<img src={logo} alt={logoText} />
				</a>
			</Link>
		)}
		{socialLinks && <SocialLinks className="social-links" {...socialLinks} />}
		<Copyright>{texts.FOOTER.COPYRIGHT}</Copyright>
	</FooterContainer>
)

Footer.propTypes = {
	logo: PropTypes.string,
	logoText: PropTypes.string,
	socialLinks: PropTypes.shape({}),
}

Footer.defaultProps = {
	logo: null,
	logoText: null,
	socialLinks: {},
}

export default Footer
