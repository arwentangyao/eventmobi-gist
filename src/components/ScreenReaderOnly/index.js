import styled from 'styled-components/macro';

const ScreenReaderOnly = styled.a`
	display: flex;
	border: 0;
	clip: rect(0, 0, 0, 0);
	height: 1px;
	padding: 0;
	overflow: hidden;
	position: absolute;
	width: 1px;
	white-space: nowrap;
	
	&:active,
	&:focus {
		color: #000000;
		position: absolute;
		width: auto;
		height: auto;
		overflow: visible;
		clip: auto;
		white-space: normal;
		outline: none;
		padding: 1.2rem 0;
		z-index: 9999;
		align-self: center;
		outline: 2px dotted #616161;
    	outline-offset: 2px;
    	margin-top: 1rem;
	}
`;

export default ScreenReaderOnly;
