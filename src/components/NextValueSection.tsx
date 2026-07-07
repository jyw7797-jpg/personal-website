import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { nextChangeContent, type Language } from "../data/content";
import MotionSection from "./MotionSection";

export default function NextValueSection({ language }: { language: Language }) {
  const data = nextChangeContent;
  const reduceMotion = useReducedMotion();
  const whatIsChanging = data.parts[0];
  const whatBuilt = data.parts[1];
  const whereNext = data.parts[2];

  return (
    <section id="next-change" className="relative overflow-hidden bg-[#050512] px-5 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_12%,rgba(244,114,182,0.18),transparent_32%),radial-gradient(circle_at_88%_72%,rgba(124,140,255,0.2),transparent_34%),linear-gradient(180deg,#050512_0%,#09091a_50%,#050512_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <div className="max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/70">{data.eyebrow[language]}</p>
            <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">{data.title[language]}</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/64">{data.subtitle[language]}</p>
          </div>
        </MotionSection>

        <div className="mt-14 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <MotionSection>
            <ArticlePanel number={whatIsChanging.number} title={whatIsChanging.title[language]}>
              <div className="space-y-4">
                {whatIsChanging.body[language].map((paragraph, index) => (
                  <p key={paragraph} className={index >= whatIsChanging.body[language].length - 2 ? "text-white" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
            </ArticlePanel>
          </MotionSection>

          <MotionSection delay={0.08}>
            <ArticlePanel number={whatBuilt.number} title={whatBuilt.title[language]}>
              <div className="space-y-3">
                {whatBuilt.intro[language].map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {whatBuilt.modules.map((module, index) => (
                  <motion.div
                    key={module.title.en}
                    className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4"
                    initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                    whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ delay: index * 0.04, duration: 0.4 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-fuchsia-100/60">{String(index + 1).padStart(2, "0")}</p>
                    <h4 className="mt-3 text-lg font-bold leading-6 text-white">{module.title[language]}</h4>
                    <p className="mt-3 text-sm leading-6 text-white/62">{module.description[language]}</p>
                  </motion.div>
                ))}
              </div>
            </ArticlePanel>
          </MotionSection>
        </div>

        <MotionSection delay={0.1} className="mt-6">
          <ArticlePanel number={whereNext.number} title={whereNext.title[language]} wide>
            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4">
                {whereNext.body[language].slice(0, -1).map((paragraph, index) => (
                  <p key={paragraph} className={index >= 3 ? "rounded-[1.25rem] border border-white/10 bg-black/20 p-4 text-white/78" : undefined}>
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="flex items-center">
                <p className="rounded-[2rem] border border-fuchsia-300/30 bg-fuchsia-300/10 p-7 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl">
                  {whereNext.body[language][whereNext.body[language].length - 1]}
                </p>
              </div>
            </div>
          </ArticlePanel>
        </MotionSection>

        <MotionSection delay={0.12} className="mt-16">
          <div className="mx-auto max-w-5xl py-16 text-center md:py-24">
            {data.conclusion[language].map((line, index) => (
              <motion.p
                key={line}
                className={`font-bold leading-tight tracking-tight ${index === data.conclusion[language].length - 1 ? "mx-auto mt-8 max-w-4xl text-3xl text-white md:text-5xl" : "text-4xl text-white/42 md:text-7xl"}`}
                initial={reduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
              >
                {line}
              </motion.p>
            ))}
          </div>
        </MotionSection>
      </div>
    </section>
  );
}

function ArticlePanel({ number, title, children, wide = false }: { number: string; title: string; children: ReactNode; wide?: boolean }) {
  return (
    <article className={`h-full rounded-[3rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.3)] backdrop-blur-xl md:p-8 ${wide ? "lg:p-10" : ""}`}>
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-fuchsia-200/70">{number}</p>
      <h3 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">{title}</h3>
      <div className="mt-7 text-base leading-8 text-white/66 md:text-lg">{children}</div>
    </article>
  );
}
