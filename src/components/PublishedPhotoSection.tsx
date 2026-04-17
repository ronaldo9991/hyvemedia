import { motion } from "framer-motion";
import photo1 from "../../photo1.png";

const PublishedPhotoSection = () => (
  <section style={{ backgroundColor: "#f5f3eb" }}>
    <div className="max-w-[1320px] mx-auto container-x pb-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="overflow-hidden rounded-[8px]"
      >
        <img
          src={photo1}
          alt="Media publication feature visual"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          className="w-full h-auto object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default PublishedPhotoSection;
