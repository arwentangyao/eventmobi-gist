const regex = {
	userName: /^(([A-Za-z0-9]+[-']?)*([A-Za-z0-9]+)?)$/
};

export function validate(values) {
	let errors = {};

	if (!values.userName) {
		errors.userName = 'User name is required';
	} else if (!regex.userName.test(values.userName)) {
		errors.userName = 'User name is invalid';
	} else delete errors.userName;

	return errors;
};
