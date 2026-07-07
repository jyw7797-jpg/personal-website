import { motion, type Variants } from "framer-motion";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?: string;
  stepDuration?: number;
  renderSegment?: (segment: string, index: number) => ReactNode;
};

export default function BlurText({
  text,
  delay = 120,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  stepDuration = 0.45,
  renderSegment,
}: BlurTextProps) {
  const elements = animateBy === "words" ? text.split(" ") : text.split("");
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (!ref.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const variants = useMemo<Variants>(
    () => ({
      hidden: {
        filter: "blur(14px)",
        opacity: 0,
        y: direction === "top" ? -44 : 44,
      },
      visible: {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
      },
    }),
    [direction],
  );

  return (
    <span ref={ref} className={className} style={{ display: "flex", flexWrap: "wrap" }}>
      {elements.map((segment, index) => (
        <motion.span
          className="inline-block will-change-[transform,filter,opacity]"
          key={`${segment}-${index}`}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          transition={{
            duration: stepDuration,
            delay: (index * delay) / 1000,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {renderSegment ? renderSegment(segment, index) : segment === " " ? "\u00A0" : segment}
          {animateBy === "words" && index < elements.length - 1 ? "\u00A0" : null}
        </motion.span>
      ))}
    </span>
  );
}
