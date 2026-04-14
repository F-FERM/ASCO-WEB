"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function ServiceHeroSection() {
  return (
    <section className="w-full bg-white">
      {/* HERO */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[320px] lg:h-[380px] xl:h-[420px] overflow-hidden">
        {/* IMAGE */}
        <Image
          src="/service_hero.jpg"
          alt="Services"
          fill
          priority
          className="object-cover object-[center_40%]"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/25 to-transparent" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <Container>
            <div className="max-w-[700px] mx-auto text-white px-4 sm:px-6">
              {/* HEADING */}
              <h1
                className="
                font-semibold
                leading-tight
                text-[18px]
                sm:text-[22px]
                md:text-[28px]
                lg:text-[34px]
                xl:text-[38px]
              "
              >
                <span className="text-[#EFDF0E]">ASCO</span> SERVICES
              </h1>

              {/* SUBTEXT */}
              <p
                className="
                mt-2 sm:mt-3
                text-[11px]
                sm:text-[13px]
                md:text-[15px]
                lg:text-[16px]
                text-gray-200
                leading-relaxed
              "
              >
                Delivering High-Quality, Cost-Effective Engineering And Design
                Solutions From
                <br className="hidden sm:block" />
                Concept To Completion
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
