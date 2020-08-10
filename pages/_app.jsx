/* eslint-disable react/prop-types */
import { GlobalStyle, dynamicElement } from 'styles'
import { Header, Footer } from 'components'

const Main = dynamicElement('main', true)

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Header />
		<Main>
			<Component {...pageProps} />
		</Main>
		<Footer />
	</>
)

export default App
