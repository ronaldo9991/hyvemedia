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
  "M162 16 C242 22 304 86 302 164 C298 244 234 306 156 304 C78 302 16 240 18 158 C22 76 82 14 162 16Z",
  "M156 22 C238 16 306 78 304 156 C302 234 242 302 164 298 C86 304 22 244 20 164 C16 84 74 24 156 22Z",
  "M164 18 C244 24 308 82 304 162 C300 242 236 308 158 306 C76 304 12 240 16 160 C20 78 84 12 164 18Z",
];

const intensityMap: Record<
  GlowBlobIntensity,
  { floatPx: number; morphDuration: number; spinDuration: number; rotateDuration: number; glowOpacity: number; scaleDelta: number }
> = {
  low: { floatPx: 3, morphDuration: 18, spinDuration: 28, rotateDuration: 40, glowOpacity: 0.18, scaleDelta: 0.008 },
  medium: { floatPx: 5, morphDuration: 14, spinDuration: 22, rotateDuration: 32, glowOpacity: 0.22, scaleDelta: 0.012 },
  high: { floatPx: 7, morphDuration: 10, spinDuration: 16, rotateDuration: 24, glowOpacity: 0.28, scaleDelta: 0.02 },
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
          {/* Large cream interior — elliptical, wider than tall */}
          <radialGradient
            id={`cream-${id}`}
            cx="0.5" cy="0.44" r="0.5"
            gradientTransform="translate(0.5 0.44) scale(1 0.82) translate(-0.5 -0.44)"
          >
            <stop offset="0%" stopColor="#F5DFC0" />
            <stop offset="40%" stopColor="#F2D4A8" />
            <stop offset="62%" stopColor="#EDBE78" />
            <stop offset="76%" stopColor="#F0A040" />
            <stop offset="88%" stopColor="#FF8A18" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#FF7B00" stopOpacity="0" />
          </radialGradient>

          {/* Top warm glow — yellow-gold bleed above the orb */}
          <radialGradient id={`topGlow-${id}`} cx="50%" cy="6%" r="28%">
            <stop offset="0%" stopColor="#FFD060" stopOpacity="0.5" />
            <stop offset="50%" stopColor="#FFB830" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#FF7B00" stopOpacity="0" />
          </radialGradient>

          {/* Bottom warmth — deeper orange at base */}
          <radialGradient id={`bottomWarm-${id}`} cx="50%" cy="82%" r="32%">
            <stop offset="0%" stopColor="#E86000" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF7B00" stopOpacity="0" />
          </radialGradient>

          {/* Outer glow halo — soft warm bloom */}
          <filter id={`halo-${id}`} x="-25%" y="-25%" width="150%" height="150%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" />
          </filter>

          {/* Very subtle inner softness */}
          <filter id={`soft-${id}`} x="-3%" y="-3%" width="106%" height="106%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="0.8" />
          </filter>
        </defs>

        {/* Layer 1: Outer warm halo */}
        <motion.path
          d={PATH_STATES[0]}
          fill="#FF7B00"
          opacity={cfg.glowOpacity}
          filter={`url(#halo-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 2: Solid orange base — the rim color */}
        <motion.path
          d={PATH_STATES[0]}
          fill="#FF7B00"
          filter={`url(#soft-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 3: Large cream interior — creates the egg-yolk center */}
        <motion.path
          d={PATH_STATES[0]}
          fill={`url(#cream-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 4: Top warm glow */}
        <motion.path
          d={PATH_STATES[0]}
          fill={`url(#topGlow-${id})`}
          animate={animated ? { d: [...PATH_STATES, PATH_STATES[0]] } : undefined}
          transition={animated ? { duration: cfg.morphDuration, ease: "easeInOut", repeat: Infinity } : undefined}
        />

        {/* Layer 5: Bottom warmth */}
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
