/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['f.hubspotusercontent10.net', '6086964.fs1.hubspotusercontent-na1.net', 'blog.nextmotion.net'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/webp'],
    minimumCacheTTL: 60,
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      {
        source: "/en/virtual-classes",
        destination: "/virtual-classes",
        statusCode: 301,
      },
      {
        source: "/en/pricing-aesthetic-solution",
        destination: "/pricing-aesthetic-solution",
        statusCode: 301,
      },
      {
        source: "/en/medecin-esthetique",
        destination: "/medecin-esthetique",
        statusCode: 301,
      },
      {
        source: "/en/marketing",
        destination: "/marketing",
        statusCode: 301,
      },
      {
        source: "/en/manager",
        destination: "/manager",
        statusCode: 301,
      },
      {
        source: "/en/injector-robot-aesthetic-medicine",
        destination: "/injector-robot-aesthetic-medicine",
        statusCode: 301,
      },
      {
        source: "/injector-robot-aesthetic-medicine-2",
        destination: "/injector-robot-aesthetic-medicine",
        statusCode: 301,
      },
      {
        source: "/en/contact",
        destination: "/contact",
        statusCode: 301,
      },
      {
        source: "/en/chaines",
        destination: "/chaines",
        statusCode: 301,
      },
      {
        source: "/en/case-studies",
        destination: "/case-studies",
        statusCode: 301,
      },
      {
        source: "/en/assistant",
        destination: "/assistant",
        statusCode: 301,
      },
      {
        source: "/en/about-us",
        destination: "/about-us",
        statusCode: 301,
      },
      {
        source: "/en/3d-aesthetic-simulation",
        destination: "/3d-aesthetic-simulation",
        statusCode: 301,
      },
      {
        source: "/es/ressources",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/fr/agenda",
        destination: "/fr/agenda-patient-en-ligne-rdv",
        statusCode: 301,
      },
      {
        source: "/fr/centre-de-ressources",
        destination: "/fr",
        statusCode: 301,
      },
      {
        source: "/fr/3d-aesthetic-simulation",
        destination: "/fr",
        statusCode: 301,
      },
      {
        source: "/fr/ressources",
        destination: "/fr",
        statusCode: 301,
      },
      {
        source: "/fr/use-cases-industries",
        destination: "/fr",
        statusCode: 301,
      },
      {
        source: "/fr/use-cases-industries-0",
        destination: "/fr",
        statusCode: 301,
      },
      {
        source: "/agenda",
        destination: "/agenda-online-booking-reminders",
        statusCode: 301,
      },
      {
        source: "/api-documentation",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/data-security-0",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/en/resources",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/resource-center-nextmotion",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/resources-0",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/use-cases-industries",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/use-cases-industries-0",
        destination: "/",
        statusCode: 301,
      },
      {
        source: "/use-cases-industries-1",
        destination: "/",
        statusCode: 301,
      },
    ];
  },
};

module.exports = nextConfig;
