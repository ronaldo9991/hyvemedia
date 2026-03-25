import { motion } from "framer-motion";

const promises = [
  { num: "01", title: "Extremely communicative", desc: "You'll hear from us a lot. We won't leave you waiting or wondering what's next." },
  { num: "02", title: "High quality results", desc: "We deliver results that create the greatest impact for your brand." },
  { num: "03", title: "Industry obsessed", desc: "Communicating the value of cutting-edge companies gives us purpose; it's personal." },
  { num: "04", title: "Win the long game", desc: "Your goals are our goals. We're here to help you go the distance." },
];

const PromiseSection = () => (
  <section id="promise" className="gradient-hero py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="font-display text-sm font-medium text-foreground/60 mb-4">Our Promise To You</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground max-w-3xl mb-16">
        You can lean on us as your communications experts. "We've got you!"
      </h2>

      <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
        {promises.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <span className="font-display text-5xl font-bold text-foreground/15">{p.num}.</span>
            <h3 className="font-display text-xl font-semibold text-foreground mt-2 mb-2">{p.title}</h3>
            <p className="text-foreground/70 leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
