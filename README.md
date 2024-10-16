## Cypress End-to-End Test for OpenSourceHRM

This project contains end-to-end (E2E) tests for the OpenSourceHRM website, created using Cypress testing framework. These tests help ensure that key functionalities and user interactions on the site work as expected, providing reliable and automated validation.

## Features

- **Automated Testing**: Easily run end-to-end tests using Cypress.
- **Comprehensive Coverage**: Test various workflows such as login, form submissions, and data processing.
- **Easy Setup**: Simple project structure to quickly get started.

## Prerequisites

Before setting up the project, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (version 12 or higher)
- [npm](https://www.npmjs.com/) (or [Yarn](https://yarnpkg.com/))

## Installation

To install the project and its dependencies, run the following command:

```bash
npm install
```

## Running the Tests

To execute the Cypress tests in headless mode, use:

```bash
npx cypress run
```

To open the Cypress test runner for interactive testing:

```bash
npx cypress open
```

## Folder Structure

- **cypress/**: Contains all the test files, fixtures, and configurations.
  - **integration/**: Holds the test scripts for the OpenSourceHRM website.
  - **fixtures/**: Contains test data files.
  - **support/**: Custom commands and reusable utilities for Cypress.
  
