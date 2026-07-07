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
    <main className="bg-paper px-5 pb-24 pt-28 lg:px-8">
      <article className="mx-auto max-w-7xl">
        <Link
          to="/#cases"
          className="inline-flex items-center border-b border-green pb-1 text-sm font-bold uppercase tracking-[0.18em] text-green"
        >
          {labels.back[language]}
        </Link>

        <header className="mt-10 grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.26em] text-sand">Case Study</p>
            <h1 className="mt-5 max-w-4xl font-editorial text-5xl leading-tight text-ink md:text-7xl">
              {item.title[language]}
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-muted">{item.subtitle[language]}</p>
          </div>

          <div className="grid gap-3 border-y border-line py-5 sm:grid-cols-2">
            {item.meta.map((meta) => (
              <div key={meta.label.en}>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-green">{meta.label[language]}</p>
                <p className="mt-2 text-sm leading-6 text-muted">{meta.value[language]}</p>
              </div>
            ))}
          </div>
        </header>

        <div className="mt-12 overflow-hidden border border-line bg-white/50">
          <img src={item.image} alt="" className="max-h-[560px] w-full object-cover" />
        </div>

        <section className="mt-12 grid gap-8 lg:grid-cols-[280px_1fr]">
          <aside className="self-start border border-line bg-white/45 p-6 lg:sticky lg:top-28">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-green">{labels.metrics[language]}</p>
            <ul className="mt-5 space-y-4">
              {item.metrics.map((metric) => (
                <li key={metric.en} className="flex gap-3 text-sm leading-6 text-ink">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sand" />
                  {metric[language]}
                </li>
              ))}
            </ul>
          </aside>

          <div className="space-y-5">
            {visibleSections.map((section, index) => (
              <section key={section.title.en} className="border border-line bg-white/40 p-6 md:p-8">
                <div className="flex flex-col gap-2 border-b border-line pb-5 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="text-3xl font-semibold leading-tight text-ink">{section.title[language]}</h2>
                  <span className="text-xs font-bold tracking-[0.2em] text-sand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-lg leading-8 text-muted">
                  {section.body[language].map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </section>
            ))}

            {proof ? (
              <section className="border border-line bg-green p-6 text-paper md:p-8">
                <div className="flex flex-col gap-2 border-b border-paper/20 pb-5 md:flex-row md:items-baseline md:justify-between">
                  <h2 className="text-3xl font-semibold leading-tight">{proof.title[language]}</h2>
                  <span className="text-xs font-bold tracking-[0.2em] text-sand">{labels.final[language]}</span>
                </div>
                <div className="mt-7 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">
                      {labels.capabilityLabel[language]}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {proof.capabilities[language].map((capability) => (
                        <span key={capability} className="rounded-full border border-paper/20 px-3 py-2 text-sm text-paper/90">
                          {capability}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.22em] text-sand">
                      {labels.valueLabel[language]}
                    </p>
                    <p className="mt-4 text-lg leading-8 text-paper/82">{proof.businessValue[language]}</p>
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
