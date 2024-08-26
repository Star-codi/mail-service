# Email Service

## Overview
This project implements a robust email sending service with the following features:
- **Retry Logic**: Implements exponential backoff retry logic to handle transient failures.
- **Provider Fallback**: Automatically switches to a secondary provider when the primary provider fails.
- **Idempotency**: Ensures that duplicate email sends are prevented.
- **Rate Limiting**: Enforces a rate limit to control the frequency of outgoing emails.
- **Status Tracking**: Tracks the status of email sending attempts (e.g., SENT, FAILED).
- **Circuit Breaker Pattern**: Prevents overwhelming email providers during repeated failures.
- **Logging**: Provides simple logging for tracking email operations.
- **Basic Queue System**: Handles email sending requests in a controlled manner.

## Requirements
- Node.js (v14 or later)
- npm or yarn

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Star-codi/mail-service.git
   cd mail-service
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   To run the email service:
   ```bash
   npm start
   ```

4. **Run tests:**
   To run the unit tests:
   ```bash
   npm test
   ```

## Assumptions
- The email providers are mocked and do not send actual emails.
- Retry logic assumes transient failures and reattempts sending.
- Rate limiting is basic and can be expanded for production use.
- The service uses simple logging to the console.

## Project Structure
mail-service/
├── src/
│   ├── EmailService.ts         # Main service class implementing the email sending logic
│   ├── MockProviders.ts        # Mock email providers for testing
├── tests/
│   ├── EmailService.test.ts    # Unit tests for the EmailService class
├── .eslintrc.json              # ESLint configuration file for consistent code style
├── .gitignore                  # Ignored files and directories (e.g., node_modules, dist)
├── jest.config.js              # Configuration for the Jest testing framework
├── package.json                # Project dependencies and scripts
├── README.md                   # Documentation with setup instructions and assumptions
└── tsconfig.json               # TypeScript configuration file


