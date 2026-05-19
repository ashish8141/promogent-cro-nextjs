"use client";

import { useEffect, useState } from "react";
import { LogoMark } from "./Logo";

export default function StickyCTA() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const trigger = document.getElementById("symptoms");
    const onScroll = () => {
      if (!trigger) return;
      const t = trigger.getBoundingClientRect().top;
      setShow(t < 0);
    };
    document.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => document.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-4 inset-x-3 sm:inset-x-auto sm:right-4 z-50 transition-all duration-300 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-6 pointer-events-none"
      }`}
    >
      <div className="card-surface rounded-2xl pl-4 pr-2 py-2 flex items-center gap-3 shadow-lift">
        <div className="hidden sm:grid h-9 w-9 place-items-center rounded-lg bg-ink-950 text-white">
          <LogoMark className="w-5 h-5" />
        </div>
        <div className="text-sm">
          <div className="font-semibold text-ink-950">
            Spot your revenue leak today.
          </div>
          <div className="text-xs text-ink-600">
            Free 30-min audit · NDA available
          </div>
        </div>
        <a
          href="#contact"
          className="ml-2 inline-flex items-center gap-1 rounded-full bg-ink-950 text-white px-4 py-2 text-sm font-semibold hover:bg-ink-800 transition"
        >
          Book now →
        </a>
      </div>
    </div>
  );
}
