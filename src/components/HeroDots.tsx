import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import type { CSSProperties, MouseEvent } from "react";

type Dot = {
  id: string;
  size: number;
  position: Pick<CSSProperties, "left" | "right" | "top" | "bottom">;
  gradient: string;
  opacity: number;
  blur?: number;
  shadow?: string;
  strength: number;
  delay: number;
  floatClass?: string;
};

const dots: Dot[] = [
  {
    id: "dot-1",
    size: 280,
    position: { left: "12%", top: "42%" },
    gradient: "radial-gradient(circle at 35% 30%, #FFE4E1 0%, #FFB7B2 46%, #E8EFE8 100%)",
    opacity: 0.58,
    blur: 12,
    shadow: "0 4px 20px -2px rgba(0,0,0,0.05), 0 36px 100px rgba(255,183,178,0.22)",
    strength: 18,
    delay: 0.15,
    floatClass: "hero-dot-float-a",
  },
  {
    id: "dot-2",
    size: 220,
    position: { right: "18%", top: "34%" },
    gradient: "radial-gradient(circle at 35% 28%, #E6E6FA 0%, #EFEDF4 52%, #F7DED7 100%)",
    opacity: 0.5,
    blur: 12,
    shadow: "0 4px 20px -2px rgba(0,0,0,0.05), 0 30px 86px rgba(239,237,244,0.36)",
    strength: -12,
    delay: 0.28,
    floatClass: "hero-dot-float-b",
  },
  {
    id: "dot-3",
    size: 160,
    position: { right: "12%", bottom: "22%" },
    gradient: "radial-gradient(circle at 38% 32%, #F7DED7 0%, #F5E6B8 46%, #FFB7B2 100%)",
    opacity: 0.5,
    blur: 10,
    shadow: "0 4px 20px -2px rgba(0,0,0,0.05), 0 24px 70px rgba(255,183,178,0.18)",
    strength: 10,
    delay: 0.4,
    floatClass: "hero-dot-float-c",
  },
  {
    id: "dot-4",
    size: 120,
    position: { left: "28%", bottom: "18%" },
    gradient: "radial-gradient(circle at 40% 35%, rgba(232,239,232,0.95) 0%, #CFE8D6 100%)",
    opacity: 0.35,
    blur: 10,
    shadow: "0 20px 56px rgba(120,113,108,0.08)",
    strength: -8,
    delay: 0.52,
    floatClass: "hero-dot-float-b",
  },
  {
    id: "dot-5",
    size: 360,
    position: { left: "50%", top: "46%" },
    gradient: "radial-gradient(circle, rgba(255, 183, 178, 0.36) 0%, rgba(253, 252, 248, 0.4) 45%, transparent 74%)",
    opacity: 0.32,
    blur: 48,
    strength: 0,
    delay: 0.05,
    floatClass: "hero-dot-float-a",
  },
];

function DotLayer({
  dot,
  mouseX,
  mouseY,
}: {
  dot: Dot;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}) {
  const reduceMotion = useReducedMotion();
  const springX = useSpring(mouseX, { stiffness: 70, damping: 26, mass: 0.7 });
  const springY = useSpring(mouseY, { stiffness: 70, damping: 26, mass: 0.7 });
  const x = useTransform(springX, [-0.5, 0.5], [-dot.strength, dot.strength]);
  const y = useTransform(springY, [-0.5, 0.5], [-dot.strength * 0.7, dot.strength * 0.7]);

  const size = `clamp(${Math.round(dot.size * 0.56)}px, ${Math.round(dot.size / 10)}vw, ${dot.size}px)`;
  const position = dot.id === "dot-5" ? { ...dot.position, translate: "-50% -50%" } : dot.position;

  return (
    <motion.div
      className="hero-dot"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.85 }}
      animate={reduceMotion ? undefined : { opacity: dot.opacity, scale: 1 }}
      transition={{ delay: dot.delay, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      style={{
        ...position,
        width: size,
        height: size,
        opacity: reduceMotion ? dot.opacity : undefined,
        x: reduceMotion ? 0 : x,
        y: reduceMotion ? 0 : y,
      }}
    >
      <div
        className={`hero-dot-core ${reduceMotion ? "" : dot.floatClass ?? ""}`}
        style={{
          background: dot.gradient,
          filter: `blur(${dot.blur ?? 0}px)`,
          boxShadow: dot.shadow,
        }}
      />
    </motion.div>
  );
}

export default function HeroDots() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const reduceMotion = useReducedMotion();

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
      className="hero-dots"
      aria-hidden="true"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {dots.map((dot) => (
        <DotLayer key={dot.id} dot={dot} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </div>
  );
}
