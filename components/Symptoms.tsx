"use client";

import { useState } from "react";
import { Check } from "lucide-react";

const symptoms = [
  { tag: "Traffic", body: "You get traffic, but conversions sit below 2%." },
  {
    tag: "Checkout",
    body: "Cart abandonment is above 70% and you don't know why.",
  },
  { tag: "Speed", body: "Mobile LCP is over 3s and Core Web Vitals are red." },
  {
    tag: "Hero",
    body: "Your hero CTA gets clicked by fewer than 3% of visitors.",
  },
  {
    tag: "Paid Ads",
    body: "Ad spend keeps climbing, but ROAS keeps falling.",
  },
  {
    tag: "Analytics",
    body: "You can't explain why one page converts and another doesn't.",
  },
];

export default function Symptoms() {
  const [checked, setChecked] = useState<Set<number>>(new Set());

  const toggle = (i: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <section
      id="symptoms"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute -top-10 left-1/2 -translate-x-1/2 w-[1100px] opacity-[0.18]"
        viewBox="0 0 1100 200"
        fill="none"
      >
        <path
          className="anim-dash"
          d="M0 100 Q 275 0, 550 100 T 1100 100"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Diagnose your funnel
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            <span className="marker">Sound familiar?</span> Tick what stings.
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            If any of these are true, you&apos;re not broken — your funnel is.
            We&apos;ve fixed every single one of these 500+ times.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {symptoms.map((s, i) => {
            const isOn = checked.has(i);
            return (
              <button
                key={i}
                type="button"
                onClick={() => toggle(i)}
                className="group card-surface card-hover rounded-2xl p-5 flex items-start gap-4 text-left"
              >
                <span
                  className={`mt-0.5 h-5 w-5 shrink-0 rounded-md border-2 border-ink-950 grid place-items-center transition ${
                    isOn ? "bg-ink-950" : "bg-white"
                  }`}
                >
                  <Check
                    size={12}
                    className={`text-white transition ${
                      isOn ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </span>
                <span className="flex-1">
                  <span className="block text-[10px] uppercase tracking-widest text-ink-600">
                    {s.tag}
                  </span>
                  <span className="block mt-1 text-ink-950 font-medium leading-snug">
                    {s.body}
                  </span>
                </span>
                <span className="text-ink-600 group-hover:text-ink-950 transition">
                  →
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm text-ink-600">
            <b className="text-ink-950">{checked.size}</b> symptoms ticked · we
            have a fix for every one.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full bg-ink-950 text-white px-6 py-3 text-sm font-semibold hover:bg-ink-800 transition"
          >
            Get a fix plan — free →
          </a>
        </div>
      </div>
    </section>
  );
}
