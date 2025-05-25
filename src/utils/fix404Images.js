const fs = require('fs');
const path = require('path');

// The 404 image paths from the logs
const missingPaths = [
  '/images/hero-bg.jpg',
  '/images/healthcare_uniforms/medical_staff_uniforms.jpg',
  '/images/security_uniforms/security_guards.jpg',
  '/images/hospitality_uniforms/luxury_hotel_staff.jpg',
  '/images/corporate_uniforms/corporate_staff.jpg',
  '/images/healthcare_uniforms/infection_control_uniforms.jpg',
  '/images/healthcare_uniforms/saudi_medical_standards.jpg',
  '/images/aviation_uniforms/saudia_uniform_history.jpg',
  '/images/aviation_uniforms/flight_safety_standards.jpg',
  '/images/security_uniforms/saudi_security_uniforms.jpg',
  '/images/security_uniforms/security_authority.jpg',
  '/images/healthcare_uniforms/scrub_colors.jpg',
  '/images/aviation_uniforms/aviation_fabrics.jpg',
  '/images/healthcare_uniforms/medical_students_uniform.jpg',
  '/images/healthcare_uniforms/medical_masks_caps.jpg',
  '/images/healthcare_uniforms/medical_staff_comparison.jpg',
  '/images/healthcare_uniforms/saudi_hospitals_uniforms.jpg',
  '/images/hospitality_uniforms/elegant_hotel_staff.jpg',
  '/images/aviation_uniforms/pilot_crew_differences.jpg',
  '/images/security_uniforms/security_fabrics.jpg',
  '/images/security_uniforms/reflective_vests.jpg',
  '/images/healthcare_uniforms/practical_medical_uniform.jpg',
  '/images/healthcare_uniforms/medical_fabric_selection.jpg',
  '/images/healthcare_uniforms/medical_uniform_care.jpg',
  '/images/healthcare_uniforms/medical_tech_fabrics.jpg',
  '/images/healthcare_uniforms/hospital_departments_uniforms.jpg',
  '/images/hospitality_uniforms/cost_quality_balance.jpg',
  '/images/hospitality_uniforms/luxury_hospitality_suppliers.jpg',
  '/images/hospitality_uniforms/food_prep_hygiene.jpg',
  '/images/hospitality_uniforms/modern_hospitality_trends.jpg',
  '/images/aviation_uniforms/aviation_fabric_guide.jpg',
  '/images/aviation_uniforms/international_regulations.jpg',
  '/images/aviation_uniforms/crew_safety_design.jpg',
  '/images/security_uniforms/tactical_boots.jpg',
  '/images/security_uniforms/practical_security_design.jpg',
  '/images/security_uniforms/dark_colors_badges.jpg',
  '/images/healthcare_uniforms/medical_uniform_guide.jpg',
  '/images/hospitality_uniforms/staff_appearance.jpg',
  '/images/healthcare_uniforms/scrubs_guide.jpg',
  '/images/educational_uniforms/school_uniform_guide.jpg',
  '/images/hospitality_uniforms/trends_2024.jpg',
  '/images/security_uniforms/security_fabrics_guide.jpg',
  '/images/healthcare_uniforms/functional_pockets.jpg',
  '/images/healthcare_uniforms/comfortable_scrubs.jpg',
  '/images/healthcare_uniforms/global_standards.jpg',
  '/images/healthcare_uniforms/infection_prevention.jpg',
  '/images/security_uniforms/saudi_standards.jpg',
];

// Create a simple placeholder 1x1 pixel GIF
const createPlaceholder = () => {
  return Buffer.from([
    0x47, 0x49, 0x46, 0x38, 0x39, 0x61, 0x01, 0x00, 0x01, 0x00, 0x80, 0x00, 0x00, 0xFF, 0xFF, 0xFF,
    0x00, 0x00, 0x00, 0x2C, 0x00, 0x00, 0x00, 0x00, 0x01, 0x00, 0x01, 0x00, 0x00, 0x02, 0x02, 0x44,
    0x01, 0x00, 0x3B
  ]);
};

// Process each image
missingPaths.forEach(imagePath => {
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
    // Create a placeholder
    fs.writeFileSync(fullPath, createPlaceholder());
    console.log(`Created placeholder image: ${fullPath}`);
  } else {
    console.log(`Image already exists: ${fullPath}`);
  }
});

console.log('404 image fix complete!'); 