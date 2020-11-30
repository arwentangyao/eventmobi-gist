// End-to-end application tests

// Element selectors
const APP = '[class*="App__AppStyled-"]';
const HEADER = 'header';
const LOGO = '[class*="Header__HeaderLogo-"]';

describe('App', () => {

	// Navigation to page
	before(() => cy
		.visit('/')
		.wait(500)
	);

	it('exists', () => {
		cy.get(APP)
			.should('exist');
	});

	it('takes full height of device', () => {
		cy.get(APP)
			.should('have.css', 'height', '720px')
	});

	// Header block
	describe('Header block', () => {
		it('renders a \'header\' element', () => {
			cy.get(HEADER)
				.should('exist')
		});
		it('renders with a height of 60px', () => {
			cy.get(HEADER)
				.should('have.css', 'height', '60px')
		});
	});

});
