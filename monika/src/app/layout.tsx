import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { StoreProvider } from "@/context/StoreProvider";
import { SiteShell } from "@/components/layout/SiteShell";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#B51F1F",
};

export const metadata: Metadata = {
  title: {
    default: "Monika Mustard Oil | Pure Taste. Pure Tradition.",
    template: "%s | MONIKA",
  },
  description:
    "Discover premium mustard oil from Monika. Authentic taste, rich aroma and quality-focused edible oils for every Indian kitchen.",
  applicationName: "MONIKA",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "MONIKA",
  },
  formatDetection: {
    telephone: false,
  },
  keywords: [
    "Monika mustard oil",
    "kachi ghani mustard oil",
    "pure mustard oil",
    "edible oil India",
    "cold pressed mustard oil",
  ],
  icons: {
    icon: "/images/favicon-m.png",
    apple: "/images/favicon-m.png",
  },
  openGraph: {
    title: "Monika Mustard Oil | Pure Taste. Pure Tradition.",
    description:
      "Premium mustard oil crafted for authentic Indian cooking.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jakarta.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-ink overscroll-none">
        <StoreProvider>
          <SiteShell>{children}</SiteShell>
        </StoreProvider>
      </body>
    </html>
  );
}
