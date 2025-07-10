# Resilient Email Sending Service

## Features
- Retry logic with exponential backoff
- Fallback between two mock providers
- Idempotency
- Basic rate limiting
- Express API endpoint

## Setup

```bash
npm install
npm run dev
```

## API

POST `/send`
```json
{
  "to": "test@example.com",
  "body": "Hello",
  "userId": "user123"
}
```
