import { motion } from "framer-motion";
import { useId } from "react";

type GlowBlobIntensity = "low" | "medium" | "high";

interface GlowBlobProps {
  size?: number;
  className?: string;
  animated?: boolean;
  intensity?: GlowBlobIntensity;
}

const PATH_STATES = [
  "M160 20 C237 20 300 83 300 160 C300 237 237 300 160 300 C83 300 20 237 20 160 C20 83 83 20 160 20Z",
  "M161 18 C239 21 302 84 301 162 C299 239 236 302 159 301 C81 299 18 236 19 159 C21 81 83 17 161 18Z",
  "M159 19 C238 18 303 82 302 159 C301 238 239 303 161 302 C82 301 17 239 18 161 C19 82 80 20 159 19Z",
  "M160 17 C240 19 304 81 303 160 C302 240 238 304 160 303 C80 302 16 240 17 160 C18 80 80 15 160 17Z",
];

const intensityMap: Record<
  GlowBlobIntensity,
  { floatPx: number; morphDuration: number; spinDuration: number; rotateDuration: number; glowOpacity: number; scaleDelta: number }
> = {
  low: { floatPx: 2, morphDuration: 20, spinDuration: 30, rotateDuration: 50, glowOpacity: 0.3, scaleDelta: 0.005 },
  medium: { floatPx: 3, morphDuration: 16, spinDuration: 24, rotateDuration: 40, glowOpacity: 0.38, scaleDelta: 0.008 },
  high: { floatPx: 5, morphDuration: 12, spinDuration: 18, rotateDuration: 28, glowOpacity: 0.5, scaleDelta: 0.015 },
};

export default function GlowBlob({
  size = 160,
  className,
  animated = true,
  intensity = "medium",
}: GlowBlobProps) {
  const id = useId().replace(/:/g, "");
  const cfg = intensityMap[intensity];

  return (
    <motion.div
      className={className}
      style={{ width: size, height: size }}
      animate={
        animated
          ? {
              x: [0, cfg.floatPx, -cfg.floatPx, 0],
              y: [0, -cfg.floatPx, cfg.floatPx, 0],
              scale: [1 - cfg.scaleDelta, 1 + cfg.scaleDelta, 1 - cfg.scaleDelta],
            }
          : undefined
      }
      transition={
        animated
          ? { duration: cfg.spinDuration, ease: "easeInOut", repeat: Infinity }
          : undefined
      }
      aria-hidden="true"
    >
      <motion.svg
        viewBox="0 0 320 320"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={animated ? { rotate: 360 } : undefined}
        transition={animated ? { duration: cfg.rotateDuration, ease: "linear", repeat: Infinity } : undefined}
      >
        <defs>
          {/* Cream interior — elliptical, wider than tall */}
          <radialGradient
            id={`cream-${id}`}
            cx="0.5" cy="0.44" r="0.48"
            gradientTransform="translate(0.5 0.44) scale(1 0.84) translate(-0.5 -0.44)"
          >
            <stop offset="0%" style={{ stopColor: "var(--glow-cream-0)" }} />
            <stop offset="25%" style={{ stopColor: "var(--glow-cream-1)" }} />
            <stop offset="48%" style={{ stopColor: "var(--glow-cream-2)" }} />
            <stop offset="65%" style={{ stopColor: "var(--glow-cream-3)" }} />
            <stop offset="80%" style={{ stopColor: "var(--glow-cream-4)" }} stopOpacity="0.6" />
            <stop offset="100%" style={{ stopColor: "var(--glow-cream-5)" }} stopOpacity="0" />
          </radialGradient>

          {/* Top warm glow */}
          <radialGradient id={`topGlow-${id}`} cx="50%" cy="8%" r="30%">
            <stop offset="0%" style={{ stopColor: "var(--glow-top-0)" }} stopOpacity="0.55" />
            <stop offset="50%" style={{ stopColor: "var(--glow-top-1)" }} stopOpacity="0.18" />
            <stop offset="100%" style={{ stopColor: "var(--color-orange)" }} stopOpacity="0" />
          </radialGradient>

          {/* Bottom warmth — deeper orange at base */}
          <radialGradient id={`bottomWarm-${id}`} cx="50%" cy="80%" r="34%">
            <stop offset="0%" style={{ stopColor: "var(--glow-bottom-0)" }} stopOpacity="0.4" />
            <stop offset="60%" style={{ stopColor: "var(--glow-bottom-1)" }} stopOpacity="0.12" />
            <stop offset="100%" style={{ stopColor: "var(--color-orange)" }} stopOpacity="0" />
          </radialGradient>

          {/* Outer glow halo — wide soft bloom */}
          <filter id={`halo-${id}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="14" />
          </filter>

          {/* Medium halo for a second glow ring */}
          <filter id={`haloMid-${id}`} x="-30%" y="-30%" width="160%" height="160%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
          </filter>

          {/* Subtle inner softness */}
          <filter id={`soft-${id}`} x="-2%" y="-2%" width="104%" height="104%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.6" />
          </filter>
        </defs>

        {/* Layer 1: Wide outer glow bloom */}
        <motion.path
          d={PATH_STATES[0]}
          style={{ fill: "var(--color-orange)" }}
          opacity={cfg.glowOpacity}
          filter={`url(#halo-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 2: Tighter mid-glow for intensity */}
        <motion.path
          d={PATH_STATES[0]}
          style={{ fill: "var(--glow-layer-2)" }}
          opacity={cfg.glowOpacity * 0.6}
          filter={`url(#haloMid-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 3: Solid orange base */}
        <motion.path
          d={PATH_STATES[0]}
          style={{ fill: "var(--color-orange)" }}
          filter={`url(#soft-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 4: Cream interior — egg-yolk center */}
        <motion.path
          d={PATH_STATES[0]}
          fill={`url(#cream-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 5: Top warm glow */}
        <motion.path
          d={PATH_STATES[0]}
          fill={`url(#topGlow-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 6: Bottom warmth */}
        <motion.path
          d={PATH_STATES[0]}
          fill={`url(#bottomWarm-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />
      </motion.svg>
    </motion.div>
  );
}
