"use client";

import { FormEvent, useMemo, useRef, useState } from "react";

type ChatMessage = {
  role: "user" | "assistant";
  content: string;
};

export function ChatWidget() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      content:
        "Hi! I’m Jeson’s AI assistant. Ask about skills, projects, or availability.",
    },
  ]);
  const [input, setInput] = useState("");
  const [isSending, setIsSending] = useState(false);
  const listRef = useRef<HTMLDivElement | null>(null);

  const canSend = useMemo(
    () => input.trim().length > 0 && !isSending,
    [input, isSending],
  );

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isSending) return;

    const nextMessages: ChatMessage[] = [
      ...messages,
      { role: "user", content: text },
    ];

    setMessages(nextMessages);
    setInput("");
    setIsSending(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: nextMessages }),
      });

      if (!res.ok) {
        throw new Error(`Chat request failed (${res.status})`);
      }

      const data = (await res.json()) as { reply?: string };
      const reply =
        data.reply ??
        "Sorry — I couldn't respond right now. Please try again.";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
      queueMicrotask(() => {
        listRef.current?.scrollTo({
          top: listRef.current.scrollHeight,
          behavior: "smooth",
        });
      });
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry — something went wrong. You can still reach Jeson via email below.",
        },
      ]);
    } finally {
      setIsSending(false);
    }
  }

  return (
    <div className="rounded-2xl border border-black/5 bg-white p-4 dark:border-white/10 dark:bg-zinc-950">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-zinc-950 dark:text-zinc-50">
            AI chat
          </p>
          <p className="text-xs text-zinc-600 dark:text-zinc-400">
            Ask anything about Jeson’s work.
          </p>
        </div>
        <span className="rounded-full border border-black/10 bg-zinc-50 px-2.5 py-1 text-[11px] text-zinc-700 dark:border-white/10 dark:bg-black dark:text-zinc-300">
          Beta
        </span>
      </div>

      <div
        ref={listRef}
        className="mt-4 h-56 space-y-3 overflow-auto rounded-xl border border-black/5 bg-zinc-50 p-3 dark:border-white/10 dark:bg-black"
        aria-label="Chat messages"
      >
        {messages.map((m, idx) => (
          <div
            key={idx}
            className={[
              "max-w-[92%] rounded-2xl px-3 py-2 text-sm leading-6",
              m.role === "user"
                ? "ml-auto bg-zinc-950 text-white dark:bg-white dark:text-zinc-950"
                : "bg-white text-zinc-800 dark:bg-zinc-950 dark:text-zinc-200",
            ].join(" ")}
          >
            {m.content}
          </div>
        ))}
        {isSending ? (
          <div className="max-w-[92%] rounded-2xl bg-white px-3 py-2 text-sm text-zinc-600 dark:bg-zinc-950 dark:text-zinc-400">
            Typing…
          </div>
        ) : null}
      </div>

      <form onSubmit={onSubmit} className="mt-3 flex gap-2">
        <label className="sr-only" htmlFor="chat-input">
          Message
        </label>
        <input
          id="chat-input"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about skills, Bubble apps, mobile dev…"
          className="h-11 w-full rounded-full border border-black/10 bg-white px-4 text-sm text-zinc-950 outline-none ring-indigo-500/30 placeholder:text-zinc-500 focus:ring-4 dark:border-white/10 dark:bg-black dark:text-zinc-50 dark:placeholder:text-zinc-500"
        />
        <button
          type="submit"
          disabled={!canSend}
          className="inline-flex h-11 shrink-0 items-center justify-center rounded-full bg-zinc-950 px-4 text-sm font-medium text-white transition-opacity disabled:opacity-50 dark:bg-white dark:text-zinc-950"
        >
          Send
        </button>
      </form>
    </div>
  );
}

