import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Scale from 1 → 0.08 as you scroll through the hero
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.06]);
  // Move text upward toward the logo position
  const y = useTransform(scrollYProgress, [0, 0.6], [0, -300]);
  // Fade out the text as it gets tiny
  const opacity = useTransform(scrollYProgress, [0, 0.45, 0.6], [1, 1, 0]);

  // Tagline fades out faster
  const taglineOpacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const taglineY = useTransform(scrollYProgress, [0, 0.3], [0, -60]);

  return (
    <section
      ref={sectionRef}
      className="gradient-hero h-[150vh] relative overflow-hidden px-6"
    >
      <div className="sticky top-0 h-screen flex flex-col items-center overflow-hidden">
        {/* Tagline centered vertically */}
        <div className="flex-1 flex items-center">
          <motion.p
            style={{ opacity: taglineOpacity, y: taglineY }}
            className="text-sm md:text-base font-display tracking-wide text-foreground"
          >
            An Onchain Communications Firm
          </motion.p>
        </div>

        {/* Giant text that shrinks into logo on scroll */}
        <motion.h1
          style={{ scale, y, opacity }}
          className="font-display font-black text-[16vw] md:text-[13vw] leading-[0.85] tracking-tighter text-foreground text-center whitespace-nowrap pb-6 origin-top"
        >
          HYVE Media
        </motion.h1>
      </div>
    </section>
  );
};

export default HeroSection;
