/* eslint-disable react/prop-types */
import { GlobalStyle, dynamicElement } from 'styles'
import { Header, Footer, GoogleAnalytics } from 'components'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => (
	<>
		<GoogleAnalytics measurementID={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
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
