import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="gradient-hero min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-sm md:text-base font-display tracking-wide text-foreground mb-8"
      >
        An Onchain Communications Firm
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-display font-bold text-[12vw] md:text-[11vw] leading-[0.85] tracking-tighter text-foreground text-center lowercase"
      >
        melrose PR
      </motion.h1>
    </section>
  );
};

export default HeroSection;
