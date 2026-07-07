import { Link, Navigate, useParams } from "react-router-dom";
import { caseDetails, caseProofs, type Language } from "../data/content";

const labels = {
  back: { en: "Back to Cases", zh: "返回案例" },
  metrics: { en: "Key Metrics", zh: "关键结果" },
  capabilityLabel: { en: "Capabilities Proven", zh: "证明的能力" },
  valueLabel: { en: "Business Value", zh: "商业价值" },
  final: { en: "Final", zh: "总结" },
} as const;

export default function CaseDetail({ language }: { language: Language }) {
  const { caseId } = useParams();
  const item = caseDetails.find((detail) => detail.id === caseId);
  const proof = caseId ? caseProofs[caseId as keyof typeof caseProofs] : undefined;

  if (!item) {
    return <Navigate to="/#cases" replace />;
  }

  const visibleSections = item.sections.filter(
    (section) => section.title.en !== "Capabilities Proven" && section.title.en !== "What This Proves",
  );

  return (
    <main className="relative overflow-hidden bg-[#050512] px-5 pb-24 pt-28 text-white lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_8%,rgba(217,70,239,0.2),transparent_32%),radial-gradient(circle_at_82%_18%,rgba(139,92,246,0.18),transparent_34%),linear-gradient(180deg,#050512_0%,#080817_52%,#050512_100%)]" />
      <article className="relative z-10 mx-auto max-w-7xl">
        <Link
          to="/#cases"
          className="inline-flex items-center rounded-full border border-fuchsia-200/30 bg-white/[0.06] px-4 py-2 text-sm font-bold uppercase tracking-[0.18em] text-fuchsia-100 shadow-[0_14px_44px_rgba(217,70,239,0.16)] backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-fuchsia-200/70 hover:text-white"
        >
          ← {labels.back[language]}
        </Link>

        <header className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-fuchsia-200/80">Case Study</p>
            <h1 className="mt-5 max-w-4xl font-editorial text-5xl leading-tight text-white md:text-7xl">
              {item.title[language]}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-white/68">{item.subtitle[language]}</p>
          </div>

          <div className="grid gap-3 rounded-[2rem] border border-white/10 bg-white/[0.06] p-5 shadow-[0_24px_90px_rgba(0,0,0,0.26)] backdrop-blur-xl sm:grid-cols-2">
            {item.meta.map((meta) => (
              <div key={meta.label.en}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-200/80">{meta.label[language]}</p>
                <p className="mt-2 text-sm leading-6 text-white/66">{meta.value[language]}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="mt-12 overflow-hidden rounded-[2.25rem] border border-white/12 bg-white/[0.06] shadow-[0_30px_120px_rgba(0,0,0,0.34)]">
          <img src={item.image} alt="" className="max-h-[560px] w-full object-cover" />
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="self-start rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_24px_90px_rgba(0,0,0,0.24)] backdrop-blur-xl lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-200/80">{labels.metrics[language]}</p>
            <ul className="mt-5 space-y-4">
              {item.metrics.map((metric) => (
                <li key={metric.en} className="flex gap-3 text-sm leading-6 text-white/76">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-200 shadow-[0_0_18px_rgba(217,70,239,0.8)]" />
                  {metric[language]}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-5">
            {visibleSections.map((section, index) => (
              <section key={section.title.en} className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-[0_20px_80px_rgba(0,0,0,0.24)] backdrop-blur-xl md:p-8">
                <div className="flex flex-col gap-2 border-b border-white/10 pb-5 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="text-3xl font-semibold leading-tight text-white">{section.title[language]}</h2>
                  <span className="text-xs font-bold tracking-[0.2em] text-fuchsia-200/80">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-lg leading-8 text-white/68">
                  {section.body[language].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {proof ? (
              <section className="rounded-[2.25rem] border border-fuchsia-200/25 bg-gradient-to-br from-fuchsia-400/18 via-violet-400/14 to-white/[0.06] p-6 text-white shadow-[0_30px_120px_rgba(217,70,239,0.18)] backdrop-blur-xl md:p-8">
                <div className="flex flex-col gap-2 border-b border-white/15 pb-5 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="text-3xl font-semibold leading-tight">{proof.title[language]}</h2>
                  <span className="text-xs font-bold tracking-[0.2em] text-fuchsia-100">{labels.final[language]}</span>
                </div>
                <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-100">
                      {labels.capabilityLabel[language]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proof.capabilities[language].map((capability) => (
                        <span key={capability} className="rounded-full border border-fuchsia-200/25 bg-black/20 px-3 py-2 text-sm text-white/90">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-fuchsia-100">
                      {labels.valueLabel[language]}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-white/82">{proof.businessValue[language]}</p>
                  </div>
                </div>
              </section>
            ) : null}
          </div>
        </section>
      </article>
    </main>
  );
}
