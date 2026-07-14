import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { content, homeHeroContent, type Language } from "../data/content";
import BlurText from "./effects/BlurText";
import VariableProximity from "./effects/VariableProximity";
import LivingNebulaShader from "./ui/living-nebula";

export default function Hero({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const hero = homeHeroContent;
  const titleRef = useRef<HTMLHeadingElement | null>(null);

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-[#00000d] px-5 pt-28 text-white lg:px-8">
      <LivingNebulaShader className="opacity-100" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_38%,rgba(255,255,255,0.1),rgba(0,0,13,0.2)_42%,rgba(0,0,13,0.78)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,13,0.1)_0%,rgba(0,0,13,0)_34%,rgba(0,0,13,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#050512]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl pb-16 pt-10 md:pb-20">
        <div className="max-w-6xl">
          {hero.positioning[language] ? (
            <motion.p
              className="text-sm font-bold uppercase tracking-[0.28em] text-fuchsia-100/78 md:text-base"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.08, duration: 0.7 }}
            >
              {hero.positioning[language]}
            </motion.p>
          ) : null}

          <h1 ref={titleRef} className="hero-title mt-6 max-w-6xl text-white drop-shadow-[0_10px_48px_rgba(255,255,255,0.12)]">
            {hero.titleLines[language].map((line, lineIndex) => (
              <span key={line} className="block">
                <BlurText
                  text={line}
                  animateBy="words"
                  direction="bottom"
                  delay={language === "en" ? 110 : 150}
                  stepDuration={0.62}
                  className="contents"
                  renderSegment={(segment) => (
                    <VariableProximity
                      label={segment}
                      className={segment.includes(hero.accent[language]) ? "hero-title-accent" : ""}
                      fromFontVariationSettings="'wght' 760, 'opsz' 16"
                      toFontVariationSettings="'wght' 1000, 'opsz' 44"
                      containerRef={titleRef}
                      radius={120}
                      falloff="gaussian"
                    />
                  )}
                />
                {lineIndex < hero.titleLines[language].length - 1 ? null : null}
              </span>
            ))}
          </h1>

          {hero.advantage[language] ? (
            <motion.p
              className="mt-8 max-w-[880px] text-[18px] font-semibold leading-[1.65] text-white/82 md:mt-10 md:text-[22px]"
              initial={reduceMotion ? false : { opacity: 0, y: 22 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.72, duration: 0.75 }}
            >
              {hero.advantage[language]}
            </motion.p>
          ) : null}

          {hero.capabilityPath[language].length ? (
            <motion.div
              className="mt-8 flex max-w-5xl flex-wrap items-center gap-2.5 md:gap-3"
              initial={reduceMotion ? false : { opacity: 0, y: 18 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ delay: 0.94, duration: 0.65 }}
              aria-label={hero.logic[language]}
            >
              {hero.capabilityPath[language].map((step, index) => (
                <motion.div
                  key={step}
                  className="flex items-center gap-2.5"
                  initial={reduceMotion ? false : { opacity: 0, x: -12 }}
                  animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                  transition={{ delay: 1.02 + index * 0.08, duration: 0.4 }}
                >
                  <span className="rounded-full border border-fuchsia-200/20 bg-white/[0.075] px-3.5 py-2 text-sm font-bold text-white/86 shadow-[0_12px_40px_rgba(0,0,0,0.18)] backdrop-blur-xl md:px-4 md:text-[15px]">
                    {step}
                  </span>
                  {index < hero.capabilityPath[language].length - 1 ? (
                    <span className="text-sm font-bold text-fuchsia-200/62 md:text-base">→</span>
                  ) : null}
                </motion.div>
              ))}
            </motion.div>
          ) : null}
        </div>

        <motion.div
          className="mt-12 max-w-6xl rounded-[2rem] border border-white/12 bg-white/[0.055] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-2xl md:mt-14 md:p-6"
          initial={reduceMotion ? false : { opacity: 0, y: 26 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 1.28, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-100/70">{hero.proofTitle[language]}</p>
              {hero.transitions[language].length ? (
                <div className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {hero.transitions[language].map((item, index) => (
                    <motion.div
                      key={item}
                      className="rounded-[1.25rem] border border-white/10 bg-black/18 px-4 py-3 text-sm font-semibold leading-6 text-white/78"
                      initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                      animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                      transition={{ delay: 1.38 + index * 0.07, duration: 0.38 }}
                    >
                      <span className="mr-2 text-fuchsia-100/64">{String(index + 1).padStart(2, "0")}</span>
                      {item}
                    </motion.div>
                  ))}
                </div>
              ) : null}
            </div>

            {hero.locations[language].length ? (
              <motion.div
                className="shrink-0 border-t border-white/10 pt-5 lg:max-w-[360px] lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0"
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={{ delay: 1.64, duration: 0.55 }}
              >
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-white/45">{hero.locationLabel[language]}</p>
                <p className="mt-3 text-[14px] font-bold uppercase leading-7 tracking-[0.14em] text-white/82 md:text-[16px]">
                  {hero.locations[language].join(" · ")}
                </p>
              </motion.div>
            ) : null}
          </div>
        </motion.div>

        <motion.p
          className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-white/40"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={reduceMotion ? undefined : { opacity: 1 }}
          transition={{ delay: 1.78, duration: 0.55 }}
        >
          {content.nav.brand}
        </motion.p>
      </div>
    </section>
  );
}
