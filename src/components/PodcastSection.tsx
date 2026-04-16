import { motion } from "framer-motion";

const episodes = [
  { ep: 10, title: "Bitcoin and The Art of Social Strategies", guest: "Guest A" },
  { ep: 9, title: "The Intersection of Culture and Blockchain", guest: "Guest B" },
  { ep: 8, title: "The Symbiotic Relationship Between PR and Journalism", guest: "Guest C" },
  { ep: 7, title: "Covering Bitcoin and Crypto Adoption in Real Life", guest: "Guest D" },
  { ep: 6, title: "Marketing in the Web3 Space and Transitioning from Web2", guest: "Guest E" },
  { ep: 5, title: "Using PR and Twitter to Drive a Strong Media Presence", guest: "Guest F" },
];

const PodcastSection = () => (
  <section id="podcast" className="bg-background py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="font-display text-sm font-medium text-muted-foreground mb-4">Podcast</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground mb-4">
        Proof-Of-PR
      </h2>
      <p className="text-lg text-muted-foreground max-w-2xl mb-16 leading-relaxed">
        Your passport to the world of onchain communications. Get an inside look into the future of finance, technology, and entrepreneurship.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {episodes.map((ep, i) => (
          <motion.a
            key={ep.ep}
            href="#"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group block bg-card rounded-2xl overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="aspect-video bg-secondary flex items-center justify-center">
              <span className="font-display text-4xl font-bold text-foreground/10">E{ep.ep}</span>
            </div>
            <div className="p-5">
              <p className="text-xs font-display font-semibold text-primary mb-1">Episode {ep.ep}</p>
              <h3 className="font-display text-base font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                {ep.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default PodcastSection;
