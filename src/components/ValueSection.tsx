import { content, type Language } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function ValueSection({ language }: { language: Language }) {
  const data = content.value;

  return (
    <section id="value" className="border-y border-line bg-white/35 px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Value" title={data.title[language]}>
          <p>{data.text[language]}</p>
        </SectionHeader>
        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {data.cards.map((card, index) => (
              <div key={card.en} className="border border-line bg-paper p-6">
                <span className="text-xs font-bold tracking-[0.2em] text-sand">{String(index + 1).padStart(2, "0")}</span>
                <h3 className="mt-8 text-2xl font-semibold text-ink">{card[language]}</h3>
              </div>
            ))}
          </div>
          <div className="border border-line bg-green p-7 text-paper">
            <p className="text-sm font-bold uppercase tracking-[0.22em] text-sand">I create value across</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {data.areas[language].map((area) => (
                <span key={area} className="rounded-full border border-paper/20 px-3 py-2 text-sm text-paper/90">
                  {area}
                </span>
              ))}
            </div>
            <p className="mt-10 text-2xl font-semibold leading-9">{data.chain[language]}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
