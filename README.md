# Email Service Project

This project implements a resilient email sending service in TypeScript/JavaScript.

## Features
- Retry mechanism with exponential backoff
- Fallback between two email providers
- Idempotency to prevent duplicate sends
- Basic rate limiting
- Status tracking for email sending attempts

## Bonus Features
- Circuit breaker pattern
- Simple logging
- Basic queue system

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
- `src/`: Contains the main service code.
- `tests/`: Contains the unit tests for the service.
- `README.md`: Project documentation.


##  Future Improvements

- Advanced Queueing : Implement a more robust queue management system for handling email requests.
- Distributed Rate Limiting : Implement a distributed rate-limiting mechanism to handle scaling across multiple instances.
- Enhanced Circuit Breaker : Extend the circuit breaker pattern with more advanced failure detection and recovery strategies.

