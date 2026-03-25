import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="gradient-hero h-screen flex flex-col items-center relative overflow-hidden px-6">
      {/* Tagline centered vertically */}
      <div className="flex-1 flex items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-base font-display tracking-wide text-foreground"
        >
          An Onchain Communications Firm
        </motion.p>
      </div>

      {/* Giant text pinned to bottom, overflowing below */}
      <motion.h1
        initial={{ opacity: 0, y: 80 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="font-display font-black text-[18vw] md:text-[15vw] leading-[0.8] tracking-tighter text-foreground text-center lowercase whitespace-nowrap mb-[-4vw]"
      >
        HYVE Media
      </motion.h1>
    </section>
  );
};

export default HeroSection;
