const fs = require('fs');
const path = require('path');
const posts = require('../data/posts').default; // Get the default export

// Extract unique image paths from posts
const imagePaths = posts.map(post => post.coverImage);
const uniqueImagePaths = [...new Set(imagePaths)];

// Create directories if they don't exist and create placeholder files
uniqueImagePaths.forEach(imagePath => {
  // Remove leading slash if exists
  const normalizedPath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath;
  
  // Create the full path to the file in the public directory
  const fullPath = path.join(process.cwd(), '..', 'public', normalizedPath);
  
  // Create directory if it doesn't exist
  const directory = path.dirname(fullPath);
  if (!fs.existsSync(directory)) {
    fs.mkdirSync(directory, { recursive: true });
    console.log(`Created directory: ${directory}`);
  }
  
  // Create empty file if it doesn't exist
  if (!fs.existsSync(fullPath)) {
    // Create a simple placeholder with 1x1 pixel size
    const placeholderContent = Buffer.from([
      0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
      0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
      0x01, 0x00, 0x3B
    ]);
    
    fs.writeFileSync(fullPath, placeholderContent);
    console.log(`Created placeholder image: ${fullPath}`);
  }
});

console.log('Placeholder creation complete!'); 