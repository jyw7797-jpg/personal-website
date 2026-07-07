import { content, type Language } from "../data/content";

export default function Footer({ language }: { language: Language }) {
  return (
    <footer id="contact" className="border-t border-line bg-paper px-5 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} {content.footer.name}</p>
        <div className="flex flex-wrap gap-5">
          <a href={content.footer.emailHref} className="transition hover:text-ink hover:underline hover:decoration-green hover:underline-offset-4">
            {content.footer.email}
          </a>
          <a href={content.footer.linkedinHref} className="transition hover:text-ink hover:underline hover:decoration-green hover:underline-offset-4">
            {content.footer.linkedin}
          </a>
          <a href={content.nav.resumeHref[language]} className="transition hover:text-ink hover:underline hover:decoration-green hover:underline-offset-4">
            {content.nav.resumeFileName[language]}
          </a>
          <a href={content.footer.githubHref} className="transition hover:text-ink hover:underline hover:decoration-green hover:underline-offset-4">
            {content.footer.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
