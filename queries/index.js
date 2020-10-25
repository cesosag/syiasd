import gql from 'graphql-tag'
import { print } from 'graphql/language/printer'

const siteConfigPartial = `
	siteConfiguration {
		logos {
      logo {
        url
        alternativeText
      }
      logoShort {
        url
        alternativeText
      }
    }
		URLs {
			adventistGiving
			instagram
			facebook
			youtube
		}
		youtube {
			mainPlaylist
		}
	}
`

export const queries = {
	HOME: print(gql`
		query home {
			${siteConfigPartial}
			hero {
				title
				subtitle
				background {
					url
				}
			}
			give {
				title
				subtitle
				text
				background {
					url
				}
			}
			contactDatum {
				title
				text
				address {
					street
					city
					state
					zipCode
					mapEmbedUrl
				}
				open_hours {
					days
					hours
				}
				phone
				email
			}
		}
	`),
	TOS: print(gql`
		query tos {
			${siteConfigPartial}
			termsOfService {
				title
				termsOfService
			}
		}
	`),
}

export const mutations = {
	CONTACT: print(gql`
		mutation sendContactForm($name: String!, $lastName: String!, $email: String!, $message: String!){
			createContactRequest(input: { data: { name: $name, lastName: $lastName, email: $email, message: $message } }) {
				contactRequest {
					email
					message
				}
			}
		}
	`),
}
