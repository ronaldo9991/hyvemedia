import logoMark from "@/assets/logo-mark.png";

const Footer = () => (
  <footer className="bg-foreground py-16 px-6">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="flex items-center gap-4">
        <img src={logoMark} alt="Logo" width={40} height={40} className="invert" loading="lazy" />
        <span className="font-display text-xl font-bold text-background">HYVE Media</span>
      </div>

      <div className="flex flex-wrap gap-6">
        {["Why", "What", "How", "Promise", "Team", "Join", "Podcast"].map((l) => (
          <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-background/60 hover:text-background transition-colors font-display">
            {l}
          </a>
        ))}
      </div>

      <a href="mailto:hello@example.com" className="text-sm text-primary font-display font-medium underline underline-offset-4">
        hello@example.com
      </a>
    </div>

    <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-background/10">
      <p className="text-xs text-background/30 font-display">
        © 2024 HYVE Media. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
