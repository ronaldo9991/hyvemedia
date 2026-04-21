import { motion } from "framer-motion";
import { useId } from "react";

type GlowBlobIntensity = "low" | "medium" | "high";

interface GlowBlobProps {
  size?: number;
  className?: string;
  animated?: boolean;
  intensity?: GlowBlobIntensity;
}

// Exact HYVE icon hex geometry from src/assets/icon.svg.
const LOGO_HEX_PATH =
  "M181.64,76L140.29,4.33C138.75,1.65,135.89,0,132.79,0L50.06.03c-3.09,0-5.95,1.65-7.5,4.33L1.16,76.06c-1.55,2.68-1.55,5.98,0,8.66l41.35,71.67c1.55,2.68,4.4,4.33,7.5,4.33l82.74-.03c3.09,0,5.95-1.65,7.5-4.33l41.39-71.7c1.55-2.68,1.55-5.98,0-8.66ZM152.51,82.02l-19.31,33.45-29.52-50.99c-1.04-1.8-2.96-2.91-5.04-2.91l-58.92-.07,19.31-33.45c1.04-1.8,2.95-2.9,5.03-2.9l55.56.07c2.08,0,4,1.11,5.04,2.91l27.84,48.08c1.04,1.8,1.04,4.01,0,5.81Z";

const intensityMap: Record<
  GlowBlobIntensity,
  { floatPx: number; spinDuration: number; glowOpacity: number; scaleDelta: number }
> = {
  low: { floatPx: 2, spinDuration: 30, glowOpacity: 0.3, scaleDelta: 0.005 },
  medium: { floatPx: 3, spinDuration: 24, glowOpacity: 0.38, scaleDelta: 0.008 },
  high: { floatPx: 5, spinDuration: 18, glowOpacity: 0.5, scaleDelta: 0.015 },
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
      >
        <defs>
          {/* Subtle in-shape contrast, still within brand hue */}
          <radialGradient id={`hexHighlight-${id}`} cx="44%" cy="34%" r="42%">
            <stop offset="0%" style={{ stopColor: "var(--color-orange-light)" }} stopOpacity="0.18" />
            <stop offset="55%" style={{ stopColor: "var(--color-orange-light)" }} stopOpacity="0.06" />
            <stop offset="100%" style={{ stopColor: "var(--color-orange-light)" }} stopOpacity="0" />
          </radialGradient>
          <radialGradient id={`hexShade-${id}`} cx="68%" cy="74%" r="45%">
            <stop offset="0%" style={{ stopColor: "var(--color-orange-dark)" }} stopOpacity="0.08" />
            <stop offset="60%" style={{ stopColor: "var(--color-orange-dark)" }} stopOpacity="0.03" />
            <stop offset="100%" style={{ stopColor: "var(--color-orange-dark)" }} stopOpacity="0" />
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

        <g transform="translate(32 47) scale(1.4065934066)">
          {/* Layer 1: Wide outer glow bloom */}
          <motion.path
            d={LOGO_HEX_PATH}
            style={{ fill: "var(--color-orange)" }}
            opacity={cfg.glowOpacity}
            filter={`url(#halo-${id})`}
          />

          {/* Layer 2: Tighter mid-glow for intensity */}
          <motion.path
            d={LOGO_HEX_PATH}
            style={{ fill: "var(--color-orange)" }}
            opacity={cfg.glowOpacity * 0.6}
            filter={`url(#haloMid-${id})`}
          />

          {/* Layer 3: Solid single-color hexagon */}
          <motion.path
            d={LOGO_HEX_PATH}
            style={{ fill: "var(--color-orange)" }}
            filter={`url(#soft-${id})`}
          />

          {/* Precision contrast overlays */}
          <motion.path d={LOGO_HEX_PATH} fill={`url(#hexHighlight-${id})`} />
          <motion.path d={LOGO_HEX_PATH} fill={`url(#hexShade-${id})`} />
        </g>
      </motion.svg>
    </motion.div>
  );
}
