import type { Metadata } from "next";
import AboutSection from "@/components/about/AboutSection";
import React from "react";

export const metadata: Metadata = {
  title: "About ASCO Qatar | Engineering Consultancy Experts",
  description:
    "Learn more about ASCO Qatar, a leading engineering consultancy firm delivering innovative infrastructure and construction solutions with decades of expertise.",

  openGraph: {
    title: "About ASCO Qatar",
    description:
      "Discover ASCO’s expertise in engineering, infrastructure, and project delivery.",
    url: "https://www.ascoqatar.com/about",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Qatar Logo",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "About ASCO Qatar",
    description:
      "Engineering excellence and infrastructure expertise from ASCO Qatar.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com/about",
  },

  icons: {
    icon: "/icon.png",
  },
};

const About = () => {
  return (
    <main>
      <AboutSection />
    </main>
  );
};

export default About;
