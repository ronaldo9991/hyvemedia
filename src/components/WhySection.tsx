import { motion } from "framer-motion";
import billboard from "@/assets/billboard.jpg";

const WhySection = () => (
  <section id="why" className="bg-background py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="font-display text-sm font-medium text-muted-foreground mb-4"
      >
        Why We Exist
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-2xl md:text-4xl lg:text-5xl font-bold leading-tight text-foreground max-w-3xl mb-8"
      >
        We believe in the long-term impact of decentralized technology and the power of communications.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-16 leading-relaxed"
      >
        Since 2016, we have focused exclusively on this innovative industry, helping teams on the cutting edge tell their stories. Whether it's infrastructure, the convergence of blockchain &amp; AI, or venture capital — we do what we do because without great storytelling, no one would know this technology exists.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="rounded-2xl overflow-hidden"
      >
        <img src={billboard} alt="Billboard" loading="lazy" width={1600} height={900} className="w-full h-auto object-cover" />
      </motion.div>
    </div>
  </section>
);

export default WhySection;
