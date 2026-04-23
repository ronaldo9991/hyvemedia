import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dummyCredentials = [
  { role: "Founder Admin", email: "founder@hyvemedia.io", password: "Hermes#2026" },
  { role: "Ops Manager", email: "ops@hyvemedia.io", password: "Hermes#Ops26" },
  { role: "Analyst", email: "analyst@hyvemedia.io", password: "Hermes#Data26" },
];

const HermesAgent = () => (
  <div style={{ overflowX: "clip", minHeight: "100vh", backgroundColor: "var(--color-page)" }}>
    <Navbar />

    <main className="max-w-[1320px] mx-auto container-x" style={{ paddingTop: "140px", paddingBottom: "96px" }}>
      <section
        style={{
          border: "1px solid var(--color-divider)",
          borderRadius: "20px",
          background: "linear-gradient(135deg, rgba(var(--color-orange-rgb),0.1), rgba(var(--color-orange-rgb),0.03))",
          padding: "36px",
        }}
      >
        <p className="type-caption" style={{ color: "var(--color-orange)", margin: 0 }}>
          Hermes Agent
        </p>
        <h1 className="type-h2" style={{ marginTop: "12px", marginBottom: "12px", color: "var(--color-text)" }}>
          HYVE Media Autonomous Agent
        </h1>
        <p className="type-body" style={{ margin: 0, maxWidth: "760px", color: "rgba(38,38,38,0.9)" }}>
          This is the pre-launch portal for the HYVE autonomous agent layer. For now, access uses controlled dummy
          credentials so product, strategy, and ops can test flows before live authentication is enabled.
        </p>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-8" style={{ marginTop: "28px" }}>
        <div
          style={{
            border: "1px solid var(--color-divider)",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            padding: "28px",
          }}
        >
          <h2 className="type-h3" style={{ marginTop: 0, marginBottom: "10px", color: "var(--color-text)" }}>
            Dummy Login IDs
          </h2>
          <p className="type-body" style={{ marginTop: 0, marginBottom: "18px", color: "rgba(38,38,38,0.75)" }}>
            Temporary credentials for internal demo only.
          </p>

          <div className="space-y-3">
            {dummyCredentials.map((cred) => (
              <div
                key={cred.email}
                style={{
                  border: "1px solid rgba(0,0,0,0.09)",
                  borderRadius: "12px",
                  padding: "14px",
                  backgroundColor: "rgba(var(--color-orange-rgb),0.04)",
                }}
              >
                <p className="type-caption" style={{ margin: 0, color: "rgba(38,38,38,0.55)" }}>
                  {cred.role}
                </p>
                <p className="type-body" style={{ margin: "6px 0 2px", fontWeight: 600, color: "var(--color-text)" }}>
                  {cred.email}
                </p>
                <p className="type-body" style={{ margin: 0, color: "rgba(38,38,38,0.78)" }}>
                  {cred.password}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div
          style={{
            border: "1px solid var(--color-divider)",
            borderRadius: "20px",
            backgroundColor: "#ffffff",
            padding: "28px",
          }}
        >
          <h2 className="type-h3" style={{ marginTop: 0, marginBottom: "10px", color: "var(--color-text)" }}>
            Agent Access
          </h2>
          <p className="type-body" style={{ marginTop: 0, marginBottom: "18px", color: "rgba(38,38,38,0.75)" }}>
            UI scaffold ready for backend auth wiring.
          </p>

          <form style={{ display: "grid", gap: "12px" }}>
            <label className="type-caption" style={{ color: "rgba(38,38,38,0.62)" }}>
              Email
            </label>
            <input
              type="email"
              placeholder="name@hyvemedia.io"
              style={{
                height: "48px",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.14)",
                padding: "0 14px",
                fontFamily: "var(--font-body)",
              }}
            />

            <label className="type-caption" style={{ color: "rgba(38,38,38,0.62)", marginTop: "6px" }}>
              Password
            </label>
            <input
              type="password"
              placeholder="Enter password"
              style={{
                height: "48px",
                borderRadius: "10px",
                border: "1px solid rgba(0,0,0,0.14)",
                padding: "0 14px",
                fontFamily: "var(--font-body)",
              }}
            />

            <button
              type="button"
              className="type-nav"
              style={{
                marginTop: "10px",
                height: "50px",
                borderRadius: "12px",
                border: "none",
                backgroundColor: "var(--color-orange)",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              Sign In (Demo)
            </button>
          </form>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default HermesAgent;
