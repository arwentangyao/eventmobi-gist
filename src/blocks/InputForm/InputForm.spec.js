import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import InputForm from "./index";

describe('<InputForm/> block', () => {
	afterEach(cleanup);

	const {defaultProps} = InputForm;

	it('renders the title', () => {
		const { container } = render(<InputForm />);
		expect(container.textContent).toMatch(defaultProps.formTitle);
	});

	it('renders input fields', () => {
		const { container } = render(<InputForm />);
		const inputs = container.querySelectorAll('input');
		expect(inputs).toHaveLength(1);
		expect(inputs[0].placeholder).toEqual('Enter user name');
	});

	it('renders the submit button', () => {
		const { container } = render(<InputForm />);
		const button = container.querySelector('button');
		expect(button.textContent).toMatch(defaultProps.ctaText);
	});
});
