import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StorytellingSection from "@/components/StorytellingSection";
import WhySection from "@/components/WhySection";
import LogoMarquee from "@/components/LogoMarquee";
import WhatWeDoSection from "@/components/WhatWeDoSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import PromiseSection from "@/components/PromiseSection";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";

const Index = () => (
  <div style={{ overflowX: "clip" }}>
    <Navbar />
    <HeroSection />
    <StorytellingSection />
    <WhySection />
    <LogoMarquee />
    <WhatWeDoSection />
    <HowWeWorkSection />
    <PromiseSection />
    <JoinSection />
    <Footer />
  </div>
);

export default Index;
