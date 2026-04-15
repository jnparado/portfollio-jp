import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/site";

const nav = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-black/40">
      <Container>
        <div className="flex h-14 items-center justify-between">
          <Link
            href="/"
            className="font-semibold tracking-tight text-zinc-950 dark:text-zinc-50"
          >
            {site.name}
          </Link>
          <nav className="hidden items-center gap-6 text-sm text-zinc-700 dark:text-zinc-200 sm:flex">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-zinc-950 dark:hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}

