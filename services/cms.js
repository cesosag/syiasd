import axios from 'axios'

const cms = axios.create({
	baseURL: process.env.NEXT_PUBLIC_CMS_API_URL,
})

cms.query = ({ query, variables = {} }) => cms.post(process.env.NEXT_PUBLIC_CMS_API_GRAPH_ENDPOINT, {
	query,
	variables,
})

export default cms
