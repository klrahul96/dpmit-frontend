import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ 
  title = "Website Designing Company, SEO Services, Web Development Company | DPM IT Solutions Pvt Ltd.",
  description = "DPM IT Solutions Pvt. Ltd. is a website designing company in Delhi, India providing services like Web Designing & Development, Digital Marketing, SEO, PPC, Ecommerce with affordable prices. Call Now - +919650413450",
  keywords = "Website Designing Company In Delhi, Web Design Company, Web Design Company In India, Website Designing in Delhi, Ecommerce Website Development, Best Website Designing Company in Delhi, Website Designing Services in Delhi, Web Development Company in Tilak Nagar, Digital Marketing Company in Delhi NCR",
  ogImage = "https://dpmitsolutions.com/assets/fevicon.png",
  ogUrl = "https://dpmitsolutions.com/",
  canonicalUrl = "https://dpmitsolutions.com/"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "DPM IT Solutions Pvt. Ltd.",
    "alternateName": "DPM IT Solutions",
    "url": "https://dpmitsolutions.com/",
    "logo": "https://dpmitsolutions.com/assets/fevicon.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tilak Nagar",
      "addressLocality": "New Delhi",
      "addressRegion": "Delhi",
      "postalCode": "110018",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91 9650413450",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "hi"]
    },
    "sameAs": [
      "https://www.facebook.com/dpmitsolution/",
      "https://www.instagram.com/dpmitsolutions/?hl=en",
      "https://x.com/dpmitsolutions"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="DPM IT Solutions Pvt. Ltd." />
      <meta name="copyright" content="Copyright 2017-2025 DPM IT Solutions Pvt. Ltd. - Awarded Best Web Designing, Digital Marketing & Branding Company in Delhi, India" />
      <meta name="distribution" content="global" />
      <meta name="language" content="en" />
      
      {/* Geo Tags */}
      <meta name="geo.region" content="IN" />
      <meta name="city" content="New Delhi" />
      <meta name="state" content="Delhi" />
      <meta name="address" content="DPM IT Solutions Pvt. Ltd., Tilak Nagar, New Delhi - 110018, India" />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
    </Helmet>
  );
};

export default SEO;