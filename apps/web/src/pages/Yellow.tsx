import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import WhySection from "@/components/WhySection";
import LogoMarquee from "@/components/LogoMarquee";
import PublishedPhotoSection from "@/components/PublishedPhotoSection";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PromiseSection from "@/components/PromiseSection";
import JoinSection from "@/components/JoinSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import dustImage from "@/assets/dust.png";
import dustOrangeImage from "@/assets/dustorange.png";

const Yellow = () => (
  <div className="theme-yellow" style={{ overflowX: "clip" }}>
    <Navbar />
    <HeroSection />
    <StorytellingSection />
    <WhySection imageSrc={dustImage} />
    <LogoMarquee />
    <PublishedPhotoSection imageSrc={dustOrangeImage} />
    <WhatWeDoSection />
    <HowWeWorkSection />
    <PromiseSection />
    <JoinSection />
    <ContactSection />
    <Footer />
    <WhatsAppFloat />
  </div>
);

export default Yellow;
