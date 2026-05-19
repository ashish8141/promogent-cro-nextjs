"use client";

import { useMemo, useState } from "react";

const LIFT = 0.47;

function fmtUSD(n: number) {
  n = Math.round(n);
  if (n >= 1_000_000)
    return "$" + (n / 1_000_000).toFixed(2).replace(/\.?0+$/, "") + "M";
  return "$" + n.toLocaleString("en-US");
}

export default function ROICalculator() {
  const [visitors, setVisitors] = useState(50000);
  const [conv, setConv] = useState(1.8);
  const [aov, setAov] = useState(85);

  const { now, future, leak, annual } = useMemo(() => {
    const now = visitors * (conv / 100) * aov;
    const future = now * (1 + LIFT);
    const leak = future - now;
    return { now, future, leak, annual: leak * 12 };
  }, [visitors, conv, aov]);

  return (
    <section
      id="calculator"
      className="relative py-24 lg:py-32 bg-paper-50 border-y border-line overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots opacity-50 pointer-events-none [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Interactive · 30 sec
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            How much revenue are you{" "}
            <span className="text-flow">leaving on the table?</span>
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Plug in three numbers from your dashboard. We&apos;ll show you what
            a typical CRO lift means in real money — no email gate.
          </p>
        </div>

        <div className="mt-12 grid lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2 card-surface rounded-3xl p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-bold text-ink-950">
                Your numbers
              </h3>
              <span className="text-[10px] uppercase tracking-widest text-ink-600">
                monthly
              </span>
            </div>

            <div className="mt-6 space-y-7">
              <Slider
                label="Monthly visitors"
                value={visitors.toLocaleString("en-US")}
                min={1000}
                max={500000}
                step={1000}
                v={visitors}
                onChange={setVisitors}
                lo="1k"
                hi="500k"
              />
              <Slider
                label="Current conversion rate"
                value={conv.toFixed(1) + "%"}
                min={0.2}
                max={6}
                step={0.1}
                v={conv}
                onChange={setConv}
                lo="0.2%"
                hi="6%"
              />
              <Slider
                label="Average order value"
                value={"$" + aov.toLocaleString("en-US")}
                min={10}
                max={500}
                step={5}
                v={aov}
                onChange={setAov}
                lo="$10"
                hi="$500"
              />
            </div>
          </div>

          <div className="lg:col-span-3 card-surface rounded-3xl p-7 lg:p-9 relative overflow-hidden">
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
                  "radial-gradient(circle, rgba(155,231,196,.4), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="flex items-center justify-between">
                <div className="text-[11px] uppercase tracking-widest text-ink-600">
                  Projected with PromoGent
                </div>
                <div className="inline-flex items-center gap-2 text-[11px] font-semibold text-ink-950">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  live estimate
                </div>
              </div>

              <div className="mt-3 grid sm:grid-cols-2 gap-6">
                <div>
                  <div className="text-xs text-ink-600">
                    Today&apos;s monthly revenue
                  </div>
                  <div className="mt-1 font-display text-3xl font-extrabold text-ink-700">
                    {fmtUSD(now)}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-ink-600">
                    After CRO lift (avg. +47%)
                  </div>
                  <div className="mt-1 font-display text-4xl font-extrabold text-flow">
                    {fmtUSD(future)}
                  </div>
                  <div className="mt-1 text-xs font-semibold text-emerald-700">
                    ▲ +{Math.round(LIFT * 100)}%
                  </div>
                </div>
              </div>

              {/* Big result w/ animated gradient border */}
              <div className="mt-7 grad-border rounded-2xl">
                <div className="rounded-2xl bg-ink-950 text-white p-5">
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <div className="text-[10px] uppercase tracking-widest text-white/60">
                        Revenue leak — per month
                      </div>
                      <div className="mt-1 font-display text-4xl font-extrabold text-flow-warm">
                        {fmtUSD(leak)}
                      </div>
                      <div className="mt-1 text-xs text-white/70">
                        That&apos;s{" "}
                        <b className="text-accent-lemon">{fmtUSD(annual)}</b> a
                        year. Every year you wait.
                      </div>
                    </div>
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-5 py-2.5 text-sm font-semibold hover:bg-paper-100 transition shrink-0 shine-btn"
                    >
                      Plug this leak →
                    </a>
                  </div>
                  <div className="mt-5 h-3 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-accent-lemon via-accent-warm to-white"
                      style={{ width: "32%" }}
                    />
                  </div>
                  <div className="mt-2 flex justify-between text-[10px] text-white/55">
                    <span>Now</span>
                    <span>Potential</span>
                  </div>
                </div>
              </div>

              <p className="mt-5 text-xs text-ink-600">
                Based on our average client lift of +47%. Your mileage may vary
                — book a free audit to get a number specific to your funnel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  step,
  v,
  onChange,
  lo,
  hi,
}: {
  label: string;
  value: string;
  min: number;
  max: number;
  step: number;
  v: number;
  onChange: (n: number) => void;
  lo: string;
  hi: string;
}) {
  return (
    <div>
      <div className="flex items-center justify-between text-sm">
        <label className="text-ink-700 font-medium">{label}</label>
        <span className="font-display font-bold text-ink-950">{value}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={v}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        className="mt-3 w-full"
      />
      <div className="mt-1 flex justify-between text-[10px] text-ink-600">
        <span>{lo}</span>
        <span>{hi}</span>
      </div>
    </div>
  );
}
