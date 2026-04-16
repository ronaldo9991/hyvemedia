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
                "radial-gradient(circle, rgba(255,123,0,0.34) 0%, rgba(255,123,0,0.18) 36%, rgba(255,123,0,0.05) 64%, rgba(255,123,0,0) 100%)",
              filter: "blur(16px)",
            }}
          />
          <GlowBlob size={148} intensity="medium" animated className="relative z-10 drop-shadow-[0_0_42px_rgba(255,122,0,0.45)]" />
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
        Storytelling is a long game. We're here to help you win it.
      </motion.h2>
    </div>
  </section>
);

export default StorytellingSection;
