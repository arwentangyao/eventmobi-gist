import axios from "axios";

axios.defaults.headers.common['Accept'] = 'application/vnd.github.v3+json';

export const requestSearch = (data, onSuccess, onError) => {
	const CancelToken = axios.CancelToken;
	const source = CancelToken.source();
	axios.get(`https://api.github.com/users/${data.name}/gists`, {
			cancelToken: source.token,
			validateStatus: status => !!(status === 200 || status === 400)
		})
		.then(response => {
			if (response.status === 200) {
				onSuccess(response.data);
			} else {
				onError(response.data.errorMessage);
			}
		})
		.catch(error => {
			onError(error.message);
		});
	return source.cancel;
};
