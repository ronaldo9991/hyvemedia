import { motion } from "framer-motion";
import whyImage from "@/assets/why.png";

const WhySection = () => (
  <section
    id="why"
    className="section-pad"
    style={{ backgroundColor: "#f5f3eb" }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,640px)_minmax(0,1fr)] lg:items-start lg:gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="type-caption mb-8"
            style={{ color: "var(--color-orange)" }}
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
            Senior strategists, amplified by agentic AI. Not replaced by it.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="type-body-lg"
            style={{ color: "#262626", maxWidth: "620px" }}
          >
            Media has shifted. Search, content and commerce are becoming one system. Most agencies aren't built for it. HYVE is. Senior minds lead every brief. We move at machine speed without losing the judgement. The result: sharper thinking, faster, with outcomes that show up on the P&amp;L.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 24, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.75 }}
          className="overflow-hidden rounded-[8px] lg:justify-self-end lg:w-full lg:max-w-[460px]"
        >
          <img
            src={whyImage}
            alt="Why HYVE exists visual"
            loading="lazy"
            width={1200}
            height={1600}
            decoding="async"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhySection;
