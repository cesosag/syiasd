/* eslint-disable jsx-a11y/control-has-associated-label */
import PropTypes from 'prop-types'
import { ImInstagram, ImYoutube, ImFacebook, ImTwitter } from 'react-icons/im'
import { Nav, List, Item } from './social-links.styles'

const SocialLinks = ({ instagram, youtube, facebook, twitter }) => (
	(instagram || youtube || facebook || twitter) ? (
		<Nav>
			<List>
				{instagram && <Item><a href={instagram} target="_blank" rel="noreferrer" title="Instagram"><ImInstagram /></a></Item>}
				{youtube && <Item><a href={youtube} target="_blank" rel="noreferrer" title="Youtube"><ImYoutube /></a></Item>}
				{facebook && <Item><a href={facebook} target="_blank" rel="noreferrer" title="Facebook"><ImFacebook /></a></Item>}
				{twitter && <Item><a href={twitter} target="_blank" rel="noreferrer" title="Twitter"><ImTwitter /></a></Item>}
			</List>
		</Nav>
	) : null
)

SocialLinks.propTypes = {
	instagram: PropTypes.string,
	youtube: PropTypes.string,
	facebook: PropTypes.string,
	twitter: PropTypes.string,
}

SocialLinks.defaultProps = {
	instagram: null,
	youtube: null,
	facebook: null,
	twitter: null,
}

export default SocialLinks
