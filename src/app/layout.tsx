import type { Metadata, Viewport } from "next";
import SiteShell from "@/components/SiteShell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Aurona Academy | Better Guidance, Brighter Futures",
    template: "%s | Aurona Academy",
  },
  description:
    "Explore online tutoring, academic support, and personalised learning programmes offered by Aurona Academy.",
  applicationName: "Aurona Academy",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://auronaacademy.vercel.app"),
  openGraph: {
    type: "website",
    siteName: "Aurona Academy",
    title: "Aurona Academy | Better Guidance, Brighter Futures",
    description:
      "Personalised online tutoring and academic support for students and professionals.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#082d4f",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body><SiteShell>{children}</SiteShell></body>
    </html>
  );
}
