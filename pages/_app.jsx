/* eslint-disable react/prop-types */
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { analytics } from 'services'
import { GlobalStyle, dynamicElement, theme } from 'styles'
import { Header, Footer } from 'components'
import pkg from '../package.json'

const Main = dynamicElement('main')

const App = ({ Component, pageProps }) => {
	const router = useRouter()

	useEffect(() => {
		// eslint-disable-next-line no-console
		console.log(
			`%c${pkg.description}, version: ${pkg.version}`,
			`background: ${theme.colors.neutral.dark};
			color: ${theme.colors.neutral.light};
			font-size: x-large;
			padding: 0.5em;`,
		)
	}, [])
	useEffect(() => {
		analytics.pageview(window.location.pathname)
		const handleRouteChange = (url) => {
			analytics.pageview(url)
		}
		router.events.on('routeChangeComplete', handleRouteChange)

		return () => {
			router.events.off('routeChangeComplete', handleRouteChange)
		}
	}, [router.events])

	return (
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
}

export default App
