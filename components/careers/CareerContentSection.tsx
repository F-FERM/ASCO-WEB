"use client";

import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function CareerContentSection() {
  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT CONTENT */}
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
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.7,
                    ease: [0.25, 0.1, 0.25, 1],
                  },
                },
              }}
              className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-black"
            >
              Why Work With Us
            </motion.h2>

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
              className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-[500px]"
            >
              ASCO’s 50 years of achievement has been driven by its people. We
              empower talent through trust, expertise, and continuous growth.
              Join us to push beyond limits and make a meaningful impact on the
              urban landscape.
            </motion.p>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0px 20px 40px rgba(0,0,0,0.1)",
              }}
              className="w-full max-w-[420px] bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm transition"
            >
              <h3 className="text-[18px] md:text-[20px] font-semibold text-black text-center">
                Upload Your CV
              </h3>

              {/* FILE INPUT */}
              <div className="mt-6 flex items-center gap-2 border border-gray-200 rounded-full px-4 py-2">
                <input
                  type="file"
                  className="w-full text-sm text-gray-600 file:mr-3 file:py-1 file:px-3 file:rounded-full file:border-0 file:bg-gray-100 file:text-sm file:cursor-pointer"
                />
              </div>

              {/* BUTTON */}
              <button className="mt-6 w-full bg-[#EFDF0E] text-black rounded-[8px] py-2.5 text-sm md:text-base font-medium hover:opacity-90 hover:scale-[1.03] transition">
                Upload
              </button>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
