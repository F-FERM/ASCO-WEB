"use client";

import Image from "next/image";
import Container from "@/components/Container";
import { motion } from "framer-motion";

export default function CareerIntroSection() {
  return (
    <section className="w-full bg-white py-10 md:py-14 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
          {/* LEFT - IMAGE */}
          <div className="relative w-full h-[240px] sm:h-[300px] md:h-[360px] lg:h-[400px] rounded-2xl overflow-hidden">
            <Image
              src="/career_team.png"
              alt="ASCO Team"
              fill
              className="object-cover"
            />
          </div>

          {/* RIGHT - CONTENT */}
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[32px] font-semibold text-gray-900">
              Build Your Future <span className="text-[#EFDF0E]">with us</span>
            </h2>

            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-[3px] bg-[#EFDF0E] mt-3 mb-4 rounded-full"
            />

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              Join ASCO Qatar Consulting Engineers and become part of a dynamic
              team dedicated to shaping the future of engineering excellence in
              Qatar.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
              Work alongside experienced professionals on diverse and impactful
              projects that contribute to the nation’s growth and development.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
              We foster a collaborative environment that encourages innovation,
              continuous learning, and professional advancement.
            </p>

            <p className="mt-3 text-sm md:text-base text-gray-600 leading-relaxed">
              Whether you are an experienced expert or an aspiring talent, ASCO
              provides the platform and opportunities to build a rewarding
              career.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
