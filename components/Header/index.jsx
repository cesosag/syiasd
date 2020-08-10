import Link from 'next/link'
import Logo from 'assets/SanYsidro-logo.svg'
import { Head } from './header.styles'

const Header = () => (
	<Head>
		<Link href="/">
			<a>
				<img src={Logo} alt="San Ysidro SDA Church logo" />
			</a>
		</Link>
	</Head>
)

export default Header
