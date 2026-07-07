import type { Language } from "../data/content";

type Props = {
  language: Language;
  onChange: (language: Language) => void;
};

export default function LanguageToggle({ language, onChange }: Props) {
  return (
    <button
      className="rounded-full border border-[#D946EF]/25 bg-[#F5F3EE]/85 px-3 py-2 text-sm font-semibold text-[#3B3145] transition hover:-translate-y-0.5 hover:border-[#D946EF] hover:text-[#D946EF]"
      onClick={() => onChange(language === "en" ? "zh" : "en")}
      type="button"
      aria-label="Switch language"
    >
      {language === "en" ? "EN / 中文" : "中文 / EN"}
    </button>
  );
}
