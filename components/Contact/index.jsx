/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable max-len */
import { useState } from 'react'
import PropTypes from 'prop-types'
import { cms, texts } from 'services'
import { mutations } from 'queries'
import { Wrapper } from 'styles'
import { Button, SocialLinks, Spinner } from 'components'
import { Section, Title, Text, ContactForm, FormOverlay, FormOverlayContent, MapWrapper, ContactInfo, ContactInfoGroup, Social } from './contact.styles'

const Contact = ({ title, text, address, open, phone, email, socialLinks }) => {
	const [name, setName] = useState('')
	const [lastName, setLastName] = useState('')
	const [eMail, setEMail] = useState('')
	const [message, setMessage] = useState('')
	const [sending, setSending] = useState(false)
	const [openOverlay, setOpenOverlay] = useState(false)
	const [error, setError] = useState(false)

	const handleSubmit = async (e) => {
		e.preventDefault()
		setSending(true)
		setOpenOverlay(true)
		try {
			await cms.query({
				query: mutations.CONTACT,
				variables: {
					name,
					lastName,
					email: eMail,
					message,
				},
			})
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error(err)
			setError(true)
		}
		setSending(false)
	}

	const clearForm = () => {
		if (!error) {
			setName('')
			setLastName('')
			setEMail('')
			setMessage('')
		} else {
			setError(false)
		}
		setOpenOverlay(false)
	}

	return (
		<Section>
			<Wrapper>
				<Title>{title}</Title>
				<ContactForm onSubmit={handleSubmit}>
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
					<FormOverlay open={openOverlay}>
						{sending && <Spinner />}
						{!sending && (
							<FormOverlayContent>
								{!error && <p>{`${name}${texts.HOME.CONTACT.SUCCESS}`}</p>}
								{error && <p>{texts.HOME.CONTACT.ERROR}</p>}
								<Button size="small" onClick={clearForm}>{texts.HOME.CONTACT.GO_BACK}</Button>
							</FormOverlayContent>
						)}
					</FormOverlay>
				</ContactForm>
				<MapWrapper>
					<ContactInfoGroup>
						<p>{address.street}</p>
						<p>{`${address.city}, ${address.state} ${address.zipCode}`}</p>
					</ContactInfoGroup>
					<iframe src={address.mapEmbedUrl} frameBorder="0" aria-hidden="false" tabIndex="0" title="San Ysidro SDA location" />
				</MapWrapper>
				<ContactInfo>
					<ContactInfoGroup>
						<p>{open.days}</p>
						<p>{open.hours}</p>
					</ContactInfoGroup>
					<ContactInfoGroup>
						<p>{`${texts.HOME.CONTACT.PHONE}:`}</p>
						<p><a href={`tel:${phone}`}>{phone}</a></p>
					</ContactInfoGroup>
					<ContactInfoGroup>
						<p>{`${texts.HOME.CONTACT.E_MAIL}:`}</p>
						<p><a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">{email}</a></p>
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
		mapEmbedUrl: PropTypes.string.isRequired,
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
