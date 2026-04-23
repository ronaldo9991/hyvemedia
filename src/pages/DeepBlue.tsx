import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import WhySection from "@/components/WhySection";
import LogoMarquee from "@/components/LogoMarquee";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PromiseSection from "@/components/PromiseSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import deep1 from "@/assets/deep1.png";
import deep3 from "@/assets/deep3.png";

const DeepBlue = () => (
  <div className="theme-deep-blue" style={{ overflowX: "clip" }}>
    <Navbar />
    <HeroSection />
    <StorytellingSection />
    <WhySection imageSrc={deep1} />
    <LogoMarquee />
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
            src={deep3}
            alt="Deep blue feature visual"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            className="w-full h-full object-cover object-[center_82%]"
          />
        </motion.div>
      </div>
    </section>
    <WhatWeDoSection />
    <HowWeWorkSection />
    <PromiseSection />
    <JoinSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default DeepBlue;
