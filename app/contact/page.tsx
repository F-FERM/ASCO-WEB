import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import React from "react";
import Navbar from "@/components/nav/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact ASCO Qatar | Get in Touch with Engineering Experts",
  description:
    "Contact ASCO Qatar for engineering consultancy, infrastructure solutions, and project inquiries. Reach out to our team for expert guidance and support.",

  openGraph: {
    title: "Contact ASCO Qatar",
    description:
      "Get in touch with ASCO Qatar for professional engineering and consultancy services.",
    url: "https://www.ascoqatar.com/contact",
    siteName: "ASCO Qatar",
    images: [
      {
        url: "/icon.png",
        alt: "ASCO Contact",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact ASCO Qatar",
    description:
      "Reach out to ASCO Qatar for engineering consultancy and infrastructure solutions.",
    images: ["/icon.png"],
  },

  alternates: {
    canonical: "https://www.ascoqatar.com/contact",
  },

  icons: {
    icon: "/icon.png",
  },
};

const Contact = () => {
  return (
    <main>
      <Navbar />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Contact;
