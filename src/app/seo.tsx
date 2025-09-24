import { Helmet } from 'react-helmet-async';

interface SeoHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  type?: string;
}

const SeoHead = ({ 
  title = 'Oren Van Allen - Designer & Design Engineer', 
  description = 'Designer & Design Engineer creating sustainable solutions through research and product building. Experienced in computer vision, environmental research, and human-centered design.',
  canonical,
  ogImage = '/images/og-image.jpg',
  type = 'website'
}: SeoHeadProps) => {
  const fullTitle = title.includes('Oren Van Allen') ? title : `${title} | Oren Van Allen`;
  
  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      
      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional meta */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#4f46e5" />
      <meta name="robots" content="index, follow" />
      
      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Oren Van Allen",
          "jobTitle": "Designer & Design Engineer",
          "description": "Creating sustainable solutions through research and product building",
          "url": "https://orenvanallen.com",
          "email": "oren.vanallen@brown.edu",
          "affiliation": {
            "@type": "Organization",
            "name": "Brown University"
          },
          "sameAs": [
            "https://linkedin.com/in/orenvanallen",
            "https://github.com/orenvanallen"
          ]
        })}
      </script>
    </Helmet>
  );
};

export default SeoHead;
