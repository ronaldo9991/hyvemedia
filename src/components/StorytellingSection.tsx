import { motion } from "framer-motion";

const StorytellingSection = () => (
  <section className="gradient-warm py-24 md:py-32 px-6">
    <div className="max-w-4xl mx-auto text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-3xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground"
      >
        Storytelling is a long game. We're here to help you win it.
      </motion.h2>
    </div>
  </section>
);

export default StorytellingSection;
