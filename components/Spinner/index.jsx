import PropTypes from 'prop-types'

const Spinner = ({ size }) => (
	<svg
		xmlns="http://www.w3.org/2000/svg"
		width={size}
		height={size}
		version="1"
		viewBox="0 0 128 128"
	>
		<g>
			<circle cx="16" cy="64" r="16" fill="#36008d" />
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#7955b3"
				fillOpacity="0.67"
				transform="rotate(45 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#ab94cf"
				fillOpacity="0.42"
				transform="rotate(90 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#d7cce8"
				fillOpacity="0.2"
				transform="rotate(135 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#e7e1f2"
				fillOpacity="0.12"
				transform="rotate(180 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#e7e1f2"
				fillOpacity="0.12"
				transform="rotate(225 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#e7e1f2"
				fillOpacity="0.12"
				transform="rotate(270 64 64)"
			/>
			<circle
				cx="16"
				cy="64"
				r="16"
				fill="#e7e1f2"
				fillOpacity="0.12"
				transform="rotate(315 64 64)"
			/>
			<animateTransform
				attributeName="transform"
				calcMode="discrete"
				dur="720ms"
				repeatCount="indefinite"
				type="rotate"
				values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
			/>
		</g>
	</svg>
)

Spinner.propTypes = {
	size: PropTypes.number,
}

Spinner.defaultProps = {
	size: 64,
}

export default Spinner
