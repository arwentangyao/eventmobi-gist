import React from 'react';
import { cleanup, render } from '../../utils/test-utils';
import Header from "./index";

describe('<Header/> block', () => {
	afterEach(cleanup);

	const {defaultProps} = Header;

	it('renders a \'header\' HTML element', () => {
		const { container } = render(<Header />);
		expect(container.querySelectorAll('header')).toHaveLength(1);
	});

	it('renders HeaderLogo correctly', () => {
		const { container } = render(<Header />);
		expect(container.querySelector('a').textContent).toMatch(defaultProps.logoText);
	});

	it('renders HeaderLogo link to be \'/\'', () => {
		const { container } = render(<Header />);
		expect(container.querySelector('a').href).toMatch(defaultProps.logoHref);
	});
});
