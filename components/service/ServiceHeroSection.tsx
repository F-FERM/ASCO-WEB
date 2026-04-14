"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function ServiceHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden">
        {/* IMAGE ZOOM */}
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.8 }}
          className="absolute inset-0"
        >
          <Image
            src="/service_hero.jpg"
            alt="Services"
            fill
            priority
            className="object-cover object-[center_40%]"
          />
        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <Container>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.2 } },
              }}
              className="max-w-[700px] mx-auto text-white px-4 sm:px-6"
            >
              {/* HEADING */}
              <motion.h1
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  show: {
                    y: 0,
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      ease: [0.25, 0.1, 0.25, 1],
                    },
                  },
                }}
                className="
                  font-semibold leading-tight
                  text-[18px] sm:text-[22px]
                  md:text-[28px] lg:text-[34px] xl:text-[38px]
                "
              >
                <span className="text-[#EFDF0E]">ASCO</span> SERVICES
              </motion.h1>

              {/* TEXT */}
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.7 },
                  },
                }}
                className="
                  mt-2 sm:mt-3
                  text-[11px] sm:text-[13px]
                  md:text-[15px] lg:text-[16px]
                  text-gray-200 leading-relaxed
                "
              >
                Delivering High-Quality, Cost-Effective Engineering And Design
                Solutions From
                <br className="hidden sm:block" />
                Concept To Completion
              </motion.p>
            </motion.div>
          </Container>
        </div>
      </div>
    </section>
  );
}
