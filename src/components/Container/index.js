import React from 'react';
import styled, {css} from 'styled-components/macro';

const ContainerStyled = styled.div`
	display: block;
	margin: 0 auto;
	max-width: ${({theme}) => theme.maxContainerWidth};
	padding: 0 1.6rem;
	width: 100%;
	${({theme}) => css`
		${theme.mediaQueries.lg} {
			padding: 0;
		}
	`}
`;

const Container = ({children, ...props}) => (
	<ContainerStyled {...props}>
		{children}
	</ContainerStyled>
);

export default Container;
