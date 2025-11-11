export default function StructuredData() {
  const personData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Ahmed Elsayed",
    "jobTitle": "Senior Backend Engineer",
    "description": "Results-driven Software Engineer with 6+ years of experience in backend development. I design and optimize scalable, secure, high-performance applications using PHP, Laravel, and MySQL. Expert in domain-driven design, microservices architecture, and building RESTful APIs.",
    "url": "https://ahmed-elsayed-portfolio.vercel.app",
    "image": "https://ahmed-elsayed-portfolio.vercel.app/og-image.jpg",
    "email": "dev.ahmed.elsied@gmail.com",
    "telephone": "+201024404534",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mansoura",
      "addressRegion": "Dakahlia",
      "addressCountry": "EG"
    },
    "sameAs": [
      "https://github.com/ahmedelsied",
      "https://linkedin.com/in/dev-ahmed-elsied",
      "https://x.com/Dev_A_Elsayed"
    ],
    "knowsAbout": [
      "PHP",
      "Laravel",
      "JavaScript",
      "TypeScript",
      "Python",
      "C++",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "NestJS",
      "Node.js",
      "API Design",
      "REST APIs",
      "Microservices",
      "Domain-Driven Design",
      "System Design",
      "E-commerce Development",
      "AWS",
      "Docker",
      "Linux",
      "Git",
      "CI/CD",
      "PHPUnit",
      "Pest PHP",
      "Selenium",
      "Puppeteer",
      "Meilisearch"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Senior Backend Engineer",
      "occupationLocation": {
        "@type": "Country",
        "name": "Egypt"
      },
      "description": "Building scalable backend solutions with Laravel, PHP, and modern technologies. Leading teams and mentoring developers."
    },
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Software Engineering"
    },
    "award": [
      {
        "@type": "Award",
        "name": "Best Arabic App & Best Social Impact Awards",
        "awardedBy": {
          "@type": "Organization",
          "name": "Huawei"
        },
        "dateReceived": "2022-08",
        "description": "Apps Up 2022 Huawei Global App Innovation - Us and Them App"
      }
    ],
    "worksFor": {
      "@type": "Organization",
      "name": "Robusta Technology Group",
      "jobTitle": "Backend Developer"
    }
  }

  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Ahmed Elsayed Portfolio",
    "url": "https://ahmed-elsayed-portfolio.vercel.app",
    "description": "Portfolio website showcasing backend development projects, experience, and technical expertise in Laravel, PHP, and modern web technologies.",
    "author": {
      "@type": "Person",
      "name": "Ahmed Elsayed"
    },
    "inLanguage": "en-US",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://ahmed-elsayed-portfolio.vercel.app/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const professionalService = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Ahmed Elsayed - Backend Development Services",
    "description": "Professional backend development services specializing in Laravel, PHP, API design, and scalable system architecture.",
    "url": "https://ahmed-elsayed-portfolio.vercel.app",
    "provider": {
      "@type": "Person",
      "name": "Ahmed Elsayed",
      "email": "dev.ahmed.elsied@gmail.com",
      "telephone": "+201024404534"
    },
    "areaServed": {
      "@type": "Country",
      "name": "Worldwide"
    },
    "serviceType": [
      "Backend Development",
      "API Development",
      "System Architecture",
      "Database Design",
      "E-commerce Development",
      "Microservices Architecture"
    ],
    "priceRange": "Contact for pricing"
  }

  const workHistory = [
    {
      "@type": "OrganizationRole",
      "roleName": "Backend Developer",
      "startDate": "2024-11",
      "endDate": null,
      "organizationName": "Robusta Technology Group",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Cairo",
          "addressCountry": "EG"
        }
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Backend Developer (Team Leader)",
      "startDate": "2024-07",
      "endDate": "2024-11",
      "organizationName": "Almasa",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Kuwait",
          "addressCountry": "KW"
        }
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Backend Developer",
      "startDate": "2022-01",
      "endDate": "2024-01",
      "organizationName": "Codebase-tech",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al Dakahlia",
          "addressCountry": "EG"
        }
      }
    },
    {
      "@type": "OrganizationRole",
      "roleName": "Backend Developer",
      "startDate": "2021-09",
      "endDate": "2021-12",
      "organizationName": "Waitbuzz",
      "location": {
        "@type": "Place",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Al Dakahlia",
          "addressCountry": "EG"
        }
      }
    }
  ]

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://ahmed-elsayed-portfolio.vercel.app/#home"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://ahmed-elsayed-portfolio.vercel.app/#about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Experience",
        "item": "https://ahmed-elsayed-portfolio.vercel.app/#experience"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://ahmed-elsayed-portfolio.vercel.app/#projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://ahmed-elsayed-portfolio.vercel.app/#contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalService) }}
      />
      {workHistory.map((work, index) => {
        const roleData: any = {
          "@context": "https://schema.org",
          "@type": "OrganizationRole",
          "roleName": work.roleName,
          "startDate": work.startDate,
          "worksFor": {
            "@type": "Organization",
            "name": work.organizationName,
            "location": work.location
          }
        }
        if (work.endDate) {
          roleData.endDate = work.endDate
        }
        return (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(roleData) }}
          />
        )
      })}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  )
}
