import type { Metadata } from "next";
import ClientIntroSection from "@/components/clients/ClientIntroSection";
import ClientsGridSection from "@/components/clients/ClientsGridSection";
import React from "react";
import Navbar from "@/components/nav/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "ASCO Clients | Trusted Engineering Partnerships in Qatar",
  description:
    "Explore ASCO Qatar’s diverse client portfolio including government, corporate, and international organizations. Delivering trusted engineering and infrastructure solutions.",

  openGraph: {
    title: "ASCO Clients",
    description:
      "Discover ASCO Qatar’s trusted clients across multiple industries and sectors.",
    url: "https://www.ascoqatar.com/clients",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Clients",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ASCO Clients",
    description:
      "Trusted by leading organizations for engineering and infrastructure excellence.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com/clients",
  },

  icons: {
    icon: "/icon.png",
  },
};

const Clients = () => {
  return (
    <main>
      <Navbar />
      <ClientIntroSection />
      <ClientsGridSection />
      <Footer />
    </main>
  );
};

export default Clients;
