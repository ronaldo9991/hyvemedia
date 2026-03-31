import { useState, useEffect } from "react";
import { Menu, X, Mail } from "lucide-react";
import iconSvg from "@/assets/icon.svg";
import logoSvg from "@/assets/logo.svg";

const navLinksLeft = [
  { label: "Why", href: "#why" },
  { label: "What", href: "#what" },
  { label: "How", href: "#how" },
  { label: "Promise", href: "#promise" },
];

const navLinksRight = [
  { label: "Team", href: "#team" },
  { label: "Join", href: "#join" },
  { label: "Podcast", href: "#podcast" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      // Hero is 150vh, text fades by 60% of that = 90vh
      const triggerPoint = window.innerHeight * 0.9;
      setScrolled(window.scrollY > triggerPoint);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between transition-all duration-300 ${scrolled ? "bg-background shadow-sm" : "bg-transparent"}`}>
      <div className="flex items-center gap-6">
        {navLinksLeft.map((l) => (
          <a key={l.label} href={l.href} className="hidden md:block text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity">
            {l.label}
          </a>
        ))}
      </div>

      <a href="#" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {scrolled ? (
          <img src={logoSvg} alt="HYVE Logo" className="h-8 w-auto text-foreground" />
        ) : (
          <img src={iconSvg} alt="HYVE Icon" className="h-10 w-auto" />
        )}
      </a>

      <div className="flex items-center gap-6">
        {navLinksRight.map((l) => (
          <a key={l.label} href={l.href} className="hidden md:block text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity">
            {l.label}
          </a>
        ))}
        <a href="mailto:hello@example.com" className="hidden md:flex items-center gap-2 text-sm font-body font-medium text-foreground hover:opacity-70 transition-opacity underline underline-offset-4">
          <Mail size={16} /> Contact
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md p-6 flex flex-col gap-4 md:hidden border-b border-border">
          {[...navLinksLeft, ...navLinksRight].map((l) => (
            <a key={l.label} href={l.href} onClick={() => setOpen(false)} className="text-lg font-body font-medium text-foreground">
              {l.label}
            </a>
          ))}
          <a href="mailto:hello@example.com" className="text-lg font-display font-medium text-foreground flex items-center gap-2">
            <Mail size={18} /> Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
