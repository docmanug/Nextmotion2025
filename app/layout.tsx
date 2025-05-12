import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { getMessages } from "@/utils/i18n";
import HreflangTags from "./components/HreflangTags";
import Script from "next/script";

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
      <head>
        <HreflangTags />
      </head>
      <body>{children}</body>
    </html>
  );
}
