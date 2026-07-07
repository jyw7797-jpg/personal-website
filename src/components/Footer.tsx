import { content } from "../data/content";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050512] px-5 py-8 text-white lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/56 md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Wang Jiyue</p>
        <a
          href={content.footer.emailHref}
          className="w-fit transition hover:text-white hover:underline hover:decoration-fuchsia-200 hover:underline-offset-4"
        >
          {content.footer.email}
        </a>
      </div>
    </footer>
  );
}
