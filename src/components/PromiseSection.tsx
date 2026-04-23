import { motion } from "framer-motion";
import LoadingSpinner from "@/components/LoadingSpinner";

const promises = [
  {
    num: "01",
    title: "On time. Above expectation.",
    desc: "We deliver what we promised, when we promised it, usually sharper than you asked for. That's the whole point.",
  },
  {
    num: "02",
    title: "Senior thinking, every brief",
    desc: "No junior drift. No AI-generated fluff. The senior minds on your account are the senior minds solving the problem.",
  },
  {
    num: "03",
    title: "Machine speed, human judgement",
    desc: "We use AI where it amplifies senior thinking. We don't use it where it replaces it. That's how you get smarter work, faster, without the shallow output everyone else is shipping.",
  },
  {
    num: "04",
    title: "In it for the long game",
    desc: "We work best with brands that want to compound outcomes, not run a campaign and disappear. Your growth is our brief, for as long as you want us on it.",
  },
];

const PromiseSection = () => (
  <section
    id="promise"
    className="section-pad"
    style={{ backgroundColor: "#f5f3eb" }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <p
        className="type-caption text-center mb-8"
        style={{ color: "var(--color-orange)" }}
      >
        Our Promise
      </p>
      <h2
        className="type-h2 text-center mx-auto mb-20"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        Hire us for outcomes.
        <br />
        We deliver them.
      </h2>
      <LoadingSpinner />

      <div
        className="grid md:grid-cols-2 md:items-stretch"
        style={{ gap: "56px 80px" }}
      >
        {promises.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="h-full flex flex-col"
            style={{
              borderTop: "1px solid #c9c9c9",
              paddingTop: "24px",
              minHeight: "220px",
            }}
          >
            <p
              className="type-h2 mb-2"
              style={{ color: "var(--color-orange)" }}
            >
              {p.num}.
            </p>
            <h3
              className="type-h3 mb-4"
              style={{ color: "#262626" }}
            >
              {p.title}
            </h3>
            <p
              className="type-body mt-auto"
              style={{ color: "#262626", maxWidth: "480px" }}
            >
              {p.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default PromiseSection;
