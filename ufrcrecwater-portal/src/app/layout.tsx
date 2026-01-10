import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { PAGES } from "@/config/navigation";
import Header from "../../components/header/header";

// WHY: Single global font keeps typography consistent and lightweight
const geistSans = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: PAGES.home.title,
    template: `%s | ${PAGES.home.title}`,
    // WHY: template enforces consistent branding across all pages
  },
  description: PAGES.home.description,
    // WHY: concise, human-readable description for search previews
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.className} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}