# VoiceOwl Common Guidelines

This document contains shared information and guidelines for both the frontend and backend of the VoiceOwl project.

## Repository Structure
- `frontend/` — React + TypeScript + Vite application
- `backend/` — Node.js + Express + MongoDB API server

## General Guidelines
- Use clear, descriptive commit messages.
- Follow consistent code style and formatting (use Prettier/ESLint for JS/TS).
- Store sensitive information (API keys, database URIs) in `.env` files and never commit them.
- Use environment variables for configuration.
- Document new features and endpoints in the respective README files.

## Setup
- Each part (frontend, backend) has its own setup and dependencies. See their respective README files for instructions.

## Communication
- The frontend communicates with the backend via REST API endpoints.
- Update API URLs in the frontend as needed to match your backend server location.


## Improvements for Production

If taken to production, the following improvements would be made:

### Backend (Node.js + TS)
### 1. Real Transcription
- Integrate with actual transcription APIs (AWS Transcribe, Google Speech-to-Text, OpenAI Whisper).

- Handle different audio formats (MP3, WAV, M4A, etc.).

- Process long audio asynchronously via job queues.

### 2. Audio Handling
- Download the audio file instead of mocking.

### Validate:

- File exists & is accessible

- File size limits

- Supported formats

- Audio duration

- Use cloud storage (S3, GCS) for storing audio files.

### 3. Architecture

- Convert to a service-based structure with controllers/, services/, models/, middlewares/.

- Separate core business logic from Express routes.

- Add modular logging, metrics, and monitoring.

### 4. Security

- Implement authentication & authorization (JWT or OAuth).

- Validate requests with Joi or Zod.

- Add Helmet for HTTP headers.

- Enable rate limiting & IP throttling.

- Prevent path traversal & injection attacks.

### 5. Reliability

- Add retry logic for audio download with exponential backoff.

- Use a message queue (BullMQ + Redis) for async processing.

- Graceful shutdown handling (SIGINT, SIGTERM).

### 6. Testing

- Unit tests for services.

- Integration tests with Jest + Supertest.

- E2E tests using Playwright or Cypress.

### 7. DevOps

- Containerize with Docker.

- CI/CD with GitHub Actions.

- Deploy on scalable platforms (AWS ECS, Render, Fly.io).

- Use MongoDB Atlas for DB hosting.


### Frontend (React + TS + Tailwind)
### 1. API Handling

- Use React Query for caching, retrying, and managing server state.

- Centralize API calls with error boundaries.

- Show loading indicators & error toasts.

### 2. UI/UX

- Drag-and-drop audio file upload with progress bar.

- Audio playback in the UI.

- Pagination or infinite scroll for transcriptions.

- Filter & search by audio URL or transcription text.

### 3. State Management

- Store user authentication state securely.

- Keep recent actions cached for offline fallback.

### 4. Security

- Escape transcription text before rendering (XSS protection).

- Use HTTPS in production.

- CSRF protection if using cookies.

### 5. Testing

- Unit tests for components.

- Integration tests with React Testing Library.

- Snapshot testing for UI changes.

### Infrastructure & Monitoring

- Set up error tracking (Sentry, LogRocket).

- Collect performance metrics (Lighthouse, Web Vitals).

- Enable health check endpoint (/health).

- Centralized structured logging (Winston, Pino).