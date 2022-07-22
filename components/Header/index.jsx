import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import Image from 'next/future/image'
import Link from 'next/link'
import { theme } from 'styles'
import { Head } from './header.styles'

const { vars: { phoneUpperBoundary } } = theme

const Header = ({ logo, logoMobile, logoText }) => {
	const [contrast, setContrast] = useState(false)

	const darkenHeader = () => {
		let scheduledAnimationFrame
		const lastScrollY = window.scrollY

		if (scheduledAnimationFrame) { return }

		scheduledAnimationFrame = true
		window.requestAnimationFrame(() => {
			if (lastScrollY >= 120) setContrast(true)
			else setContrast(false)
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', darkenHeader)
		return () => window.removeEventListener('scroll', darkenHeader)
	}, [])

	return (
		<Head contrast={contrast.toString()}>
			{(logo || logoMobile) && (
				<Link href="/">
					<a>
						<picture>
							<source media={`(min-width: ${phoneUpperBoundary}px)`} srcSet={logo} />
							<Image src={logoMobile} alt={logoText} width={242} height={57} />
						</picture>
					</a>
				</Link>
			)}
		</Head>
	)
}

Header.propTypes = {
	logo: PropTypes.string,
	logoMobile: PropTypes.string,
	logoText: PropTypes.string,
}

Header.defaultProps = {
	logo: null,
	logoMobile: null,
	logoText: null,
}

export default Header
