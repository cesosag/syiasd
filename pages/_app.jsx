/* eslint-disable react/prop-types */
import { GlobalStyle, dynamicElement } from 'styles'
import { Header, Footer } from 'components'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => (
	<>
		<GlobalStyle />
		<Header
			logo={pageProps?.config?.logos?.logo?.url}
			logoMobile={pageProps?.config?.logos?.logoShort?.url}
			logoText={pageProps?.config?.logos?.logo?.alternativeText}
		/>
		<Main>
			<Component {...pageProps} />
		</Main>
		<Footer
			logo={pageProps?.config?.logos?.logo?.url}
			logoText={pageProps?.config?.logos?.logo?.alternativeText}
			socialLinks={pageProps?.config?.URLs}
		/>
	</>
)

export default App
