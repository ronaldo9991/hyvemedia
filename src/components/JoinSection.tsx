import { motion } from "framer-motion";

const GRADIENT =
  "radial-gradient(circle at 42% 38%, var(--diamond-0) 0%, var(--diamond-1) 18%, var(--diamond-2) 40%, var(--diamond-3) 58%, var(--diamond-4) 74%, var(--diamond-5) 100%)";

const Starburst = () => (
  <div className="pyramid-loader" aria-hidden="true">
    <div className="pyramid-loader-wrapper">
      <span className="pyramid-side pyramid-side1" />
      <span className="pyramid-side pyramid-side2" />
      <span className="pyramid-side pyramid-side3" />
      <span className="pyramid-side pyramid-side4" />
      <span className="pyramid-shadow" />
    </div>
  </div>
);

const Blob = () => (
  <div className="cathy-loader" aria-hidden="true">
    <span className="cathy-loader__inner" />
    <span className="cathy-loader__orbit">
      <span className="cathy-loader__dot" />
      <span className="cathy-loader__dot" />
      <span className="cathy-loader__dot" />
      <span className="cathy-loader__dot" />
    </span>
  </div>
);

const Diamond = () => (
  <div className="relative w-[60px] h-[60px] md:w-[68px] md:h-[68px] flex-shrink-0 mt-1">
    <motion.div
      className="absolute inset-0 rounded-xl"
      animate={{
        y: [0, -2, 0, 2, 0],
        rotate: [45, 47, 45, 43, 45],
        scale: [1, 1.015, 1, 0.99, 1],
      }}
      transition={{
        duration: 6.2,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      style={{
        background: GRADIENT,
        filter: "drop-shadow(0 2px 6px rgb(var(--diamond-shadow-rgb) / 0.3))",
      }}
    >
      <span
        className="absolute inset-[26%] rounded-full"
        style={{ background: "radial-gradient(circle, rgba(255,247,230,0.9) 0%, rgba(255,247,230,0) 74%)" }}
      />
    </motion.div>
  </div>
);

const values = [
  {
    Shape: Starburst,
    title: "Do the sharp thing, not the safe thing",
    desc: "Safe outputs are why most agencies are interchangeable. We don't hire for safe. We hire for people who can take a messy brief and turn it into a clear, defensible idea others can rally around.",
  },
  {
    Shape: Blob,
    title: "Own the outcome, not the task",
    desc: "We don't want box-tickers. We want people who care whether the work moves the business. That means thinking commercially, pushing back when needed, and staying close to the result.",
  },
  {
    Shape: Diamond,
    title: "Use AI like a senior, not a crutch",
    desc: "AI is the lever. Senior judgement is the hand. We want people who use it to 10x their thinking, not replace it. If that distinction matters to you, you'll fit here.",
  },
];

const JoinSection = () => (
  <section
    id="join"
    className="section-pad"
    style={{ backgroundColor: "#ffffff" }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <p
        className="type-caption mb-8"
        style={{ color: "var(--color-orange)" }}
      >
        Join Us
      </p>
      <h2
        className="type-h2 mb-6"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        Think you belong at HYVE?
      </h2>
      <p
        className="type-body-lg mb-24"
        style={{ color: "#262626", opacity: 0.6, maxWidth: "560px" }}
      >
        We hire senior minds who want to help build the most interesting agency of the next decade. If that sounds like you,{" "}
        <a
          href="mailto:hello@hyvemedia.io"
          className="underline underline-offset-4 transition-colors"
          style={{ color: "#262626", opacity: 1 }}
        >
          drop us a line
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
