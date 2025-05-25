"use client";

import Image from 'next/image';

interface AuthorProps {
  id: string;
  name: string;
  image: string;
  title: string;
  bio?: string;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    facebook?: string;
    instagram?: string;
  };
}

export default function AuthorBio({
  name,
  image,
  title,
  bio,
  socialLinks,
}: AuthorProps) {
  const imageSrc = image.startsWith('/') ? image : `/images/author/${image}`;
  
  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {/* Author Image */}
        <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 sm:mb-0">
          <Image
            src={imageSrc}
            alt={name}
            fill
            className="object-cover"
          />
        </div>
        
        {/* Author Info */}
        <div className="sm:mr-6 text-center sm:text-right">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <p className="text-gray-600 mb-3">{title}</p>
          
          {bio && <p className="text-gray-700 mb-4">{bio}</p>}
          
          {/* Social Links */}
          {socialLinks && (
            <div className="flex justify-center sm:justify-start space-x-reverse space-x-4">
              {socialLinks.twitter && (
                <a 
                  href={socialLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">Twitter</span>
                  {/* Twitter icon would go here */}
                </a>
              )}
              {socialLinks.linkedin && (
                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">LinkedIn</span>
                  {/* LinkedIn icon would go here */}
                </a>
              )}
              {socialLinks.facebook && (
                <a 
                  href={socialLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">Facebook</span>
                  {/* Facebook icon would go here */}
                </a>
              )}
              {socialLinks.instagram && (
                <a 
                  href={socialLinks.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary transition-colors"
                >
                  <span className="sr-only">Instagram</span>
                  {/* Instagram icon would go here */}
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 