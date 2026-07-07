import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { useRef, type CSSProperties, type MouseEvent } from "react";

type Orb = {
  id: string;
  size: number;
  position: Pick<CSSProperties, "left" | "right" | "top" | "bottom">;
  gradient: string;
  opacity: number;
  blur?: number;
  strength: number;
  scroll: number;
};

type Props = {
  variant?: "journey" | "cases" | "next" | "contact";
};

const orbSets: Record<NonNullable<Props["variant"]>, Orb[]> = {
  journey: [
    {
      id: "journey-sage",
      size: 260,
      position: { right: "8%", top: "10%" },
      gradient: "radial-gradient(circle at 35% 32%, rgba(232,239,232,0.95), rgba(239,237,244,0.58), transparent 72%)",
      opacity: 0.5,
      blur: 22,
      strength: 12,
      scroll: -34,
    },
    {
      id: "journey-coral",
      size: 180,
      position: { left: "4%", bottom: "18%" },
      gradient: "radial-gradient(circle at 40% 35%, rgba(255,183,178,0.72), rgba(247,222,215,0.5), transparent 74%)",
      opacity: 0.42,
      blur: 20,
      strength: -9,
      scroll: 24,
    },
  ],
  cases: [
    {
      id: "cases-blue",
      size: 320,
      position: { left: "7%", top: "14%" },
      gradient: "radial-gradient(circle at 34% 30%, rgba(230,230,250,0.78), rgba(239,237,244,0.58), transparent 72%)",
      opacity: 0.45,
      blur: 24,
      strength: 10,
      scroll: -42,
    },
    {
      id: "cases-peach",
      size: 220,
      position: { right: "6%", bottom: "10%" },
      gradient: "radial-gradient(circle at 38% 34%, rgba(255,183,178,0.5), rgba(232,239,232,0.44), transparent 72%)",
      opacity: 0.38,
      blur: 24,
      strength: -12,
      scroll: 32,
    },
  ],
  next: [
    {
      id: "next-mint",
      size: 280,
      position: { right: "10%", top: "8%" },
      gradient: "radial-gradient(circle at 35% 35%, rgba(232,239,232,0.85), rgba(255,255,255,0.34), transparent 72%)",
      opacity: 0.48,
      blur: 26,
      strength: 8,
      scroll: -24,
    },
    {
      id: "next-lavender",
      size: 360,
      position: { left: "2%", bottom: "-10%" },
      gradient: "radial-gradient(circle at 42% 38%, rgba(239,237,244,0.72), rgba(255,183,178,0.22), transparent 72%)",
      opacity: 0.4,
      blur: 34,
      strength: -8,
      scroll: 22,
    },
  ],
  contact: [
    {
      id: "contact-pink",
      size: 260,
      position: { left: "8%", top: "18%" },
      gradient: "radial-gradient(circle at 36% 34%, rgba(255,183,178,0.62), rgba(247,222,215,0.42), transparent 74%)",
      opacity: 0.45,
      blur: 24,
      strength: 10,
      scroll: -28,
    },
    {
      id: "contact-blue",
      size: 210,
      position: { right: "12%", bottom: "20%" },
      gradient: "radial-gradient(circle at 35% 32%, rgba(239,237,244,0.7), rgba(232,239,232,0.42), transparent 72%)",
      opacity: 0.4,
      blur: 26,
      strength: -10,
      scroll: 24,
    },
  ],
};

export function FloatingGradientOrb({
  orb,
  mouseX,
  mouseY,
  scrollProgress,
}: {
  orb: Orb;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
  scrollProgress: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const springX = useSpring(mouseX, { stiffness: 60, damping: 24, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 60, damping: 24, mass: 0.8 });
  const x = useTransform(springX, [-0.5, 0.5], [-orb.strength, orb.strength]);
  const mouseYOffset = useTransform(springY, [-0.5, 0.5], [-orb.strength * 0.55, orb.strength * 0.55]);
  const scrollY = useTransform(scrollProgress, [0, 1], [0, orb.scroll]);
  const y = useTransform([mouseYOffset, scrollY], ([mouseValue, scrollValue]) => {
    return (mouseValue as number) + (scrollValue as number);
  });

  return (
    <motion.div
      className="floating-orb"
      style={{
        ...orb.position,
        width: orb.size,
        height: orb.size,
        opacity: orb.opacity,
        x: reduceMotion ? 0 : x,
        y: reduceMotion ? 0 : y,
      }}
    >
      <div
        className="floating-orb-core"
        style={{
          background: orb.gradient,
          filter: `blur(${orb.blur ?? 0}px)`,
        }}
      />
    </motion.div>
  );
}

export default function ParallaxBackground({ variant = "journey" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const reduceMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (reduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div
      ref={ref}
      className="parallax-background"
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="section-plus section-plus-a">+</span>
      <span className="section-plus section-plus-b">+</span>
      {orbSets[variant].map((orb) => (
        <FloatingGradientOrb
          key={orb.id}
          orb={orb}
          mouseX={mouseX}
          mouseY={mouseY}
          scrollProgress={scrollYProgress}
        />
      ))}
    </div>
  );
}
