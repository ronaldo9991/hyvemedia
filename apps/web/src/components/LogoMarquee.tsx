const logos = [
  "Bloomberg", "CNBC", "Forbes", "Fortune", "MarketWatch"
];

const LogoMarquee = () => (
  <section
    className="overflow-hidden"
    style={{
      backgroundColor: "#f5f3eb",
      padding: "48px 0",
      borderTop: "1px solid #c9c9c9",
      borderBottom: "1px solid #c9c9c9",
    }}
  >
    <p
      className="type-caption text-center mb-8"
      style={{ color: "#262626", opacity: 0.5 }}
    >
      Featured in
    </p>
    <div className="relative">
      <div className="flex animate-marquee whitespace-nowrap">
        {[...logos, ...logos].map((name, i) => (
          <div key={i} className="mx-8 md:mx-12 flex items-center">
            <span
              style={{
                fontSize: "20px",
                fontWeight: 700,
                color: "#262626",
                opacity: 0.25,
                fontFamily: "var(--font-display)",
              }}
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default LogoMarquee;
