# EventMobi Gist

## Table of Contents

* [Description](#user-content-description)
* [Deployment Site](#user-content-static-build-site)
* [Tech Used](#user-content-tech-used)
* [Testing](#user-content-testing)
* [Installation and Prerequisites](#user-content-installation-and-prerequisites)
* [Getting Started](#user-content-getting-started)
* [Directory Structure](#user-content-directory-structure)
* [Version Control](#user-content-version-control)
* [NPM scripts dictionary ](#user-content-npm-scripts-dictionary)


# Description
Fetch Gist for some user.
We display the first three gists of that user, with file type and owner avatar.

Sample user name: GrahamcOfBorg, KazYokohama, etc..

App Site: (https://fiery-heat-4312.web.app/)

## Tech used
This project mainly relies on the following libraries:  
React, React-Hooks, styled-components, styled-system, axios, prop-types, create-react-app.


## Testing
For testing, this project is setup with the following testing tools and libraries:

`Unit tests: jest and @testing-library/react`

`Integration and E2E tests: cypress with @testing-library/cypress`

## Installation and Prerequisites

### Node.js

Install [Node.js](https://nodejs.org/en/download/). And use the latest version of NodeJS (>= v10 preferred).

### Yarn
Yarn was used of the development of this project, alternatively `npm` can be used which is installed along with Node.js.
Note: If you decide to you `npm` instead, just replace `yarn` with `npm run` in the below commands;


Install [Yarn](https://yarnpkg.com/lang/en/docs/install/)

## Getting started

1. Clone this repo

2. NPM scripts dictionary Install Dependencies
```bash
$ yarn
```

3. Build the project and start local dev server.
```bash
$ yarn start
```
The development server can be accessed at http://localhost:3000

4. Build the project for production.
```bash
$ yarn build
```

5. Run Unit tests.
```bash
$ yarn test
```

6. Run End-to-end tests.
```bash
$ yarn test:e2e
```


## Directory Structure

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
The the structure of the project is set to follow the hierarchy:

`app <- pages <- blocks  <- components`.

The project doesn't make use of any css frameworks and just the simple resets.
The rest of the folders and files only exist to make your life easier, and should not need to be changed.

Below you can find full details about significant files and folders.

```bass
.                                       // Project folder.
├── cypress                             // Cypress folder for end-to-end tests.
│   ├── integration
│   │   └── app.spec.js                 // End-to-end application tests.
│   └── ...
├── public                              // All public static assets go here.
│   ├── fonts                           // Fonts' files.
│   └── ...
├── src                                 // Main source code directory.
│   ├── App.js                          // Main App component.
│   ├── index.js                        // React application boot.
│   ├── blocks                          // All React Block components go in here.
│   │   ├── Header                      // Header block.
│   │   │   └── index.js
│   │   │   └── Header.spec.js          // Block unit tests.
│   │   └── ...
│   ├── components                      // All React Components go in here.
│   │   ├── Button                      // Button component.
│   │   │   └── index.js
│   │   └── ...
│   ├── pages                           // All pages go here.
│   │   └── InvitePage
│   ├── │   └── index.js
│   ├── serviceWorker.js
│   ├── theme                           // App theme folder.
│   │   ├── buttons.js                  // Button styles and size variants for the theme.
│   │   ├── global.js                   // Global styles.
│   │   └── index.js                    // Project theme coinfiguration.
│   └── utils                           // Utility functions used in the project.
│       ├── __tests__                   // Utility unit tests.
│       ├── api.js                      // Api helper utility.
│       ├── formValidation.js           // Form validation helper.
│       ├── hooks                       // React hooks utility functions.
│       ├── index.js                    // Utilities exports.
│       ├── isClient.js                 // Helper function to check DOM API is available.
│       └── test-utils.js               // Testing utility helper.
├── .editorconfig                       // Editor configuration.
├── cypress.json                        // Cypress configution.
├── package.json                        // Project dependencies.
└── README.md                           // Documentation for project.
```

## Version Control
This project is git version control along with [Conventional Commits](https://www.conventionalcommits.org/)
specification for adding human and machine readable meaning to commit messages.


## NPM scripts dictionary

`yarn start`:			Start local development server.  
`yarn build`:			Creates a production build.   
`yarn test`:			Run unit tests.  
`yarn test:e2e`:		Run End-to-end tests with cypress.  
`yarn test:watch`:		Run unit tests in watch mode for development.  
`yarn cy:open`:	        Run cypress and open the cypress app.   
`yarn cy:run`:		    Run cypress in headless mode.  
