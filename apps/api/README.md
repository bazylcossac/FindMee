# FindMee API Server

A simple Express.js API server built with TypeScript for the FindMee application.

## Features

- Express.js server with TypeScript
- CORS enabled for cross-origin requests
- Environment variable configuration
- Health check endpoint
- Example API routes
- Error handling middleware
- Development mode with hot reload

## Getting Started

### Prerequisites

- Node.js (>=18)
- npm or yarn

### Installation

1. Install dependencies:
   ```bash
   npm install
   ```

2. Copy environment file:
   ```bash
   cp env.example .env
   ```

3. Update `.env` file with your configuration

### Development

Start the development server with hot reload:
```bash
npm run dev
```

The server will start on port 3001 (or the port specified in your `.env` file).

### Production

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## API Endpoints

### Base URL
- **GET** `/` - Server status and information
- **GET** `/health` - Health check endpoint

### Users API
- **GET** `/api/users` - Get all users
- **POST** `/api/users` - Create a new user

## Project Structure

```
src/
├── server.ts          # Main server file
├── routes/            # API route handlers (future)
├── middleware/        # Custom middleware (future)
├── controllers/       # Route controllers (future)
└── models/           # Data models (future)
```

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build TypeScript to JavaScript
- `npm start` - Start production server
- `npm run clean` - Clean build directory

## Environment Variables

- `PORT` - Server port (default: 3001)
- `NODE_ENV` - Environment (development/production)
- `LOG_LEVEL` - Logging level

## Future Enhancements

- Database integration
- Authentication middleware
- More API endpoints
- Testing setup
- Docker configuration
