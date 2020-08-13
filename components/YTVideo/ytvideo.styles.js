import styled from 'styled-components'

export const Video = styled.div`
	height: 0;
	overflow: hidden;
	padding-bottom: 56.25%;
	position: relative;

	iframe {
    height: 100%;
		left: 0;
    position: absolute;
    top: 0;
    width: 100%;
	}
`
