#!/bin/bash

# Ensure TypeScript and types are installed
echo "Installing TypeScript and type dependencies..."
npm install --save-dev typescript @types/react @types/node @types/react-dom

# Run the build
echo "Running Next.js build..."
npm run build

echo "Build completed successfully!" 