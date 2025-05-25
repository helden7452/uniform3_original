const fs = require('fs');
const path = require('path');

// Pages to update
const pagesToUpdate = [
  'how-to-ensure-appropriate-sizes-for-all-employees',
  'corporate-uniforms-for-sales-marketing-teams',
  'case-studies-saudi-companies-enhanced-brand-with-distinctive-uniforms',
  'common-mistakes-to-avoid-when-choosing-corporate-uniforms',
  'sustainable-corporate-uniforms-eco-friendly-options',
  'designing-corporate-uniforms-reflecting-company-culture'
];

// Function to update image references in a file
function updateImageReferences(filePath) {
  console.log(`Processing: ${filePath}`);
  
  if (!fs.existsSync(filePath)) {
    console.log(`File not found: ${filePath}`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Get the page folder name
  const pageFolder = path.basename(path.dirname(filePath));
  
  // Update the main image in the article header
  // Replace paths like /images/corporate_uniforms/content/page-folder/3.jpg with proper paths
  content = content.replace(
    /<Image\s+src="([^"]+)"\s+alt="([^"]+)"\s+fill\s+style={{\s*objectFit:\s*'cover'\s*}}\s+priority\s*\/>/g,
    (match, src, alt) => {
      // Use the main.jpg for the header image or a specific image from content folder
      const newSrc = `/images/corporate_uniforms/content/${pageFolder}/main.jpg`;
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
        
        // Use a numbered image from the content folder
        // Make sure the number is between 1-3 as those are the available images
        const safeNumber = Math.min(Math.max(parseInt(imgNumber), 1), 3);
        const newSrc = `/images/corporate_uniforms/content/${pageFolder}/${safeNumber}.jpg`;
        
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
        const newSrc = `/images/corporate_uniforms/content/${pageFolder}/${safeNumber}.jpg`;
        
        const widthPart = width ? `width={${width}} ` : '';
        const heightPart = height ? `height={${height}} ` : '';
        
        return `<BlogImage src="${newSrc}" alt="${alt}" ${widthPart}${heightPart}`;
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
pagesToUpdate.forEach(page => {
  const filePath = path.join(__dirname, 'src', 'app', 'corporate-uniforms', page, 'page.tsx');
  if (updateImageReferences(filePath)) {
    updatedCount++;
  }
});

console.log(`Updated ${updatedCount} of ${pagesToUpdate.length} pages.`); 