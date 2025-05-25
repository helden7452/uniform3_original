const fs = require('fs');
const path = require('path');

// Pages to update
const pagesToUpdate = [
  { folder: 'security-uniforms', page: 'importance-of-security-uniforms-in-imposing-authority' },
  { folder: 'security-uniforms', page: 'how-to-choose-suitable-security-uniforms-in-saudi-arabia' },
  { folder: 'corporate-uniforms', page: 'accessories-complementing-corporate-uniforms' },
  { folder: 'corporate-uniforms', page: 'summer-winter-corporate-uniforms-design-material-differences' },
  { folder: 'corporate-uniforms', page: 'how-to-ensure-appropriate-sizes-for-all-employees' },
  { folder: 'corporate-uniforms', page: 'corporate-uniforms-for-sales-marketing-teams' },
  { folder: 'corporate-uniforms', page: 'case-studies-saudi-companies-enhanced-brand-with-distinctive-uniforms' },
  { folder: 'corporate-uniforms', page: 'common-mistakes-to-avoid-when-choosing-corporate-uniforms' },
  { folder: 'corporate-uniforms', page: 'sustainable-corporate-uniforms-eco-friendly-options' },
  { folder: 'corporate-uniforms', page: 'designing-corporate-uniforms-reflecting-company-culture' }
];

// Ensure directory exists
function ensureDirectoryExists(directoryPath) {
  if (!fs.existsSync(directoryPath)) {
    fs.mkdirSync(directoryPath, { recursive: true });
    console.log(`Created directory: ${directoryPath}`);
    return false;
  }
  return true;
}

// Copy default image if needed
function ensureImageExists(imagePath, category) {
  if (!fs.existsSync(imagePath)) {
    // Create the directory if it doesn't exist
    const imageDir = path.dirname(imagePath);
    ensureDirectoryExists(imageDir);
    
    // Determine source for default image based on category
    let defaultImagePath;
    if (category === 'security_uniforms') {
      defaultImagePath = path.join(__dirname, 'public', 'images', 'security_uniforms', 'default.jpg');
    } else {
      defaultImagePath = path.join(__dirname, 'public', 'images', 'corporate_uniforms', 'default.jpg');
    }
    
    // If default image doesn't exist, create a simple placeholder
    if (!fs.existsSync(defaultImagePath)) {
      defaultImagePath = path.join(__dirname, 'public', 'images', 'placeholder.jpg');
      if (!fs.existsSync(defaultImagePath)) {
        // If we still can't find a default image, copy any existing jpg file we can find
        const publicDir = path.join(__dirname, 'public', 'images');
        let foundImage = false;
        
        if (fs.existsSync(publicDir)) {
          const searchForImage = (dir) => {
            const files = fs.readdirSync(dir);
            for (const file of files) {
              const filePath = path.join(dir, file);
              if (fs.statSync(filePath).isDirectory()) {
                const found = searchForImage(filePath);
                if (found) return true;
              } else if (file.endsWith('.jpg') && fs.statSync(filePath).size > 0) {
                try {
                  fs.copyFileSync(filePath, imagePath);
                  console.log(`Copied existing image from ${filePath} to ${imagePath}`);
                  foundImage = true;
                  return true;
                } catch (err) {
                  console.error(`Error copying file: ${err.message}`);
                }
              }
            }
            return false;
          };
          
          foundImage = searchForImage(publicDir);
          
          if (!foundImage) {
            console.error(`Could not find any suitable images to use as placeholders`);
            return false;
          }
        }
      } else {
        try {
          fs.copyFileSync(defaultImagePath, imagePath);
          console.log(`Copied placeholder image to ${imagePath}`);
        } catch (err) {
          console.error(`Error copying placeholder: ${err.message}`);
          return false;
        }
      }
    } else {
      try {
        fs.copyFileSync(defaultImagePath, imagePath);
        console.log(`Copied default ${category} image to ${imagePath}`);
      } catch (err) {
        console.error(`Error copying default image: ${err.message}`);
        return false;
      }
    }
  }
  return true;
}

