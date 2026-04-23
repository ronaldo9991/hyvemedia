import { motion } from "framer-motion";
import publishedImage from "@/assets/published.png";

interface PublishedPhotoSectionProps {
  imageSrc?: string;
}

const PublishedPhotoSection = ({ imageSrc = publishedImage }: PublishedPhotoSectionProps) => (
  <section style={{ backgroundColor: "#f5f3eb" }}>
    <div className="max-w-[1320px] mx-auto container-x pt-10 md:pt-12 pb-16 md:pb-20">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-[1120px] mx-auto overflow-hidden rounded-[8px] aspect-[16/9]"
      >
        <img
          src={imageSrc}
          alt="Coverage feature visual"
          loading="lazy"
          decoding="async"
          width={1600}
          height={900}
          className="w-full h-full object-cover object-[center_82%]"
        />
      </motion.div>
    </div>
  </section>
);

export default PublishedPhotoSection;
