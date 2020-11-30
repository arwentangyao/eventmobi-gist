import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';

const DisplayGistStyled = styled.div`
	padding: 3rem 2.4rem;
	width: 100%;
	max-width: 600px;
`;

const Title = styled.h2`
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

const ListGroup = styled.div`
	color: ${({theme}) => theme.colors.grey600};
	font-size: ${({theme}) => theme.fontSizes[1]};
	font-weight: ${({theme}) => theme.fontWeights.semiBold};
	line-height: 1.3;
	margin-top: 2.4rem;
	margin-bottom: 4rem;
	text-align: center;
	display: grid;
	grid-template-columns: auto auto auto;
	grid-gap: 15px;
	position: relative;
	img {
		width: 100px
	}
`;


const DisplayGist = ({
		userName, gists, ...props
	}) => {

	return (
		<DisplayGistStyled {...props}>
			<Title>{`Display first three gists for ${userName}`}</Title>
			<ListGroup>
					{gists.slice(0,3).map((gist) => listGroupItem(gist))}
			</ListGroup>
		</DisplayGistStyled>
	)
};

function listGroupItem(gist) {
	let key = Object.keys(gist.files)[0];
	let language = gist.files[key].language
	return (
		<div key={gist.id}>
			<img src={gist.owner.avatar_url} />
			<div>{!language ? '' : language}</div>
		</div>
	);
}

DisplayGist.propTypes = {
	userName: PropTypes.string,
	gists: PropTypes.array,
};

export default DisplayGist;
