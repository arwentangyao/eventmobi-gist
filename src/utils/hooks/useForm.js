import {useState, useEffect} from 'react';
import {requestSearch} from '../';

export const useForm = (validate, onSuccess) => {

	const [values, setValues] = useState({});
	const [errors, setErrors] = useState({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	useEffect(() => {
		let cancelRequest;
		if (Object.keys(errors).length === 0 && isSubmitting) {
			cancelRequest = requestSearch({
				name: values.userName,
			}, (data) => {
				onSuccess(values.userName, data);
				setIsSubmitting(false);
			}, (error) => {
				setErrors({...errors, serverError: error});
				setIsSubmitting(false);
			})
		} else {
			setIsSubmitting(false);
		}

		return () => {
			cancelRequest && cancelRequest();
		};
	}, [errors, values, isSubmitting, onSuccess]);

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		setErrors(validate(values));
		setIsSubmitting(true);
	};

	const handleChange = (event) => {
		event.persist();
		setValues(values => ({
			...values,
			[event.target.name]: event.target.value
		}));
	};

	return {
		handleChange,
		handleSubmit,
		values,
		errors,
		isSubmitting,
	}
};
