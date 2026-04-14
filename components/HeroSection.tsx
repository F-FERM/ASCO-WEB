"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function HeroSection() {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden">
      {/* Background */}
      <Image
        src="/hero_section.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover scale-105"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <Container>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }} // 👈 scroll trigger
            className="max-w-[865px]"
          >
            {/* HEADING */}
            <motion.h1
              variants={fadeUp}
              className="
                text-white font-semibold font-[Poppins]
                text-[26px] leading-[40px]
                sm:text-[32px] sm:leading-[48px]
                md:text-[40px] md:leading-[60px]
                lg:text-[46px] lg:leading-[77px]
              "
            >
              Engineering excellence that shapes{" "}
              <br className="hidden sm:block" />
              the future of infrastructure.
            </motion.h1>

            {/* BUTTON */}
            <motion.div variants={fadeUp}>
              <Link href="/about">
                <button
                  className="
                    mt-6
                    bg-[#EFDF0E]
                    text-black
                    font-medium
                    rounded-[10px]
                    px-[19px] py-[12px]
                    flex items-center gap-[10px]
                    text-sm sm:text-base
                    hover:opacity-90
                    hover:scale-[1.05]
                    transition
                  "
                >
                  Explore More About Us →
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </Container>
      </div>
    </section>
  );
}
