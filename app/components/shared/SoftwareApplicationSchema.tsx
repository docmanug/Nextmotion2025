'use client';

import React from 'react';


export const SoftwareApplicationSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "Nextmotion Consult",
        "operatingSystem": "Web, iOS, Android",
        "applicationCategory": "MedicalApplication",
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
        },
        "offers": {
            "@type": "Offer",
            "price": "Contact for pricing",
            "priceCurrency": "USD"
        }
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};