import { motion, useReducedMotion } from "framer-motion";
import { content, type Language } from "../data/content";
import HeroDots from "./HeroDots";

function renderTitleLine(line: string, accent: string) {
  if (!line.includes(accent)) return line;
  const [before, after] = line.split(accent);
  return (
    <>
      {before}
      <span className="hero-title-accent">{accent}</span>
      {after}
    </>
  );
}

export default function Hero({ language }: { language: Language }) {
  const reduceMotion = useReducedMotion();
  const hero = content.hero;

  return (
    <section id="hero" className="relative flex min-h-screen items-center overflow-hidden bg-paper px-5 pt-28 lg:px-8">
      <HeroDots />
      <div className="relative z-10 mx-auto w-full max-w-6xl pb-20 pt-12">
        <div className="mx-auto max-w-5xl text-center">
          <motion.p
            className="mb-6 font-accent text-4xl leading-none text-muted/70 md:text-6xl"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Strategy × Global Business × Technology
          </motion.p>
          <h1 className="hero-title text-ink">
            {hero.titleLines[language].map((line, index) => (
              <motion.span
                key={line}
                className="block"
                initial={reduceMotion ? false : { opacity: 0, filter: "blur(18px)", y: 30 }}
                animate={reduceMotion ? undefined : { opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ delay: 0.22 + index * 0.13, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              >
                {renderTitleLine(line, hero.accent[language])}
              </motion.span>
            ))}
          </h1>
          <motion.p
            className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-muted md:mt-10 md:text-2xl md:leading-10"
            initial={reduceMotion ? false : { opacity: 0, y: 18 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.78, duration: 0.75 }}
          >
            {hero.subtitle[language]}
          </motion.p>
          <motion.div
            className="mx-auto mt-10 flex max-w-4xl flex-col items-center gap-4 rounded-[2rem] border border-white/80 bg-white/55 px-5 py-5 shadow-soft backdrop-blur-xl md:flex-row md:justify-between md:rounded-full md:px-7"
            initial={reduceMotion ? false : { opacity: 0, y: 16 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.98, duration: 0.75 }}
          >
            <p className="text-base font-semibold leading-7 text-ink md:text-xl">{hero.capability[language]}</p>
            <div className="space-y-2 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted md:text-right">
              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                transition={{ delay: 1.16, duration: 0.6 }}
              >
                {hero.positioning[language]}
              </motion.p>
              <motion.p
                initial={reduceMotion ? false : { opacity: 0 }}
                animate={reduceMotion ? undefined : { opacity: 1 }}
                transition={{ delay: 1.3, duration: 0.6 }}
              >
                {hero.location[language]}
              </motion.p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
