"use client";

import { useEffect, useState } from "react";

const events = [
  {
    who: "Sarah · Chicago",
    what: "booked a free revenue-leak audit",
    ago: "just now",
  },
  {
    who: "Mark · Austin",
    what: "requested a CRO sprint proposal",
    ago: "3m ago",
  },
  {
    who: "David · New York",
    what: "booked a free revenue-leak audit",
    ago: "5m ago",
  },
  {
    who: "Arjun · Mumbai",
    what: "started an AWS migration scoping call",
    ago: "7m ago",
  },
  {
    who: "Emily · San Francisco",
    what: "booked a free revenue-leak audit",
    ago: "9m ago",
  },
  {
    who: "Jon · London",
    what: "kicked off a Next.js rebuild",
    ago: "18m ago",
  },
];

export default function ActivityToast() {
  const [idx, setIdx] = useState<number | null>(null);

  useEffect(() => {
    let i = 0;
    const first = setTimeout(() => setIdx(i++ % events.length), 4000);
    const interval = setInterval(() => {
      setIdx((prev) => (prev === null ? 0 : (prev + 1) % events.length));
    }, 9000);
    return () => {
      clearTimeout(first);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (idx === null) return;
    const t = setTimeout(() => setIdx(null), 5500);
    return () => clearTimeout(t);
  }, [idx]);

  if (idx === null) return <div className="hidden sm:block fixed bottom-24 left-4 z-50" />;
  const e = events[idx];

  return (
    <div className="fixed bottom-24 left-4 z-50 hidden sm:block">
      <div
        className="card-surface rounded-2xl px-4 py-3 max-w-[300px] flex items-center gap-3 shadow-lift"
        style={{ animation: "rise .55s cubic-bezier(.2,.8,.2,1) forwards" }}
      >
        <div className="h-9 w-9 rounded-full bg-ink-950 text-white grid place-items-center text-sm font-bold shrink-0">
          {e.who.charAt(0)}
        </div>
        <div className="min-w-0">
          <div className="text-[13px] font-semibold text-ink-950 truncate">
            {e.who}
          </div>
          <div className="text-[12px] text-ink-600 truncate">{e.what}</div>
          <div className="text-[10px] uppercase tracking-widest text-ink-600 mt-0.5">
            {e.ago}
          </div>
        </div>
      </div>
    </div>
  );
}
