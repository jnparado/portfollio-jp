"use client";

import { FormEvent, useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { ChatWidget } from "@/components/ChatWidget";

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );
  const [statusText, setStatusText] = useState<string>("");

  const canSubmit = useMemo(() => {
    return (
      name.trim().length > 0 &&
      email.trim().length > 0 &&
      message.trim().length > 0
    );
  }, [name, email, message]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();

    if (!canSubmit || status === "sending") return;
    setStatus("sending");
    setStatusText("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          message: message.trim(),
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed (${res.status})`);
      }

      const data = (await res.json()) as {
        ok?: boolean;
        delivered?: boolean;
        message?: string;
      };

      if (!data.ok) {
        throw new Error("Failed to send.");
      }

      setStatus("sent");
      setStatusText(
        data.delivered === false
          ? data.message ??
              "Sent, but delivery is not configured yet (SMTP missing)."
          : "Message sent successfully.",
      );
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    } catch {
      setStatus("error");
      setStatusText("Could not send. Please try again or email directly.");
    }
  }

  return (
    <Section id="contact" eyebrow="Say hello" title="Contact">
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        <form
          onSubmit={onSubmit}
          className="space-y-4 rounded-3xl border border-black/10 bg-white/80 p-6 shadow-[0_22px_70px_-45px_rgba(0,0,0,0.55)] backdrop-blur dark:border-white/10 dark:bg-zinc-950/70 sm:p-10"
        >
          <Field placeholder="Name" value={name} onChange={setName} type="text" />
          <Field placeholder="Email" value={email} onChange={setEmail} type="email" />
          <Field placeholder="Phone" value={phone} onChange={setPhone} type="tel" />
          <Field placeholder="Message" value={message} onChange={setMessage} type="textarea" />

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={!canSubmit || status === "sending"}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Submit"}
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="size-4 fill-none stroke-current stroke-2"
              >
                <path d="M5 12h12" strokeLinecap="round" />
                <path d="M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>

          {statusText ? (
            <p
              className={[
                "text-sm",
                status === "sent" ? "text-emerald-600 dark:text-emerald-400" : "",
                status === "error" ? "text-rose-600 dark:text-rose-400" : "",
              ].join(" ")}
            >
              {statusText}
            </p>
          ) : null}
        </form>

        <div className="rounded-3xl border border-white/10 bg-zinc-950/40 p-3 backdrop-blur">
          <ChatWidget />
        </div>
      </div>
    </Section>
  );
}

function Field({
  placeholder,
  value,
  onChange,
  type,
}: {
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  type: "text" | "email" | "tel" | "textarea";
}) {
  const inputClass =
    "w-full rounded-lg border border-black/20 bg-indigo-50/60 px-4 py-3 text-sm text-zinc-900 outline-none ring-indigo-500/30 placeholder:text-zinc-500 focus:ring-4 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:placeholder:text-zinc-400";

  return (
    <div>
      {type === "textarea" ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`${inputClass} min-h-[120px] resize-none`}
        />
      ) : (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          type={type}
          className={inputClass}
        />
      )}
    </div>
  );
}

