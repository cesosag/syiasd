import gql from 'graphql-tag'
import { print } from 'graphql/language/printer'

export const mutations = {
	CONTACT: print(gql`
		mutation sendContactForm($name: String!, $lastName: String!, $email: String!, $message: String!){
			createContactRequest(input: { data: { nombre: $name, apellido: $lastName, email: $email, mensaje: $message } }) {
				contactRequest {
					email
					mensaje
				}
			}
		}
	`),
}
