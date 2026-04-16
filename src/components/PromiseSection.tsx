import { motion } from "framer-motion";

const promises = [
  {
    num: "01",
    title: "Extremely communicative",
    desc: "You'll hear from us A LOT. We won't leave you waiting or wondering what's next. Communication is the name of the game for us.",
  },
  {
    num: "02",
    title: "High quality results",
    desc: "The proof is in the pudding — we deliver results that create the greatest impact.",
  },
  {
    num: "03",
    title: "Crypto obsessed",
    desc: "Communicating the value of cutting-edge companies and projects to the world gives us purpose; it's a mission that's personal to us.",
  },
  {
    num: "04",
    title: "Win the long game",
    desc: "Your goals are our goals. We're here to help you go the distance and realize your project's vision.",
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
        style={{ color: "#ff7b00" }}
      >
        Our Promise To You
      </p>
      <h2
        className="type-h2 text-center mx-auto mb-20"
        style={{ color: "#262626", maxWidth: "680px" }}
      >
        You can lean on us as your communications experts.
        <br />
        "We've got you!"
      </h2>

      <div
        className="grid md:grid-cols-2"
        style={{ gap: "56px 80px" }}
      >
        {promises.map((p, i) => (
          <motion.div
            key={p.num}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              borderTop: "1px solid #c9c9c9",
              paddingTop: "24px",
            }}
          >
            <p
              className="type-h2 mb-2"
              style={{ color: "#ff7b00" }}
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
              className="type-body"
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
