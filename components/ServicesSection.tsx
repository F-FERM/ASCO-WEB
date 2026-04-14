"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/Container";
import { motion } from "framer-motion";
import { Variants } from "framer-motion";

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

const containerAnim = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardAnim: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
    <section className="bg-white py-16 md:py-24 relative overflow-hidden">
      {/* ANIMATED BACKGROUND GRADIENT */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-[#EFDF0E] to-transparent opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-[#EFDF0E] to-transparent opacity-10 rounded-full blur-3xl"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </div>

      <Container>
        {/* TITLE WITH ENHANCED ANIMATION */}
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <motion.h2 className="text-2xl md:text-4xl font-bold">
              <motion.span
                className="inline-block text-[#EFDF0E]"
                animate={{
                  textShadow: [
                    "0px 0px 20px rgba(239, 223, 14, 0)",
                    "0px 0px 20px rgba(239, 223, 14, 0.5)",
                    "0px 0px 20px rgba(239, 223, 14, 0)",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                ASCO
              </motion.span>
              {" SERVICES"}
            </motion.h2>
          </motion.div>
        </div>

        {/* SCROLL AREA */}
        <motion.div
          ref={scrollRef}
          variants={containerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="
            flex gap-6 overflow-x-auto scrollbar-hide
            cursor-grab active:cursor-grabbing
            select-none relative z-10
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
          {services.map((item, i) => (
            <motion.div
              key={item.id}
              variants={cardAnim}
              onMouseEnter={() => setHoveredId(item.id)}
              onMouseLeave={() => setHoveredId(null)}
              whileHover={{
                y: -12,
                scale: 1.08,
              }}
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                y: {
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.15,
                },
              }}
              className="
                min-w-[240px] sm:min-w-[260px] md:min-w-[277px]
                h-[240px] sm:h-[260px] md:h-[277px]
                bg-gradient-to-br from-[#EFDF0E] via-[#EFDF0E] to-[#E8D700]
                rounded-[20px]
                px-[21px] py-6
                flex flex-col justify-between
                shrink-0
                relative overflow-hidden
                group
              "
            >
              {/* SHIMMER EFFECT BACKGROUND */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0"
                animate={{
                  x: ["100%", "-100%"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "linear",
                  delay: hoveredId === item.id ? 0 : 999,
                }}
              />

              {/* GLOW EFFECT ON HOVER */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 blur-xl"
                animate={{
                  opacity: hoveredId === item.id ? 0.3 : 0,
                }}
                transition={{ duration: 0.3 }}
              />

              {/* ANIMATED BORDER */}
              <motion.div
                className="absolute inset-0 rounded-[20px] pointer-events-none"
                animate={{
                  boxShadow:
                    hoveredId === item.id
                      ? "inset 0 0 20px rgba(255,255,255,0.5), 0px 15px 35px rgba(239, 223, 14, 0.3)"
                      : "0px 0px 4px 0px rgba(0,0,0,0.1)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* NUMBER WITH SCALE ANIMATION */}
              <motion.div
                className="flex justify-end text-3xl md:text-4xl font-semibold relative z-10"
                animate={{
                  scale: hoveredId === item.id ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.id}
              </motion.div>

              {/* TITLE WITH REVEAL ANIMATION */}
              <motion.div
                className="text-sm md:text-base font-medium leading-snug max-w-[180px] relative z-10 font-semibold text-black"
                initial={{ opacity: 0.8 }}
                animate={{
                  opacity: hoveredId === item.id ? 1 : 0.8,
                }}
                transition={{ duration: 0.3 }}
              >
                {item.title}

                {/* ANIMATED UNDERLINE */}
                <motion.div
                  className="h-0.5 bg-black mt-2 origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{
                    scaleX: hoveredId === item.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
