"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function CareerHeroSection() {
  return (
    <section className="w-full bg-white">
      <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] overflow-hidden">
        <Image
          src="/career_hero.png"
          alt="Careers"
          fill
          priority
          className="object-cover object-center"
        />

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/50" />

        {/* CONTENT */}
        <div className="absolute inset-0 flex items-center justify-center text-center">
          <Container>
            <div className="text-white max-w-[700px] mx-auto px-4">
              <h1 className="text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] font-semibold">
                <span className="text-[#EFDF0E]">ASCO</span> CAREERS
              </h1>

              <p className="mt-2 text-sm md:text-base text-gray-200">
                Build Your Future With A Team That Values Expertise, Growth, And
                Innovation.
              </p>
            </div>
          </Container>
        </div>
      </div>
    </section>
  );
}
