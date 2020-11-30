import React, {useState} from 'react';
import styled from 'styled-components/macro';
import InputForm from "../../blocks/InputForm";
import DisplayGist from "../../blocks/DisplayGist";

const MainPageStyled = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	justify-content: center;
	margin-top: 62px;
	text-align: center;
`;

const MainPage = (props) => {
	const [submitted, setSubmitted] = useState(false);
	const [userName, setUserName] = useState('');
	const [gists, setGists] = useState([]);

	const onSuccess = (userName, data) => {
		setUserName(userName);
		setGists(data);
		setSubmitted(true);
	}

	return (
		<MainPageStyled {...props}>
			<InputForm onSuccess={onSuccess}/>
			{!submitted ? '' : <DisplayGist userName={userName} gists={gists}/>}
		</MainPageStyled>
	)
};

export default MainPage;
