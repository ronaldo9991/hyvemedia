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
    <section
      id="how"
      className="section-pad"
      style={{
        background: "linear-gradient(180deg, #dee7e8 0%, #f5f3eb 100%)",
      }}
    >
      <div className="max-w-[1320px] mx-auto container-x">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-24">
          <img src={teamPhoto} alt="Our team" loading="lazy" width={1920} height={1080} className="object-cover w-full h-80 md:h-full" />
          <img src={officeDetail} alt="Office" loading="lazy" width={1200} height={800} className="object-cover w-full h-80 md:h-full" />
        </div>

        <p
          className="type-caption mb-8"
          style={{ color: "#ff7b00" }}
        >
          How We Work
        </p>
        <h2
          className="type-h2 mb-6"
          style={{ color: "#262626", maxWidth: "680px" }}
        >
          Relationships mean everything to us. The kind that last a lifetime.
        </h2>
        <p
          className="type-body-lg mb-20"
          style={{ color: "#262626", maxWidth: "580px" }}
        >
          Sure, we're here to get you press coverage. But our ultimate goal is to make you feel seen and understood.
        </p>

        <div
          className="max-w-3xl p-8 md:p-12"
          style={{ backgroundColor: "#f5f3eb", border: "1px solid #c9c9c9" }}
        >
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <p
              className="type-body-lg mb-8"
              style={{ color: "#262626", maxWidth: "560px" }}
            >
              "{testimonials[idx].quote}"
            </p>
            <p
              className="type-body"
              style={{ color: "#262626", fontWeight: 500 }}
            >
              {testimonials[idx].name}
            </p>
            <p
              className="type-caption mt-1"
              style={{ color: "#262626", opacity: 0.6, fontWeight: 400 }}
            >
              {testimonials[idx].title}
            </p>
          </motion.div>

          <div className="flex gap-3 mt-10">
            <button
              onClick={() => setIdx((idx - 1 + testimonials.length) % testimonials.length)}
              className="w-10 h-10 flex items-center justify-center transition-colors hover:opacity-70"
              style={{ border: "1px solid #c9c9c9" }}
            >
              <ChevronLeft size={18} color="#262626" />
            </button>
            <button
              onClick={() => setIdx((idx + 1) % testimonials.length)}
              className="w-10 h-10 flex items-center justify-center transition-colors hover:opacity-70"
              style={{ border: "1px solid #c9c9c9" }}
            >
              <ChevronRight size={18} color="#262626" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
