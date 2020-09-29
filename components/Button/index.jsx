import PropTypes from 'prop-types'
import { isExternalURL } from 'utils'
import Link from 'next/link'
import { StyledButton, StyledLink } from './button.styles'

const KINDS = ['primary', 'secondary']
const SIZES = ['small']

const Button = ({ children, kind, size, href, ...props }) => {
	let element
	if (href) {
		const isExternal = isExternalURL(href)
		if (isExternal) {
			element = (
				<StyledLink href={href} kind={kind} size={size} target="_blank" rel="noopener noreferer" {...props}>
					{children}
				</StyledLink>
			)
		} else {
			element = (
				<Link href={href} passHref>
					<StyledLink kind={kind} size={size} {...props}>{children}</StyledLink>
				</Link>
			)
		}
	} else {
		element = (
			<StyledButton type="button" kind={kind} size={size} {...props}>{children}</StyledButton>
		)
	}
	return element
}

Button.propTypes = {
	href: PropTypes.string,
	kind: PropTypes.oneOf(KINDS),
	size: PropTypes.oneOf(SIZES),
}
Button.defaultProps = {
	href: null,
	kind: KINDS[0],
	size: null,
}

export default Button
