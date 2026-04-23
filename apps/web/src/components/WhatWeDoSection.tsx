import { useEffect, useRef } from "react";
import GlowBlob from "@/components/GlowBlob";

const services = [
  {
    title: "Growth Strategy",
    desc: "Clear commercial direction, built to move the business, not just the marketing metrics.",
  },
  {
    title: "Agentic AI Systems",
    desc: "Intelligent agents that take real work off your team, from research to content to campaign execution. Deployed with senior oversight on every output.",
  },
  {
    title: "Unified Commerce",
    desc: "One connected system across brand, performance and CRM. Less friction. More revenue.",
  },
  {
    title: "Future of Search",
    desc: "Own the answer across Google, ChatGPT, Perplexity and Gemini. We position you where buyers now actually look.",
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
          Growth, re-engineered.
          <br />
          Senior minds. Machine speed. Real outcomes.
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
