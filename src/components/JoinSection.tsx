import { motion } from "framer-motion";

const GRADIENT =
  "radial-gradient(circle at 42% 38%, #fff5dc 0%, #ffe4a6 18%, #f9b336 40%, #f08a2e 58%, #e86528 74%, #d74b22 100%)";

const Starburst = () => (
  <div className="relative w-[72px] h-[72px] md:w-[80px] md:h-[80px] flex-shrink-0">
    <div
      className="absolute inset-0"
      style={{
        background: GRADIENT,
        clipPath:
          "polygon(50% 2%, 62% 34%, 96% 35%, 69% 56%, 78% 89%, 50% 70%, 22% 89%, 31% 56%, 4% 35%, 38% 34%)",
        filter: "drop-shadow(0 2px 8px rgba(215, 75, 34, 0.35))",
      }}
    />
    <div
      className="absolute inset-[28%] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255, 248, 226, 0.92) 0%, rgba(255, 248, 226, 0) 70%)" }}
    />
  </div>
);

const Blob = () => (
  <div className="relative w-[72px] h-[72px] md:w-[80px] md:h-[80px] flex-shrink-0">
    <div
      className="absolute inset-0 rounded-[44%_56%_58%_42%_/_42%_44%_56%_58%]"
      style={{
        background: GRADIENT,
        filter: "drop-shadow(0 2px 6px rgba(215, 75, 34, 0.3))",
      }}
    />
    <div
      className="absolute inset-[20%] rounded-full"
      style={{ background: "radial-gradient(circle, rgba(255,255,255,0.92) 0%, rgba(255,255,255,0.12) 62%, rgba(255,255,255,0) 100%)" }}
    />
  </div>
);

const Diamond = () => (
  <div className="relative w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex-shrink-0 mt-1">
    <div
      className="absolute inset-0 rounded-xl"
      style={{
        background: GRADIENT,
        transform: "rotate(45deg)",
        filter: "drop-shadow(0 2px 6px rgba(215, 75, 34, 0.3))",
      }}
    />
  </div>
);

const values = [
  {
    Shape: Starburst,
    title: "Radiate positivity",
    desc: "At HYVE Media, it's not what we do that makes us memorable — it's how we do it. Core to that philosophy is how we show up in the world: radiating positivity in everything we do.\n\nWhether it's our \"can do\" attitude or the optimistic energy we bring to each interaction, you can feel our warm & welcoming spirit across every touchpoint. It's no wonder clients are naturally drawn to our magnetic presence.",
  },
  {
    Shape: Blob,
    title: "Crazy empathetic",
    desc: "Not to get all woo woo, but people always come first. We listen, are accountable, and put ourselves in our colleagues' and clients' shoes daily. But not in any kind of manufactured way — authenticity, always.",
  },
  {
    Shape: Diamond,
    title: "High quality, always",
    desc: "Clients love us not only because we're warm, but because we produce at a world-class rate. Among our partners we're known as the gold standard of media. And tbh, that's probably underselling it.\n\nThat level of quality is represented across our brand and the people we hire. We are a dependable, high-caliber team that knows how to win the long game.",
  },
];

const JoinSection = () => (
  <section
    id="join"
    className="section-pad"
    style={{ backgroundColor: "#e8e8e8" }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <p
        className="type-caption mb-8"
        style={{ color: "#ff7b00" }}
      >
        Join Our Team
      </p>
      <h2
        className="type-h2 mb-6"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        Manifesting your dream job at HYVE Media?
      </h2>
      <p
        className="type-body-lg mb-24"
        style={{ color: "#262626", opacity: 0.6, maxWidth: "560px" }}
      >
        Well, of course you are. If any of the following sounds up your alley, jump on the next
        flight to LA. Or actually, maybe just start with an{" "}
        <a
          href="mailto:hello@hyvemedia.com"
          className="underline underline-offset-4 transition-colors"
          style={{ color: "#262626", opacity: 1 }}
        >
          email
        </a>
        .
      </p>

      <div>
        {values.map(({ Shape, title, desc }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div style={{ borderTop: "1px solid #c9c9c9" }} />
            <div
              className="grid grid-cols-1 md:grid-cols-[100px_240px_1fr] gap-6 md:gap-10 items-start"
              style={{ padding: "52px 0 60px" }}
            >
              <div className="flex items-start justify-start">
                <Shape />
              </div>

              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "28px",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  color: "#1a1a1a",
                  margin: 0,
                }}
              >
                {title}
              </h3>

              <div className="space-y-5" style={{ maxWidth: "520px" }}>
                {desc.split("\n\n").map((para, j) => (
                  <p
                    key={j}
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: 1.6,
                      color: "#3a3a3a",
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
        <div style={{ borderTop: "1px solid #c9c9c9" }} />
      </div>
    </div>
  </section>
);

export default JoinSection;
