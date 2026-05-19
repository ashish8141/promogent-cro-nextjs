import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PromoGent Solutions — CRO & Traffic Optimization Experts",
  description:
    "We plug revenue leaks for SMBs and ship cloud adoption for enterprises. WordPress, Shopify, Next.js, React Native, Flutter and AWS — built by a top-rated team.",
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
      "Find the revenue leak. Fix it. Ship growth. Top-rated agency for SMB CRO and enterprise cloud adoption.",
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
        {children}
      </body>
    </html>
  );
}
