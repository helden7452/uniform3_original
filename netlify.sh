#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Ensure TypeScript and types are installed
echo "Installing TypeScript and type dependencies..."
npm install --save-exact typescript@5.8.3 @types/react@18.3.22 @types/node@20.17.50 @types/react-dom

# Show installed TypeScript version
echo "TypeScript version:"
./node_modules/.bin/tsc --version

# Run the build
echo "Running Next.js build..."
npm run build

echo "Build completed successfully!" 