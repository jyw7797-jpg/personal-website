import { motion } from "framer-motion";
import { content, type Language } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function CoreAdvantage({ language }: { language: Language }) {
  const data = content.core;

  return (
    <section className="px-5 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Core Advantage" title={data.title[language]}>
          {data.intro[language].map((line) => (
            <p key={line}>{line}</p>
          ))}
        </SectionHeader>
        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {data.cards.map((card, index) => (
            <motion.article
              key={card.title.en}
              className="group border border-line bg-paper/70 p-6 transition hover:-translate-y-1 hover:border-green hover:shadow-soft"
              whileHover={{ y: -6 }}
            >
              <span className="text-xs font-bold tracking-[0.2em] text-sand">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-10 text-2xl font-semibold leading-tight text-ink">{card.title[language]}</h3>
              <p className="mt-5 leading-7 text-muted">{card.text[language]}</p>
            </motion.article>
          ))}
        </div>
        <div className="mt-8 border border-line bg-white/35 p-5 text-sm font-semibold leading-7 text-green">
          {data.system[language]}
        </div>
      </div>
    </section>
  );
}
