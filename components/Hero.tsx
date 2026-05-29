"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  MousePointerClick,
  Zap,
} from "lucide-react";
import WordRotator from "./WordRotator";
import Counter from "./Counter";

const stacks = [
  { name: "WordPress", slug: "wordpress", color: "3858E9" },
  { name: "Shopify", slug: "shopify", color: "95BF47" },
  { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
  { name: "React Native", slug: "react", color: "61DAFB" },
  { name: "Flutter", slug: "flutter", color: "54C5F8" },
  { name: "Node.js", slug: "nodedotjs", color: "5FA04E" },
  { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
  { name: "WooCommerce", slug: "woocommerce", color: "A46497" },
  { name: "Stripe", slug: "stripe", color: "8A82F9" },
  { name: "TypeScript", slug: "typescript", color: "3178C6" },
  { name: "Terraform", slug: "terraform", color: "9B8AFB" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [sparkles, setSparkles] = useState<{ id: number; left: string; delay: string; duration: string; scale: number }[]>([]);

  useEffect(() => {
    // Generate particles on client side to avoid hydration mismatch
    const items = Array.from({ length: 12 }).map((_, id) => ({
      id,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${12 + Math.random() * 10}s`,
      scale: 0.4 + Math.random() * 0.8,
    }));
    setSparkles(items);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      container.style.setProperty("--mouse-x", `${x}px`);
      container.style.setProperty("--mouse-y", `${y}px`);
    };

    container.addEventListener("mousemove", handleMouseMove);
    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (!canvasRef.current) return;

    let gradientInstance: any = null;
    let isDestroyed = false;

    // Dynamically import @firecms/neat to ensure absolute compatibility with Next.js SSR build environments
    import("@firecms/neat").then(({ NeatGradient }) => {
      if (isDestroyed || !canvasRef.current) return;

      const config = {
        colors: [
          {
            color: '#554226',
            enabled: true,
          },
          {
            color: '#03162D',
            enabled: true,
          },
          {
            color: '#002027',
            enabled: true,
          },
          {
            color: '#020210',
            enabled: true,
          },
          {
            color: '#02152A',
            enabled: true,
          },
          {
            color: '#B8D4E6',
            enabled: false,
          },
        ],
        speed: 2,
        horizontalPressure: 3,
        verticalPressure: 5,
        waveFrequencyX: 1,
        waveFrequencyY: 3,
        waveAmplitude: 8,
        shadows: 0,
        highlights: 2,
        colorBrightness: 1,
        colorSaturation: 6,
        wireframe: false,
        colorBlending: 7,
        backgroundColor: '#003FFF',
        backgroundAlpha: 1,
        grainScale: 2,
        grainSparsity: 0,
        grainIntensity: 0.175,
        grainSpeed: 1,
        resolution: 1,
        yOffset: 190,
        yOffsetWaveMultiplier: 1.8,
        yOffsetColorMultiplier: 2,
        yOffsetFlowMultiplier: 2.2,
        flowDistortionA: 3.1,
        flowDistortionB: 2.4,
        flowScale: 1.5,
        flowEase: 0.31,
        flowEnabled: false,
        enableProceduralTexture: false,
        textureVoidLikelihood: 0.06,
        textureVoidWidthMin: 10,
        textureVoidWidthMax: 500,
        textureBandDensity: 0.8,
        textureColorBlending: 0.06,
        textureSeed: 333,
        textureEase: 0.8,
        proceduralBackgroundColor: '#FFED00',
        textureShapeTriangles: 20,
        textureShapeCircles: 15,
        textureShapeBars: 15,
        textureShapeSquiggles: 10,
        domainWarpEnabled: false,
        domainWarpIntensity: 0,
        domainWarpScale: 3,
        vignetteIntensity: 0,
        vignetteRadius: 0.8,
        fresnelEnabled: false,
        fresnelPower: 2,
        fresnelIntensity: 0.5,
        fresnelColor: '#FFFFFF',
        iridescenceEnabled: false,
        iridescenceIntensity: 0.5,
        iridescenceSpeed: 1,
        bloomIntensity: 0,
        bloomThreshold: 0.7,
        chromaticAberration: 0,
      };

      try {
        gradientInstance = new NeatGradient({
          ref: canvasRef.current,
          ...config,
        });
      } catch (err) {
        console.error("NeatGradient failed to initialize:", err);
      }
    });

    const handleScroll = () => {
      if (gradientInstance) {
        gradientInstance.yOffset = window.scrollY;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      isDestroyed = true;
      window.removeEventListener("scroll", handleScroll);
      if (gradientInstance && typeof gradientInstance.destroy === "function") {
        gradientInstance.destroy();
      }
    };
  }, []);

  return (
    <section id="hero" ref={containerRef} className="relative hero-dark">
      {/* Background layers */}
      <div aria-hidden="true" className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Neat Fluid Gradient WebGL Canvas */}
        <div className="absolute inset-0 opacity-80 overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full"
            style={{ display: "block", width: "100%", height: "100%" }}
          />
        </div>

        {/* Mouse spotlight glows */}
        <div className="hero-spotlight" />
        <div className="hero-spotlight-cyan" />

        {/* vertical column rails */}
        <div className="absolute inset-0 hero-dark-rails" />

        {/* soft grain */}
        <div className="absolute inset-0 hero-dark-grain" />


      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10 pt-16 pb-24 lg:pt-24 lg:pb-32">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.fiverr.com/chirag8838"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-4 py-1.5 text-xs font-medium text-white/85 hover:border-white/40 hover:bg-white/[0.10] hover:text-white transition"
              >
                <Sparkles size={14} className="text-accent-lemon" />
                Top-Rated on Fiverr · <b className="text-white">6,200+</b> reviews
              </a>
              <a
                href="https://clutch.co/profile/promogent"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] backdrop-blur px-4 py-1.5 text-xs font-medium text-white/85 hover:border-white/40 hover:bg-white/[0.10] hover:text-white transition"
              >
                <span className="text-accent-lemon">★★★★★</span>
                <b className="text-white">5.0</b> Stars on Clutch
              </a>
            </div>

            <h1 className="mt-6 font-display text-5xl sm:text-6xl lg:text-[5.2rem] font-extrabold leading-[1.02] tracking-tight text-white">
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
                      stroke="#ffffff"
                      strokeWidth="2.5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                . In 14 days.
              </span>
            </h1>

            <p className="mt-7 text-lg sm:text-xl text-slate-300/90 max-w-2xl leading-relaxed">
              A{" "}
              <span className="text-white font-semibold underline decoration-2 decoration-accent-sky underline-offset-4">
                CRO + traffic studio
              </span>{" "}
              for SMBs done guessing. We audit your funnel, kill what&apos;s
              killing conversions, and ship traffic that actually buys. No
              retainers. No fluff.
            </p>

            <div className="mt-10 flex flex-wrap gap-4 relative z-10">
              <div className="relative group overflow-visible">
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-accent-warm to-accent-sky opacity-25 blur-md group-hover:opacity-50 transition duration-500" />
                <a
                  href="#calculator"
                  className="shine-btn relative inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-7 py-3.5 text-base font-semibold hover:bg-slate-100 transition shadow-lift overflow-visible"
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
              </div>
              <a
                href="#wins"
                className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/[0.12] hover:border-white/50 transition"
              >
                Show me the receipts
              </a>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6 max-w-2xl">
              <div>
                <div className="font-display text-4xl font-extrabold text-flow-cool">
                  <Counter to={47} prefix="+" suffix="%" />
                </div>
                <div className="mt-1 text-xs text-white/60">
                  conversion lift, avg.
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-extrabold text-flow-cool">
                  <Counter to={2.8} decimals={1} suffix="×" />
                </div>
                <div className="mt-1 text-xs text-white/60">
                  ROAS we ship, avg.
                </div>
              </div>
              <div>
                <div className="font-display text-4xl font-extrabold text-flow-cool">
                  <Counter to={14} prefix="<" suffix="d" />
                </div>
                <div className="mt-1 text-xs text-white/60">
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

              <div className="relative card-surface rounded-3xl p-6 shadow-lift ring-1 ring-white/10">
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

      {/* Stacks logo marquee — dark band */}
      <div className="relative z-10 border-t border-white/10 bg-black/30 backdrop-blur-sm overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex items-center gap-6">
          <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 shrink-0 hidden md:block">
            Stacks we ship ·
          </span>
          <div className="relative flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <div className="marquee-track flex items-center gap-14 animate-marquee whitespace-nowrap">
              {Array.from({ length: 2 }).map((_, i) => (
                <span key={i} className="flex items-center gap-14">
                  {stacks.map((s, j) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={`${i}-${j}`}
                      src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                      alt={s.name}
                      title={s.name}
                      className="h-7 w-auto opacity-80 hover:opacity-100 transition shrink-0"
                      loading="lazy"
                    />
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
      className={`card-surface rounded-2xl px-4 py-3 w-[220px] ring-1 ring-white/10 ${className ?? ""}`}
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
