import { motion } from "framer-motion";

const ContactSection = () => (
  <section
    id="contact"
    className="section-pad relative overflow-hidden"
    style={{
      background:
        "radial-gradient(1200px 500px at 50% -10%, rgb(var(--color-orange-rgb) / 0.16), transparent 60%), #f5f3eb",
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
        <p className="type-caption mb-5" style={{ color: "var(--color-orange-light)" }}>
          Contact
        </p>
        <h2 className="type-h2" style={{ color: "#262626", maxWidth: "760px" }}>
          Let&apos;s talk about how you grow next.
        </h2>
        <p className="type-body mt-4" style={{ color: "rgba(38,38,38,0.72)", maxWidth: "620px" }}>
          Tell us what you&apos;re trying to move. We&apos;ll come back with a sharp view on how we&apos;d approach it.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 rounded-2xl p-6 md:p-8"
        style={{
          border: "1px solid rgb(var(--color-orange-rgb) / 0.35)",
          background:
            "linear-gradient(180deg, rgb(var(--color-orange-rgb) / 0.08) 0%, rgb(var(--color-orange-rgb) / 0.02) 100%), rgba(255,255,255,0.86)",
          boxShadow: "0 0 0 1px rgb(var(--color-orange-rgb) / 0.1) inset, 0 18px 50px rgba(0,0,0,0.08)",
          backdropFilter: "blur(6px)",
        }}
        onSubmit={(e) => e.preventDefault()}
      >
        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Full name
          </span>
          <input
            type="text"
            placeholder="Jane Doe"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgb(var(--color-orange-light-rgb) / 0.25)",
              color: "#262626",
            }}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            Work email
          </span>
          <input
            type="email"
            placeholder="name@company.com"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgb(var(--color-orange-light-rgb) / 0.25)",
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
            placeholder="Company name"
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgb(var(--color-orange-light-rgb) / 0.25)",
              color: "#262626",
            }}
          />
        </label>

        <label className="flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            What you need help with
          </span>
          <select
            className="type-body rounded-xl px-4 py-3 outline-none"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgb(var(--color-orange-light-rgb) / 0.25)",
              color: "#262626",
            }}
            defaultValue=""
          >
            <option value="" disabled>
              Choose a focus
            </option>
            <option>Growth Strategy</option>
            <option>Agentic AI Systems</option>
            <option>Unified Commerce</option>
            <option>Future of Search</option>
          </select>
        </label>

        <label className="md:col-span-2 flex flex-col gap-2">
          <span className="type-caption" style={{ color: "rgba(38,38,38,0.72)" }}>
            What you&apos;re trying to solve
          </span>
          <textarea
            rows={5}
            placeholder="Describe the problem, the goal, and what 'success' looks like."
            className="type-body rounded-xl px-4 py-3 outline-none resize-y min-h-[140px]"
            style={{
              background: "rgba(255,255,255,0.9)",
              border: "1px solid rgb(var(--color-orange-light-rgb) / 0.25)",
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
              background: "linear-gradient(135deg, var(--color-orange-light) 0%, var(--color-orange) 55%, var(--color-orange-dark) 100%)",
              boxShadow: "0 10px 30px rgb(var(--color-orange-rgb) / 0.35)",
            }}
          >
            Send
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default ContactSection;
