import { motion, useInView, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { useRef, type ComponentType } from "react";
import {
  Compass,
  Target,
  Sparkles,
  Rocket,
  TrendingUp,
  type LucideProps,
} from "lucide-react";

const ACCENT = "var(--color-orange)";
const ICON_GRADIENT =
  "linear-gradient(135deg, var(--color-orange-light) 0%, var(--color-orange) 55%, var(--color-orange-dark) 100%)";
const ICON_SHADOW = "0 8px 20px rgb(var(--color-orange-rgb) / 0.32)";

type Step = {
  phase: string;
  title: string;
  blurb: string;
  meta: string;
  Icon: ComponentType<LucideProps>;
};

const steps: Step[] = [
  {
    phase: "01 · Diagnose",
    title: "Diagnose the real problem",
    blurb: "We start where most agencies skip: the commercial problem, not the marketing brief.",
    meta: "Commercial · Audience · Signals",
    Icon: Compass,
  },
  {
    phase: "02 · Design",
    title: "Design the strategy and the system",
    blurb: "One sharp idea. A clear plan. The intelligent systems that will accelerate it.",
    meta: "Strategy · Blueprint · KPIs",
    Icon: Target,
  },
  {
    phase: "03 · Build",
    title: "Build the work and the agents",
    blurb: "Senior strategists build the thinking. Intelligent agents execute at speed. Nothing ships without a senior sign-off.",
    meta: "Creative · Content · Agents",
    Icon: Sparkles,
  },
  {
    phase: "04 · Launch",
    title: "Launch, then prove it",
    blurb: "Go live fast. Measure against commercial outcomes, not vanity metrics.",
    meta: "Launch · Measurement · Proof",
    Icon: Rocket,
  },
  {
    phase: "05 · Compound",
    title: "Compound what works",
    blurb: "We double down on what moves the business. We kill what doesn't. Every month.",
    meta: "Optimise · Iterate · Scale",
    Icon: TrendingUp,
  },
];

const cardVariants = {
  hidden: (fromLeft: boolean) => ({
    opacity: 0,
    x: fromLeft ? -48 : 48,
    y: 14,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { type: "spring" as const, stiffness: 80, damping: 18 },
  },
};

type TimelineCardProps = {
  step: Step;
  index: number;
  reduceMotion: boolean;
};

const TimelineCard = ({ step, index, reduceMotion }: TimelineCardProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const inView = useInView(rowRef, { once: true, margin: "-15% 0px -15% 0px" });
  const fromLeft = index % 2 === 0;
  const Icon = step.Icon;

  return (
    <div
      ref={rowRef}
      className="relative md:grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] md:items-center"
    >
      {/* CARD */}
      <motion.article
        custom={fromLeft}
        variants={reduceMotion ? undefined : cardVariants}
        initial={reduceMotion ? false : "hidden"}
        animate={reduceMotion ? {} : inView ? "visible" : "hidden"}
        whileHover={
          reduceMotion
            ? {}
            : {
                y: -4,
                boxShadow: "0 18px 40px rgb(var(--color-orange-rgb) / 0.18)",
              }
        }
        transition={{ type: "spring", stiffness: 220, damping: 22 }}
        className={[
          "relative rounded-[18px] bg-white px-6 py-5 md:px-7 md:py-6",
          "border border-[rgba(29,29,29,0.06)]",
          "shadow-[0_6px_22px_rgba(20,20,20,0.05)]",
          fromLeft ? "md:col-start-1 md:mr-2" : "md:col-start-3 md:ml-2",
        ].join(" ")}
      >
        <span
          className="pointer-events-none absolute right-4 top-2 select-none text-[64px] leading-none font-semibold"
          style={{ color: "rgb(var(--color-orange-rgb) / 0.10)" }}
          aria-hidden="true"
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        <p
          className="uppercase text-[11px] tracking-[0.18em] mb-3"
          style={{ color: ACCENT }}
        >
          {step.phase}
        </p>

        <h3
          className="text-[26px] md:text-[28px] leading-[1.08] mb-2 pr-14"
          style={{ color: "#1d1d1d" }}
        >
          {step.title}
        </h3>
        <p
          className="text-[15px] leading-[1.6] mb-3 max-w-[44ch]"
          style={{ color: "#4a4a4a" }}
        >
          {step.blurb}
        </p>
        <p
          className="text-[11px] uppercase tracking-[0.16em]"
          style={{ color: "rgba(29,29,29,0.48)" }}
        >
          {step.meta}
        </p>
      </motion.article>

      {/* SPINE MARKER – icon on the rail (desktop) */}
      <div className="hidden md:flex md:col-start-2 md:items-center md:justify-center relative z-10">
        <motion.span
          initial={reduceMotion ? false : { scale: 0.5, opacity: 0, rotate: -12 }}
          animate={
            reduceMotion
              ? {}
              : inView
                ? { scale: 1, opacity: 1, rotate: 0 }
                : { scale: 0.5, opacity: 0, rotate: -12 }
          }
          transition={{ type: "spring", stiffness: 220, damping: 16, delay: 0.08 }}
          whileHover={reduceMotion ? {} : { scale: 1.08, rotate: 4 }}
          className="flex items-center justify-center rounded-full ring-[6px] ring-white"
          style={{
            width: 44,
            height: 44,
            background: ICON_GRADIENT,
            boxShadow: ICON_SHADOW,
            color: "#fff",
          }}
          aria-hidden="true"
        >
          <Icon size={20} strokeWidth={2} />
        </motion.span>
      </div>
    </div>
  );
};

const HowWeWorkSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 75%", "end 25%"],
  });
  const lineFill = useSpring(scrollYProgress, { stiffness: 70, damping: 20, mass: 0.3 });

  return (
    <section id="how" ref={sectionRef} className="section-pad bg-white">
      <div className="max-w-[1180px] mx-auto container-x">
        <header className="text-center mb-14 md:mb-20">
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 10 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.5 }}
            className="uppercase text-[12px] tracking-[0.2em] mb-4"
            style={{ color: ACCENT }}
          >
            How We Work
          </motion.p>
          <motion.h2
            initial={reduceMotion ? false : { opacity: 0, y: 14 }}
            whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20% 0px" }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="mx-auto max-w-[760px] text-[40px] md:text-[54px] leading-[1.04]"
            style={{ color: "#1d1d1d" }}
          >
            Five precise moves. <br className="hidden md:block" />
            <span style={{ color: ACCENT }}>Zero filler.</span>
          </motion.h2>
        </header>

        <div className="relative">
          {/* spine base + fill */}
          <div
            className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 rounded-full"
            style={{ background: "rgb(var(--color-orange-rgb) / 0.18)" }}
            aria-hidden="true"
          />
          <motion.div
            className="hidden md:block absolute left-1/2 top-2 bottom-2 w-[2px] -translate-x-1/2 origin-top rounded-full"
            style={{ background: ACCENT, scaleY: lineFill }}
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-14">
            {steps.map((step, index) => (
              <TimelineCard
                key={step.title}
                step={step}
                index={index}
                reduceMotion={Boolean(reduceMotion)}
              />
            ))}
          </div>
        </div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={reduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 md:mt-20 text-center text-[13px] tracking-[0.2em] uppercase"
          style={{ color: "rgba(29,29,29,0.58)" }}
        >
          Precision. Not performance theatre.
        </motion.p>
      </div>
    </section>
  );
};

export default HowWeWorkSection;
