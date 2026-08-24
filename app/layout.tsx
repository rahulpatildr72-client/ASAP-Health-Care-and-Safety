import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScroll from "@/components/SmoothScroll";
import { CONTACT, SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/data/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — First Aid, CPR & Health Safety Training`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_TAGLINE,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — First Aid, CPR & Health Safety Training`,
    description: SITE_TAGLINE,
    url: SITE_URL,
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_TAGLINE,
  telephone: CONTACT.phone,
  email: CONTACT.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // suppressHydrationWarning: the inline script below adds a `js` class to <html>
    // before React hydrates, which would otherwise log a false-positive mismatch.
    <html lang="en" className={jakarta.variable} suppressHydrationWarning>
      <body>
        {/* Stamp `js` on <html> so scroll-reveal hiding only applies when JS runs. */}
        <script
          dangerouslySetInnerHTML={{ __html: `document.documentElement.classList.add("js")` }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <SmoothScroll>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}
