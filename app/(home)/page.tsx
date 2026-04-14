import type { Metadata } from "next";
import ClientsSection from "@/components/ClientsSection";
import HeroSection from "@/components/HeroSection";
import HomeIntroSection from "@/components/HomeIntroSection";
import ServicesSection from "@/components/ServicesSection";
import React from "react";

export const metadata: Metadata = {
  title: "ASCO Qatar | Engineering Consultancy & Infrastructure Solutions",
  description:
    "ASCO Qatar is a leading multi-disciplinary engineering consultancy firm delivering high-quality infrastructure, architectural, and construction solutions across multiple sectors.",

  keywords: [
    "ASCO Qatar",
    "engineering consultancy Qatar",
    "infrastructure development",
    "construction supervision",
    "architectural design Qatar",
    "civil engineering services",
    "project management Qatar",
  ],

  openGraph: {
    title: "ASCO Qatar | Engineering Excellence",
    description:
      "Delivering innovative engineering and consultancy solutions from concept to completion.",
    url: "https://www.ascoqatar.com",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Qatar Engineering",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASCO Qatar",
    description:
      "Leading engineering consultancy delivering infrastructure and design solutions.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com",
  },
};

const Home = () => {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "ASCO Qatar",
            url: "https://www.ascoqatar.com",
            logo: "https://www.ascoqatar.com/icon.png",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+97444100500",
              contactType: "customer service",
            },
          }),
        }}
      />
      <HeroSection />
      <HomeIntroSection />
      <ServicesSection />
      <ClientsSection />
    </main>
  );
};

export default Home;
