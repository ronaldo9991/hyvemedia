import { motion } from "framer-motion";
import GlassHexagon from "@/components/GlassHexagon";

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
        className="mb-10 md:mb-14 flex justify-center overflow-visible"
      >
        <GlassHexagon size={300} />
      </motion.div>
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="type-h2 mx-auto"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        Search isn't search. Content isn't content. Commerce isn't commerce. They're one system now — and most agencies haven't caught up.
      </motion.h2>
    </div>
  </section>
);

export default StorytellingSection;
