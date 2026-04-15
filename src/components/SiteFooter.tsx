import { Container } from "@/components/Container";
import { site } from "@/lib/site";

function ContactIcon({ kind }: { kind: "phone" | "mail" | "pin" }) {
  if (kind === "phone") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M6.6 3.8h2.2c.5 0 .9.3 1 .8l.7 3c.1.4-.1.9-.5 1.1l-1.3.8c.9 2.1 2.6 3.8 4.7 4.7l.8-1.3c.2-.4.7-.6 1.1-.5l3 .7c.5.1.8.5.8 1v2.2c0 .6-.4 1-1 1C10.2 18.2 5.8 13.8 5.8 7.8c0-.6.4-1 1-1Z" />
      </svg>
    );
  }
  if (kind === "mail") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
        <path d="M4.5 6.8A2.3 2.3 0 0 1 6.8 4.5h10.4a2.3 2.3 0 0 1 2.3 2.3v10.4a2.3 2.3 0 0 1-2.3 2.3H6.8a2.3 2.3 0 0 1-2.3-2.3V6.8Zm2.1-.2 5.4 4.1 5.4-4.1H6.6Zm11.1 2.2-5.2 3.9a1 1 0 0 1-1.2 0L6.1 8.8v8.4c0 .4.3.7.7.7h10.4c.4 0 .7-.3.7-.7V8.8Z" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-4 fill-current">
      <path d="M12 2.8a7 7 0 0 1 7 7c0 5-6.1 11.2-6.4 11.5a.9.9 0 0 1-1.2 0C11.1 21 5 14.8 5 9.8a7 7 0 0 1 7-7Zm0 9.6a2.6 2.6 0 1 0 0-5.2 2.6 2.6 0 0 0 0 5.2Z" />
    </svg>
  );
}

function SocialIcon({ label }: { label: string }) {
  // Reuse minimal inline icons without adding deps.
  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M12 .5C5.73.5.75 5.62.75 12c0 5.1 3.29 9.43 7.86 10.96.58.11.8-.26.8-.57v-2.1c-3.2.71-3.88-1.58-3.88-1.58-.53-1.39-1.28-1.76-1.28-1.76-1.05-.73.08-.72.08-.72 1.16.08 1.77 1.22 1.77 1.22 1.03 1.8 2.71 1.28 3.37.98.1-.77.4-1.28.73-1.57-2.55-.3-5.24-1.31-5.24-5.84 0-1.29.44-2.34 1.17-3.17-.12-.3-.51-1.5.11-3.12 0 0 .96-.31 3.15 1.21.91-.26 1.9-.38 2.88-.38.98 0 1.97.13 2.88.38 2.19-1.52 3.15-1.21 3.15-1.21.62 1.62.23 2.82.11 3.12.73.83 1.17 1.88 1.17 3.17 0 4.54-2.69 5.53-5.25 5.83.41.37.78 1.09.78 2.2v3.26c0 .31.21.68.81.57 4.57-1.53 7.86-5.86 7.86-10.96C23.25 5.62 18.27.5 12 .5Z" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M20.45 20.45h-3.55v-5.56c0-1.33-.03-3.04-1.86-3.04-1.86 0-2.15 1.45-2.15 2.95v5.65H9.34V9h3.4v1.56h.05c.47-.9 1.62-1.86 3.34-1.86 3.57 0 4.23 2.35 4.23 5.41v6.34ZM5.33 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.11 20.45H3.55V9h3.56v11.45ZM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.23 0Z" />
      </svg>
    );
  }

  if (label === "Resume") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
        <path d="M6 2h9l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2Zm8 1.5V8h4.5L14 3.5ZM7.5 12.25h9v1.5h-9v-1.5Zm0 4h9v1.5h-9v-1.5Zm0-8h6v1.5h-6v-1.5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="size-5 fill-current">
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm0-8.75a7.25 7.25 0 1 1 0 14.5 7.25 7.25 0 0 1 0-14.5Z" />
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-black/10 py-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-12">
          <div className="space-y-4">
            <p className="text-xl font-semibold tracking-tight text-white">
              Jeson&apos;s Portfolio
            </p>
            <p className="max-w-sm text-sm leading-7 text-white/70">
              Thank you for visiting my personal portfolio website. Connect with me over socials.
            </p>
            <p className="text-sm text-white/70">
              Keep Rising 🚀. Connect with me over live chat!
            </p>
          </div>

          <div className="space-y-4">
            <p className="text-base font-semibold tracking-tight text-white">
              Contact
            </p>

            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
                  <ContactIcon kind="phone" />
                </span>
                <a className="hover:text-white" href={`tel:${site.phone}`}>
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
                  <ContactIcon kind="mail" />
                </span>
                <a className="hover:text-white" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10">
                  <ContactIcon kind="pin" />
                </span>
                <span>{site.address}</span>
              </li>
            </ul>

            <div className="flex flex-wrap gap-3 pt-1">
              {site.socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  aria-label={s.label}
                  title={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                  className="grid size-10 place-items-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-white/10"
                >
                  <SocialIcon label={s.label} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-center border-t border-white/10 pt-6">
          <p className="text-xs text-white/60">© 2026 JP All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

