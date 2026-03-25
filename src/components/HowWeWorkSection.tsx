import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import teamPhoto from "@/assets/team-photo.jpg";
import officeDetail from "@/assets/office-detail.jpg";

const testimonials = [
  {
    quote: "They helped us significantly enhance our brand visibility & perception. They move quickly and are a trusted partner that generates results.",
    name: "Sarah M.",
    title: "CMO, DataCo",
  },
  {
    quote: "The team secured outstanding mainstream media coverage and were an invaluable extension of our internal team for our flagship event.",
    name: "James K.",
    title: "Head of PR, BlockConf",
  },
  {
    quote: "Within just a week of onboarding, they secured tier 1 thought leadership coverage. Within a month, more coverage than our previous agency had in six months.",
    name: "Maria L.",
    title: "Communications Manager, NetDAO",
  },
];

const HowWeWorkSection = () => {
  const [idx, setIdx] = useState(0);

  return (
    <section id="how" className="bg-background py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <img src={teamPhoto} alt="Our team" loading="lazy" width={1920} height={1080} className="rounded-2xl object-cover w-full h-80 md:h-full" />
          <img src={officeDetail} alt="Office" loading="lazy" width={1200} height={800} className="rounded-2xl object-cover w-full h-80 md:h-full" />
        </div>

        <p className="font-display text-sm font-medium text-muted-foreground mb-4">How We Work</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground max-w-3xl mb-4">
          Relationships mean everything to us. The kind that last a lifetime.
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mb-16">
          Sure, we're here to get you press coverage. But our ultimate goal is to make you feel seen and understood.
        </p>

        <div className="relative bg-card rounded-2xl p-8 md:p-12 max-w-3xl">
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p className="text-xl md:text-2xl font-display leading-relaxed text-foreground mb-6">
              "{testimonials[idx].quote}"
            </p>
            <p className="font-display font-semibold text-foreground">{testimonials[idx].name}</p>
            <p className="text-sm text-muted-foreground">{testimonials[idx].title}</p>
          </motion.div>

          <div className="flex gap-3 mt-8">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary transition-colors"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
