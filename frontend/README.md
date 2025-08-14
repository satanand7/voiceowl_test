# VoiceOwl Test Frontend

This is the frontend for the VoiceOwl project, built with React, TypeScript, and Vite.

## Features
- Modern React with TypeScript
- Fast development with Vite
- API integration with the VoiceOwl backend
- ESLint and code quality tools

## Prerequisites
- Node.js (v14 or higher recommended)

## Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at http://localhost:5173 by default.

## Project Structure
- `src/` - Main source code for the React app
- `public/` - Static assets
- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration

## Linting & Formatting
- ESLint is set up for code quality.
- You can run `npm run lint` to check for lint errors.

## API Integration
- The frontend communicates with the backend via REST API endpoints. Update API URLs in the code as needed to match your backend server.
Api end point is to http://localhost:3000 mentioned in the vite.config.ts

## Build
To create a production build:
```bash
npm run build
```
The output will be in the `dist/` directory.
