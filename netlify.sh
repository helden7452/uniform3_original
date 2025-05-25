#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Display Node and npm versions for debugging
echo "Node version: $(node -v)"
echo "NPM version: $(npm -v)"

# Ensure TypeScript and types are installed
echo "Installing TypeScript and type dependencies..."
npm install --force typescript @types/react @types/node @types/react-dom

# Verify TypeScript is installed without using direct path
echo "TypeScript version:"
npx tsc --version

# Run the build
echo "Running Next.js build..."
npm run build

echo "Build completed successfully!" 