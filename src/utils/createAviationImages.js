const fs = require('fs');
const path = require('path');

// Define the new aviation images we need for our new articles
const aviationImages = [
  '/images/aviation_uniforms/saudia_uniform_history.jpg',
  '/images/aviation_uniforms/private_aviation_uniforms.jpg',
  '/images/aviation_uniforms/ground_service_uniforms.jpg',
  '/images/aviation_uniforms/crew_morale.jpg',
  '/images/aviation_uniforms/wrinkle_resistant_fabrics.jpg',
  '/images/aviation_uniforms/flight_safety_standards.jpg',
  '/images/aviation_uniforms/aviation_fabrics.jpg',
  '/images/aviation_uniforms/saudi_airlines_identity.jpg',
  '/images/aviation_uniforms/pilot_crew_differences.jpg',
  '/images/aviation_uniforms/crew_safety_design.jpg',
  '/images/aviation_uniforms/international_regulations.jpg',
  '/images/aviation_uniforms/aviation_fabric_guide.jpg',
];

// Create images from existing files when possible, otherwise use placeholders
const existingImages = {
  '/images/aviation_uniforms/saudia_uniform_history.jpg': '/images/aviation_uniforms/saudi_airlines_identity.jpg',
  '/images/aviation_uniforms/private_aviation_uniforms.jpg': '/images/aviation_uniforms/private_aviation_uniforms.jpg',
  '/images/aviation_uniforms/ground_service_uniforms.jpg': '/images/aviation_uniforms/aviation_uniform_accessories.jpg',
  '/images/aviation_uniforms/crew_morale.jpg': '/images/aviation_uniforms/aviation_uniform_visual_identity.jpg',
  '/images/aviation_uniforms/wrinkle_resistant_fabrics.jpg': '/images/aviation_uniforms/wrinkle_resistant_aviation_uniforms.jpg',
  '/images/aviation_uniforms/flight_safety_standards.jpg': '/images/aviation_uniforms/crew_compliance.jpg',
  '/images/aviation_uniforms/aviation_fabrics.jpg': '/images/aviation_uniforms/aviation_uniform_fabrics.jpg',
};

// Create a simple placeholder 1x1 pixel GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

// Process each image
aviationImages.forEach(imagePath => {
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
  
  // Check if file already exists
  if (!fs.existsSync(fullPath)) {
    // If there's a matching existing image, copy it
    const existingImagePath = existingImages[imagePath];
    if (existingImagePath) {
      const sourcePath = path.join(process.cwd(), '..', 'public', existingImagePath.startsWith('/') ? existingImagePath.slice(1) : existingImagePath);
      if (fs.existsSync(sourcePath)) {
        fs.copyFileSync(sourcePath, fullPath);
        console.log(`Copied existing image from ${sourcePath} to ${fullPath}`);
      } else {
        // If source doesn't exist, create a placeholder
        fs.writeFileSync(fullPath, createPlaceholder());
        console.log(`Created placeholder image: ${fullPath}`);
      }
    } else {
      // Create a placeholder
      fs.writeFileSync(fullPath, createPlaceholder());
      console.log(`Created placeholder image: ${fullPath}`);
    }
  } else {
    console.log(`Image already exists: ${fullPath}`);
  }
});

console.log('Aviation image creation complete!'); 