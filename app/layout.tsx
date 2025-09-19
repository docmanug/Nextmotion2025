import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getMessages } from "@/utils/i18n";
import HreflangTags from "./components/HreflangTags";
import Script from "next/script";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Suspense } from "react";
import { LoadingSkeleton } from "@/components/ui/LoadingSkeleton";

export const metadata: Metadata = {
  title:
    "Management software for aesthetic clinics: simplify your appointments and cash management.",
  description:
    "Optimize the management of your aesthetic clinic with our software dedicated to physicians, aesthetic surgeons, and managers. Simplify appointment scheduling, cash management, and much more.",
  alternates: {
    canonical: "https://www.nextmotion.net",
  },
};

const gilroy = localFont({
  src: [
    // Thin
    {
      path: "../public/fonts/gilroy/Gilroy-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-ThinItalic.ttf",
      weight: "100",
      style: "italic",
    },
    // UltraLight
    {
      path: "../public/fonts/gilroy/Gilroy-UltraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-UltraLightItalic.ttf",
      weight: "200",
      style: "italic",
    },
    // Light
    {
      path: "../public/fonts/gilroy/Gilroy-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-LightItalic.ttf",
      weight: "300",
      style: "italic",
    },
    // Regular
    {
      path: "../public/fonts/gilroy/Gilroy-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-RegularItalic.ttf",
      weight: "400",
      style: "italic",
    },
    // Medium
    {
      path: "../public/fonts/gilroy/Gilroy-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-MediumItalic.ttf",
      weight: "500",
      style: "italic",
    },
    // SemiBold
    {
      path: "../public/fonts/gilroy/Gilroy-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-SemiBoldItalic.ttf",
      weight: "600",
      style: "italic",
    },
    // Bold
    {
      path: "../public/fonts/gilroy/Gilroy-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-BoldItalic.ttf",
      weight: "700",
      style: "italic",
    },
    // ExtraBold
    {
      path: "../public/fonts/gilroy/Gilroy-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-ExtraBoldItalic.ttf",
      weight: "800",
      style: "italic",
    },
    // Heavy
    {
      path: "../public/fonts/gilroy/Gilroy-Heavy.ttf",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-HeavyItalic.ttf",
      weight: "900",
      style: "italic",
    },
    // Black (using 950 for Black as it's heavier than Heavy)
    {
      path: "../public/fonts/gilroy/Gilroy-Black.ttf",
      weight: "950",
      style: "normal",
    },
    {
      path: "../public/fonts/gilroy/Gilroy-BlackItalic.ttf",
      weight: "950",
      style: "italic",
    },
  ],
  variable: "--font-gilroy",
  display: "swap",
});

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale?: string }>;
}) {
  const { locale = "en" } = await params;
  const messages = await getMessages(locale);

  return (
    <html lang={locale} className={gilroy.variable}>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-W48ZXFFPW1"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W48ZXFFPW1');
        `}
      </Script>
      <Script id="facebook-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '24288009300898224');
          fbq('track', 'PageView');
        `}
      </Script>
      <Script id="google-tag-manager" strategy="afterInteractive">
        {`
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-PCK4QN5X');
        `}
      </Script>
      <head>
        <HreflangTags />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            alt="Facebook Pixel"
            src="https://www.facebook.com/tr?id=24288009300898224&ev=PageView&noscript=1"
          />
        </noscript>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCK4QN5X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
      </head>
      <body>
        <Navbar />
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
