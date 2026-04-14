"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function AboutSection() {
  return (
    <section className="bg-[#white] py-20 md:py-28">
      <Container>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[600px] h-[350px] md:h-[420px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/about_img.png"
                  alt="About ASCO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              ABOUT <span className="text-[#EFDF0E]">ASCO</span>
            </h2>

            <div className="space-y-4 text-sm md:text-base text-gray-600 leading-relaxed">
              <p>
                From 1972 onwards, ASCO has grown steadily within the State of
                Qatar, undertaking a broad portfolio of building and civil
                engineering projects that have shaped the face of Qatar and
                contributed to its development on the global stage.
              </p>

              <p>
                ASCO began its journey with design, planning, and supervision of
                the country’s water supply systems. Building on early success,
                the company expanded its services into multiple sectors,
                collaborating directly with government bodies on municipal
                infrastructure developments and serving both local and
                international clients across industrial, commercial, and
                residential projects.
              </p>

              <p>
                Today, ASCO stands as a premier provider of highly skilled
                consultancy services, with extensive local expertise combined
                with international experience. The company delivers a wide range
                of high-value design, engineering, and management solutions.
              </p>

              <p>
                ASCO has built a strong reputation by consistently delivering
                projects within strict timelines and budgets, while maintaining
                the highest standards of quality and service.
              </p>
            </div>
          </div>
        </div>

        {/* VISION + MISSION */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 md:mt-20">
          {/* VISION */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#EFDF0E]">ASCO</span> VISION
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              ASCO aims to reshape Qatar’s urban skyline by enhancing the
              lifestyle of every citizen and contributing to the development of
              communities across the nation and the wider region.
            </p>
          </div>

          {/* MISSION */}
          <div className="bg-white rounded-[20px] p-[30px] shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              <span className="text-[#EFDF0E]">ASCO</span> MISSION
            </h3>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              ASCO is committed to transforming ideas into reality — from
              initial concept through detailed design and planning — by
              utilizing world-class engineering expertise and delivering
              projects efficiently, creating functional and impactful spaces.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
