import type { ReactNode } from "react";

type Props = {
  eyebrow?: string;
  title: string;
  children?: ReactNode;
  light?: boolean;
};

export default function SectionHeader({ eyebrow, title, children, light = false }: Props) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? (
        <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-sand" : "text-green"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`font-editorial text-4xl font-bold leading-tight tracking-tight md:text-6xl ${light ? "text-ink" : "text-ink"}`}>
        {title}
      </h2>
      {children ? <div className={`mt-6 space-y-3 text-lg leading-8 ${light ? "text-muted" : "text-muted"}`}>{children}</div> : null}
    </div>
  );
}
