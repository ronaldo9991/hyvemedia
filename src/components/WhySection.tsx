import { motion } from "framer-motion";
import photo22 from "../../22.png";

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
            className="type-body-lg"
            style={{ color: "#262626", maxWidth: "620px" }}
          >
            Since 2016, we have focused exclusively on this innovative industry, helping teams on the cutting edge tell their stories. Whether it's infrastructure, the convergence of blockchain &amp; AI, or venture capital — we do what we do because without great storytelling, no one would know this technology exists.
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
            src={photo22}
            alt="Why we exist visual"
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
