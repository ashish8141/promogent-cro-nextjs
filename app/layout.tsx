import type { Metadata } from "next";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "PromoGent Solutions — CRO & Traffic Optimization Experts",
  description:
    "We plug revenue leaks for SMBs and ship cloud adoption for enterprises. WordPress, Shopify, Next.js, React Native, Flutter and AWS — built by a team.",
  keywords: [
    "CRO",
    "Conversion Rate Optimization",
    "Traffic Optimization",
    "WordPress development",
    "Shopify development",
    "Next.js development",
    "AWS cloud adoption",
    "React Native",
    "Flutter",
    "PromoGent Solutions",
  ],
  openGraph: {
    title: "PromoGent Solutions — CRO & Traffic Optimization",
    description:
      "Find the revenue leak. Fix it. Ship growth. Agency for SMB CRO and enterprise cloud adoption.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans antialiased bg-paper text-ink-950">
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MFRF2GNGPC"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MFRF2GNGPC');
          `}
        </Script>

        {children}
        <CookieConsent />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
