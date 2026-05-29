import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { wins } from "@/lib/wins";
import WinsFilter from "./WinsFilter";

export const metadata: Metadata = {
  title: "Case studies — PromoGent Solutions",
  description:
    "Receipts, not slides. Real CRO, cloud, web and mobile wins from SMBs and enterprise teams we've shipped with.",
  openGraph: {
    title: "PromoGent case studies — receipts, not slides",
    description:
      "Conversion lifts, cloud cost cuts, mobile launches. Real numbers from teams we've shipped with.",
    type: "website",
  },
};

export default function WinsIndexPage() {
  return (
    <main className="min-h-screen bg-paper">
      <ScrollProgress />
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 overflow-hidden border-b border-line">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-dots opacity-40 pointer-events-none [mask-image:linear-gradient(to_bottom,black,transparent)]"
        />
        <div
          aria-hidden="true"
          className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(255,226,122,.45), transparent 60%)",
          }}
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -left-32 h-80 w-80 rounded-full blur-3xl pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, rgba(110,168,255,.35), transparent 60%)",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs text-ink-600 hover:text-ink-950 transition"
          >
            ← Back to home
          </Link>
          <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Case studies · {wins.length} wins
          </div>
          <h1 className="mt-5 font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-ink-950 leading-[1.02] max-w-4xl">
            Receipts, <span className="text-flow">not slides.</span>
          </h1>
          <p className="mt-6 text-lg text-ink-600 max-w-2xl leading-relaxed">
            Every story below is a real engagement with real numbers. No
            anonymised &ldquo;Client X&rdquo; case studies, no rounded-up vanity
            metrics — what we shipped, what changed, and how long it took.
          </p>

          {/* Aggregate stats strip */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            <Stat value="500+" label="projects shipped" />
            <Stat value="2.6×" label="avg. revenue lift" />
            <Stat value="−38%" label="avg. AWS bill cut" />
            <Stat value="6.2k" label="verified Fiverr reviews" />
          </div>
        </div>
      </section>

      {/* Filter + grid (client island) */}
      <section className="relative py-16 lg:py-24 bg-paper-50">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <WinsFilter wins={wins} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 lg:py-24 bg-ink-950 text-white overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-grid-dark opacity-40"
        />
        <div
          aria-hidden="true"
          className="absolute -top-24 -right-24 h-80 w-80 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,226,122,.25), transparent 60%)",
          }}
        />
        <div className="relative mx-auto max-w-5xl px-6 lg:px-10 text-center">
          <h2 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
            Want your numbers in here{" "}
            <span className="underline decoration-accent-warm decoration-[6px] underline-offset-[6px]">
              next quarter
            </span>
            ?
          </h2>
          <p className="mt-5 text-white/70 text-lg max-w-2xl mx-auto">
            Book a 30-minute strategy call. We&apos;ll screen-share your
            analytics, point out the three biggest leaks, and tell you whether
            we&apos;re a fit.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/#contact"
              className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-7 py-3.5 text-base font-semibold hover:bg-paper-100 transition shadow-lift"
            >
              Book a free audit
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/#calculator"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] backdrop-blur px-7 py-3.5 text-base font-semibold text-white hover:bg-white/[0.12] hover:border-white/50 transition"
            >
              Calculate my leak
              <ArrowUpRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl sm:text-4xl font-extrabold text-ink-950">
        {value}
      </div>
      <div className="mt-1 text-xs text-ink-600">{label}</div>
    </div>
  );
}
