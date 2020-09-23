/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { texts } from 'services'
import { Wrapper } from 'styles'
import { Button, SocialLinks } from 'components'
import { Section, Title, Text, ContactForm, MapWrapper, ContactInfo, ContactInfoGroup, Social } from './contact.styles'

const Contact = ({ title, text, address, open, phone, email, socialLinks }) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [eMail, setEMail] = useState('')
	const [message, setMessage] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(e)
	}

	return (
		<Section>
			<Wrapper>
				<Title>{title}</Title>
				{/* <ContactForm onSubmit={handleSubmit}>
					<Text>{text}</Text>
					<label htmlFor="name">
						<span>{`${texts.HOME.CONTACT.NAME}*`}</span>
						<input id="name" type="text" value={name} onChange={({ target: { value } }) => setName(value)} required />
					</label>
					<label htmlFor="lastName">
						<span>{`${texts.HOME.CONTACT.LAST_NAME}*`}</span>
						<input id="lastName" type="text" value={lastName} onChange={({ target: { value } }) => setLastName(value)} required />
					</label>
					<label htmlFor="eMail">
						<span>{`${texts.HOME.CONTACT.E_MAIL}*`}</span>
						<input id="eMail" type="email" value={eMail} onChange={({ target: { value } }) => setEMail(value)} required />
					</label>
					<label htmlFor="message">
						<span>{`${texts.HOME.CONTACT.MESSAGE}*`}</span>
						<textarea id="message" value={message} onChange={({ target: { value } }) => setMessage(value)} required />
					</label>
					<Button type="submit" size="small">{texts.HOME.CONTACT.SUBMIT}</Button>
				</ContactForm> */}
				<MapWrapper>
					<ContactInfoGroup>
						<p>{address.street}</p>
						<p>{`${address.city}, ${address.state} ${address.zipCode}`}</p>
					</ContactInfoGroup>
					<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.7376880837232!2d-117.05749958447835!3d32.55984530233346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d949387324753b%3A0x58811bb6be5dca77!2sSan%20Ysidro%20Spanish%20Seventh-day%20Adventist%20Church!5e0!3m2!1sen!2sus!4v1600811580014!5m2!1sen!2sus" frameBorder="0" allowFullScreen="" aria-hidden="false" tabIndex="0" />
				</MapWrapper>
				<ContactInfo>
					<ContactInfoGroup>
						<p>{open.days}</p>
						<p>{open.hours}</p>
					</ContactInfoGroup>
					<ContactInfoGroup>
						<p>{`${texts.HOME.CONTACT.PHONE}:`}</p>
						<p>{phone}</p>
					</ContactInfoGroup>
					<ContactInfoGroup>
						<p>{`${texts.HOME.CONTACT.E_MAIL}:`}</p>
						<p><a href={`mailto:${email}`} target="_blank" rel="noreferrer">{email}</a></p>
					</ContactInfoGroup>
				</ContactInfo>
				<Social>
					<SocialLinks {...socialLinks} />
				</Social>
			</Wrapper>
		</Section>
	)
}

Contact.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	address: PropTypes.shape({
		street: PropTypes.string.isRequired,
		city: PropTypes.string.isRequired,
		state: PropTypes.string.isRequired,
		zipCode: PropTypes.string.isRequired,
	}).isRequired,
	open: PropTypes.shape({
		days: PropTypes.string.isRequired,
		hours: PropTypes.string.isRequired,
	}),
	phone: PropTypes.string.isRequired,
	email: PropTypes.string.isRequired,
	socialLinks: PropTypes.shape({}).isRequired,
}

Contact.defaultProps = {
	open: null,
}

export default Contact
