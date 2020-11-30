import React from 'react';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components/macro';
import Container from "../../components/Container";

const HeaderStyled = styled.header`
	align-items: center;
	background-color: ${({theme}) => theme.colors.grey50};
	border-bottom: 2px solid ${({theme}) => theme.colors.grey200};
	display: flex;
	height: 60px;
	left: 0;
	position: fixed;
	top: 0;
	width: 100%;
`;

const HeaderLogo = styled.a`
	color: ${({theme}) => theme.colors.grey800};
	font-size: ${({theme}) => theme.fontSizes[2]};
	font-weight: ${({theme}) => theme.fontWeights.bold};
	text-align: center;
	text-decoration: none;
	${({theme}) => css`${theme.mediaQueries.md} {
		text-align: left;
		font-size: ${theme.fontSizes[3]};
	}`}
`;

const Header = ({logoText, logoHref, ...props}) => (
	<HeaderStyled{...props}>
		<Container>
			<HeaderLogo href={logoHref}>{logoText}</HeaderLogo>
		</Container>
	</HeaderStyled>
);

Header.propTypes = {
	logoText: PropTypes.string,
	logoHref: PropTypes.string
};

Header.defaultProps = {
	logoText: 'EventMobi Gist',
	logoHref: '/'
};

export default Header;
