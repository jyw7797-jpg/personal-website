import { content, type Language } from "../data/content";
import LanguageToggle from "./LanguageToggle";

type Props = {
  language: Language;
  onLanguageChange: (language: Language) => void;
};

export default function Navbar({ language, onLanguageChange }: Props) {
  return (
    <header className="fixed left-0 top-4 z-50 w-full px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-white/80 bg-white/70 px-4 py-3 shadow-soft backdrop-blur-[20px] md:px-5">
        <a href="/#hero" className="flex items-center gap-3 text-sm font-bold tracking-[0.08em] text-ink">
          <span className="relative h-8 w-8 rounded-full bg-green shadow-soft">
            <span className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          </span>
          <span className="hidden sm:inline">{content.nav.brand}</span>
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {content.nav.links.map((link) => (
            <a key={link.href} href={link.href} className="text-sm font-medium text-muted transition hover:text-ink">
              {link.label[language]}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <LanguageToggle language={language} onChange={onLanguageChange} />
          <a
            href={content.nav.resumeHref[language]}
            className="rounded-full bg-ink px-4 py-2 text-xs font-semibold text-paper shadow-soft transition hover:-translate-y-0.5 hover:shadow-lift"
          >
            {content.nav.resume[language]}
          </a>
        </div>
      </nav>
    </header>
  );
}
