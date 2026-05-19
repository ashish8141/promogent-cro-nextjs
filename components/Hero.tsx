import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  MousePointerClick,
  Zap,
} from "lucide-react";
import WordRotator from "./WordRotator";
import Counter from "./Counter";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden spotlight">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid-light" />
        <div
          className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full blur-[120px] animate-blob"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, rgba(255,226,122,.65), transparent 60%)",
          }}
        />
        <div
          className="absolute -top-10 right-0 h-[480px] w-[480px] rounded-full blur-[120px] animate-blob [animation-delay:3s]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(110,168,255,.5), transparent 60%)",
          }}
        />
        <div
          className="absolute bottom-0 left-1/3 h-[420px] w-[420px] rounded-full blur-[140px] animate-blob [animation-delay:6s]"
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(155,231,196,.55), transparent 60%)",
          }}
        />

        <svg
          className="absolute -top-10 right-10 w-[420px] opacity-[0.18]"
          viewBox="0 0 420 420"
          fill="none"
          style={{ animation: "spinOnce 120s linear infinite" }}
        >
          <circle cx="210" cy="210" r="200" stroke="#0a0a0a" />
          <circle cx="210" cy="210" r="150" stroke="#0a0a0a" />
          <circle cx="210" cy="210" r="100" stroke="#0a0a0a" />
          <circle cx="210" cy="210" r="50" stroke="#0a0a0a" />
        </svg>

        <svg
          className="absolute top-40 left-8 w-6 opacity-30"
          viewBox="0 0 20 20"
        >
          <path d="M10 0v20M0 10h20" stroke="#0a0a0a" strokeWidth="1.4" />
        </svg>
        <svg
          className="absolute bottom-40 right-20 w-6 opacity-30"
          viewBox="0 0 20 20"
        >
          <path d="M10 0v20M0 10h20" stroke="#0a0a0a" strokeWidth="1.4" />
        </svg>

        <svg
          className="absolute top-[44%] left-[44%] w-[140px] opacity-50 hidden lg:block"
          viewBox="0 0 200 100"
          fill="none"
        >
          <path
            className="doodle"
            d="M2 50 Q 80 90, 120 40 T 198 30"
            stroke="#0a0a0a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M180 20 L198 30 L188 48"
            stroke="#0a0a0a"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <a
              href="https://www.fiverr.com/chirag8838"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-line bg-white/80 backdrop-blur px-4 py-1.5 text-xs font-medium text-ink-700 hover:border-ink-950 hover:text-ink-950 transition"
            >
              <Sparkles size={14} className="text-ink-950" />
              Top-Rated on Fiverr ·{" "}
              <b className="text-ink-950">6,200+</b> reviews · 7+ yrs
            </a>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[5.2rem] font-extrabold leading-[1.02] tracking-tight text-ink-950">
              <span className="block">We hunt your</span>
              <span className="block">
                <WordRotator />
              </span>
              <span className="block">
                Then we{" "}
                <span className="relative whitespace-nowrap text-flow">
                  kill them
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 200 12"
                    className="absolute -bottom-2 left-0 w-full"
                  >
                    <path
                      d="M2 8 Q 50 2, 100 7 T 198 5"
                      stroke="#0a0a0a"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                . In 14 days.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-ink-600 max-w-2xl leading-relaxed">
              A{" "}
              <span className="text-ink-950 font-semibold underline decoration-2 decoration-ink-950 underline-offset-4">
                CRO + traffic studio
              </span>{" "}
              for SMBs done guessing. We audit your funnel, kill what&apos;s
              killing conversions, and ship traffic that actually buys. No
              retainers. No fluff.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#calculator"
                className="shine-btn group relative inline-flex items-center gap-2 rounded-full bg-ink-950 text-white px-7 py-3.5 text-base font-semibold hover:bg-ink-800 transition shadow-lift"
              >
                Calculate my revenue leak
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
                <span className="absolute -top-2 -right-2 rounded-full bg-accent-lemon text-ink-950 text-[10px] font-bold px-2 py-0.5 border border-ink-950">
                  LIVE
                </span>
              </a>
              <a
                href="#wins"
                className="inline-flex items-center gap-2 rounded-full border border-ink-950 bg-white px-7 py-3.5 text-base font-semibold text-ink-950 hover:bg-paper-50 transition"
              >
                Show me the receipts
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div>
                <div className="font-display text-4xl font-extrabold text-flow">
                  <Counter to={47} prefix="+" suffix="%" />
                </div>
                <div className="mt-1 text-xs text-ink-600">
                  conversion lift, avg.
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-extrabold text-flow">
                  <Counter to={2.8} decimals={1} suffix="×" />
                </div>
                <div className="mt-1 text-xs text-ink-600">
                  ROAS we ship, avg.
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-extrabold text-flow">
                  <Counter to={14} prefix="<" suffix="d" />
                </div>
                <div className="mt-1 text-xs text-ink-600">
                  to your first win
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative">
              <div className="absolute -top-10 -right-2 z-40 rotate-[8deg] animate-tilt">
                <div className="bg-accent-lemon text-ink-950 text-[11px] font-bold px-3 py-1.5 rounded-full border-2 border-ink-950 shadow-soft uppercase tracking-widest">
                  62.4% MoM ↑
                </div>
              </div>

              <FloatingCard
                className="absolute -top-6 -left-4 z-30 animate-float"
                icon={<TrendingUp size={18} className="text-emerald-700" />}
                title="Checkout CVR"
                value="2.1% → 4.6%"
                trend="+119%"
              />
              <FloatingCard
                className="absolute top-44 -right-2 z-30 animate-float [animation-delay:1s]"
                icon={<MousePointerClick size={18} className="text-ink-950" />}
                title="Hero CTA · CTR"
                value="1.8% → 7.4%"
                trend="+311%"
              />
              <FloatingCard
                className="absolute bottom-2 left-2 z-30 animate-float [animation-delay:2s]"
                icon={<Zap size={18} className="text-ink-950" />}
                title="Page speed · LCP"
                value="4.1s → 1.2s"
                trend="-70%"
              />

              <div className="relative card-surface rounded-3xl p-6 shadow-lift">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="h-2.5 w-2.5 rounded-full bg-red-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                    <div className="h-2.5 w-2.5 rounded-full bg-green-300" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-ink-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    LIVE · revenue monitor
                  </span>
                </div>

                <div className="mt-6">
                  <div className="text-xs text-ink-600">
                    This month · revenue
                  </div>
                  <div className="mt-1 text-3xl font-bold text-flow-ink">
                    $ 128,420
                  </div>
                  <div className="mt-1 text-xs font-semibold text-emerald-700">
                    ▲ 62.4% MoM
                  </div>
                </div>

                <svg
                  viewBox="0 0 320 120"
                  className="mt-5 w-full"
                  preserveAspectRatio="none"
                >
                  <defs>
                    <linearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#0a0a0a" stopOpacity="0.18" />
                      <stop offset="100%" stopColor="#0a0a0a" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0,90 L30,82 L60,85 L90,70 L120,62 L150,55 L180,40 L210,30 L240,22 L270,15 L300,8 L320,4 L320,120 L0,120 Z"
                    fill="url(#grad)"
                  />
                  <path
                    d="M0,90 L30,82 L60,85 L90,70 L120,62 L150,55 L180,40 L210,30 L240,22 L270,15 L300,8 L320,4"
                    fill="none"
                    stroke="#0a0a0a"
                    strokeWidth="2"
                  />
                  <circle cx="320" cy="4" r="4" fill="#0a0a0a" />
                  <circle
                    cx="320"
                    cy="4"
                    r="8"
                    fill="#0a0a0a"
                    fillOpacity="0.2"
                    className="animate-pulse"
                  />
                </svg>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <MiniStat label="Sessions" value="184k" />
                  <MiniStat label="AOV" value="$142" />
                  <MiniStat label="Conv." value="4.6%" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-y border-line bg-white overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-5 flex items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-ink-600 shrink-0 hidden md:block">
            Stacks we ship ·
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex items-center gap-12 animate-marquee whitespace-nowrap text-ink-700 font-display font-bold text-lg">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex items-center gap-12">
                  {[
                    "WordPress",
                    "·",
                    "Shopify",
                    "·",
                    "Next.js",
                    "·",
                    "React Native",
                    "·",
                    "Flutter",
                    "·",
                    "AWS",
                    "·",
                    "Node.js",
                    "·",
                    "Tailwind",
                    "·",
                    "Hydrogen",
                    "·",
                    "WooCommerce",
                    "·",
                    "Terraform",
                    "·",
                  ].map((t, j) => (
                    <span key={j}>{t}</span>
                  ))}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCard({
  className,
  icon,
  title,
  value,
  trend,
}: {
  className?: string;
  icon: React.ReactNode;
  title: string;
  value: string;
  trend: string;
}) {
  return (
    <div
      className={`card-surface rounded-2xl px-4 py-3 w-[220px] ${className ?? ""}`}
    >
      <div className="flex items-center gap-2 text-xs text-ink-600">
        {icon}
        {title}
      </div>
      <div className="mt-1 text-lg font-bold text-ink-950">{value}</div>
      <div className="text-[11px] font-semibold text-emerald-700">{trend}</div>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-paper-50 border border-line px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-ink-600">
        {label}
      </div>
      <div className="text-sm font-semibold text-ink-950">{value}</div>
    </div>
  );
}
