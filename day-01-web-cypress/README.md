# Day 01 - Web Automation with Cypress

Practical exercises developed during the first class of the QAzando QA Automation Bootcamp.

## About

This project was created to practice the initial setup of a Cypress automation project using JavaScript.

The main goal of the class was to understand the structure of a Cypress project and implement basic login automation scenarios.

## Technologies

- Cypress
- JavaScript
- Node.js
- GitHub Copilot Chat

## Tested application

https://automationpratice.com.br/login

## Scenarios covered

- Successful login
- Login with invalid password
- Login with invalid e-mail

## What was practiced

- Cypress installation and setup
- Project structure organization
- E2E test creation
- Element interaction with Cypress
- Assertions with `.should()`
- Running tests with Cypress UI and terminal
- Using AI support to generate the initial Cypress structure

## Project structure

```txt
day-01-web-cypress/
├── cypress/
│   ├── e2e/
│   │   └── login.cy.js
│   ├── support/
│   │   ├── e2e.js
│   │   └── commands.js
│   └── fixtures/
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Initial setup

Create Node.js project:

```bash
npm init -y
```

Install Cypress:

```bash
npm install cypress
```

## Useful commands

Install dependencies:

```bash
npm install
```

Open Cypress UI:

```bash
npx cypress open
```

Run tests in headless mode:

```bash
npx cypress run
```

## Notes

The focus of this first class was to understand the basic Cypress project structure and create the first automation scenarios before moving to more advanced test implementations.
