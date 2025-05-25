"use client";

import SmartImage, { SmartImageProps } from "@/components/SmartImage";
import { fixImagePath } from "@/utils/imageUtils";

interface BlogImageProps extends Partial<SmartImageProps> {
  src: string;
  alt: string;
  category?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

// صور بديلة مناسبة لكل فئة
const categoryFallbacks: Record<string, string> = {
  "healthcare-uniforms": "/images/healthcare_uniforms/medical_uniform_guide.jpg",
  "corporate-uniforms": "/images/corporate_uniforms/corporate_uniform_design.jpg",
  "hospitality-uniforms": "/images/hospitality_uniforms/hotel_uniforms.jpg",
  "aviation-uniforms": "/images/aviation_uniforms/aviation_uniform_supply.jpg",
  "security-uniforms": "/images/security_uniforms/security_fabrics_guide.jpg",
};

export default function BlogImage({
  src,
  alt,
  category,
  width = 800,
  height = 500,
  priority = false,
  className = "rounded-lg shadow-md",
  ...props
}: BlogImageProps) {
  // تحديد الفئة من مسار الصورة إذا لم يتم تحديدها
  if (!category && src && src.startsWith("/images/")) {
    const parts = src.split("/");
    if (parts.length >= 3) {
      category = parts[2];
      
      // تحويل صيغة الفئة لتتطابق مع التنسيق المستخدم في أماكن أخرى
      if (category.includes("_")) {
        category = category.replace("_", "-");
      }
    }
  }
  
  // الصورة البديلة المناسبة للفئة المحددة
  let fallbackForCategory = "/images/placeholder.jpg";
  
  if (category) {
    if (category in categoryFallbacks) {
      fallbackForCategory = categoryFallbacks[category];
    } else {
      fallbackForCategory = `/images/${category}/placeholder.jpg`;
    }
  }

  // إصلاح مسار الصورة إذا لزم الأمر
  const correctedSrc = fixImagePath(src, category);

  return (
    <div className="my-8 flex justify-center">
      <SmartImage
        src={correctedSrc}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={className}
        category={category}
        fallbackSrc={fallbackForCategory}
        {...props}
      />
    </div>
  );
}
