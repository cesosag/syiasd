import PropTypes from 'prop-types'
import Image from 'next/image'
import Link from 'next/link'
import { texts } from 'services'
import { SocialLinks } from 'components'
import { FooterContainer, Copyright } from './footer.styles'

const Footer = ({ logo, logoText, socialLinks }) => (
	<FooterContainer>
		{logo && (
			<Link href="/">
				<a className="logo">
					<Image src={logo} alt={logoText} width={242} height={57} />
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
