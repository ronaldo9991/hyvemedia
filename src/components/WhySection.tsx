import { motion } from "framer-motion";
import photo1 from "../../photo1.png";

const WhySection = () => (
  <section
    id="why"
    className="section-pad"
    style={{ backgroundColor: "#f5f3eb" }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="type-caption mb-8"
        style={{ color: "#ff7b00" }}
      >
        Why We Exist
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="type-h2 mb-10"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        We believe in the long-term impact of decentralized technology and the power of communications.
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="type-body-lg mb-20"
        style={{ color: "#262626", maxWidth: "620px" }}
      >
        Since 2016, we have focused exclusively on this innovative industry, helping teams on the cutting edge tell their stories. Whether it's infrastructure, the convergence of blockchain &amp; AI, or venture capital — we do what we do because without great storytelling, no one would know this technology exists.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="overflow-hidden"
      >
        <img src={photo1} alt="Billboard" loading="lazy" width={1600} height={900} className="w-full h-auto object-cover" />
      </motion.div>
    </div>
  </section>
);

export default WhySection;
