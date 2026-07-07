import { nextValueContent, type Language } from "../data/content";
import MotionSection from "./MotionSection";
import ParallaxBackground from "./ParallaxBackground";
import SectionHeader from "./SectionHeader";

export default function NextValueSection({ language }: { language: Language }) {
  const data = nextValueContent;

  return (
    <section id="value" className="relative overflow-hidden bg-paper px-5 py-24 lg:px-8">
      <ParallaxBackground variant="next" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <SectionHeader eyebrow="Next Chapter" title={data.title[language]}>
            <p>{data.subtitle[language]}</p>
          </SectionHeader>
        </MotionSection>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <MotionSection className="rounded-[2.5rem] border border-white/80 bg-white/62 p-6 shadow-soft backdrop-blur-xl md:p-8">
            <h3 className="text-3xl font-bold tracking-tight text-ink">{data.whyTitle[language]}</h3>
            <div className="mt-6 space-y-5 text-lg leading-8 text-muted">
              {data.why[language].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </MotionSection>

          <MotionSection delay={0.1} className="rounded-[2.5rem] border border-white/80 bg-white/78 p-6 text-ink shadow-lift backdrop-blur-xl md:p-8">
            <h3 className="text-3xl font-bold tracking-tight text-ink">{data.valueTitle[language]}</h3>
            <p className="mt-6 text-lg leading-8 text-muted">{data.valueIntro[language]}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {data.areas[language].map((area, index) => (
                <div key={area} className="rounded-[1.5rem] border border-line bg-paper/80 p-4 shadow-soft transition hover:-translate-y-1 hover:border-green hover:bg-sage/80">
                  <span className="text-xs font-bold tracking-[0.16em] text-sand">{String(index + 1).padStart(2, "0")}</span>
                  <p className="mt-3 text-base font-semibold leading-6 text-ink">
                  {area}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-10 border-t border-line pt-7">
              {data.final[language].map((line) => (
                <p key={line} className="mb-3 text-2xl font-bold leading-8 tracking-tight text-ink">
                  {line}
                </p>
              ))}
            </div>
          </MotionSection>
        </div>
      </div>
    </section>
  );
}
