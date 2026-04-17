import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import WhySection from "@/components/WhySection";
import LogoMarquee from "@/components/LogoMarquee";
import PublishedPhotoSection from "@/components/PublishedPhotoSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PromiseSection from "@/components/PromiseSection";
import PromisePhotosSection from "@/components/PromisePhotosSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <div style={{ overflowX: "clip" }}>
    <Navbar />
    <HeroSection />
    <StorytellingSection />
    <WhySection />
    <LogoMarquee />
    <PublishedPhotoSection />
    <WhatWeDoSection />
    <HowWeWorkSection />
    <PromiseSection />
    <PromisePhotosSection />
    <JoinSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Index;
