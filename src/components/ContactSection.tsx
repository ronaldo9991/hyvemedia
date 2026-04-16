import { motion } from "framer-motion";

const ContactSection = () => (
  <section
    id="contact"
    className="section-pad relative overflow-hidden"
    style={{
      background:
        "radial-gradient(1200px 500px at 50% -10%, rgba(255,123,0,0.16), transparent 60%), #f5f3eb",
    }}
  >
    <div className="max-w-[1320px] mx-auto container-x">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <p className="type-caption mb-5" style={{ color: "#ff9a1f" }}>
          Contact Us
        </p>
        <h2 className="type-h2" style={{ color: "#262626", maxWidth: "760px" }}>
          Let&apos;s build your communications edge.
        </h2>
        <p className="type-body mt-4" style={{ color: "rgba(38,38,38,0.72)", maxWidth: "620px" }}>
          Share your goals and we&apos;ll reach out with a tailored plan. This is a demo form.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl p-6 md:p-8"
        style={{
          border: "1px solid rgba(255, 123, 0, 0.35)",
          background:
            "linear-gradient(180deg, rgba(255,123,0,0.08) 0%, rgba(255,123,0,0.02) 100%), rgba(255,255,255,0.86)",
          boxShadow: "0 0 0 1px rgba(255,123,0,0.1) inset, 0 18px 50px rgba(0,0,0,0.08)",
          backdropFilter: "blur(6px)",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Full Name
          </span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,154,31,0.25)",
              color: "#262626",
            }}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Email
          </span>
          <input
            type="email"
            placeholder="name@company.com"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,154,31,0.25)",
              color: "#262626",
            }}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Company
          </span>
          <input
            type="text"
            placeholder="HYVE Labs"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,154,31,0.25)",
              color: "#262626",
            }}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Service Focus
          </span>
          <select
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,154,31,0.25)",
              color: "#262626",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
            <option>Strategy</option>
            <option>Thought Leadership</option>
            <option>Press Relations</option>
            <option>Content</option>
          </select>
        </label>

        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Message
          </span>
          <textarea
            rows={5}
            placeholder="Tell us about your goals..."
            className="type-body rounded-xl px-4 py-3 outline-none resize-y min-h-[140px]"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgba(255,154,31,0.25)",
              color: "#262626",
            }}
          />
        </label>

        <div className="md:col-span-2 pt-2">
          <button
            type="submit"
            className="type-nav rounded-full px-7 py-3 transition-transform hover:scale-[1.02]"
            style={{
              color: "#ffffff",
              background: "linear-gradient(135deg, #ff9a1f 0%, #ff7b00 55%, #ff5e00 100%)",
              boxShadow: "0 10px 30px rgba(255,123,0,0.35)",
            }}
          >
            Send Message
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
