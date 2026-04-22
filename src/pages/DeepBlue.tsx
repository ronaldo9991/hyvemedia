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
import deepBlue2 from "@/assets/deepblue-2.png";

const DeepBlue = () => (
  <div className="theme-deep-blue" style={{ overflowX: "clip" }}>
    <Navbar />
    <HeroSection />
    <StorytellingSection />
    <WhySection />
    <LogoMarquee />
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
            src={deepBlue2}
            alt="Deep blue feature visual two"
            loading="lazy"
            decoding="async"
            width={1600}
            height={900}
            className="w-full h-auto object-cover"
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