// Function to update image references in a file
function updateImageReferences(filePath, folderType) {
  console.log(`Processing: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Get the page folder name
  const pageFolder = path.basename(path.dirname(filePath));
  
  // Determine the image base path based on folder type (security vs corporate)
  const imageBasePath = folderType === 'security-uniforms' 
    ? 'security_uniforms' 
    : 'corporate_uniforms';
  
  // Ensure content directory exists
  const contentDirPath = path.join(__dirname, 'public', 'images', imageBasePath, 'content', pageFolder);
  ensureDirectoryExists(contentDirPath);
  
  // Ensure main image exists
  const mainImagePath = path.join(contentDirPath, 'main.jpg');
  ensureImageExists(mainImagePath, imageBasePath);
  
  // Ensure numbered images exist (1.jpg, 2.jpg, 3.jpg)
  for (let i = 1; i <= 3; i++) {
    const numberedImagePath = path.join(contentDirPath, `${i}.jpg`);
    ensureImageExists(numberedImagePath, imageBasePath);
  }
  
  // Update the main image in the article header
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill\s+style={{\s*objectFit:\s*'cover'\s*}}\s+priority\s*\/>/g,
    (match, src, alt) => {
      // Use the main.jpg for the header image
      const newSrc = `/images/${imageBasePath}/content/${pageFolder}/main.jpg`;
      return `<Image src="${newSrc}" alt="${alt}" fill style={{ objectFit: 'cover' }} priority />`;
    }
  );
  
  // Fix any SmartImage fill issues
  content = content.replace(
    /<SmartImage\s+src="([^"]+)"\s+alt="([^"]+)"\s+category="([^"]+)"fill/g,
    (match, src, alt, category) => {
      return `<SmartImage src="${src}" alt="${alt}" category="${category}" fill`;
    }
  );
  
  // Check for inline images that might need updating
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+width={(\d+)}\s+height={(\d+)}/g,
    (match, src, alt, width, height) => {
      if (src.includes(`/content/${pageFolder}/`) || src.includes('placeholder') || !src.startsWith('/images/')) {
        // Extract the number from the src if it exists
        const imgNumberMatch = src.match(/\/(\d+)\.jpg$/);
        const imgNumber = imgNumberMatch ? imgNumberMatch[1] : '1';
        
        // Make sure the number is between 1-3 as those are the available images
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/${imageBasePath}/content/${pageFolder}/${safeNumber}.jpg`;
        
        return `<Image src="${newSrc}" alt="${alt}" width={${width}} height={${height}}`;
      }
      return match;
    }
  );
  
  // Update any BlogImage components as well
  content = content.replace(
    /<BlogImage\s+src="([^"]+)"\s+alt="([^"]+)"\s+(?:width={(\d+)}\s+height={(\d+)}\s*)?/g,
    (match, src, alt, width, height) => {
      if (!src.startsWith('/images/') || src.includes('placeholder') || src.includes(`/content/${pageFolder}/`)) {
        // Extract the number from the src if it exists
        const imgNumberMatch = src.match(/\/(\d+)\.jpg$/);
        const imgNumber = imgNumberMatch ? imgNumberMatch[1] : '1';
        
        // Use a numbered image from the content folder
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/${imageBasePath}/content/${pageFolder}/${safeNumber}.jpg`;
        
        const widthPart = width ? `width={${width}} ` : '';
        const heightPart = height ? `height={${height}} ` : '';
        
        return `<BlogImage src="${newSrc}" alt="${alt}" ${widthPart}${heightPart}category="${imageBasePath}"`;
      }
      return match;
    }
  );
  
  // Fix SmartImage components if present
  content = content.replace(
    /<SmartImage\s+src="([^"]+)"\s+alt="([^"]+)"\s+(?:width={(\d+)}\s+height={(\d+)}\s*)?/g,
    (match, src, alt, width, height) => {
      if (!src.startsWith('/images/') || src.includes('placeholder') || src.includes(`/content/${pageFolder}/`)) {
        // Extract the number from the src if it exists
        const imgNumberMatch = src.match(/\/(\d+)\.jpg$/);
        const imgNumber = imgNumberMatch ? imgNumberMatch[1] : '1';
        
        // Use a numbered image from the content folder
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/${imageBasePath}/content/${pageFolder}/${safeNumber}.jpg`;
        
        const widthPart = width ? `width={${width}} ` : '';
        const heightPart = height ? `height={${height}} ` : '';
        
        // Make sure category is added correctly
        if (!match.includes('category=')) {
          return `<SmartImage src="${newSrc}" alt="${alt}" ${widthPart}${heightPart}category="${imageBasePath}"`;
        } else {
          // If category exists, replace the src but keep the existing category
          return match.replace(src, newSrc);
        }
      }
      return match;
    }
  );
  
  // Fix any double category parameters
  content = content.replace(/category="[^"]+"\s+category="[^"]+"/g, (match) => {
    return match.split(' category=')[0];
  });
  
  // Write the updated content back to the file
  fs.writeFileSync(filePath, content, 'utf8');
  return true;
}

// Process each page
let updatedCount = 0;
pagesToUpdate.forEach(item => {
  const filePath = path.join(__dirname, 'src', 'app', item.folder, item.page, 'page.tsx');
  if (updateImageReferences(filePath, item.folder)) {
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} of ${pagesToUpdate.length} pages.`); 