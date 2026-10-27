import { Fraunces, DM_Sans, Caveat } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/seo/JsonLd";
import { siteUrl } from "@/data/navigation";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-caveat",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "FARMAM ORGANIC | From Farm to Food",
    template: "%s | FARMAM ORGANIC",
  },
  description:
    "Natural Indian food products inspired by traditional agriculture, quality ingredients, and authentic flavours. Discover FARMAM ORGANIC Jeera and Bajri Atta, from farm to food.",
  keywords: [
    "FARMAM ORGANIC",
    "organic food India",
    "jeera",
    "cumin seeds",
    "bajri atta",
    "pearl millet flour",
    "Indian food brand",
    "traditional Indian ingredients",
    "From Farm to Food",
  ],
  openGraph: {
    title: "FARMAM ORGANIC | From Farm to Food",
    description:
      "Natural Indian food products inspired by traditional agriculture, quality ingredients, and authentic flavours.",
    url: siteUrl,
    siteName: "FARMAM ORGANIC",
    type: "website",
    locale: "en_IN",
  },
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "food",
  twitter: {
    card: "summary_large_image",
    title: "FARMAM ORGANIC | From Farm to Food",
    description:
      "Natural Indian food products inspired by traditional agriculture, quality ingredients, and authentic flavours.",
  },
};

export const viewport = {
  themeColor: "#073B20",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en-IN"
      className={`${fraunces.variable} ${dmSans.variable} ${caveat.variable}`}
    >
      <head>
        <noscript>
          <style>{`[data-reveal]{opacity:1!important;transform:none!important}`}</style>
        </noscript>
      </head>
      <body className="flex min-h-screen flex-col">
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
