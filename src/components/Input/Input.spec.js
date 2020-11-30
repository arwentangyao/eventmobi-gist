import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import Input from "./index";

describe('<Input/> component', () => {
	afterEach(cleanup);

	it('renders an input element', () => {
		const { getByLabelText } = render(
			<Input aria-label="name"/>
			);
		const input = getByLabelText('name');
		expect(input.tagName).toMatch('INPUT');
		expect(input.type).toMatch('text');
	});

	it('renders input with value', () => {
		const { getByLabelText } = render(
			<Input
				value="John doe"
				aria-label="name"
			/>
		);
		const input = getByLabelText('name');
		expect(input.value).toMatch('John doe');
	});

});
