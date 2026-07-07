import { content, homeNavContent, type Language } from "../data/content";
import LanguageToggle from "./LanguageToggle";

type Props = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Navbar({ language, onLanguageChange }: Props) {
  const nav = homeNavContent;

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-3">
      <nav className="mx-auto flex min-h-[64px] max-w-6xl items-center justify-between gap-4 rounded-full border border-[rgba(21,21,21,0.06)] bg-[rgba(247,245,240,0.72)] px-4 shadow-none backdrop-blur-xl md:min-h-[72px] md:px-6">
        <a href="/#hero" className="flex items-center gap-3 text-[17px] font-bold tracking-[0.04em] text-[#D946EF] md:text-[19px]">
          <span className="relative h-9 w-9 rounded-full bg-gradient-to-br from-[#F0ABFC] via-[#D946EF] to-[#8B5CF6] shadow-[0_0_34px_rgba(217,70,239,0.36)]">
            <span className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5F3EE]" />
          </span>
          <span className="hidden sm:inline">{nav.brand}</span>
        </a>
        <div className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-[16px] font-semibold text-[#3B3145] transition duration-200 ease-out hover:-translate-y-px hover:text-[#D946EF]"
            >
              {link.label[language]}
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] transition-all duration-200 ease-out group-hover:w-full" />
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <a
            href={content.nav.resumeHref[language]}
            className="rounded-full bg-gradient-to-r from-[#D946EF] to-[#8B5CF6] px-4 py-2 text-sm font-semibold text-white shadow-[0_12px_34px_rgba(217,70,239,0.28)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_46px_rgba(139,92,246,0.36)]"
          >
            {nav.resume[language]}
          </a>
        </div>
      </nav>
    </header>
  );
}
