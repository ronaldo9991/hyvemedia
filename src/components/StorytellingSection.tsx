import { motion } from "framer-motion";
import GlowBlob from "@/components/GlowBlob";

const StorytellingSection = () => (
  <section
    className="section-pad"
    style={{ backgroundColor: "#f5f3eb" }}
  >
    <div className="max-w-[1320px] mx-auto container-x text-center">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-10 md:mb-14 flex justify-center"
      >
        <motion.div
          className="relative"
          animate={{
            y: [0, -8, 0, 8, 0],
            rotate: [0, -4, 0, 4, 0],
            scale: [1, 1.03, 1, 0.98, 1],
          }}
          transition={{
            duration: 7.5,
            ease: "easeInOut",
            repeat: Infinity,
          }}
        >
          <span
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none"
            style={{
              width: "230px",
              height: "230px",
              background:
                "radial-gradient(circle, rgb(var(--color-orange-rgb) / 0.34) 0%, rgb(var(--color-orange-rgb) / 0.18) 36%, rgb(var(--color-orange-rgb) / 0.05) 64%, rgb(var(--color-orange-rgb) / 0) 100%)",
              filter: "blur(16px)",
            }}
          />
          <GlowBlob size={148} intensity="medium" animated className="relative z-10 drop-shadow-[0_0_42px_rgb(var(--color-orange-rgb)_/_0.45)]" />
        </motion.div>
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="type-h2 mx-auto"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        Search isn't search. Content isn't content. Commerce isn't commerce. They're one system now, and most agencies haven't caught up.
      </motion.h2>
    </div>
  </section>
);

export default StorytellingSection;
