"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const stagger = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function HomeIntroSection() {
  return (
    <section className="bg-[white] py-20 md:py-28">
      <Container>
        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
          {/* LEFT TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[520px]"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[Poppins] font-semibold text-black text-[46px] leading-[77px]"
            >
              Welcome to <span className="text-[#EFDF0E]">ASCO</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 text-sm leading-relaxed"
            >
              For half a century, ASCO has been a proud contributor to the
              growth and development of Qatar into the most prominent position
              the nation holds on the world stage today. ASCO is one of Qatar’s
              leading multi-disciplinary engineering consultancy firms,
              excelling in the design and completion of projects across a wide
              range of industry sectors, for a prestigious portfolio of
              government, corporate and international clients.
            </motion.p>

            <motion.div variants={fadeUp}>
              <Link href="/service">
                <button className="mt-6 bg-[#EFDF0E] text-black rounded-[10px] px-5 py-2.5 text-sm hover:opacity-90 hover:scale-[1.05] transition">
                  View Service →
                </button>
              </Link>
            </motion.div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <div className="relative w-full max-w-[600px] h-[260px] sm:h-[300px] md:h-[360px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/home_intro_1.png"
                  alt="Engineering"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20 mt-24 md:mt-32">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start order-2 md:order-1"
          >
            <div className="relative w-full max-w-[600px] h-[260px] sm:h-[300px] md:h-[360px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/home_intro_2.png"
                  alt="About ASCO"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="max-w-[520px] order-1 md:order-2"
          >
            <motion.h2
              variants={fadeUp}
              className="font-[Poppins] font-semibold text-black text-[46px] leading-[77px]"
            >
              ABOUT <span className="text-[#EFDF0E]">ASCO</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-600 text-sm leading-relaxed"
            >
              Since 1970, we have grown alongside Qatar, contributing to a
              diverse range of building and engineering projects that have
              helped shape its modern landscape. Our expertise spans multiple
              sectors, driven by a commitment to quality, innovation, and
              long-term value through strong partnerships and forward-thinking
              approaches.
            </motion.p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
