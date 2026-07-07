import { motion } from "framer-motion";
import { content, type Language } from "../data/content";
import SectionHeader from "./SectionHeader";

export default function WhyNow({ language }: { language: Language }) {
  const data = content.whyNow;

  return (
    <section className="bg-green px-5 py-24 text-paper lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeader eyebrow="Why Now" title={data.title[language]} light />
        <div className="mt-12 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex flex-col justify-between gap-8">
            <div className="space-y-4">
              {data.keywords[language].map((keyword) => (
                <motion.p
                  key={keyword}
                  className="font-editorial text-5xl leading-none text-sand md:text-7xl"
                  initial={{ opacity: 0.4, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  {keyword}
                </motion.p>
              ))}
            </div>
          </div>
          <div>
            <div className="space-y-5 text-lg leading-8 text-paper/80">
              {data.paragraphs[language].map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-10 border-t border-paper/20 pt-8">
              {data.final[language].map((line) => (
                <p key={line} className="mb-3 text-2xl font-semibold leading-8 text-paper">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
