import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/macro';
import Input from "../../components/Input";
import {validate, useForm} from '../../utils';
import Button from "../../components/Button";

const InputFormStyled = styled.form`
	display: block;
	padding: 3.2rem 2.4rem;
	width: 300px;
	${({theme}) => css`
		${theme.mediaQueries.md} {
			width: 375px;
		}
	`};
`;
const ErrorContainer = styled.div`
	margin-top: 2rem;
`;

const FormTitle = styled.h2`
	display: block;
	color: ${({theme}) => theme.colors.grey900};
	font-size: ${({theme}) => theme.fontSizes[2]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
	line-height: 1.31;
	margin-bottom: 3.6rem;
	position: relative;

	&::after {
	background-color: ${({theme}) => theme.colors.grey400};
		bottom: -12px;
		content: ' ';
		height: 2px;
		left: calc(50% - 25px);
		position: absolute;
		width: 50px;
	}
`;

const ErrorMessage = styled.div`
	color: ${({theme}) => theme.colors.error};
	font-size: ${({theme}) => theme.fontSizes[0]};
	font-weight: ${({theme}) => theme.fontWeights.medium};
	padding: 0.6rem;
	text-align: center;
`;

const InputForm = ({
		formTitle, onSuccess, ctaText,
		ctaTextSending, ...props
	}) => {
	const {
		values,
		errors,
		handleChange,
		handleSubmit,
		isSubmitting
	} = useForm(validate, onSuccess);
	const errorKeys = Object.keys(errors);
	return (
		<InputFormStyled
			onSubmit={handleSubmit}
			{...props}
		>
			<FormTitle>{formTitle}</FormTitle>
			<div>
				<Input
					id="userName"
					name="userName"
					aria-label="Enter user name"
					placeholder="Enter user name"
					value={values.userName}
					onChange={handleChange}
					error={!!errors.userName}
				/>
				<Button
					type="submit"
					expanded={true}
					disabled={!!isSubmitting}
				>
					{isSubmitting ? ctaTextSending : ctaText}
				</Button>
				{(errorKeys.length > 0) && <ErrorContainer>
					{errorKeys.map((err, idx) => (
						<ErrorMessage key={idx}>
							{errors[err]}
						</ErrorMessage>
					))}
				</ErrorContainer>}
			</div>
		</InputFormStyled>
	)
};

InputForm.propTypes = {
	formTitle: PropTypes.string,
	ctaText: PropTypes.string,
	ctaTextSending: PropTypes.string,
	onSuccess: PropTypes.func,
};

InputForm.defaultProps = {
	formTitle: 'Request a Gist Search',
	ctaText: 'Search',
	ctaTextSending: 'Searching, please wait',
};

export default InputForm;
