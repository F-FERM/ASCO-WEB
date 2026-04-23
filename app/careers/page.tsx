import type { Metadata } from "next";
import CareerContentSection from "@/components/careers/CareerContentSection";
import CareerHeroSection from "@/components/careers/CareerHeroSection";
import React from "react";
import Navbar from "@/components/nav/Nav";
import Footer from "@/components/Footer";
import CareerIntroSection from "@/components/careers/CareerIntroSection";
import CareerCv from "@/components/careers/CareerCv";

export const metadata: Metadata = {
  title: "Careers at ASCO Qatar | Join Our Engineering Team",
  description:
    "Explore career opportunities at ASCO Qatar. Join a team of experts delivering innovative engineering and infrastructure solutions across multiple sectors.",

  openGraph: {
    title: "Careers at ASCO Qatar",
    description:
      "Build your future with ASCO Qatar. Join our team and grow with industry-leading engineering expertise.",
    url: "https://www.ascoqatar.com/careers",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Careers",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Careers at ASCO Qatar",
    description:
      "Join ASCO Qatar and be part of innovative engineering projects.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com/careers",
  },

  icons: {
    icon: "/icon.png",
  },
};

const Careers = () => {
  return (
    <main>
      <Navbar />
      <CareerHeroSection />
      <CareerIntroSection />
      <CareerContentSection />
      <Footer />
    </main>
  );
};

export default Careers;
