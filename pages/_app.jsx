/* eslint-disable react/prop-types */
import { GlobalStyle, dynamicElement } from 'styles'
import { Header, Footer } from 'components'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Header logo="/images/SanYsidro-logo.svg" logoText="San Ysidro SDA Church Logo" />
		<Main>
			<Component {...pageProps} />
		</Main>
		<Footer />
	</>
)

export default App
