"use client";

import Image from "next/image";
import Link from "next/link";
import Container from "@/components/Container";

export default function HomeIntroSection() {
  return (
    <section className="bg-[white] py-20 md:py-28">
      <Container>
        {/* SECTION 1 */}
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20">
          {/* LEFT TEXT */}
          <div className="max-w-[520px]">
            <h2 className="font-[Poppins] font-semibold text-black text-[46px] leading-[77px]">
              Welcome to <span className="text-[#EFDF0E]">ASCO</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              For half a century, ASCO has been a proud contributor to the
              growth and development of Qatar into the most prominent position
              the nation holds on the world stage today. ASCO is one of Qatar’s
              leading multi-disciplinary engineering consultancy firms,
              excelling in the design and completion of projects across a wide
              range of industry sectors, for a prestigious portfolio of
              government, corporate and international clients.
            </p>

            <Link href="/services">
              <button className="mt-6 bg-[#EFDF0E] text-black rounded-[10px] px-5 py-2.5 text-sm hover:opacity-90 transition">
                View Service →
              </button>
            </Link>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-[600px] h-[260px] sm:h-[300px] md:h-[360px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/home_intro_1.png"
                  alt="Engineering"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 2 */}
        <div className="grid md:grid-cols-2 items-center gap-12 md:gap-20 mt-24 md:mt-32">
          {/* LEFT IMAGE */}
          <div className="flex justify-center md:justify-start order-2 md:order-1">
            <div className="relative w-full max-w-[600px] h-[260px] sm:h-[300px] md:h-[360px]">
              <div className="w-full h-full overflow-hidden rounded-[24px]">
                <Image
                  src="/home_intro_2.png"
                  alt="About ASCO"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* RIGHT TEXT */}
          <div className="max-w-[520px] order-1 md:order-2">
            <h2 className="font-[Poppins] font-semibold text-black text-[46px] leading-[77px]">
              ABOUT <span className="text-[#EFDF0E]">ASCO</span>
            </h2>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              Since 1970, we have grown alongside Qatar, contributing to a
              diverse range of building and engineering projects that have
              helped shape its modern landscape. Our expertise spans multiple
              sectors, driven by a commitment to quality, innovation, and
              long-term value through strong partnerships and forward-thinking
              approaches.
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
