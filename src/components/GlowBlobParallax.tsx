import { motion, useSpring, useMotionValue } from "framer-motion";
import { useEffect, useRef, useId } from "react";

type Intensity = "low" | "medium" | "high";

interface GlowBlobParallaxProps {
  size?: number;
  className?: string;
  intensity?: Intensity;
}

const INTENSITY_CFG: Record<Intensity, { travel: number; breathScale: [number, number]; floatPx: number; rotDeg: number }> = {
  low:    { travel: 14, breathScale: [0.995, 1.005], floatPx: 2, rotDeg: 0.6 },
  medium: { travel: 24, breathScale: [0.99, 1.02],   floatPx: 3, rotDeg: 1.2 },
  high:   { travel: 36, breathScale: [0.985, 1.025],  floatPx: 5, rotDeg: 2 },
};

/*
 * Organic blob path — soft irregular silhouette (NOT a circle).
 * Roughly 700×700 viewBox, centered around 350,350.
 * Slight asymmetry: left side bulges a touch more, bottom is heavier.
 */
const BLOB_PATH =
  "M350 58" +
  "C402 56 448 72 486 98" +
  "C524 124 558 156 580 198" +
  "C602 240 614 278 618 322" +
  "C622 366 616 412 600 452" +
  "C584 492 558 524 524 548" +
  "C490 572 450 592 406 604" +
  "C362 616 320 618 278 608" +
  "C236 598 196 580 162 552" +
  "C128 524 102 490 84 450" +
  "C66 410 58 372 58 330" +
  "C58 288 66 248 82 212" +
  "C98 176 122 146 154 120" +
  "C186 94 224 76 266 66" +
  "C308 56 330 58 350 58Z";

export default function GlowBlobParallax({
  size = 320,
  className,
  intensity = "medium",
}: GlowBlobParallaxProps) {
  const cfg = INTENSITY_CFG[intensity];
  const id = useId().replace(/:/g, "");

  /* --- Scroll-direction parallax --- */
  const scrollDir = useMotionValue(0);
  const smoothY = useSpring(scrollDir, { stiffness: 60, damping: 22, mass: 0.8 });
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const cur = window.scrollY;
        const delta = cur - lastScrollY.current;
        lastScrollY.current = cur;
        if (delta > 2) scrollDir.set(-cfg.travel);
        else if (delta < -2) scrollDir.set(cfg.travel * 0.65);
        else scrollDir.set(0);
        ticking = false;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir, cfg.travel]);

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size, y: smoothY }}
      animate={{
        x: [0, cfg.floatPx, -cfg.floatPx, 0],
        y: [0, -cfg.floatPx, cfg.floatPx, 0],
        scale: [cfg.breathScale[0], cfg.breathScale[1], cfg.breathScale[0]],
        rotate: [0, cfg.rotDeg, 0, -cfg.rotDeg, 0],
      }}
      transition={{
        duration: 14,
        ease: "easeInOut",
        repeat: Infinity,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 700 700" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* LAYER 1 — base radial gradient (sun-glare offset at 45% 38%) */}
          <radialGradient id={`base-${id}`} cx="45%" cy="38%" r="52%">
            <stop offset="0%"   stopColor="#f9f0c8" />
            <stop offset="12%"  stopColor="#f9c94e" />
            <stop offset="26%"  stopColor="#f5a623" />
            <stop offset="40%"  stopColor="#f07c1a" />
            <stop offset="56%"  stopColor="#e85d0e" />
            <stop offset="70%"  stopColor="#d44208" />
            <stop offset="83%"  stopColor="#b82e04" />
            <stop offset="95%"  stopColor="#8c1a02" />
            <stop offset="100%" stopColor="#6b1001" />
          </radialGradient>

          {/* LAYER 2 — inner cream/gold glow (upper-left light source) */}
          <radialGradient id={`cream-${id}`} cx="44%" cy="36%" r="34%">
            <stop offset="0%"   stopColor="#f9f0c8" stopOpacity="0.9" />
            <stop offset="35%"  stopColor="#f9c94e" stopOpacity="0.5" />
            <stop offset="65%"  stopColor="#f5a623" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>

          {/* LAYER 3 — golden highlight wash (subtle warmth) */}
          <radialGradient id={`gold-${id}`} cx="52%" cy="28%" r="28%">
            <stop offset="0%"   stopColor="#f9c94e" stopOpacity="0.35" />
            <stop offset="50%"  stopColor="#f5a623" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#f5a623" stopOpacity="0" />
          </radialGradient>

          {/* LAYER 4a — hotspot lower-left (deep warm accent) */}
          <radialGradient id={`hotBL-${id}`} cx="32%" cy="70%" r="22%">
            <stop offset="0%"   stopColor="#d44208" stopOpacity="0.4" />
            <stop offset="55%"  stopColor="#e85d0e" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#e85d0e" stopOpacity="0" />
          </radialGradient>

          {/* LAYER 4b — hotspot upper-left (softer warm pocket) */}
          <radialGradient id={`hotUL-${id}`} cx="28%" cy="30%" r="18%">
            <stop offset="0%"   stopColor="#e85d0e" stopOpacity="0.22" />
            <stop offset="55%"  stopColor="#f07c1a" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#f07c1a" stopOpacity="0" />
          </radialGradient>

          {/* LAYER 5 — outer atmosphere glow */}
          <filter id={`atmo-${id}`} x="-35%" y="-35%" width="170%" height="170%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="42" />
          </filter>

          {/* Soft edge blur for main shape */}
          <filter id={`edge-${id}`} x="-6%" y="-6%" width="112%" height="112%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.8" />
          </filter>
        </defs>

        {/* LAYER 5 — outer atmosphere glow (behind everything) */}
        <path d={BLOB_PATH} fill="#e85d0e" opacity="0.14" filter={`url(#atmo-${id})`} />
        <path d={BLOB_PATH} fill="#f5a623" opacity="0.1" filter={`url(#atmo-${id})`} transform="translate(4, 8) scale(0.96)" />

        {/* LAYER 1 — base organic blob shape with soft edges */}
        <g filter={`url(#edge-${id})`}>
          <path d={BLOB_PATH} fill={`url(#base-${id})`} />
        </g>

        {/* LAYER 3 — golden highlight wash */}
        <path d={BLOB_PATH} fill={`url(#gold-${id})`} />

        {/* LAYER 2 — large inner cream glow */}
        <path d={BLOB_PATH} fill={`url(#cream-${id})`} />

        {/* LAYER 4a — lower-left hotspot */}
        <path d={BLOB_PATH} fill={`url(#hotBL-${id})`} />

        {/* LAYER 4b — upper-left hotspot */}
        <path d={BLOB_PATH} fill={`url(#hotUL-${id})`} />
      </svg>
    </motion.div>
  );
}
