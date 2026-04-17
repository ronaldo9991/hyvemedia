import { motion } from "framer-motion";
import photo23 from "../../23.png";
import photo25 from "../../25.png";

const PromisePhotosSection = () => (
  <section style={{ backgroundColor: "#ffffff" }}>
    <div className="max-w-[1320px] mx-auto container-x pb-16 md:pb-20">
      <div className="max-w-[1120px] mx-auto grid grid-cols-1 md:grid-cols-2" style={{ gap: "40px 56px" }}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="overflow-hidden aspect-[4/5]"
        >
          <img
            src={photo23}
            alt="Promise visual one"
            loading="lazy"
            decoding="async"
            width={1400}
            height={1600}
            className="w-full h-full object-cover object-center scale-[1.08]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="overflow-hidden aspect-[4/5]"
        >
          <img
            src={photo25}
            alt="Promise visual two"
            loading="lazy"
            decoding="async"
            width={1400}
            height={1600}
            className="w-full h-full object-cover object-center scale-[1.08]"
          />
        </motion.div>
      </div>
    </div>
  </section>
);

export default PromisePhotosSection;
