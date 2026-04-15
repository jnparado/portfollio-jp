"use client";

import { useEffect, useMemo, useState } from "react";
import { Container } from "@/components/Container";
import Link from "next/link";

const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  const sectionIds = useMemo(
    () => nav.map((n) => n.href.replace("#", "")).filter(Boolean),
    [],
  );
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const targets = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];
        const id = visible?.target?.id;
        if (id) setActive(id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.35, 0.5, 0.65],
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    for (const el of targets) observer.observe(el);
    return () => observer.disconnect();
  }, [sectionIds]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/50 backdrop-blur">
      <Container>
        <div className="grid h-16 grid-cols-[44px_1fr_44px] items-center">
          <Link
            href="#home"
            aria-label="JP Home"
            className="grid size-11 place-items-center rounded-full bg-white/5 text-sm font-extrabold tracking-tight text-white ring-1 ring-white/10 transition hover:bg-white/10"
          >
            JP
          </Link>

          <nav className="flex items-center justify-center gap-7 text-sm font-semibold text-white/90">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "relative py-3 transition-colors",
                  active === item.href.replace("#", "")
                    ? "text-indigo-400"
                    : "text-white/90 hover:text-white",
                ].join(" ")}
                onClick={() => setActive(item.href.replace("#", ""))}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute -bottom-[1px] left-0 h-0.5 w-full rounded-full transition-opacity",
                    active === item.href.replace("#", "") ? "bg-indigo-400 opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </Link>
            ))}
          </nav>

          <div aria-hidden="true" />
        </div>
      </Container>
      <div className="h-1 w-full bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700" />
    </header>
  );
}

