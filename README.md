# Magento Automation Framework

A robust end-to-end automation framework for testing critical functionalities of a Magento e-commerce site using WebdriverIO, Cucumber, and JavaScript.

## Features

- Product Search Automation
- Shopping Cart Operations
- Checkout Flow
- Modular and Scalable Project Structure
- Integrated Reporting with Allure
- Page Object Model (POM) design pattern
- Logging using `@wdio/logger`
- Login/Registration intentionally excluded from automation (per requirements)

## Test Scenarios Covered

### Product Search
- Search by Keyword
- Search with No Results
- Filter by Category, Price Range
- Combine filters (Size + Color + Price)
- Sort by Price (High to Low)

### Shopping Cart
- Add product to cart
- Verify product in cart
- Update quantity
- Apply discount code
- Delete product from cart

### Checkout
- Valid checkout with shipping info
- Checkout with missing shipping address
- Apply discount at checkout
- Guest checkout with email

## Tech Stack

| Tool        | Description                               |
|-------------|-------------------------------------------|
| WebdriverIO | Main automation test framework            |
| Cucumber    | BDD-style step definitions and feature files |
| JavaScript  | Programming language                      |
| Allure      | Test reporting                            |
| dotenv      | For managing environment variables        |

## Project Structure

automation-framework/
│
├── features/                  # Cucumber feature files
│   ├── cart.feature
│   ├── checkout.feature
│   ├── productSearch.feature
│   └── registration.feature
│
├── step-definitions/         # Step definitions (BDD Steps)
│   ├── cart.steps.js
│   ├── checkout.steps.js
│   ├── search.steps.js
│   └── registration.steps.js
│
├── pages/                    # Page Object Model (POM) files
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── SearchPage.js
│   └── RegistrationPage.js
│
├── utils/                    # Utility files
│   └── logger.js
│
├── reports/                  # Allure reports output
│
├── wdio.conf.js              # WebdriverIO configuration
├── .env                      # Environment variables
├── package.json              # NPM dependencies and scripts
└── README.md                 # Project documentation
