import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path: string; // e.g. "/services/eyelid-disorders-eyelid-surgery"
  image?: string; // absolute URL to a social preview image, defaults below
  jsonLd?: object; // optional structured data object
}

const SITE_URL = 'https://drsaumika.in';
const DEFAULT_IMAGE = `${SITE_URL}/dr-saumika.jpg`;

export default function SEO({ title, description, path, image = DEFAULT_IMAGE, jsonLd }: SEOProps) {
  const url = `${SITE_URL}${path}`;

  const isHi = path.startsWith('/hi');
  const enPath = isHi ? (path.slice(3) || '/') : path;
  const hiPath = isHi ? path : (path === '/' ? '/hi' : `/hi${path}`);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en-IN" href={`${SITE_URL}${enPath}`} />
      <link rel="alternate" hrefLang="hi-IN" href={`${SITE_URL}${hiPath}`} />
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${enPath}`} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1194" />
      <meta property="og:image:height" content="1317" />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Dr. Saumika Singh — Oculoplasty Specialist" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
