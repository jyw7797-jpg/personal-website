import type { Language } from "../data/content";

type Props = {
  language: Language;
  onChange: (language: Language) => void;
};

export default function LanguageToggle({ language, onChange }: Props) {
  return (
    <button
      className="rounded-full border border-line bg-white/70 px-3 py-2 text-xs font-semibold text-ink shadow-soft transition hover:-translate-y-0.5 hover:border-green"
      onClick={() => onChange(language === "en" ? "zh" : "en")}
      type="button"
      aria-label="Switch language"
    >
      {language === "en" ? "EN / 中文" : "中文 / EN"}
    </button>
  );
}
