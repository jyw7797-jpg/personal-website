import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { content, type Language } from "../data/content";
import MotionSection from "./MotionSection";
import ParallaxBackground from "./ParallaxBackground";
import SectionHeader from "./SectionHeader";

export default function SelectedCases({ language }: { language: Language }) {
  const data = content.cases;
  const challengeLabel = language === "en" ? "Business Challenge" : "商业挑战";
  const resultsLabel = language === "en" ? "Key Results" : "关键结果";

  return (
    <section id="cases" className="relative overflow-hidden bg-[#FBFAF6] px-5 py-24 lg:px-8">
      <ParallaxBackground variant="cases" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <MotionSection>
          <SectionHeader eyebrow="Selected Cases" title={data.title[language]}>
            {data.intro[language].map((line) => (
              <p key={line}>{line}</p>
            ))}
          </SectionHeader>
        </MotionSection>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0">
          {data.items.map((item, index) => (
            <MotionSection key={item.title.en} delay={index * 0.08} className="min-w-[288px] lg:min-w-0">
              <motion.article
                className="group h-full overflow-hidden rounded-[2rem] border border-white/80 bg-white/72 shadow-soft backdrop-blur-xl"
                style={{ borderTopColor: item.accent, borderTopWidth: 4 }}
                whileHover={{ y: -8, rotate: index === 1 ? 0.4 : -0.4, boxShadow: "0 22px 70px rgba(41, 37, 36, 0.11)" }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Link className="block w-full text-left" to={`/case/${item.id}`}>
                  <div className="aspect-[4/2.7] overflow-hidden bg-line">
                    <img
                      src={item.image}
                      alt=""
                      className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">
                      Case {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-4 text-2xl font-bold leading-tight tracking-tight text-ink transition group-hover:text-green">
                      {item.title[language]}
                    </h3>
                    <p className="mt-5 text-sm font-bold uppercase tracking-[0.16em] text-green">{challengeLabel}</p>
                    <p className="mt-3 leading-7 text-muted">{item.challenge[language]}</p>
                    <span className="mt-6 inline-flex rounded-full bg-ink px-4 py-2 text-sm font-bold text-paper shadow-soft transition group-hover:-translate-y-0.5 group-hover:bg-green">
                      {data.view[language]}
                    </span>
                  </div>
                </Link>
                <div className="border-t border-line bg-paper/45 px-6 pb-6 pt-5">
                  <p className="text-sm font-bold uppercase tracking-[0.16em] text-green">{resultsLabel}</p>
                  <ul className="mt-4 space-y-3">
                    {item.results[language].map((result) => (
                      <li key={result} className="flex gap-3 text-sm leading-6 text-ink">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ backgroundColor: item.accent }} />
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            </MotionSection>
          ))}
        </div>
      </div>
    </section>
  );
}
