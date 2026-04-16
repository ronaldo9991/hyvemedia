import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.06]);
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.6], [1, 1, 0]);

  const taglineOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 0.15], [0, -200]);

  return (
    <section
      ref={sectionRef}
      className="h-[150vh] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #ff7b00 0%, #fbb36f 40%, #f5f3eb 100%)",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-end overflow-hidden">
        <motion.p
          style={{ opacity: taglineOpacity, y: taglineY }}
          className="mb-6 type-body-lg"
        >
          <span
            style={{
              fontWeight: 500,
              letterSpacing: "0.02em",
              color: "#262626",
            }}
          >
            An Onchain Communications Firm
          </span>
        </motion.p>

        <motion.h1
          style={{ scale, y, opacity }}
          className="text-[18vw] md:text-[15vw] leading-[0.85] tracking-tighter text-center whitespace-nowrap pb-4 origin-top"
        >
          <span
            style={{
              fontFamily: "var(--font-display)",
              fontWeight: 700,
              color: "#262626",
            }}
          >
            HYVE Media
          </span>
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
