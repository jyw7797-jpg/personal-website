import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import { homeJourneyContent, homeJourneyDetailsContent, type Language } from "../data/content";
import MotionSection from "./MotionSection";

export default function CapabilityJourney({ language }: { language: Language }) {
  const overview = homeJourneyContent;
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const reduceMotion = useReducedMotion();
  const activeOverview = openIndex === null ? null : overview.chapters[openIndex];
  const activeDetail = openIndex === null ? null : homeJourneyDetailsContent[openIndex];

  return (
    <section id="journey" className="relative overflow-hidden bg-[#050512] px-5 py-24 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_8%,rgba(244,114,182,0.22),transparent_34%),radial-gradient(circle_at_88%_24%,rgba(124,140,255,0.2),transparent_32%),linear-gradient(180deg,#050512_0%,#09091a_50%,#050512_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/70">{overview.eyebrow[language]}</p>
              <h2 className="mt-5 max-w-3xl text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
                {overview.title[language]}
              </h2>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 text-lg leading-8 text-white/68 shadow-[0_30px_120px_rgba(0,0,0,0.28)] backdrop-blur-xl">
              {overview.intro[language].map((line) => (
                <p key={line} className="mb-3 last:mb-0">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </MotionSection>

        <div className="mt-14 grid gap-4 md:grid-cols-5">
          {overview.chapters.map((chapter, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionSection key={chapter.title.en} delay={index * 0.04}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`group flex min-h-[270px] w-full flex-col justify-between rounded-[2rem] border p-5 text-left transition ${
                    isOpen
                      ? "border-fuchsia-300/60 bg-white/[0.13] shadow-[0_24px_90px_rgba(124,140,255,0.22)]"
                      : "border-white/10 bg-white/[0.055] hover:-translate-y-2 hover:border-indigo-200/40 hover:bg-white/[0.1]"
                  }`}
                  aria-expanded={isOpen}
                >
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200/62">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight text-white">{chapter.title[language]}</h3>
                    <p className="mt-4 text-sm leading-6 text-white/58">{chapter.summary[language]}</p>
                  </div>
                  <div className="mt-6">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {chapter.tags[language].slice(0, 3).map((tag) => (
                        <span key={tag} className="rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs text-white/72">
                          {tag}
                        </span>
                      ))}
                      {chapter.tags[language].length > 3 ? (
                        <span className="rounded-full border border-fuchsia-200/20 bg-fuchsia-300/10 px-3 py-1.5 text-xs text-fuchsia-100">
                          +{chapter.tags[language].length - 3}
                        </span>
                      ) : null}
                    </div>
                    <span className="text-sm font-bold text-fuchsia-100">
                      {isOpen ? overview.labels.close[language] : overview.labels.readMore[language]}
                    </span>
                  </div>
                </button>
              </MotionSection>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeOverview && activeDetail ? (
            <motion.div
              key={activeOverview.title.en}
              initial={reduceMotion ? false : { opacity: 0, y: 26, filter: "blur(10px)" }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -18, filter: "blur(8px)" }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="mt-8 overflow-hidden rounded-[2.5rem] border border-white/12 bg-white/[0.08] shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl"
            >
              <div className="grid gap-0 lg:grid-cols-[0.72fr_1.28fr]">
                <div className="border-b border-white/10 p-7 lg:border-b-0 lg:border-r lg:p-9">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/70">
                    {overview.labels.selected[language]}
                  </p>
                  <h3 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-white">{activeOverview.title[language]}</h3>
                  <p className="mt-5 text-lg leading-8 text-white/64">{activeOverview.summary[language]}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {activeOverview.tags[language].map((tag) => (
                      <span key={tag} className="rounded-full border border-indigo-200/20 bg-indigo-300/10 px-3 py-2 text-sm text-white/76">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-7 lg:p-9">
                  <div className="grid gap-5 xl:grid-cols-3">
                    <DetailBlock title={overview.labels.why[language]} body={activeDetail.why[language]} />
                    <DetailBlock title={overview.labels.observed[language]} body={activeDetail.observed[language]} />
                    <DetailBlock title={overview.labels.decision[language]} body={activeDetail.decision[language]} />
                  </div>
                  <div className="mt-7">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200/70">{overview.labels.built[language]}</p>
                    <div className="mt-4 grid gap-3 md:grid-cols-2">
                      {activeDetail.built.map((capability) => (
                        <div key={capability.title.en} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-4">
                          <h4 className="font-semibold text-white">{capability.title[language]}</h4>
                          <p className="mt-2 text-sm leading-6 text-white/62">{capability.text[language]}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </section>
  );
}

function DetailBlock({ title, body }: { title: string; body: readonly string[] }) {
  return (
    <div className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-fuchsia-200/70">{title}</p>
      <div className="mt-3 space-y-3 text-sm leading-7 text-white/62">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
