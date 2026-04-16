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
        <GlowBlob size={148} intensity="medium" animated className="drop-shadow-[0_0_24px_rgba(255,122,0,0.2)]" />
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
