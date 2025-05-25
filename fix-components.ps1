# Script para agregar los componentes directamente al directorio correcto

# Crear el directorio src/components si no existe
Write-Host "Asegurando que el directorio existe..." -ForegroundColor Cyan
New-Item -ItemType Directory -Path "src/components" -Force | Out-Null

# Crear los archivos directamente en el directorio correcto
Write-Host "Creando los archivos de componentes..." -ForegroundColor Cyan

# Breadcrumb.tsx
$breadcrumbContent = @'
import Link from "next/link";

interface BreadcrumbProps {
  items: {
    label: string;
    href: string;
    isCurrent?: boolean;
  }[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav className="flex mb-6" aria-label="Breadcrumb">
      <ol className="inline-flex items-center flex-row-reverse w-full">
        <li className="inline-flex items-center">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-primary"
          >
            <svg
              className="w-4 h-4 ml-2 rtl:ml-2 rtl:mr-0"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            الرئيسية
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400 transform rotate-180"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                ></path>
              </svg>
              {item.isCurrent ? (
                <span className="ml-1 text-sm font-medium text-primary md:ml-2">
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  className="ml-1 text-sm font-medium text-gray-600 hover:text-primary md:ml-2"
                >
                  {item.label}
                </Link>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
'@

Set-Content -Path "src/components/Breadcrumb.tsx" -Value $breadcrumbContent -Force

# SmartImage.tsx
$smartImageContent = @'
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { fixImagePath } from "@/utils/imageUtils";

export interface SmartImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fill?: boolean;
  category?: string;
  fallbackSrc?: string;
  onLoad?: () => void;
  onClick?: () => void;
}

export default function SmartImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  style,
  fill = false,
  category,
  fallbackSrc = "/images/placeholder.jpg",
  onLoad,
  onClick,
}: SmartImageProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isLoading, setLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // إعادة تعيين الحالة عند تغيير src
    setImgSrc(src);
    setLoading(true);
    setHasError(false);
  }, [src]);

  const handleError = () => {
    if (!hasError) {
      console.warn(`Error loading image: ${src}, falling back to: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      setHasError(true);
    }
  };

  const handleLoad = () => {
    setLoading(false);
    if (onLoad) onLoad();
  };

  return (
    <div 
      className={`relative overflow-hidden ${className}`} 
      style={style}
      onClick={onClick}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
          <svg
            className="w-10 h-10 text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01"
            />
          </svg>
        </div>
      )}

      <Image
        src={imgSrc}
        alt={alt}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        fill={fill}
        className={`transition-opacity duration-300 ${
          isLoading ? "opacity-0" : "opacity-100"
        }`}
        onError={handleError}
        onLoad={handleLoad}
      />
    </div>
  );
}
'@

Set-Content -Path "src/components/SmartImage.tsx" -Value $smartImageContent -Force

# BlogImage.tsx
$blogImageContent = @'
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
'@

Set-Content -Path "src/components/BlogImage.tsx" -Value $blogImageContent -Force

# Verificar que se crearon los archivos
Write-Host "Verificando que se crearon los archivos..." -ForegroundColor Cyan
Get-ChildItem -Path "src/components" | Select-Object Name, Length

# Agregar los archivos a Git
Write-Host "Agregando archivos a Git..." -ForegroundColor Cyan
git add src/components/Breadcrumb.tsx src/components/SmartImage.tsx src/components/BlogImage.tsx

# Verificar el estado
git status

# Hacer commit
Write-Host "Haciendo commit..." -ForegroundColor Cyan
git commit -m "Add components to the correct directory for Netlify build"

# Empujar a GitHub
Write-Host "Subiendo cambios a GitHub..." -ForegroundColor Cyan
git push origin master

Write-Host "¡Proceso completado! Los componentes han sido agregados al directorio correcto." -ForegroundColor Green 