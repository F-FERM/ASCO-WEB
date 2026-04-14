"use client";

import Container from "@/components/Container";

export default function CareerContentSection() {
  return (
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[22px] sm:text-[26px] md:text-[30px] font-semibold text-black">
              Why Work With Us
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-600 leading-relaxed max-w-[500px]">
              ASCO’s 50 years of achievement has been driven by its people. We
              empower talent through trust, expertise, and continuous growth.
              Join us to push beyond limits and make a meaningful impact on the
              urban landscape.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="flex justify-center md:justify-end">
            <div className="w-full max-w-[420px] bg-white border border-gray-200 rounded-[16px] p-6 md:p-8 shadow-sm">
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
              <button className="mt-6 w-full bg-[#EFDF0E] text-black rounded-[8px] py-2.5 text-sm md:text-base font-medium hover:opacity-90 transition">
                Upload
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
