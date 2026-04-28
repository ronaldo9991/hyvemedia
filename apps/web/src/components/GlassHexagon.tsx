import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import storytellingHexagonVideo from "@/assets/storytelling-hexagon.mp4";

interface GlassHexagonProps {
  className?: string;
  size?: number;
}

const LOOP_START = 0.35;
const LOOP_END = 4.95;
const CROSSFADE_SECONDS = 0.95;

const smoothStep = (value: number) => {
  const clamped = Math.min(1, Math.max(0, value));
  return clamped * clamped * (3 - 2 * clamped);
};

const waitForMetadata = (video: HTMLVideoElement) =>
  video.readyState >= 1
    ? Promise.resolve()
    : new Promise<void>((resolve) => {
        video.addEventListener("loadedmetadata", () => resolve(), { once: true });
      });

const seekToFrame = (video: HTMLVideoElement, time: number) =>
  new Promise<void>((resolve) => {
    let finished = false;
    let timeout = 0;

    const finish = () => {
      if (finished) return;
      finished = true;
      window.clearTimeout(timeout);
      video.removeEventListener("seeked", finish);
      video.removeEventListener("loadeddata", finish);
      video.removeEventListener("canplay", finish);
      resolve();
    };

    if (video.readyState >= 2 && Math.abs(video.currentTime - time) < 0.05) {
      resolve();
      return;
    }

    video.addEventListener("seeked", finish);
    video.addEventListener("loadeddata", finish);
    video.addEventListener("canplay", finish);
    timeout = window.setTimeout(finish, 1200);
    video.currentTime = time;
  });

const configureVideo = (video: HTMLVideoElement) => {
  video.muted = true;
  video.loop = false;
  video.playsInline = true;
  video.preload = "auto";
};

const GlassHexagon = ({ className, size = 300 }: GlassHexagonProps) => {
  const primaryRef = useRef<HTMLVideoElement>(null);
  const secondaryRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const primary = primaryRef.current;
    const secondary = secondaryRef.current;
    if (!primary || !secondary) return;

    let animationFrame = 0;
    let cancelled = false;
    let active = primary;
    let standby = secondary;
    let isCrossfading = false;

    const startVideo = (video: HTMLVideoElement, currentTime = LOOP_START) => {
      video.currentTime = currentTime;
      void video.play().catch(() => undefined);
    };

    const tick = () => {
      if (cancelled) return;

      const remaining = LOOP_END - active.currentTime;

      if (!isCrossfading && remaining <= CROSSFADE_SECONDS) {
        isCrossfading = true;
        startVideo(standby, LOOP_START + Math.max(0, CROSSFADE_SECONDS - remaining));
      }

      if (isCrossfading) {
        const progress = smoothStep((CROSSFADE_SECONDS - remaining) / CROSSFADE_SECONDS);
        active.style.opacity = `${1 - progress}`;
        standby.style.opacity = `${progress}`;

        if (progress >= 0.995 || active.currentTime >= LOOP_END) {
          active.pause();
          active.currentTime = LOOP_START;
          active.style.opacity = "0";
          standby.style.opacity = "1";

          const previousActive = active;
          active = standby;
          standby = previousActive;
          isCrossfading = false;
        }
      } else {
        active.style.opacity = "1";
        standby.style.opacity = "0";
      }

      animationFrame = requestAnimationFrame(tick);
    };

    configureVideo(primary);
    configureVideo(secondary);

    void Promise.all([waitForMetadata(primary), waitForMetadata(secondary)])
      .then(() => Promise.all([seekToFrame(primary, LOOP_START), seekToFrame(secondary, LOOP_START)]))
      .then(() => {
        if (cancelled) return;

        primary.style.opacity = "1";
        secondary.style.opacity = "0";
        void primary.play().catch(() => undefined);
        secondary.currentTime = LOOP_START;
        animationFrame = requestAnimationFrame(tick);
      });

    return () => {
      cancelled = true;
      cancelAnimationFrame(animationFrame);
      primary.pause();
      secondary.pause();
    };
  }, []);

  return (
    <motion.div
      className={className}
      style={{
        width: size,
        maxWidth: "88vw",
        aspectRatio: "1 / 1",
        backgroundColor: "var(--color-page)",
        isolation: "isolate",
      }}
      animate={{
        y: [0, -8, 0, 8, 0],
        scale: [1, 1.01, 1, 0.995, 1],
      }}
      transition={{ duration: 7.5, ease: "easeInOut", repeat: Infinity }}
      aria-hidden="true"
    >
      <div className="relative h-full w-full">
        <div
          className="absolute inset-0 overflow-hidden"
          style={{
            WebkitMaskImage:
              "radial-gradient(circle at center, #000 0 54%, rgba(0, 0, 0, 0.9) 63%, transparent 77%)",
            maskImage:
              "radial-gradient(circle at center, #000 0 54%, rgba(0, 0, 0, 0.9) 63%, transparent 77%)",
          }}
        >
          <video
            ref={primaryRef}
            src={storytellingHexagonVideo}
            className="absolute inset-0 block h-full w-full select-none object-cover"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            style={{
              mixBlendMode: "multiply",
              opacity: 0,
              transition: "opacity 80ms linear",
            }}
          />
          <video
            ref={secondaryRef}
            src={storytellingHexagonVideo}
            className="absolute inset-0 block h-full w-full select-none object-cover"
            muted
            playsInline
            preload="auto"
            disablePictureInPicture
            style={{
              mixBlendMode: "multiply",
              opacity: 0,
              transition: "opacity 80ms linear",
            }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default GlassHexagon;
