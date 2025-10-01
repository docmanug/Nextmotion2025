import Script from "next/script";

interface NextmotionCaptureJsonLdProps {
  locale: "en" | "fr";
}

export default function NextmotionCaptureJsonLd({
  locale,
}: NextmotionCaptureJsonLdProps) {
  const isFr = locale === "fr";

  const pageUrl = isFr
    ? "https://www.nextmotion.net/fr/photos-avant-apres"
    : "https://www.nextmotion.net/before-after";

  const webpageId = `${pageUrl}#webpage`;

  const webPageName = isFr
    ? "Avant Après - Nextmotion Capture"
    : "Before After - Nextmotion Capture";

  const webPageDescription = isFr
    ? "Fonctionnalités de documentation avant/après de Nextmotion pour les pratiques de médecine esthétique"
    : "Nextmotion's before and after documentation features for aesthetic medicine practices";

  const offerUrl = pageUrl;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.nextmotion.net/#organization",
        "name": "Nextmotion",
        "url": "https://www.nextmotion.net",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.nextmotion.net/logo.webp",
          "width": 256,
          "height": 256,
        },
        "description":
          "Aesthetic medicine management software and patient management platform for clinics and doctors",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "21",
          "bestRating": "5",
          "worstRating": "1",
        },
      },
      {
        "@type": "SoftwareApplication",
        "@id": "https://www.nextmotion.net/#service",
        "name": "Nextmotion - Aesthetic Medicine Management Software",
        "description":
          "Comprehensive patient management platform for aesthetic medicine clinics and cosmetic dermatology practices. Track patient history, manage treatments, and streamline clinic operations.",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "Web-based",
        "provider": {
          "@id": "https://www.nextmotion.net/#organization",
        },
        "offers": {
          "@type": "Offer",
          "url": offerUrl,
          "availability": "https://schema.org/InStock",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.4",
          "reviewCount": "21",
          "bestRating": "5",
          "worstRating": "1",
        },
        "review": [
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Marie Jourdan",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "Software used in my cosmetic dermatology practice, I couldn't do without it today: it allows me to trace the history of treatments and manage patient data efficiently.",
            "datePublished": "2024-04-25",
            "publisher": {
              "@type": "Organization",
              "name": "Google",
            },
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Christine Chivilo",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "Management software for the aesthetic medicine center, created by an aesthetic doctor and therefore completely adapted to our needs.",
            "datePublished": "2024-03-25",
            "publisher": {
              "@type": "Organization",
              "name": "Google",
            },
          },
          {
            "@type": "Review",
            "author": {
              "@type": "Person",
              "name": "Florian Coldepin",
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5",
            },
            "reviewBody":
              "Nextmotion is an ideal patient management platform for clinics or independent doctors specializing in aesthetic medicine.",
            "datePublished": "2024-03-25",
            "publisher": {
              "@type": "Organization",
              "name": "Google",
            },
          },
        ],
      },
      {
        "@type": "VideoObject",
        "@id": "https://www.nextmotion.net/#video",
        "name": "Nextmotion - Aesthetic Medicine Software Demo",
        "description":
          "See how Nextmotion's aesthetic medicine management software helps clinics track patient treatments and manage before/after documentation.",
        "thumbnailUrl":
          "https://img.youtube.com/vi/SY3cs5jWV0s/maxresdefault.jpg",
        "uploadDate": "2024-01-01",
        "duration": "PT5M30S",
        "contentUrl": "https://youtu.be/SY3cs5jWV0s",
        "embedUrl": "https://www.youtube.com/embed/SY3cs5jWV0s",
        "publisher": {
          "@id": "https://www.nextmotion.net/#organization",
        },
        "potentialAction": {
          "@type": "SeekToAction",
          "target":
            "https://youtu.be/SY3cs5jWV0s?t={seek_to_second_number}",
          "startOffset-input": "required name=seek_to_second_number",
        },
      },
      {
        "@type": "WebPage",
        "@id": webpageId,
        "url": pageUrl,
        "name": webPageName,
        "description": webPageDescription,
        "isPartOf": {
          "@type": "WebSite",
          "@id": "https://www.nextmotion.net/#website",
          "url": "https://www.nextmotion.net",
          "name": "Nextmotion",
        },
        "about": {
          "@id": "https://www.nextmotion.net/#service",
        },
        "mainEntity": {
          "@id": "https://www.nextmotion.net/#service",
        },
      },
    ],
  } as const;

  return (
    <Script
      id={`nextmotion-capture-structured-data-${locale}`}
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}


