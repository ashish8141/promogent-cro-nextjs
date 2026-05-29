"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Win } from "@/lib/wins";
import { winFilters, type WinFilter } from "@/lib/wins";

export default function WinsFilter({ wins }: { wins: Win[] }) {
  const [filter, setFilter] = useState<WinFilter>("All");

  const list = wins.filter(
    (w) =>
      filter === "All" ||
      w.tag === filter ||
      w.sub === filter
  );

  return (
    <>
      <div className="flex flex-wrap items-center justify-between gap-6">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-950">
            Browse the wins
          </h2>
          <p className="mt-2 text-ink-600 text-sm">
            Filter by category to find the closest match to your situation.
          </p>
        </div>
        <div className="text-xs uppercase tracking-widest text-ink-600">
          Showing {list.length} of {wins.length}
        </div>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {winFilters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setFilter(f)}
            className={`chip rounded-full border px-4 py-1.5 text-sm font-semibold transition ${
              filter === f
                ? "on"
                : "border-line text-ink-700 hover:border-ink-950 hover:text-ink-950"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {list.map((w) => (
          <Link
            key={w.slug}
            href={`/wins/${w.slug}`}
            className="group block card-surface card-hover rounded-2xl overflow-hidden relative"
          >
            {/* Brand-tinted header */}
            <div
              className="relative h-32 overflow-hidden"
              style={{ background: w.heroGradient }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-40"
                style={{
                  background:
                    "radial-gradient(circle at 30% 30%, rgba(255,255,255,.35), transparent 60%)",
                }}
              />
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center rounded-full bg-ink-950/90 text-white text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5 backdrop-blur">
                  {w.tag}
                </span>
              </div>
              <div className="absolute bottom-4 left-5 right-5">
                <div className="text-[11px] uppercase tracking-widest text-white/85">
                  {w.cat}
                </div>
                <div className="mt-0.5 font-display text-xl font-extrabold text-white drop-shadow-sm">
                  {w.brand}
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="font-display text-2xl font-extrabold text-ink-950 leading-tight">
                {w.headline}
              </h3>
              <p className="mt-3 text-sm text-ink-700 leading-relaxed line-clamp-3">
                {w.detail}
              </p>

              <div className="mt-5 flex flex-wrap gap-1.5">
                {w.stack.slice(0, 4).map((s) => (
                  <span
                    key={s}
                    className="text-[10px] rounded-full bg-paper-50 border border-line px-2 py-0.5 text-ink-700"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                <span className="text-xs text-ink-600">
                  {w.duration} · {w.region}
                </span>
                <span className="inline-flex items-center gap-1 text-sm font-semibold text-ink-950 group-hover:gap-2 transition-all">
                  Read story
                  <ArrowUpRight
                    size={16}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {list.length === 0 && (
        <div className="mt-10 rounded-2xl border border-line bg-white p-12 text-center">
          <p className="text-ink-600">
            No case studies match this filter yet. More shipping soon — in the
            meantime,{" "}
            <Link href="/#contact" className="underline hover:text-ink-950">
              tell us what you&apos;re trying to fix
            </Link>
            .
          </p>
        </div>
      )}
    </>
  );
}
