import { useEffect, useRef } from "react";
import GlowBlob from "@/components/GlowBlob";

const services = [
  { title: "Strategy", desc: "Refine your narrative to support your business goals." },
  {
    title: "Thought Leadership",
    desc: "Build the profiles of your team's leaders to broaden the impact of your story in the media.",
  },
  {
    title: "Press Relations",
    desc: "Work our relationship magic to garner the coverage your project deserves.",
  },
  {
    title: "Content",
    desc: "Craft compelling content that meets your target audience where they're at.",
  },
];

const WhatWeDoSection = () => {
  const orbLayerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const layer = orbLayerRef.current;
    if (!layer) return;
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      layer.style.setProperty("--orb-shift", "0px");
      return;
    }

    let lastY = window.scrollY;
    let direction: "up" | "down" | null = null;
    let raf = 0;

    const update = () => {
      const y = window.scrollY;
      const next = y > lastY ? "down" : y < lastY ? "up" : direction;
      if (next !== direction) {
        direction = next;
        if (direction === "down") {
          layer.style.setProperty("--orb-shift", "-26px");
        } else if (direction === "up") {
          layer.style.setProperty("--orb-shift", "26px");
        }
      }
      lastY = y;
      raf = 0;
    };

    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="what" className="whatwedo">
      <div className="wrap">
        <p className="eyebrow type-caption">What We Do</p>

        <h2 className="heading type-h2">
          You bring the technology.
          <br />
          We spotlight your message on center stage.
        </h2>

        <div className="rows-stage">
          <div className="orb-layer" ref={orbLayerRef} aria-hidden="true">
            <div className="orb-inner">
              <GlowBlob size={560} intensity="medium" animated />
            </div>
          </div>

          <div className="rows">
            {services.map((s) => (
              <div key={s.title} className="row">
                <h3 className="type-h3">{s.title}</h3>
                <p className="type-body">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
