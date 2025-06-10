'use client';

import React from 'react';


export const OrganizationSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Next Motion",
        "url": "https://www.nextmotion.net/",
        "logo": "https://www.nextmotion.net/logo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "8 Av. Dorian, 75012 Paris, France",
            "addressLocality": "Paris",
            "postalCode": "75012",
            "addressCountry": "France"
        },
        "sameAs": [
            "https://www.instagram.com/nextmotion_solution/",
            "https://www.facebook.com/nextmotion.solution/",
            "https://www.linkedin.com/company/next-motion/"
        ],
        "description": "Optimize the management of your aesthetic clinic with our software dedicated to physicians, aesthetic surgeons, and managers. Simplify appointment scheduling, cash management, and much more."
    }


    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};