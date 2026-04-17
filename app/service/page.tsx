import type { Metadata } from "next";
import ServiceHeroSection from "@/components/service/ServiceHeroSection";
import ServiceIntroSection from "@/components/service/ServiceIntroSection";
import React from "react";
import Navbar from "@/components/nav/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ASCO Services | Engineering & Infrastructure Solutions in Qatar",
  description:
    "Explore ASCO Qatar’s comprehensive engineering services including architectural design, civil engineering, project management, and construction supervision.",

  openGraph: {
    title: "ASCO Services",
    description:
      "Delivering high-quality engineering and consultancy services across infrastructure and construction sectors.",
    url: "https://www.ascoqatar.com/service",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Services",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASCO Services",
    description:
      "Comprehensive engineering consultancy services from concept to completion.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com/service",
  },

  icons: {
    icon: "/icon.png",
  },
};

const Service = () => {
  return (
    <main>
      <Navbar />
      <ServiceHeroSection />
      <ServiceIntroSection />
      <Footer />
    </main>
  );
};

export default Service;
