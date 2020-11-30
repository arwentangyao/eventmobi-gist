import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const errorStyles = ({error, theme}) => error && ({
	borderColor: theme.colors.error,
	color: theme.colors.error
});

const InputStyled = styled.input`
	appearance: none;
	background-color: ${({theme}) => theme.colors.grey50};
	border: 1px solid ${({theme}) => theme.colors.grey700};
	border-radius: 0;
	box-shadow: none;
	color: ${({theme}) => theme.colors.grey900};
	display: block;
	font-size: 1.4rem;
	height: 48px;
	margin-bottom: 1.6rem;
	padding: 1.2rem 1.6rem;
	width: 100%;

	&:focus {
		outline: 2px dotted ${({theme}) => theme.colors.grey700};
		outline-offset: 2px;
	}

	&::placeholder {
		color: ${({theme}) => theme.colors.grey700};
	}
	${errorStyles}
`;

const Input = (props) => (
	<InputStyled {...props}/>
);

Input.propTypes = {
	id: PropTypes.string,
	type: PropTypes.oneOf(['text', 'password', 'email', 'search']),
	value: PropTypes.string,
	onChange: PropTypes.func,
	error: PropTypes.bool
};

Input.defaultProps = {
	type: 'text',
	value: '',
	error: false,
	onChange: () => {},
};

export default Input;
