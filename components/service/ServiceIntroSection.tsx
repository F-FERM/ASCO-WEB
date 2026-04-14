"use client";

import Image from "next/image";
import Container from "@/components/Container";

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
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        {/* TOP SECTION */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[520px] h-[260px] sm:h-[300px] md:h-[320px]">
              <div className="w-full h-full overflow-hidden rounded-[20px] clip-shape-2">
                <Image
                  src="/service_intro.png"
                  alt="Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* TEXT */}
          <div className="text-gray-600 text-sm md:text-base leading-relaxed space-y-4">
            <p>
              ASCO provides a comprehensive range of services, delivered by
              globally skilled, accredited and experienced staff. From initial
              concepts to final documentation, we deliver a high-quality,
              cost-effective product at all stages of the project.
            </p>

            <p>
              Supporting all project design and management needs, our CAD
              department deploys the latest AutoCAD releases and associated
              architectural, structural, MEP and civil engineering design
              software. With a fully trained complement of CAD technicians and
              engineers, a comprehensive library of standard details, and the
              ability to program task-specific AutoLISP routines, ASCO can
              quickly and efficiently produce contract drawings.
            </p>

            <p>
              ASCO also employs a dedicated department to smoothly facilitate
              the vital task of building permit processing for our local and
              international clients.
            </p>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="mt-10 md:mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className="
    flex items-center justify-between
    border border-gray-200
    rounded-[20px]
    px-[25px] py-[20px] md:py-[24px]
    bg-[#white]
    hover:bg-white hover:shadow-sm
    transition
    min-h-[77px]
    shadow-lg
  "
            >
              {/* LEFT CONTENT */}
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 bg-[#EFDF0E] rounded-full shrink-0" />

                <p className="text-[13px] md:text-[14px] text-gray-700 leading-snug">
                  {item}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
