'use client';

import Script from 'next/script';
import { useEffect } from 'react';

// Define AOS type if not available globally or via @types/aos
declare global {
  interface Window {
    AOS: {
      init: (options?: any) => void;
      refresh: () => void;
      // Add other AOS methods if needed
    };
  }
}

const AOSInitializer = () => {
  // The main initialization is now handled by the Script's onLoad prop.
  // This useEffect could be used for re-initializing or refreshing AOS on route changes if necessary,
  // for example, if new AOS elements are added dynamically after the initial load.
  useEffect(() => {
    // Example: if you needed to refresh AOS on route changes for some reason:
    // if (window.AOS) {
    //   window.AOS.refresh();
    // }
  }, []);

  return (
    <Script
      src="https://unpkg.com/aos@next/dist/aos.js"
      strategy="afterInteractive"
      onLoad={() => {
        if (typeof window !== 'undefined' && window.AOS) {
          window.AOS.init({
            duration: 800,
            once: true,
          });
        }
      }}
    />
  );
};

export default AOSInitializer;