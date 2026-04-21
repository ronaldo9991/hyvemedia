import logoSvg from "@/assets/logo.svg";
import GlowBlob from "@/components/GlowBlob";

const Footer = () => (
  <footer className="section-pad" style={{ backgroundColor: "#1d1d1d", paddingTop: "96px", paddingBottom: "72px" }}>
    <div className="max-w-[1320px] mx-auto container-x grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14">
      <div className="space-y-6">
        <img
          src={logoSvg}
          alt="HYVE"
          loading="lazy"
          className="h-9 w-auto"
          style={{ filter: "invert(1) brightness(1.08)" }}
        />

        <div className="flex items-center gap-3">
          <GlowBlob size={24} intensity="low" animated />
          <p className="type-body" style={{ color: "rgba(245,243,235,0.75)", margin: 0 }}>
            Built in Dubai. For ambitious brands.
          </p>
        </div>
      </div>

      <div className="space-y-4">
        <p className="type-caption" style={{ color: "rgba(245,243,235,0.45)", margin: 0 }}>Address</p>
        <p className="type-body" style={{ color: "rgba(245,243,235,0.7)", margin: 0, maxWidth: "280px" }}>
          Office 2904, Marina Plaza,
          <br />
          Dubai Marina, Dubai, UAE
        </p>
      </div>

      <div className="space-y-4">
        <p className="type-caption" style={{ color: "rgba(245,243,235,0.45)", margin: 0 }}>Navigate</p>
        <div className="flex flex-wrap gap-5">
          <a
            href="/yellow"
            className="type-nav transition-opacity hover:opacity-100"
            style={{ color: "rgba(245,243,235,0.6)" }}
          >
            Yellow
          </a>
          <a
            href="/deep-blue"
            className="type-nav transition-opacity hover:opacity-100"
            style={{ color: "rgba(245,243,235,0.6)" }}
          >
            Deep Blue
          </a>
          {["Why", "What", "How", "Promise", "Join"].map((l) => (
            <a
              key={l}
              href={`#${l.toLowerCase()}`}
              className="type-nav transition-opacity hover:opacity-100"
              style={{ color: "rgba(245,243,235,0.6)" }}
            >
              {l}
            </a>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <p className="type-caption" style={{ color: "rgba(245,243,235,0.45)", margin: 0 }}>Connect</p>
        <div className="flex flex-col gap-3">
          <a href="https://instagram.com/hyvemedia" target="_blank" rel="noreferrer" className="type-body transition-opacity hover:opacity-80" style={{ color: "var(--color-orange)" }}>
            Instagram
          </a>
          <a href="https://linkedin.com/company/hyvemedia" target="_blank" rel="noreferrer" className="type-body transition-opacity hover:opacity-80" style={{ color: "var(--color-orange)" }}>
            LinkedIn
          </a>
          <a href="mailto:hello@hyvemedia.io" className="type-body transition-opacity hover:opacity-80" style={{ color: "var(--color-orange)" }}>
            hello@hyvemedia.io
          </a>
        </div>
      </div>
    </div>

    <div
      className="max-w-[1320px] mx-auto container-x mt-14 pt-8"
      style={{ borderTop: "1px solid rgba(245,243,235,0.1)" }}
    >
      <p className="type-caption" style={{ color: "rgba(245,243,235,0.35)", fontWeight: 400 }}>
        © 2026 HYVE. All rights reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
