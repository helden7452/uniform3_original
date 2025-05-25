#!/usr/bin/env node

/**
 * This script helps set up environment variables for Netlify deployment
 * It reads variables from a .env.netlify file and outputs commands to set them
 * 
 * Usage:
 * 1. Create a .env.netlify file with your environment variables
 * 2. Run this script: node scripts/setup-netlify-env.js
 * 3. Copy the output commands and run them with netlify CLI
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

// Paths
const envFilePath = path.join(process.cwd(), '.env.netlify');

// Check if the file exists
if (!fs.existsSync(envFilePath)) {
  console.error(`Error: ${envFilePath} not found.`);
  console.log('Please create this file with your Netlify environment variables.');
  console.log('Example content:');
  console.log('NEXT_PUBLIC_SITE_URL=https://a5fi.com');
  console.log('NEXT_PUBLIC_SITE_NAME=خبراء الزي الموحد');
  process.exit(1);
}

// Read the file
const fileContent = fs.readFileSync(envFilePath, 'utf8');
const lines = fileContent.split('\n');

console.log('\nNetlify Environment Variables Setup\n');
console.log('Run these commands to set up your environment variables:');
console.log('---------------------------------------------------\n');

// Process each line
lines.forEach(line => {
  // Skip empty lines and comments
  if (!line || line.trim() === '' || line.trim().startsWith('#')) {
    return;
  }
  
  // Parse the key-value pair
  const [key, ...valueParts] = line.split('=');
  const value = valueParts.join('='); // Rejoin in case value contains '='
  
  if (key && value) {
    console.log(`netlify env:set ${key.trim()} ${value.trim()}`);
  }
});

console.log('\n---------------------------------------------------');
console.log('After running these commands, deploy your site with:');
console.log('netlify deploy --prod\n'); 