"use client";

import { useEffect, useRef } from "react";
import Container from "@/components/Container";

const services = [
  { id: "01", title: "Building Permit Processing" },
  { id: "02", title: "Landscaping Design" },
  { id: "03", title: "Building Services Design" },
  { id: "04", title: "Construction Supervision" },
  { id: "05", title: "Interior Design" },
  { id: "06", title: "Quality Control" },
  { id: "07", title: "Architectural Building Design" },
  { id: "08", title: "Civil Engineering Design" },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let direction = 1;
    let speed = 0.5;
    let isUserInteracting = false;
    let isAutoScrolling = false;
    let timeout: NodeJS.Timeout;

    const scroll = () => {
      if (!container || isUserInteracting) return;

      isAutoScrolling = true;

      container.scrollLeft += speed * direction;

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth
      ) {
        direction = -1;
      } else if (container.scrollLeft <= 0) {
        direction = 1;
      }

      // allow scroll event after this frame
      requestAnimationFrame(() => {
        isAutoScrolling = false;
      });
    };

    const stopAutoScroll = () => {
      isUserInteracting = true;

      clearTimeout(timeout);
      timeout = setTimeout(() => {
        isUserInteracting = false;
      }, 1500);
    };

    const handleScroll = () => {
      // ignore auto scroll triggers
      if (isAutoScrolling) return;

      stopAutoScroll();
    };

    container.addEventListener("mouseenter", stopAutoScroll);
    container.addEventListener("touchstart", stopAutoScroll);
    container.addEventListener("scroll", handleScroll);

    const interval = setInterval(scroll, 16);

    return () => {
      clearInterval(interval);
      container.removeEventListener("mouseenter", stopAutoScroll);
      container.removeEventListener("touchstart", stopAutoScroll);
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="bg-[white] py-16 md:py-24">
      <Container>
        {/* TITLE */}
        <h2 className="text-2xl md:text-3xl font-semibold mb-10">
          <span className="text-[#EFDF0E]">ASCO</span> <span className="text-black">SERVICES</span>
        </h2>

        {/* SCROLL AREA */}
        <div
          ref={scrollRef}
          className="
            flex gap-6 overflow-x-auto scrollbar-hide
            cursor-grab active:cursor-grabbing
            select-none
          "
          onMouseDown={(e) => {
            const container = scrollRef.current;
            if (!container) return;

            let startX = e.pageX - container.offsetLeft;
            let scrollLeft = container.scrollLeft;

            const onMouseMove = (e: MouseEvent) => {
              const x = e.pageX - container.offsetLeft;
              const walk = (x - startX) * 1.5;
              container.scrollLeft = scrollLeft - walk;
            };

            const stop = () => {
              document.removeEventListener("mousemove", onMouseMove);
              document.removeEventListener("mouseup", stop);
            };

            document.addEventListener("mousemove", onMouseMove);
            document.addEventListener("mouseup", stop);
          }}
        >
          {services.map((item) => (
            <div
              key={item.id}
              className="
                min-w-[240px] sm:min-w-[260px] md:min-w-[277px]
                h-[240px] sm:h-[260px] md:h-[277px]
                bg-[#EFDF0E]
                rounded-[20px]
                px-[21px] py-6
                shadow-[0px_0px_4px_0px_#00000040]
                flex flex-col justify-between
                shrink-0
              "
            >
              {/* NUMBER */}
              <div className="flex justify-end text-3xl md:text-4xl font-semibold text-black">
                {item.id}
              </div>

              {/* TITLE */}
              <div className="text-sm md:text-base font-medium leading-snug max-w-[180px] text-black">
                {item.title}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
