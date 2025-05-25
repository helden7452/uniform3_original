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
