import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import GlowBlob from "@/components/GlowBlob";

const services = [
  { title: "Strategy", desc: "Refine your narrative to support your business goals." },
  { title: "Thought Leadership", desc: "Build the profiles of your team's leaders to broaden the impact of your story in the media." },
  { title: "Press Relations", desc: "Work our relationship magic to garner the coverage your project deserves." },
  { title: "Content", desc: "Craft compelling content that meets your target audience where they're at." },
];

const WhatWeDoSection = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const orbY = useTransform(scrollYProgress, [0, 1], [0, -82]);

  return (
    <section
      ref={sectionRef}
      id="what"
      className="relative overflow-hidden section-pad"
      style={{
        background: "linear-gradient(180deg, #f5f3eb 0%, #dee7e8 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[1320px] container-x">
        {/* Eyebrow */}
        <p
          className="type-caption text-center mb-8"
          style={{ color: "#ff7b00" }}
        >
          What We Do
        </p>

        {/* Heading */}
        <h2
          className="type-h2 text-center mx-auto mb-20"
          style={{ color: "#262626", maxWidth: "700px" }}
        >
          You bring the technology.
          <br />
          We spotlight your message on center stage.
        </h2>

        {/* Rows container — positioned relative for the orb */}
        <div className="relative mb-16">
          {/* Orb — centered behind the service rows */}
          <div
            style={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 0,
              pointerEvents: "none",
            }}
            aria-hidden="true"
          >
            <motion.div style={{ y: orbY }}>
              <GlowBlob size={540} intensity="medium" animated />
            </motion.div>
          </div>

          {/* Service rows */}
          <div
            className="relative mx-auto"
            style={{ zIndex: 1, maxWidth: "760px" }}
          >
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
              >
                <div style={{ borderTop: "1px solid #c9c9c9" }} />
                <div
                  className="grid grid-cols-1 md:grid-cols-[280px_1fr] md:gap-16 py-8 lg:py-10"
                >
                  <h3
                    className="type-h3"
                    style={{ color: "#262626", margin: 0 }}
                  >
                    {s.title}
                  </h3>
                  <p
                    className="type-body mt-2 md:mt-0"
                    style={{ color: "#262626", margin: 0, maxWidth: "560px" }}
                  >
                    {s.desc}
                  </p>
                </div>
              </motion.div>
            ))}
            {/* Closing divider */}
            <div style={{ borderTop: "1px solid #c9c9c9" }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
