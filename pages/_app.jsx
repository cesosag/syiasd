/* eslint-disable react/prop-types */
import { GlobalStyle, dynamicElement } from 'styles'
import { config } from 'services'
import { Header, Footer } from 'components'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Header
			logo="/images/SanYsidro-logo.svg"
			logoMobile="/images/SanYsidro-logo-short.svg"
			logoText="San Ysidro SDA Church Logo"
		/>
		<Main>
			<Component {...pageProps} />
		</Main>
		<Footer
			logo="/images/SanYsidro-logo.svg"
			logoText="San Ysidro SDA Church Logo"
			socialLinks={config.urls}
		/>
	</>
)

export default App
