"use client";

import Image from "next/image";
import Container from "@/components/Container";

export default function ClientIntroSection() {
  return (
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-center">
          {/* IMAGE */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-full max-w-[600px] lg:max-w-[640px] h-[260px] sm:h-[300px] md:h-[320px]">
              <div className="w-full h-full overflow-hidden rounded-[20px]">
                <Image
                  src="/clients_intro.png"
                  alt="Clients"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* CONTENT */}
          <div className="space-y-4 text-gray-600 md:-ml-4 lg:-ml-6">
            {/* TITLE */}
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] lg:text-[34px] font-semibold text-black">
              <span className="text-[#EFDF0E]">ASCO</span> CLIENTS
            </h2>

            {/* TEXT */}
            <p className="text-sm md:text-base leading-relaxed">
              ASCO plays a significant role in shaping the infrastructure and
              development of the State of Qatar. Over the years, the company has
              contributed to building key projects that support the nation’s
              growth, including major facilities and essential structures. Its
              expertise spans across various sectors within construction and
              engineering, helping create a strong and modern built environment.
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              ASCO has earned the trust of a wide range of clients, including
              many government departments as well as prominent local and
              international organizations. This broad client base reflects the
              company’s reliability, quality of work, and commitment to
              delivering successful projects that meet high standards.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
