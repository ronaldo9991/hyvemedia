import { motion } from "framer-motion";

const services = [
  { title: "Strategy", desc: "Refine your narrative to support your business goals." },
  { title: "Thought Leadership", desc: "Build the profiles of your team's leaders to broaden the impact of your story in the media." },
  { title: "Press Relations", desc: "Work our relationship magic to garner the coverage your project deserves." },
  { title: "Content", desc: "Craft compelling content that meets your target audience where they're at." },
];

const WhatWeDoSection = () => (
  <section id="what" className="bg-foreground py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="font-display text-sm font-medium text-background/50 mb-4">What We Do</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-background max-w-3xl mb-16">
        You bring the technology. We spotlight your message on center stage.
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="border-t border-background/20 pt-6"
          >
            <h3 className="font-display text-lg font-semibold text-background mb-3">{s.title}</h3>
            <p className="text-background/60 leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatWeDoSection;
