import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import iconSvg from "@/assets/icon.svg";
import logoSvg from "@/assets/logo.svg";

const navLinksLeft = [
  { label: "Why", href: "#why" },
  { label: "What", href: "#what" },
  { label: "How", href: "#how" },
  { label: "Promise", href: "#promise" },
];

const navLinksRight = [
  { label: "Join", href: "#join" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const triggerPoint = window.innerHeight * 0.9;
      setScrolled(window.scrollY > triggerPoint);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-300"
      style={{
        height: "60px",
        padding: "0 40px",
        backgroundColor: scrolled ? "#f5f3eb" : "transparent",
        boxShadow: scrolled ? "0 1px 0 rgba(0,0,0,0.06)" : "none",
      }}
    >
      <div className="flex items-center gap-7">
        {navLinksLeft.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="type-nav hidden md:block transition-opacity hover:opacity-70"
            style={{ color: "#262626" }}
          >
            {l.label}
          </a>
        ))}
      </div>

      <a href="#" className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
        {scrolled ? (
          <img src={logoSvg} alt="HYVE logo" className="h-8 w-auto" />
        ) : (
          <img src={iconSvg} alt="HYVE icon" className="h-10 w-auto" />
        )}
      </a>

      <div className="flex items-center gap-7">
        {navLinksRight.map((l) => (
          <a
            key={l.label}
            href={l.href}
            className="type-nav hidden md:block transition-opacity hover:opacity-70"
            style={{ color: "#262626" }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:hello@hyvemedia.io"
          className="type-nav hidden md:block relative group"
          style={{ color: "#262626" }}
        >
          Contact
          <span
            className="absolute left-0 -bottom-0.5 h-[1px] bg-[#262626] transition-all duration-300 w-0 group-hover:w-full"
          />
        </a>
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {open && (
        <div
          className="absolute top-full left-0 right-0 p-6 flex flex-col gap-4 md:hidden"
          style={{ backgroundColor: "#f5f3eb", borderBottom: "1px solid #c9c9c9" }}
        >
          {[...navLinksLeft, ...navLinksRight].map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="type-nav"
              style={{ color: "#262626", fontSize: "15px" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:hello@hyvemedia.io"
            className="type-nav"
            style={{ color: "#262626", fontSize: "15px" }}
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
