/**
 * مكتبة مساعدة لتوليد بيانات Schema.org للصفحات المختلفة
 * يساعد هذا الملف على تنظيم وتبسيط إضافة البيانات المنظمة للصفحات
 */

/**
 * توليد بيانات منظمة للمنتجات
 */
export const generateProductSchema = (product: {
  name: string;
  description: string;
  image: string;
  price: number;
  currency: string;
  sku: string;
  brand: string;
  availability: 'InStock' | 'OutOfStock' | 'PreOrder';
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    brand: {
      '@type': 'Brand',
      name: product.brand,
    },
    offers: {
      '@type': 'Offer',
      url: product.url,
      price: product.price,
      priceCurrency: product.currency,
      availability: `https://schema.org/${product.availability}`,
    },
  };
};

/**
 * توليد بيانات منظمة للمقالات
 */
export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  image: string;
  authorName: string;
  publisherName: string;
  publisherLogo: string;
  datePublished: string; // YYYY-MM-DD
  dateModified: string; // YYYY-MM-DD
  url: string;
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.headline,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.authorName,
    },
    publisher: {
      '@type': 'Organization',
      name: article.publisherName,
      logo: {
        '@type': 'ImageObject',
        url: article.publisherLogo,
      },
    },
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
};

/**
 * توليد بيانات منظمة للأسئلة الشائعة
 */
export const generateFaqSchema = (questions: { question: string; answer: string }[]) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: questions.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: q.answer,
      },
    })),
  };
};

/**
 * توليد بيانات منظمة للشركة/المنظمة
 */
export const generateOrganizationSchema = (org: {
  name: string;
  url: string;
  logo: string;
  telephone: string;
  email: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  socialProfiles?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: org.name,
    url: org.url,
    logo: org.logo,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: org.telephone,
      email: org.email,
      contactType: 'customer service',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: org.address.locality,
      addressRegion: org.address.region,
      addressCountry: org.address.country,
    },
    ...(org.socialProfiles ? { sameAs: org.socialProfiles } : {}),
  };
};

/**
 * توليد بيانات الخريطة المحلية للأعمال
 */
export const generateLocalBusinessSchema = (business: {
  name: string;
  image: string;
  telephone: string;
  email: string;
  address: {
    locality: string;
    region: string;
    country: string;
  };
  geo: {
    latitude: string;
    longitude: string;
  };
  openingHours: {
    days: string[];
    opens: string;
    closes: string;
  };
  priceRange: string;
  url: string;
  socialProfiles?: string[];
}) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: business.name,
    image: business.image,
    telephone: business.telephone,
    email: business.email,
    address: {
      '@type': 'PostalAddress',
      addressLocality: business.address.locality,
      addressRegion: business.address.region,
      addressCountry: business.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: business.openingHours.days,
      opens: business.openingHours.opens,
      closes: business.openingHours.closes,
    },
    priceRange: business.priceRange,
    url: business.url,
    ...(business.socialProfiles ? { sameAs: business.socialProfiles } : {}),
  };
}; 