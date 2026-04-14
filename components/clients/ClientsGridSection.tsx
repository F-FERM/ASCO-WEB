"use client";

import Image from "next/image";
import Container from "@/components/Container";

const logos = [
  "/clients_ (1).png",
  "/clients_ (2).png",
  "/clients_ (3).png",
  "/clients_ (4).png",
  "/clients_ (5).png",
  "/clients_ (6).png",
  "/clients_ (7).png",
  "/clients_ (8).png",
  "/clients_ (9).png",
  "/clients_ (10).png",
  "/clients_ (11).png",
  "/clients_ (12).png",
  "/clients_ (13).png",
  "/clients_ (14).png",
  "/clients_ (15).png",
  "/clients_ (16).png",
  "/clients_ (17).png",
  "/clients_ (18).png",
  "/clients_ (19).png",
  "/clients_ (20).png",
  "/clients_ (21).png",
  "/clients_ (22).png",
  "/clients_ (23).png",
  "/clients_ (24).png",
];

export default function ClientsGridSection() {
  return (
    <section className="bg-[white] pb-16 md:pb-24">
      <Container>
        {/* GRID */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {logos.map((logo, i) => (
            <div
              key={i}
              className="
                flex items-center justify-center
                bg-white
                border border-gray-200
                rounded-[20px]
                h-[110px] sm:h-[120px] md:h-[130px] lg:h-[145px]
                px-4
                hover:shadow-md
                transition
                shadow-lg
              "
            >
              <Image
                src={logo}
                alt="client"
                width={140}
                height={80}
                className="object-contain max-h-[60px] md:max-h-[70px]"
              />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
