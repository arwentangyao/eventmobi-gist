import {validate} from "../formValidation";

describe('form validation utility', () => {

	it('should validate user name', () => {
		const resultNoValue = validate({userName: ''});
		const resultWithIncorrectValue = validate({userName: 'John Doe'});
		const resultWithCorrectValue = validate({userName: 'Johndoe'});
		expect(resultNoValue.userName).toBe('User name is required');
		expect(resultWithIncorrectValue.userName).toBe('User name is invalid');
		expect(resultWithCorrectValue.userName).toBe(undefined);
	});
});
