import { useEffect, useState } from "react";
import { homeSections, type Language } from "../data/content";

export default function SideNav({ language }: { language: Language }) {
  const [activeId, setActiveId] = useState<string>(homeSections[0].id);

  useEffect(() => {
    const sections = homeSections
      .map((section) => document.getElementById(section.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveId(visible.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-30% 0px -45% 0px",
        threshold: [0.12, 0.25, 0.5, 0.75],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <nav className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 lg:block" aria-label="Section progress navigation">
      <div className="flex flex-col items-end gap-1">
        {homeSections.map((section, index) => {
          const isActive = activeId === section.id;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() => handleClick(section.id)}
              className="group flex items-center gap-3 py-2 text-right"
              aria-current={isActive ? "true" : undefined}
            >
              <span
                className={`rounded-full px-3 py-1.5 text-xs font-semibold transition duration-200 ${
                  isActive
                    ? "bg-[#F5F3EE]/90 text-[#D946EF] opacity-100"
                    : "bg-[#F5F3EE]/0 text-[#151515]/60 opacity-0 group-hover:bg-[#F5F3EE]/90 group-hover:opacity-100"
                }`}
              >
                {section.label[language]}
              </span>
              <span className="flex flex-col items-center">
                <span
                  className={`rounded-full transition-all duration-200 ${
                    isActive ? "h-3.5 w-3.5 bg-[#D946EF] shadow-[0_0_18px_rgba(217,70,239,0.9)]" : "h-2.5 w-2.5 bg-[#F5F3EE]/35 group-hover:bg-[#D946EF]"
                  }`}
                />
                {index < homeSections.length - 1 ? <span className="mt-1 h-7 w-px bg-[#F5F3EE]/18" /> : null}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
