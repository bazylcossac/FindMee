#!/bin/bash

echo "🚀 Starting FindMee API Server in development mode..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building project..."
npm run build

# Start the development server
echo "🌟 Starting development server..."
npm run dev
