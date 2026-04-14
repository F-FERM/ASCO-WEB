"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import Link from "next/link";

const logos = [
  "/clients_ (1).png",
  "/clients_ (2).png",
  "/clients_ (3).png",
  "/clients_ (4).png",
  "/clients_ (5).png",
  "/clients_ (6).png",
  "/clients_ (7).png",
  "/clients_ (8).png",
  "/clients_ (9).png",
  "/clients_ (10).png",
  "/clients_ (11).png",
  "/clients_ (12).png",
  "/clients_ (13).png",
  "/clients_ (14).png",
  "/clients_ (15).png",
  "/clients_ (16).png",
  "/clients_ (17).png",
  "/clients_ (18).png",
  "/clients_ (19).png",
  "/clients_ (20).png",
  "/clients_ (21).png",
  "/clients_ (22).png",
  "/clients_ (23).png",
  "/clients_ (24).png",
];

export default function ClientsSection() {
  const firstRow = logos.slice(0, 12);
  const secondRow = logos.slice(12, 24);

  return (
    <section className="bg-white py-20 md:py-28 overflow-hidden">
      <Container>
        {/* TITLE */}
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold">
            <span className="text-[#EFDF0E]">ASCO</span> CLIENTS
          </h2>
          <p className="mt-4 text-sm md:text-base text-gray-600">
            ASCO is an integral part of the landscape of the State of Qatar. We
            have developed much of the nation’s infrastructure and building
            sector. Our clients include most government departments, as well as
            several major local and international corporations.
          </p>
          <Link href="/clients">
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="mt-6 bg-[#EFDF0E] px-5 py-2 rounded-[8px] text-sm"
            >
              View All →
            </motion.button>
          </Link>
        </div>

        {/* LOGO ROWS */}
        <div className="mt-14 space-y-10">
          {/* ROW 1 */}
          <div className="overflow-hidden">
            <div className="flex gap-8 md:gap-10 animate-marquee">
              {[...firstRow, ...firstRow].map((logo, i) => (
                <div
                  key={i}
                  className="min-w-[200px] md:min-w-[260px] flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo}
                      alt="client"
                      width={200}
                      height={120}
                      className="w-[140px] md:w-[200px] h-auto object-contain"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          {/* ROW 2 */}
          <div className="overflow-hidden">
            <div className="flex gap-8 md:gap-10 animate-marquee-reverse">
              {[...secondRow, ...secondRow].map((logo, i) => (
                <div
                  key={i}
                  className="min-w-[200px] md:min-w-[260px] flex items-center justify-center"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      y: -4,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 20,
                    }}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src={logo}
                      alt="client"
                      width={200}
                      height={120}
                      className="w-[140px] md:w-[200px] h-auto object-contain"
                    />
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
