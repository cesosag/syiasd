/* eslint-disable react/no-danger */
import PropTypes from 'prop-types'
import { Converter } from 'showdown'
import { cms } from 'services'
import { queries } from 'queries'
import { Wrapper } from 'styles'

const TOS = ({ title, tos }) => {
	const sd = new Converter()
	return (
		<Wrapper style={{ marginTop: '2em' }}>
			<h2>{title}</h2>
			<div dangerouslySetInnerHTML={{ __html: sd.makeHtml(tos) }} />
		</Wrapper>
	)
}

TOS.propTypes = {
	title: PropTypes.string.isRequired,
	tos: PropTypes.string.isRequired,
}

export default TOS

export async function getStaticProps() {
	const { data: { data: { siteConfiguration, termsOfService } } } = await cms.query({
		query: queries.TOS,
	})

	return {
		props: {
			config: siteConfiguration,
			title: termsOfService?.title,
			tos: termsOfService?.termsOfService,
		},
	}
}
