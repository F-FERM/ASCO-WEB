"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <Container>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[600px] h-[350px] md:h-[420px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <Image
                    src="/about_img.png"
                    alt="About ASCO"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* TEXT (CINEMATIC) */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.25,
                },
              },
            }}
          >
            {/* HEADING */}
            <motion.h2 className="text-2xl md:text-3xl font-semibold mb-4 overflow-hidden">
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
                ABOUT <span className="text-[#EFDF0E]">ASCO</span>
              </motion.span>
            </motion.h2>

            {/* PARAGRAPHS */}
            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              {[
                `From 1972 onwards, ASCO has grown steadily within the State of Qatar, undertaking a broad portfolio of building and civil engineering projects that have shaped the face of Qatar and contributed to its development on the global stage.`,
                `ASCO began its journey with design, planning, and supervision of the country’s water supply systems. Building on early success, the company expanded its services into multiple sectors, collaborating directly with government bodies on municipal infrastructure developments and serving both local and international clients across industrial, commercial, and residential projects.`,
                `Today, ASCO stands as a premier provider of highly skilled consultancy services, with extensive local expertise combined with international experience. The company delivers a wide range of high-value design, engineering, and management solutions.`,
                `ASCO has built a strong reputation by consistently delivering projects within strict timelines and budgets, while maintaining the highest standards of quality and service.`,
              ].map((text, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
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
                >
                  <p>{text}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* VISION + MISSION */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 md:mt-20">
          {/* VISION */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            }}
            className="bg-white rounded-[20px] p-[30px] shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#EFDF0E]">ASCO</span> VISION
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              ASCO aims to reshape Qatar’s urban skyline by enhancing the
              lifestyle of every citizen and contributing to the development of
              communities across the nation and the wider region.
            </p>
          </motion.div>

          {/* MISSION */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            whileHover={{
              y: -10,
              boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
            }}
            className="bg-white rounded-[20px] p-[30px] shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#EFDF0E]">ASCO</span> MISSION
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              ASCO is committed to transforming ideas into reality — from
              initial concept through detailed design and planning — by
              utilizing world-class engineering expertise and delivering
              projects efficiently, creating functional and impactful spaces.
            </p>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
