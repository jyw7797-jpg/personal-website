import { motion, useReducedMotion } from "framer-motion";
import { content, type Language } from "../data/content";
import ParallaxBackground from "./ParallaxBackground";

export default function WorkingPrinciples({ language }: { language: Language }) {
  const data = content.work;
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-[#FBFAF6] px-5 py-28 lg:px-8">
      <ParallaxBackground variant="contact" />
      <motion.div
        className="relative z-10 mx-auto max-w-6xl rounded-[3rem] border border-white/80 bg-white/72 px-6 py-16 shadow-lift backdrop-blur-xl md:px-12 md:py-24"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <div>
            <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-[1.25rem] bg-ink shadow-soft">
              <span className="h-3 w-3 rounded-full bg-green" />
            </div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-sand">Contact</p>
            <h2 className="mt-6 max-w-4xl font-editorial text-5xl font-bold leading-tight tracking-tight text-ink md:text-7xl">
              {data.title[language]}
            </h2>
          </div>

          <div>
            <div className="max-w-2xl space-y-5 text-xl leading-9 text-muted">
              {data.cta[language].map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-5 sm:flex-row sm:items-center">
              <a
                href={content.footer.emailHref}
                className="inline-flex w-fit rounded-full bg-green px-7 py-3 text-sm font-bold text-ink shadow-[0_18px_42px_rgba(255,183,178,0.28)] transition hover:-translate-y-1 hover:scale-[1.02] hover:shadow-lift"
              >
                {data.button[language]}
              </a>
              <a
                href={content.footer.emailHref}
                className="w-fit text-sm font-semibold text-muted underline decoration-line underline-offset-4 transition hover:-translate-y-0.5 hover:text-ink hover:decoration-green"
              >
                {content.footer.email}
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
