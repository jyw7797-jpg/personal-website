import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { homeCasesContent, type Language } from "../data/content";
import MotionSection from "./MotionSection";

export default function SelectedCases({ language }: { language: Language }) {
  const data = homeCasesContent;
  const [activeIndex, setActiveIndex] = useState(0);
  const reduceMotion = useReducedMotion();
  const activeCase = data.items[activeIndex];

  return (
    <section id="cases" className="relative overflow-hidden bg-[#050512] px-5 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(124,140,255,0.2),transparent_34%),radial-gradient(circle_at_80%_8%,rgba(244,114,182,0.18),transparent_30%),linear-gradient(180deg,#050512_0%,#080817_52%,#050512_100%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/70">{data.eyebrow[language]}</p>
              <h2 className="mt-5 text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">{data.title[language]}</h2>
              <p className="mt-6 text-lg leading-8 text-white/64">{data.subtitle[language]}</p>
            </div>
            <div className="hidden max-w-sm grid-cols-3 gap-3 rounded-[2rem] border border-white/10 bg-white/[0.06] p-4 shadow-[0_24px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl md:grid">
              {data.items.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`h-20 rounded-[1.25rem] border transition hover:-translate-y-1 ${
                    activeIndex === index ? "border-fuchsia-300/70 bg-fuchsia-300/18 shadow-[0_0_28px_rgba(217,70,239,0.2)]" : "border-white/10 bg-black/20"
                  }`}
                  aria-label={`${data.labels.choose[language]} ${index + 1}`}
                >
                  <span className="text-xs font-bold tracking-[0.16em] text-white">{String(index + 1).padStart(2, "0")}</span>
                </button>
              ))}
            </div>
          </div>
        </MotionSection>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-start">
          <MotionSection className="lg:sticky lg:top-28">
            <motion.div
              className="group overflow-hidden rounded-[3rem] border border-white/12 bg-white/[0.06] shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-xl"
              whileHover={reduceMotion ? undefined : { y: -6 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCase.id}
                  initial={reduceMotion ? false : { opacity: 0, scale: 1.02, filter: "blur(12px)" }}
                  animate={reduceMotion ? undefined : { opacity: 1, scale: 1, filter: "blur(0px)" }}
                  exit={reduceMotion ? undefined : { opacity: 0, scale: 0.98, filter: "blur(8px)" }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative"
                >
                  <div className="relative aspect-[4/3] min-h-[320px] overflow-hidden bg-[#050512] md:min-h-[420px]">
                    <img src={activeCase.image} alt="" className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.035]" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050512]/42 via-transparent to-[#050512]/18" />
                    <Link
                      to={`/case/${activeCase.id}`}
                      className="absolute inset-0 z-10"
                      aria-label={`${data.labels.view[language]} ${activeCase.title[language]}`}
                    />
                    <span className="absolute left-6 top-6 z-20 rounded-full border border-fuchsia-200/30 bg-[#F5F3EE]/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-[#7C3AED] backdrop-blur-md">
                      {String(activeIndex + 1).padStart(2, "0")} / {activeCase.path[language][0]}
                    </span>
                    <CaseLink to={`/case/${activeCase.id}`} floating>
                      {data.labels.view[language]}
                    </CaseLink>
                    <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                      {data.items.map((item, index) => (
                        <button
                          key={item.id}
                          type="button"
                          aria-label={`${data.labels.choose[language]} ${index + 1}`}
                          onClick={() => setActiveIndex(index)}
                          className={`h-2.5 rounded-full transition-all ${
                            activeIndex === index ? "w-10 bg-fuchsia-200" : "w-2.5 bg-white/45 hover:bg-fuchsia-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="p-7 text-white md:p-10">
                    <h3 className="max-w-3xl text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl">{activeCase.title[language]}</h3>
                    <p className="mt-5 max-w-2xl text-lg leading-8 text-white/74">{activeCase.statement[language]}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </MotionSection>

          <div className="space-y-5">
            <MotionSection delay={0.06}>
              <div className="rounded-[2.5rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl md:p-6">
                <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200/70">{data.labels.choose[language]}</p>
                <div className="mt-5 grid gap-3">
                  {data.items.map((item, index) => {
                    const isActive = activeIndex === index;
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setActiveIndex(index)}
                        onMouseEnter={() => setActiveIndex(index)}
                        className={`group rounded-[1.75rem] border p-4 text-left transition ${
                          isActive
                            ? "border-fuchsia-300/70 bg-fuchsia-300/15 shadow-[0_18px_70px_rgba(217,70,239,0.2)]"
                            : "border-white/10 bg-black/20 hover:-translate-y-1 hover:border-fuchsia-200/45 hover:bg-white/[0.08]"
                        }`}
                      >
                        <span className="text-xs font-bold uppercase tracking-[0.16em] text-fuchsia-100/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="mt-2 block text-lg font-bold leading-6 tracking-tight text-white">{item.title[language]}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </MotionSection>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCase.id}
                initial={reduceMotion ? false : { opacity: 0, y: 24 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: -16 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-[2.5rem] border border-white/10 bg-white/[0.07] p-6 shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur-xl"
              >
                <div className="flex flex-col gap-4 pr-0 sm:pr-40">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-fuchsia-200/70">{data.labels.challenge[language]}</p>
                  <p className="text-xl font-semibold leading-8 tracking-tight text-white">{activeCase.challenge[language]}</p>
                </div>
                <CaseLink to={`/case/${activeCase.id}`} panel>
                  {data.labels.view[language]}
                </CaseLink>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-fuchsia-200/70">{data.labels.path[language]}</p>
                  <div className="mt-5 flex flex-wrap items-center gap-2">
                    {activeCase.path[language].map((step, index) => (
                      <div key={step} className="flex items-center gap-2">
                        <span className="rounded-full border border-white/10 bg-black/20 px-3 py-2 text-sm font-semibold text-white/78">
                          {step}
                        </span>
                        {index < activeCase.path[language].length - 1 ? <span className="text-fuchsia-200/70">→</span> : null}
                      </div>
                    ))}
                  </div>
                  <p className="mt-5 rounded-[1.5rem] border border-white/8 bg-black/20 p-4 text-base font-semibold leading-7 text-white/78">
                    {activeCase.statement[language]}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-fuchsia-200/70">{data.labels.evidence[language]}</p>
                  <div className="mt-5 grid gap-3">
                    {activeCase.results[language].map((result, index) => (
                      <motion.div
                        key={result}
                        initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                        animate={reduceMotion ? undefined : { opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.04, duration: 0.35 }}
                        className="flex items-start gap-3 rounded-[1.5rem] border border-white/8 bg-black/20 p-4 text-sm leading-6 text-white/72"
                      >
                        <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-fuchsia-200 shadow-[0_0_18px_rgba(244,114,182,0.9)]" />
                        {result}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseLink({
  to,
  children,
  floating = false,
  panel = false,
}: {
  to: string;
  children: string;
  floating?: boolean;
  panel?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`z-20 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] px-[18px] py-3 text-[15px] font-semibold text-white shadow-[0_18px_60px_rgba(217,70,239,0.3)] transition duration-200 ease-out hover:-translate-y-1 hover:shadow-[0_22px_70px_rgba(139,92,246,0.4)] ${
        floating ? "absolute right-6 top-6" : ""
      } ${panel ? "mt-5 w-full sm:absolute sm:right-6 sm:top-6 sm:mt-0 sm:w-auto" : ""}`}
    >
      {children} <span className="ml-2">→</span>
    </Link>
  );
}
