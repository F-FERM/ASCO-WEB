"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function ClientIntroSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 1.1 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-start"
          >
            <div className="relative w-full max-w-[600px] lg:max-w-[640px] h-[260px] sm:h-[300px] md:h-[320px]">
              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <motion.div
                  initial={{ scale: 1.2 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
                  viewport={{ once: true }}
                  className="w-full h-full"
                >
                  <Image
                    src="/clients_intro.png"
                    alt="Clients"
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT */}
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
            className="space-y-4 text-gray-600 md:-ml-4 lg:-ml-6"
          >
            {/* TITLE */}
            <motion.h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-black overflow-hidden">
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
                <span className="text-[#EFDF0E]">ASCO</span> CLIENTS
              </motion.span>
            </motion.h2>

            {/* TEXT */}
            {[
              `ASCO plays a significant role in shaping the infrastructure and development of the State of Qatar. Over the years, the company has contributed to building key projects that support the nation’s growth, including major facilities and essential structures. Its expertise spans across various sectors within construction and engineering, helping create a strong and modern built environment.`,
              `ASCO has earned the trust of a wide range of clients, including many government departments as well as prominent local and international organizations. This broad client base reflects the company’s reliability, quality of work, and commitment to delivering successful projects that meet high standards.`,
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
                className="text-sm md:text-base leading-relaxed"
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
