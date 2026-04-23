import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.4], [1, 0.12]);
  const y = useTransform(scrollYProgress, [0, 0.4], [0, -220]);
  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);

  const taglineOpacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 0.1], [0, -120]);

  return (
    <section
      ref={sectionRef}
      className="h-[115vh] relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, var(--color-orange) 0%, var(--color-orange-mid) 40%, #f5f3eb 100%)",
      }}
    >
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
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
            A Modern Media Agency.
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
