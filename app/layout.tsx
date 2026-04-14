import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Nav";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.ascoqatar.com"),

  title: {
    default: "ASCO Qatar",
    template: "%s | ASCO Qatar",
  },

  description:
    "ASCO Qatar is a leading engineering consultancy firm delivering innovative infrastructure, architectural, and construction solutions.",

  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/icon.png",
  },

  openGraph: {
    title: "ASCO Qatar",
    description:
      "Engineering excellence that shapes the future of infrastructure.",
    url: "https://www.ascoqatar.com",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Qatar",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASCO Qatar",
    description:
      "Engineering excellence that shapes the future of infrastructure.",
    images: ["/icon.png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
