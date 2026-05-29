import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Quote,
  Clock,
  MapPin,
  Briefcase,
  Layers,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { wins, getWin, getAdjacentWins } from "@/lib/wins";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return wins.map((w) => ({ slug: w.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const win = getWin(params.slug);
  if (!win) {
    return { title: "Case study not found — PromoGent" };
  }
  return {
    title: `${win.brand} — ${win.headline} | PromoGent case study`,
    description: win.summary,
    openGraph: {
      title: `${win.brand}: ${win.headline}`,
      description: win.summary,
      type: "article",
    },
  };
}

export default function WinDetailPage({ params }: PageProps) {
  const win = getWin(params.slug);
  if (!win) notFound();

  const adjacent = getAdjacentWins(params.slug);

  return (
    <main className="min-h-screen bg-paper">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-line"
        style={{ background: win.heroGradient }}
      >
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 20%, rgba(255,255,255,.5), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-dark opacity-[0.08]"
        />

        <div className="relative mx-auto max-w-6xl px-6 lg:px-10 pt-12 pb-20 lg:pt-16 lg:pb-28">
          <Link
            href="/wins"
            className="inline-flex items-center gap-2 text-xs font-semibold text-white/90 hover:text-white transition"
          >
            <ArrowLeft size={14} /> All case studies
          </Link>

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 backdrop-blur px-3 py-1 text-[11px] font-semibold text-white uppercase tracking-widest">
            <span className="h-1.5 w-1.5 rounded-full bg-white" />
            {win.tag} · Case study
          </div>

          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.04] max-w-4xl drop-shadow-sm">
            {win.brand}
          </h1>
          <p className="mt-4 font-display text-2xl sm:text-3xl font-bold text-white/95 max-w-3xl">
            {win.headline}
          </p>
          <p className="mt-6 text-lg text-white/85 max-w-2xl leading-relaxed">
            {win.summary}
          </p>

          {/* Meta strip */}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            <MetaPill icon={Briefcase} label="Industry" value={win.industry} />
            <MetaPill icon={MapPin} label="Region" value={win.region} />
            <MetaPill icon={Clock} label="Duration" value={win.duration} />
            <MetaPill icon={Layers} label="Engagement" value={win.engagement} />
          </div>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="relative -mt-12 px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="card-surface rounded-3xl p-6 lg:p-8 shadow-lift bg-white">
            <div className="text-[11px] uppercase tracking-widest text-ink-600">
              The result
            </div>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-6">
              {win.metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-paper-50 border border-line p-5"
                >
                  <div className="text-[10px] uppercase tracking-widest text-ink-600">
                    {m.label}
                  </div>
                  <div className="mt-3 flex items-baseline gap-2">
                    <span className="font-display text-2xl font-extrabold text-ink-950">
                      {m.after}
                    </span>
                    <span className="text-xs text-ink-600">from {m.before}</span>
                  </div>
                  <div
                    className="mt-2 inline-flex items-center text-xs font-semibold rounded-full px-2 py-0.5"
                    style={{
                      background: `${win.accent}1f`,
                      color: win.accent,
                    }}
                  >
                    {m.delta}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Body: problem + approach */}
      <section className="relative py-20 lg:py-28">
        <div className="mx-auto max-w-6xl px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Main column */}
            <div className="lg:col-span-8 space-y-14">
              <Block
                eyebrow="The problem"
                title="What was broken"
              >
                <p className="text-ink-700 text-lg leading-relaxed">
                  {win.problem}
                </p>
              </Block>

              <Block
                eyebrow="The approach"
                title="What we did"
              >
                <ol className="space-y-5">
                  {win.approach.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <div
                        className="flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center font-display font-bold text-sm text-white"
                        style={{ background: win.accent }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-ink-700 leading-relaxed pt-0.5">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </Block>

              <Block eyebrow="Timeline" title="How it unfolded">
                <div className="relative pl-6 border-l-2 border-line space-y-6">
                  {win.timeline.map((t, i) => (
                    <div key={i} className="relative">
                      <div
                        className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-4 border-white"
                        style={{ background: win.accent }}
                      />
                      <div className="text-[11px] uppercase tracking-widest text-ink-600">
                        {t.week}
                      </div>
                      <div className="mt-1 font-display text-lg font-bold text-ink-950">
                        {t.title}
                      </div>
                      <p className="mt-1 text-sm text-ink-700 leading-relaxed">
                        {t.body}
                      </p>
                    </div>
                  ))}
                </div>
              </Block>

              {/* Testimonial */}
              <figure className="card-surface rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute -top-12 -right-12 h-48 w-48 rounded-full blur-3xl opacity-50"
                  style={{
                    background: `radial-gradient(circle, ${win.accent}66, transparent 60%)`,
                  }}
                />
                <Quote
                  size={36}
                  className="text-ink-950 opacity-20"
                  strokeWidth={2.4}
                />
                <blockquote className="mt-4 font-display text-2xl sm:text-3xl font-bold text-ink-950 leading-snug">
                  &ldquo;{win.testimonial.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <div
                    className="h-10 w-10 rounded-full flex items-center justify-center font-display font-bold text-white text-sm"
                    style={{ background: win.accent }}
                  >
                    {win.testimonial.author
                      .split(" ")
                      .map((p) => p[0])
                      .join("")
                      .slice(0, 2)}
                  </div>
                  <div>
                    <div className="font-semibold text-ink-950 text-sm">
                      {win.testimonial.author}
                    </div>
                    <div className="text-xs text-ink-600">
                      {win.testimonial.role}
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24 self-start">
              <div className="card-surface rounded-2xl p-6">
                <div className="text-[11px] uppercase tracking-widest text-ink-600">
                  Services
                </div>
                <ul className="mt-3 space-y-2">
                  {win.services.map((s) => (
                    <li
                      key={s}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <CheckCircle2
                        size={16}
                        className="mt-0.5 flex-shrink-0"
                        style={{ color: win.accent }}
                      />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-surface rounded-2xl p-6">
                <div className="text-[11px] uppercase tracking-widest text-ink-600">
                  Stack
                </div>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {win.stack.map((s) => (
                    <li
                      key={s}
                      className="text-[11px] rounded-full bg-paper-50 border border-line px-2.5 py-1 text-ink-700"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card-surface rounded-2xl p-6">
                <div className="text-[11px] uppercase tracking-widest text-ink-600">
                  Deliverables
                </div>
                <ul className="mt-3 space-y-2">
                  {win.deliverables.map((d) => (
                    <li
                      key={d}
                      className="flex items-start gap-2 text-sm text-ink-700"
                    >
                      <span
                        className="mt-1.5 flex-shrink-0 h-1.5 w-1.5 rounded-full"
                        style={{ background: win.accent }}
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href="/#contact"
                className="group block rounded-2xl bg-ink-950 text-white p-6 hover:bg-ink-800 transition"
              >
                <div className="text-[11px] uppercase tracking-widest text-white/60">
                  Your turn
                </div>
                <div className="mt-2 font-display text-xl font-bold">
                  Get a teardown like this for your funnel.
                </div>
                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold">
                  Book a free audit
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </div>
              </Link>
            </aside>
          </div>
        </div>
      </section>

      {/* Prev / next */}
      {adjacent && (
        <section className="relative pb-20 lg:pb-28 border-t border-line bg-paper-50">
          <div className="mx-auto max-w-6xl px-6 lg:px-10 pt-12">
            <div className="text-[11px] uppercase tracking-widest text-ink-600 text-center">
              Keep reading
            </div>
            <div className="mt-6 grid md:grid-cols-2 gap-5">
              <AdjacentCard win={adjacent.prev} direction="prev" />
              <AdjacentCard win={adjacent.next} direction="next" />
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}

function MetaPill({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Briefcase;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-white/25 bg-white/15 backdrop-blur p-4">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-white/75">
        <Icon size={12} />
        {label}
      </div>
      <div className="mt-1 text-sm font-semibold text-white leading-snug">
        {value}
      </div>
    </div>
  );
}

function Block({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-widest text-ink-600">
        {eyebrow}
      </div>
      <h2 className="mt-2 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-ink-950">
        {title}
      </h2>
      <div className="mt-6">{children}</div>
    </div>
  );
}

function AdjacentCard({
  win,
  direction,
}: {
  win: ReturnType<typeof getWin> & {};
  direction: "prev" | "next";
}) {
  if (!win) return null;
  return (
    <Link
      href={`/wins/${win.slug}`}
      className="group card-surface card-hover rounded-2xl overflow-hidden block"
    >
      <div
        className="relative h-24"
        style={{ background: win.heroGradient }}
      >
        <div className="absolute inset-0 bg-ink-950/10" />
      </div>
      <div className="p-6">
        <div className="text-[11px] uppercase tracking-widest text-ink-600">
          {direction === "prev" ? "← Previous" : "Next →"} · {win.tag}
        </div>
        <div className="mt-2 font-display text-xl font-bold text-ink-950">
          {win.brand}
        </div>
        <div className="mt-1 text-sm text-ink-700">{win.headline}</div>
      </div>
    </Link>
  );
}
