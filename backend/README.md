# VoiceOwl Test Backend

This is the backend service for the VoiceOwl project. It provides RESTful APIs for transcription-related operations using Node.js, Express, and MongoDB.

## Features
- REST API for transcription endpoints
- MongoDB integration via Mongoose
- Environment variable configuration with dotenv

## Prerequisites
- Node.js (v14 or higher recommended)
- MongoDB instance (local or cloud)

## Setup
1. Clone the repository and navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend directory with the following variables:
   ```env
   MONGO_URI=your_mongodb_connection_string
   PORT=5000 # or any port you prefer
   ```
4. Start the server:
   ```bash
   npm start
   ```
   The server will run on the port specified in your `.env` file (default: 5000).

## Project Structure
- `index.js` - Main entry point, sets up Express, connects to MongoDB, and loads routes.
- `routes/transcriptionRoutes.js` - API routes for transcription features.
- `models/` - Mongoose models (if present).

## API Endpoints
See `routes/transcriptionRoutes.js` for available endpoints.


