import { motion } from "framer-motion";

const team = [
  { name: "Kelley W.", role: "CEO", bio: "A pioneer in this industry for over 9 years. Believes in synchronicity and the power of positivity." },
  { name: "Alex G.", role: "Vice President", bio: "11 years in emerging tech PR, with a passion for creative problem-solving and strategy." },
  { name: "Eunice H.", role: "Vice President", bio: "A lifelong communications professional whose love for tech brought her to Web3." },
  { name: "Jean N.", role: "Senior Account Executive", bio: "Loves serving as a daily point of contact. At her core, she's a theater kid bringing creative energy." },
  { name: "Dean P.", role: "Account Executive", bio: "Combines ten years in web3 with a lifelong passion for writing and communication." },
  { name: "Kayla K.", role: "Operations Coordinator", bio: "Passionate about connecting with people and building deep, meaningful relationships." },
];

const TeamSection = () => (
  <section id="team" className="bg-background py-24 md:py-32 px-6">
    <div className="max-w-6xl mx-auto">
      <p className="font-display text-sm font-medium text-muted-foreground mb-4">Meet The Dream Team</p>
      <h2 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground mb-16">
        Collaboration Maxis
      </h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((m, i) => (
          <motion.div
            key={m.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="group"
          >
            <div className="aspect-[3/4] rounded-2xl bg-secondary mb-4 flex items-end p-6 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-full bg-primary/20 absolute top-6 left-6 flex items-center justify-center font-display font-bold text-foreground text-xl">
                {m.name.charAt(0)}
              </div>
            </div>
            <h3 className="font-display text-lg font-semibold text-foreground">{m.name}</h3>
            <p className="text-sm text-primary font-medium mb-1">{m.role}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{m.bio}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
