import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { getMessages } from "@/utils/i18n";
import HreflangTags from "./components/HreflangTags";
import Script from "next/script";
import CookieConsent from "@/components/CookieConsent";
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

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    <html lang={locale} className={inter.variable}>
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
        {/* Cookie consent manages loading of Meta Pixel based on user choice */}
      </head>
      <body>
        <noscript>
          <iframe
            title="Google Tag Manager"
            src="https://www.googletagmanager.com/ns.html?id=GTM-PCK4QN5X"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <CookieConsent />
        <Navbar />
        <Suspense fallback={<LoadingSkeleton />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
