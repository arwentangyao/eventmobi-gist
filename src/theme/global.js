import { createGlobalStyle } from 'styled-components/macro';

export const resets = `
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed,
	figure, figcaption, footer, header, hgroup,
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
  /* HTML5 display-role reset for older browsers */
	article, aside, details, figcaption, figure,
	footer, header, hgroup, menu, nav, section {
		display: block;
	}
	body {
		line-height: 1;
	}
	blockquote, q {
		quotes: none;
	}
	blockquote:before, blockquote:after,
	q:before, q:after {
		content: '';
		content: none;
	}
	table {
		border-collapse: collapse;
		border-spacing: 0;
	}
  	// Remove some browser defaults for IE, Edge, Safari

	input[type='text']::-ms-clear {
		display: none;
	}
	
	select::-ms-expand {
		display: none;
	}
	
	input::-webkit-contacts-auto-fill-button {
		display: none !important;
		pointer-events: none;
		position: absolute;
		right: 0;
		visibility: hidden;
	}
`;

export const GlobalStyles = createGlobalStyle`
	/* Use resets */
	${resets}

	/* Our globals */

	/**
	* Best practice from http://callmenick.com/post/the-new-box-sizing-reset
	* TLDR: It’s easier to override and a slight performance boost.
	*/
	*,
	*::before,
	*::after {
		box-sizing: inherit;
	}

	html {
		box-sizing: border-box;
		font-size: 62.5%;


		[type='button'] {
		  appearance: none;
		}
	}

	body {
		background-color: ${props => props.theme.colors.bodyBg};
		color: ${props => props.theme.colors.bodyColor};
		font-size: ${props => props.theme.fontSizes[1]}
	}

	/**
	* Form elements don't inherit font settings.
	* https://stackoverflow.com/questions/26140050/why-is-font-family-not-inherited-in-button-tags-automatically
	*/
	html, body, input, select, optgroup, textarea, button {
		font-weight: normal;
		font-family: ${props => props.theme.fonts.base};
		font-feature-settings: 'kern';
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		overflow-x: hidden;
		text-rendering: optimizeLegibility;
	}

	pre, code {
		font-family: ${props => props.theme.fonts.base};
	}
	
	/* montserrat-300 - latin */
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 300;
	  src: local('Montserrat Light'), local('Montserrat-Light'),
		   url('/fonts/montserrat-v14-latin-300.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/montserrat-v14-latin-300.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* montserrat-regular - latin */
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 400;
	  src: local('Montserrat Regular'), local('Montserrat-Regular'),
		   url('/fonts/montserrat-v14-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/montserrat-v14-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* montserrat-500 - latin */
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 500;
	  src: local('Montserrat Medium'), local('Montserrat-Medium'),
		   url('/fonts/montserrat-v14-latin-500.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/montserrat-v14-latin-500.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* montserrat-600 - latin */
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 600;
	  src: local('Montserrat SemiBold'), local('Montserrat-SemiBold'),
		   url('/fonts/montserrat-v14-latin-600.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/montserrat-v14-latin-600.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	/* montserrat-700 - latin */
	@font-face {
	  font-family: 'Montserrat';
	  font-style: normal;
	  font-weight: 700;
	  src: local('Montserrat Bold'), local('Montserrat-Bold'),
		   url('/fonts/montserrat-v14-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/montserrat-v14-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}
	
	/* caveat-700 - latin */
	@font-face {
	  font-family: 'Caveat';
	  font-style: normal;
	  font-weight: 700;
	  src: local('Caveat Bold'), local('Caveat-Bold'),
		   url('/fonts/caveat-v7-latin-700.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
		   url('/fonts/caveat-v7-latin-700.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
	}

	@-ms-viewport {
		width: device-width;
	}	
`;
