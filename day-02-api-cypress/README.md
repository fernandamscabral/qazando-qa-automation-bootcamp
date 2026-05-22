# Day 02 - API Testing with Cypress

Practical API testing exercises developed during the second class of the QAzando QA Automation Bootcamp.

## About

This project was created to practice API testing concepts using Cypress and Postman.

The exercises focused on understanding how APIs work, how frontend and backend communicate, and how to validate API responses through automated tests.

## Technologies

- Cypress
- JavaScript
- Node.js
- Postman
- GitHub Copilot Chat

## Tested API

https://restful-api.dev/

## API concepts covered

- API requests and responses
- Endpoints and URLs
- Frontend vs Backend
- HTTP methods
- Status code validation
- Response body validation

## HTTP methods practiced

| Method | Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data |

## Scenarios covered

- Get device list
- Get device by ID
- Create a new device
- Validate status code
- Validate response body
- Validate response fields

## What was practiced

- API testing with Cypress
- API testing with Postman
- Using `cy.request()`
- Response validation with `expect()`
- JSON body validation
- API request structure
- Automated API assertions

## Project structure

```txt
day-02-api-cypress/
├── cypress/
│   ├── e2e/
│   │   ├── listar_dispositivos.cy.js
│   │   ├── buscar_dispositivo.cy.js
│   │   └── cadastrar_dispositivo.cy.js
│   ├── fixtures/
│   └── support/
├── postman/
├── cypress.config.js
├── package.json
└── package-lock.json
```

## Useful commands

Open Cypress UI:

```bash
npx cypress open
```

Run all tests:

```bash
npx cypress run
```

## Notes

The focus of this class was to understand the fundamentals of API testing and create simple automated validations using `cy.request()` before moving to more advanced API testing scenarios.
