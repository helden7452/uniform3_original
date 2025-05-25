const fs = require('fs');
const path = require('path');

// Pages to update
const pagesToUpdate = [
  { folder: 'security-uniforms', page: 'importance-of-security-uniforms-in-imposing-authority' },
  { folder: 'security-uniforms', page: 'how-to-choose-suitable-security-uniforms-in-saudi-arabia' },
  { folder: 'corporate-uniforms', page: 'accessories-complementing-corporate-uniforms' },
  { folder: 'corporate-uniforms', page: 'summer-winter-corporate-uniforms-design-material-differences' }
];

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
  
  // Update the main image in the article header
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill\s+style={{\s*objectFit:\s*'cover'\s*}}\s+priority\s*\/>/g,
    (match, src, alt) => {
      // Use the main.jpg for the header image
      const newSrc = `/images/${imageBasePath}/content/${pageFolder}/main.jpg`;
      return `<Image src="${newSrc}" alt="${alt}" fill style={{ objectFit: 'cover' }} priority />`;
    }
  );
  
  // Check for inline images that might need updating
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+width={(\d+)}\s+height={(\d+)}/g,
    (match, src, alt, width, height) => {
      if (src.includes(`/content/${pageFolder}/`) || src.includes('placeholder')) {
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
      if (src.includes(`/content/${pageFolder}/`) || src.includes('placeholder')) {
        // Extract the number from the src if it exists
        const imgNumberMatch = src.match(/\/(\d+)\.jpg$/);
        const imgNumber = imgNumberMatch ? imgNumberMatch[1] : '1';
        
        // Use a numbered image from the content folder
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/${imageBasePath}/content/${pageFolder}/${safeNumber}.jpg`;
        
        const widthPart = width ? `width={${width}} ` : '';
        const heightPart = height ? `height={${height}} ` : '';
        
        return `<BlogImage src="${newSrc}" alt="${alt}" ${widthPart}${heightPart}`;
      }
      return match;
    }
  );
  
  // Fix SmartImage components if present
  content = content.replace(
    /<SmartImage\s+src="([^"]+)"\s+alt="([^"]+)"\s+(?:width={(\d+)}\s+height={(\d+)}\s*)?/g,
    (match, src, alt, width, height) => {
      if (src.includes(`/content/${pageFolder}/`) || src.includes('placeholder')) {
        // Extract the number from the src if it exists
        const imgNumberMatch = src.match(/\/(\d+)\.jpg$/);
        const imgNumber = imgNumberMatch ? imgNumberMatch[1] : '1';
        
        // Use a numbered image from the content folder
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/${imageBasePath}/content/${pageFolder}/${safeNumber}.jpg`;
        
        const widthPart = width ? `width={${width}} ` : '';
        const heightPart = height ? `height={${height}} ` : '';
        
        return `<SmartImage src="${newSrc}" alt="${alt}" ${widthPart}${heightPart}category="${folderType.replace('-', '_')}"`;
      }
      return match;
    }
  );
  
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