/**
 * SEO Head Component
 * Adds structured data (JSON-LD) for better search engine visibility
 */

import { useEffect } from "react";

export default function SEOHead() {
  useEffect(() => {
    // Organization Schema
    const orgScript = document.createElement('script');
    orgScript.type = 'application/ld+json';
    orgScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "MIKE Events India",
      "alternateName": "MIKE INDIA",
      "url": "https://mikevents.in",
      "description": "Leading event management company in India specializing in MICE services, conferences, exhibitions, and corporate events.",
      "foundingDate": "2019",
      "slogan": "Together We Make Magic",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-98765-43210",
        "contactType": "Customer Service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      },
      "sameAs": [
        "https://www.facebook.com/mikevents",
        "https://www.linkedin.com/company/mikevents",
        "https://www.instagram.com/mikevents",
        "https://twitter.com/mikevents"
      ]
    });
    document.head.appendChild(orgScript);

    // LocalBusiness Schema
    const localScript = document.createElement('script');
    localScript.type = 'application/ld+json';
    localScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "MIKE Events India",
      "image": "https://mikevents.in/logo.png",
      "priceRange": "$$",
      "telephone": "+91-98765-43210",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "addressCountry": "IN"
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5",
        "reviewCount": "200"
      }
    });
    document.head.appendChild(localScript);

    // Service Schema
    const serviceScript = document.createElement('script');
    serviceScript.type = 'application/ld+json';
    serviceScript.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "serviceType": "Event Management",
      "provider": {
        "@type": "Organization",
        "name": "MIKE Events India"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Event Management Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Conference Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Exhibition Management"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Association Management"
            }
          }
        ]
      }
    });
    document.head.appendChild(serviceScript);

    return () => {
      document.head.removeChild(orgScript);
      document.head.removeChild(localScript);
      document.head.removeChild(serviceScript);
    };
  }, []);

  return null;
}
