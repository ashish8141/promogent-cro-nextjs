"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Counter from "./Counter";
import { wins, winFilters, type WinFilter } from "@/lib/wins";

export default function Wins() {
  const [filter, setFilter] = useState<WinFilter>("All");
  const list = wins.filter(
    (w) => filter === "All" || w.tag === filter || w.sub === filter
  );

  return (
    <section
      id="wins"
      className="relative py-24 lg:py-32 bg-paper-50 border-y border-line overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute -right-20 top-20 w-[360px] opacity-[0.18]"
        viewBox="0 0 360 360"
        fill="none"
      >
        <circle cx="180" cy="180" r="170" stroke="#0a0a0a" />
        <circle cx="180" cy="180" r="120" stroke="#0a0a0a" />
        <circle cx="180" cy="180" r="70" stroke="#0a0a0a" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
              Real numbers, real teams
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
              Recent <span className="marker">client wins.</span>
            </h2>
          </div>
          <Link
            href="/wins"
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink-950 underline underline-offset-4 hover:no-underline"
          >
            Read full case studies →
          </Link>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {winFilters.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              className={`chip rounded-full border px-4 py-1.5 text-sm font-semibold ${
                filter === f
                  ? "on"
                  : "border-line text-ink-700 hover:border-ink-950 hover:text-ink-950"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {list.map((w) => (
            <Link
              key={w.brand}
              href={`/wins/${w.slug}`}
              className="group card-surface card-hover rounded-2xl p-6 relative overflow-hidden block"
            >
              <div
                aria-hidden="true"
                className="absolute -top-16 -right-16 h-44 w-44 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,226,122,.55), transparent 60%)",
                }}
              />
              <div className="relative">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] uppercase tracking-widest text-ink-600">
                    {w.cat}
                  </span>
                  <span className="inline-flex items-center rounded-full bg-ink-950 text-white text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5">
                    {w.tag}
                  </span>
                </div>
                <h3 className="mt-4 font-display text-2xl font-extrabold text-ink-950 leading-tight">
                  {w.headline}
                </h3>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  {w.detail}
                </p>
                <div className="mt-6 pt-4 border-t border-line flex items-center justify-between">
                  <span className="font-display font-bold text-ink-950">
                    {w.brand}
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm text-ink-600 group-hover:text-ink-950 group-hover:gap-2 transition-all">
                    Read story
                    <ArrowUpRight
                      size={14}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                    />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* By the numbers */}
        <div className="mt-16 relative card-surface rounded-3xl p-8 lg:p-12 overflow-hidden">
          <div
            aria-hidden="true"
            className="absolute -top-24 -right-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,226,122,.55), transparent 60%)",
            }}
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(110,168,255,.45), transparent 60%)",
            }}
          />
          <div className="relative grid lg:grid-cols-4 gap-8 lg:gap-4">
            <div className="lg:col-span-1">
              <div className="text-[11px] uppercase tracking-widest text-ink-600">
                All time
              </div>
              <h3 className="mt-1 font-display text-2xl font-bold text-ink-950">
                By the numbers.
              </h3>
              <p className="mt-2 text-sm text-ink-600">
                Across SMBs, DTC and enterprise — receipts only.
              </p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-6">
              <BannerStat to={500} suffix="+" label="projects shipped" />
              <BannerStat
                to={38}
                prefix="-"
                suffix="%"
                label="avg. AWS bill cut"
              />
              <BannerStat
                to={2.6}
                decimals={1}
                suffix="×"
                label="avg. revenue lift"
              />
              <BannerStat
                to={6.2}
                decimals={1}
                suffix="k"
                label="verified Fiverr reviews"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BannerStat({
  to,
  prefix = "",
  suffix = "",
  decimals = 0,
  label,
}: {
  to: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}) {
  return (
    <div>
      <div className="font-display text-4xl font-extrabold text-ink-950">
        <Counter to={to} prefix={prefix} suffix={suffix} decimals={decimals} />
      </div>
      <div className="mt-1 text-xs text-ink-600">{label}</div>
    </div>
  );
}
