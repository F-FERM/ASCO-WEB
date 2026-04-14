"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

const services = [
  "Building Permit Processing",
  "Landscaping Design",
  "Building Services Design",
  "Construction Supervision",
  "Health & Safety",
  "Architectural Building Design",
  "Structural Design",
  "Interior Design",
  "Civil Engineering Design",
  "Project Management",
  "Quality Control",
  "Review Of Contractor’s Proposals",
];

export default function ServiceIntroSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[520px] h-[260px] sm:h-[300px] md:h-[320px]">
              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2 }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <Image
                    src="/service_intro.png"
                    alt="Services"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.2 } },
            }}
            className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4"
          >
            {[
              `ASCO provides a comprehensive range of services, delivered by globally skilled, accredited and experienced staff. From initial concepts to final documentation, we deliver a high-quality, cost-effective product at all stages of the project.`,
              `Supporting all project design and management needs, our CAD department deploys the latest AutoCAD releases and associated architectural, structural, MEP and civil engineering design software.`,
              `ASCO also employs a dedicated department to smoothly facilitate the vital task of building permit processing for our local and international clients.`,
            ].map((text, i) => (
              <motion.p
                key={i}
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
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        {/* SERVICES GRID */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {services.map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 },
                },
              }}
              whileHover={{
                y: -6,
                scale: 1.02,
              }}
              className="
                flex items-center justify-between
                border border-gray-200
                rounded-[20px]
                px-[25px] py-[20px] md:py-[24px]
                bg-white
                shadow-md
                transition
                min-h-[77px]
              "
            >
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#EFDF0E] rounded-full shrink-0" />

                <p className="text-[13px] md:text-[14px] text-gray-700 leading-snug">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
