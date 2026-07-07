import { forwardRef, useEffect, useMemo, useRef, type CSSProperties, type MouseEventHandler, type RefObject } from "react";
import { motion } from "framer-motion";
import "./VariableProximity.css";

type Falloff = "linear" | "exponential" | "gaussian";

type VariableProximityProps = {
  label: string;
  fromFontVariationSettings: string;
  toFontVariationSettings: string;
  containerRef?: RefObject<HTMLElement | null>;
  radius?: number;
  falloff?: Falloff;
  className?: string;
  onClick?: MouseEventHandler<HTMLSpanElement>;
  style?: CSSProperties;
};

function useAnimationFrame(callback: () => void) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let frameId: number;
    const loop = () => {
      callback();
      frameId = requestAnimationFrame(loop);
    };

    frameId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(frameId);
  }, [callback]);
}

function useMousePositionRef(containerRef?: RefObject<HTMLElement | null>) {
  const positionRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const updatePosition = (x: number, y: number) => {
      if (containerRef?.current) {
        const rect = containerRef.current.getBoundingClientRect();
        positionRef.current = { x: x - rect.left, y: y - rect.top };
      } else {
        positionRef.current = { x, y };
      }
    };

    const handleMouseMove = (event: MouseEvent) => updatePosition(event.clientX, event.clientY);
    const handleTouchMove = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (touch) updatePosition(touch.clientX, touch.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [containerRef]);

  return positionRef;
}

const VariableProximity = forwardRef<HTMLSpanElement, VariableProximityProps>((props, ref) => {
  const {
    label,
    fromFontVariationSettings,
    toFontVariationSettings,
    containerRef,
    radius = 50,
    falloff = "linear",
    className = "",
    onClick,
    style,
  } = props;

  const letterRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const interpolatedSettingsRef = useRef<string[]>([]);
  const mousePositionRef = useMousePositionRef(containerRef);
  const lastPositionRef = useRef<{ x: number | null; y: number | null }>({ x: null, y: null });

  const parsedSettings = useMemo(() => {
    const parseSettings = (settings: string) =>
      new Map(
        settings
          .split(",")
          .map((item) => item.trim())
          .map((item) => {
            const [name, value] = item.split(" ");
            return [name.replace(/['"]/g, ""), Number.parseFloat(value)];
          }),
      );

    const fromSettings = parseSettings(fromFontVariationSettings);
    const toSettings = parseSettings(toFontVariationSettings);

    return Array.from(fromSettings.entries()).map(([axis, fromValue]) => ({
      axis,
      fromValue,
      toValue: toSettings.get(axis) ?? fromValue,
    }));
  }, [fromFontVariationSettings, toFontVariationSettings]);

  const calculateFalloff = (distance: number) => {
    const norm = Math.min(Math.max(1 - distance / radius, 0), 1);
    if (falloff === "exponential") return norm ** 2;
    if (falloff === "gaussian") return Math.exp(-((distance / (radius / 2)) ** 2) / 2);
    return norm;
  };

  useAnimationFrame(() => {
    if (!containerRef?.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const { x, y } = mousePositionRef.current;
    if (lastPositionRef.current.x === x && lastPositionRef.current.y === y) return;
    lastPositionRef.current = { x, y };

    letterRefs.current.forEach((letterRef, index) => {
      if (!letterRef) return;

      const rect = letterRef.getBoundingClientRect();
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left;
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top;
      const distance = Math.sqrt((x - letterCenterX) ** 2 + (y - letterCenterY) ** 2);

      if (distance >= radius) {
        letterRef.style.fontVariationSettings = fromFontVariationSettings;
        return;
      }

      const falloffValue = calculateFalloff(distance);
      const nextSettings = parsedSettings
        .map(({ axis, fromValue, toValue }) => {
          const value = fromValue + (toValue - fromValue) * falloffValue;
          return `'${axis}' ${value}`;
        })
        .join(", ");

      interpolatedSettingsRef.current[index] = nextSettings;
      letterRef.style.fontVariationSettings = nextSettings;
    });
  });

  const words = label.split(" ");
  let letterIndex = 0;

  return (
    <span ref={ref} className={`${className} variable-proximity`} onClick={onClick} style={{ display: "inline", ...style }}>
      {words.map((word, wordIndex) => (
        <span key={`${word}-${wordIndex}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex;
            letterIndex += 1;

            return (
              <motion.span
                key={currentLetterIndex}
                ref={(element) => {
                  letterRefs.current[currentLetterIndex] = element;
                }}
                style={{
                  display: "inline-block",
                  fontVariationSettings: interpolatedSettingsRef.current[currentLetterIndex] ?? fromFontVariationSettings,
                }}
                aria-hidden="true"
              >
                {letter}
              </motion.span>
            );
          })}
          {wordIndex < words.length - 1 ? <span style={{ display: "inline-block" }}>&nbsp;</span> : null}
        </span>
      ))}
      <span className="sr-only">{label}</span>
    </span>
  );
});

VariableProximity.displayName = "VariableProximity";

export default VariableProximity;
