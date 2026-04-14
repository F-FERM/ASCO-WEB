"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[520px] md:h-[620px] lg:h-[720px] overflow-hidden">
      {/* Background */}
      <Image
        src="/hero_section.jpg"
        alt="Hero Background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/30" />

      {/* Content Wrapper */}
      <div className="relative z-10 h-full flex items-center">
        <Container>
          <div className="max-w-[865px]">
            <h1
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
            </h1>

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
                  hover:opacity-90 transition
                "
              >
                Explore More About Us →
              </button>
            </Link>
          </div>
        </Container>
      </div>
    </section>
  );
}
