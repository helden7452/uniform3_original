const { execSync } = require('child_process');
const fs = require('fs');

console.log('Starting Netlify build process...');

// Function to execute commands and log output
function runCommand(command) {
  console.log(`Running: ${command}`);
  try {
    execSync(command, { stdio: 'inherit' });
  } catch (error) {
    console.error(`Command failed: ${command}`);
    console.error(error);
    process.exit(1);
  }
}

// Install TypeScript dependencies first
console.log('Installing TypeScript and type dependencies...');
runCommand('npm install --no-save typescript@5.8.3 @types/react@18.3.22 @types/node@20.17.50');

// Run the NextJS build
console.log('Running Next.js build...');
runCommand('npm run build');

console.log('Build completed successfully!'); 