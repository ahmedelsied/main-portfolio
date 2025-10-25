export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Elsayed",
    "jobTitle": "Backend Software Engineer",
    "description": "Experienced backend software engineer specializing in Laravel, PHP, and modern web technologies.",
    "url": "https://ahmed-elsayed-portfolio.vercel.app",
    "image": "https://ahmed-elsayed-portfolio.vercel.app/og-image.jpg",
    "sameAs": [
      "https://github.com/ahmedelsayed",
      "https://linkedin.com/in/ahmedelsayed",
      "https://twitter.com/ahmedelsayed"
    ],
    "knowsAbout": [
      "PHP",
      "Laravel",
      "MySQL",
      "PostgreSQL",
      "API Design",
      "Microservices",
      "Domain-Driven Design",
      "E-commerce Development",
      "AWS",
      "Docker",
      "Redis",
      "GraphQL",
      "REST APIs"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Backend Software Engineer",
      "description": "Building scalable backend solutions with Laravel, PHP, and modern technologies."
    },
    "alumniOf": {
      "@type": "Organization",
      "name": "Software Engineering"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "San Francisco",
      "addressRegion": "CA",
      "addressCountry": "US"
    },
    "email": "ahmed@example.com",
    "telephone": "+1 (555) 123-4567"
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  )
}
