import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import Button from "./index";

describe('<Button/> component', () => {
	afterEach(cleanup);

	it('renders a button', () => {
		const { container } = render(<Button />);
		expect(container.firstChild.tagName).toMatch('BUTTON');
	});

	it('renders content', () => {
		const { container } = render(<Button>Send</Button>);
		expect(container.textContent).toMatch('Send');
	});

	it('calls onClick when clicked upon', () => {
		const mockOnClick = jest.fn();
		const { getByText } = render(<Button onClick={mockOnClick}>Send</Button>);
		getByText('Send').click();
		expect(mockOnClick.mock.calls.length).toEqual(1);
	});
});
