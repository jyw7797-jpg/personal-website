import { useState } from "react";
import { journeyContent, type Language } from "../data/content";
import MotionSection from "./MotionSection";
import ParallaxBackground from "./ParallaxBackground";
import SectionHeader from "./SectionHeader";

export default function CapabilityJourney({ language }: { language: Language }) {
  const data = journeyContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="journey" className="relative overflow-hidden bg-paper px-5 py-24 lg:px-8">
      <ParallaxBackground variant="journey" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <SectionHeader eyebrow="Capability Journey" title={data.title[language]}>
            {data.intro[language].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </SectionHeader>
        </MotionSection>

        <div className="mt-14 grid gap-5">
          {data.chapters.map((chapter, index) => {
            const isOpen = openIndex === index;
            return (
              <MotionSection key={chapter.title.en} delay={index * 0.04}>
                <article className="overflow-hidden rounded-[2rem] border border-white/80 bg-white/68 shadow-soft backdrop-blur-xl transition hover:-translate-y-1.5 hover:border-green/70 hover:shadow-lift">
                  <button
                    type="button"
                    className="grid w-full gap-6 p-6 text-left lg:grid-cols-[180px_260px_1fr_auto] lg:items-start lg:p-8"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">
                      Chapter {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className="rounded-[1.5rem] bg-sage/65 p-5">
                      <p className="text-sm font-semibold leading-6 text-muted">{chapter.shift.from[language]}</p>
                      <p className="my-2 text-2xl leading-none text-green">→</p>
                      <p className="text-xl font-semibold leading-7 text-ink">{chapter.shift.to[language]}</p>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold leading-tight tracking-tight text-ink">{chapter.title[language]}</h3>
                      <p className="mt-3 max-w-3xl text-lg leading-8 text-muted">{chapter.summary[language]}</p>
                      <div className="mt-5 flex flex-wrap gap-2">
                        {chapter.capabilities.map((capability) => (
                          <span
                            key={capability.en}
                            className="rounded-full border border-line bg-paper/80 px-3 py-2 text-sm text-ink shadow-soft"
                          >
                            {capability[language]}
                          </span>
                        ))}
                      </div>
                    </div>
                    <span className="h-fit rounded-full bg-ink px-4 py-2 text-center text-sm font-bold text-paper shadow-soft transition hover:-translate-y-0.5 hover:bg-green">
                      {isOpen ? data.labels.close[language] : data.labels.readMore[language]}
                    </span>
                  </button>

                  {isOpen ? (
                    <div className="border-t border-line bg-paper/68 px-6 pb-7 pt-6 md:px-8">
                      <div className="grid gap-6 lg:grid-cols-3">
                        <DetailBlock title={data.labels.why[language]} body={chapter.detail.why[language]} />
                        <DetailBlock title={data.labels.observed[language]} body={chapter.detail.observed[language]} />
                        <DetailBlock title={data.labels.decision[language]} body={chapter.detail.decision[language]} />
                      </div>
                      <div className="mt-8">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">{data.labels.built[language]}</p>
                        <div className="mt-4 grid gap-3 md:grid-cols-2">
                          {chapter.detail.built.map((capability) => (
                            <div key={capability.title.en} className="rounded-[1.5rem] border border-line bg-white/78 p-4 shadow-soft">
                              <h4 className="font-semibold text-ink">{capability.title[language]}</h4>
                              <p className="mt-2 text-sm leading-6 text-muted">{capability.text[language]}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : null}
                </article>
              </MotionSection>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DetailBlock({ title, body }: { title: string; body: readonly string[] }) {
  return (
    <div className="rounded-[1.5rem] bg-white/62 p-5 shadow-soft">
      <p className="text-xs font-bold uppercase tracking-[0.18em] text-green">{title}</p>
      <div className="mt-3 space-y-3 text-sm leading-7 text-muted">
        {body.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
}
