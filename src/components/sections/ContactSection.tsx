"use client";

import { FormEvent, useMemo, useState } from "react";
import { Section } from "@/components/Section";
import { site } from "@/lib/site";
import { ChatWidget } from "@/components/ChatWidget";

const projectTypes = [
  "AI application / automation",
  "Full-stack web app",
  "QA automation / Salesforce testing",
  "Staffing / booking platform",
  "Mobile app",
  "Other",
] as const;

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [projectType, setProjectType] = useState<string>(projectTypes[0]);
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
          projectType: projectType.trim(),
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
      setProjectType(projectTypes[0]);
      setMessage("");
    } catch {
      setStatus("error");
      setStatusText("Could not send. Please try again or email directly.");
    }
  }

  return (
    <Section id="contact" eyebrow="Let's work together" title="Start your project">
      <p className="max-w-2xl text-sm leading-7 text-zinc-700 dark:text-zinc-300">
        Tell me about your idea — AI automation, web app, mobile product, or
        staffing platform. {site.availability.responseTime}.
      </p>

      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-2 lg:items-start">
        <form
          onSubmit={onSubmit}
          className="glass-panel space-y-4 p-6 sm:p-10"
        >
          <Field placeholder="Name" value={name} onChange={setName} type="text" />
          <Field placeholder="Email" value={email} onChange={setEmail} type="email" />
          <Field placeholder="Phone (optional)" value={phone} onChange={setPhone} type="tel" />
          <SelectField
            label="Project type"
            value={projectType}
            onChange={setProjectType}
            options={projectTypes}
          />
          <Field placeholder="Tell me about your project, timeline, and goals" value={message} onChange={setMessage} type="textarea" />

          <div className="flex justify-end pt-2">
            <button
              type="submit"
              disabled={!canSubmit || status === "sending"}
              className="inline-flex h-11 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-6 text-sm font-semibold text-white shadow-[0_18px_45px_-22px_rgba(99,102,241,0.75)] transition hover:bg-indigo-500 disabled:opacity-50"
            >
              {status === "sending" ? "Sending..." : "Send inquiry"}
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

        <div className="glass-panel p-3 sm:p-4">
          <ChatWidget />
        </div>
      </div>
    </Section>
  );
}

function SelectField({
  label,
  value,
  onChange,
  options,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: readonly string[];
}) {
  const inputClass =
    "w-full rounded-lg border border-black/20 bg-indigo-50/60 px-4 py-3 text-sm text-zinc-900 outline-none ring-indigo-500/30 focus:ring-4 dark:border-white/15 dark:bg-white/5 dark:text-zinc-50";

  return (
    <div>
      <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
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

