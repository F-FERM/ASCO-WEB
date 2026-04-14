"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function CareerHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        {/* BACKGROUND (ZOOM ANIMATION) */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <Image
            src="/career_hero.png"
            alt="Careers"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: {
                  transition: { staggerChildren: 0.2 },
                },
              }}
              className="text-white max-w-[700px] mx-auto px-4"
            >
              {/* HEADING */}
              <motion.h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-semibold overflow-hidden">
                <motion.span
                  variants={{
                    hidden: { y: "100%", opacity: 0 },
                    show: {
                      y: "0%",
                      opacity: 1,
                      transition: {
                        duration: 0.8,
                        ease: [0.25, 0.1, 0.25, 1],
                      },
                    },
                  }}
                  className="block"
                >
                  <span className="text-[#EFDF0E]">ASCO</span> CAREERS
                </motion.span>
              </motion.h1>

              {/* TEXT */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 30, filter: "blur(6px)" },
                  show: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: {
                      duration: 0.7,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                className="mt-2 text-sm md:text-base text-gray-200"
              >
                Build Your Future With A Team That Values Expertise, Growth, And
                Innovation.
              </motion.p>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
