import { motion } from "framer-motion";
import { Sun, Heart, Star } from "lucide-react";

const values = [
  { icon: Sun, title: "Radiate positivity", desc: "Core to our philosophy is how we show up — radiating positivity in everything we do." },
  { icon: Heart, title: "Crazy empathetic", desc: "People always come first. We listen, are accountable, and put ourselves in our colleagues' and clients' shoes daily." },
  { icon: Star, title: "High quality, always", desc: "Clients love us not only because we're warm, but because we produce at a world-class rate." },
];

const JoinSection = () => (
  <section id="join" className="bg-foreground py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="font-display text-sm font-medium text-background/50 mb-4">Join Our Team</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-background max-w-3xl mb-4">
        Manifesting your dream job?
      </h2>
      <p className="text-lg text-background/60 max-w-xl mb-16">
        If any of the following sounds up your alley, reach out — start with an{" "}
        <a href="mailto:hello@example.com" className="underline text-primary hover:opacity-80 transition-opacity">
          email
        </a>.
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15, duration: 0.6 }}
            className="border border-background/10 rounded-2xl p-8"
          >
            <v.icon className="text-primary mb-4" size={32} />
            <h3 className="font-display text-xl font-semibold text-background mb-3">{v.title}</h3>
            <p className="text-background/60 leading-relaxed">{v.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default JoinSection;
