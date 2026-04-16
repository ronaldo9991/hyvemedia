import logoMark from "@/assets/logo-mark.png";

const Footer = () => (
  <footer className="section-pad" style={{ backgroundColor: "#1d1d1d" }}>
    <div className="max-w-[1320px] mx-auto container-x flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
      <div className="flex items-center gap-4">
        <img src={logoMark} alt="Logo" width={40} height={40} className="invert" loading="lazy" />
        <span
          className="type-h3"
          style={{ color: "#f5f3eb" }}
        >
          HYVE Media
        </span>
      </div>

      <div className="flex flex-wrap gap-6">
        {["Why", "What", "How", "Promise", "Join"].map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            className="type-nav transition-opacity hover:opacity-100"
            style={{ color: "rgba(245,243,235,0.5)" }}
          >
            {l}
          </a>
        ))}
      </div>

      <a
        href="mailto:hello@hyvemedia.com"
        className="type-nav underline underline-offset-4"
        style={{ color: "#ff7b00" }}
      >
        hello@hyvemedia.com
      </a>
    </div>

    <div
      className="max-w-[1320px] mx-auto container-x mt-16 pt-8"
      style={{ borderTop: "1px solid rgba(245,243,235,0.1)" }}
    >
      <p
        className="type-caption"
        style={{ color: "rgba(245,243,235,0.3)", fontWeight: 400 }}
      >
        © 2024 HYVE Media. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
