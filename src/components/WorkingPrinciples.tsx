import { motion, useReducedMotion } from "framer-motion";
import { contactCtaContent, type Language } from "../data/content";

export default function WorkingPrinciples({ language }: { language: Language }) {
  const data = contactCtaContent;
  const reduceMotion = useReducedMotion();

  return (
    <section id="contact" className="relative overflow-hidden bg-[#050512] px-5 py-28 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_22%,rgba(244,114,182,0.18),transparent_34%),radial-gradient(circle_at_80%_68%,rgba(124,140,255,0.22),transparent_36%),linear-gradient(180deg,#050512_0%,#09091a_48%,#050512_100%)]" />
      <motion.div
        className="relative z-10 mx-auto max-w-6xl rounded-[3rem] border border-white/12 bg-white/[0.07] px-6 py-16 shadow-[0_30px_120px_rgba(0,0,0,0.34)] backdrop-blur-2xl md:px-12 md:py-24"
        initial={reduceMotion ? false : { opacity: 0, y: 24 }}
        whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/70">Final CTA</p>
          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl">
            {data.headline[language]}
          </h2>
          <a
            href={data.href}
            aria-label={`${data.button[language]} ${data.email}`}
            className="mt-10 inline-flex rounded-full bg-gradient-to-r from-fuchsia-300 via-indigo-300 to-cyan-200 px-8 py-4 text-base font-extrabold text-[#050512] shadow-[0_18px_70px_rgba(124,140,255,0.32)] transition hover:-translate-y-1 hover:scale-[1.02] md:text-lg"
          >
            {data.button[language]}
          </a>
          <a
            href={data.href}
            className="mx-auto mt-5 block w-fit text-sm font-semibold tracking-[0.04em] text-white/68 underline decoration-fuchsia-200/40 underline-offset-4 transition hover:-translate-y-0.5 hover:text-fuchsia-100 hover:decoration-fuchsia-100 md:text-base"
          >
            {data.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
