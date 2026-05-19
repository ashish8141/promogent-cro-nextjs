"use client";

import { useState } from "react";

/**
 * To swap placeholder silhouettes for real photos, drop files at:
 *   /public/photos/team/chirag.jpg       (founder, 4:5 portrait, ~800×1000)
 *   /public/photos/team/[slug].jpg       (team members, square, ~600×600)
 *   /public/photos/office/[slug].jpg     (office moments, 4:3 landscape, ~1200×800)
 *   /public/photos/clients/[slug].jpg    (testimonial avatars, square, ~200×200)
 *
 * No code change needed — if a file is missing the fallback silhouette renders.
 */

const FIVERR_URL = "https://www.fiverr.com/chirag8838";

const team = [
  { name: "Priya Kapoor", role: "CRO Lead", slug: "priya", bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)" },
  { name: "Vikas Sharma", role: "Shopify & Web", slug: "vikas", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { name: "Anjali Rao", role: "Mobile (RN/Flutter)", slug: "anjali", bg: "linear-gradient(135deg,#ff7eb5,#a78bfa)" },
  { name: "Rohan Iyer", role: "AWS / DevOps", slug: "rohan", bg: "linear-gradient(135deg,#6ea8ff,#9be7c4)" },
  { name: "Neha Verma", role: "Design & UX", slug: "neha", bg: "linear-gradient(135deg,#a78bfa,#ff7eb5)" },
  { name: "Sahil Mehra", role: "Analytics & A/B", slug: "sahil", bg: "linear-gradient(135deg,#ff7a45,#ffe27a)" },
];

const office = [
  { title: "Studio", slug: "studio", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { title: "Standup", slug: "standup", bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)" },
  { title: "Whiteboarding", slug: "whiteboard", bg: "linear-gradient(135deg,#ff7eb5,#a78bfa)" },
  { title: "Ship day", slug: "ship", bg: "linear-gradient(135deg,#6ea8ff,#9be7c4)" },
];

function Silhouette() {
  return (
    <svg
      className="absolute inset-x-0 bottom-0 w-full h-3/4"
      viewBox="0 0 200 200"
      preserveAspectRatio="xMidYMax meet"
      fill="none"
    >
      <circle cx="100" cy="80" r="36" fill="#0a0a0a" opacity="0.85" />
      <path
        d="M30 200 C 30 130, 55 112, 100 112 C 145 112, 170 130, 170 200 Z"
        fill="#0a0a0a"
        opacity="0.85"
      />
    </svg>
  );
}

function PhotoFallback({
  src,
  alt,
  bg,
  aspect = "aspect-square",
}: {
  src: string;
  alt: string;
  bg: string;
  aspect?: string;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div className={`relative ${aspect}`} style={{ background: bg }}>
      {!errored && (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && <Silhouette />}
    </div>
  );
}

export default function Team() {
  return (
    <section
      id="team"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <svg
        aria-hidden="true"
        className="absolute -top-10 right-10 w-[300px] opacity-[0.12]"
        viewBox="0 0 300 300"
        fill="none"
      >
        <circle cx="150" cy="150" r="140" stroke="#0a0a0a" />
        <circle cx="150" cy="150" r="100" stroke="#0a0a0a" />
        <circle cx="150" cy="150" r="60" stroke="#0a0a0a" />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            The humans behind the numbers
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            Meet the team.{" "}
            <span className="text-flow">Real people, real receipts.</span>
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            A small, senior team — no juniors hidden behind project managers.
            You&apos;ll talk to the people actually writing the code and
            reading your analytics.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-5 gap-6">
          {/* Founder */}
          <article className="group tilt-card lg:col-span-2 relative card-surface rounded-3xl overflow-hidden card-hover">
            <div className="tilt-inner">
              <FounderPhoto />
              <div className="p-6">
                <h3 className="font-display text-2xl font-extrabold text-ink-950">
                  Chirag
                </h3>
                <div className="text-sm text-ink-600">
                  Founder &amp; Lead Engineer ·{" "}
                  <span className="font-medium text-ink-800">@chirag8838</span>
                </div>
                <p className="mt-3 text-sm text-ink-700 leading-relaxed">
                  7+ years shipping CRO programs, custom WordPress, Shopify
                  and Next.js builds. I personally lead every audit — and read
                  every line of analytics before we make a single change.
                </p>
                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  <a
                    href={FIVERR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full bg-ink-950 text-white px-3.5 py-1.5 text-xs font-semibold hover:bg-ink-800 transition"
                  >
                    ★ Fiverr profile <span>→</span>
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-700 hover:border-ink-950 hover:text-ink-950 transition"
                  >
                    in LinkedIn
                  </a>
                  <a
                    href="mailto:hello@promogent.com"
                    className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-ink-700 hover:border-ink-950 hover:text-ink-950 transition"
                  >
                    ✉ Email
                  </a>
                </div>
              </div>
            </div>
          </article>

          {/* Team grid */}
          <div className="lg:col-span-3 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {team.map((m) => (
              <article
                key={m.slug}
                className="group tilt-card relative card-surface rounded-2xl overflow-hidden card-hover"
              >
                <div className="tilt-inner">
                  <PhotoFallback
                    src={`/photos/team/${m.slug}.jpg`}
                    alt={`${m.name} — ${m.role}`}
                    bg={m.bg}
                  />
                  <div className="p-4">
                    <div className="text-sm font-semibold text-ink-950 leading-tight">
                      {m.name}
                    </div>
                    <div className="text-xs text-ink-600 mt-0.5">{m.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Office strip */}
        <div className="mt-12">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-5">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-ink-600">
                Behind the scenes
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-ink-950">
                Where the work actually happens.
              </h3>
            </div>
            <span className="text-xs text-ink-600">
              Drop office shots in{" "}
              <code className="text-ink-950 bg-paper-50 border border-line rounded px-1.5 py-0.5">
                /public/photos/office/
              </code>
            </span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
            {office.map((o) => (
              <figure
                key={o.slug}
                className="relative card-surface rounded-2xl overflow-hidden aspect-[4/3]"
                style={{ background: o.bg }}
              >
                <OfficeShot src={`/photos/office/${o.slug}.jpg`} title={o.title} />
                <figcaption className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[11px]">
                  <span className="rounded-full bg-white/90 backdrop-blur text-ink-950 px-2 py-0.5 font-medium">
                    {o.title}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FounderPhoto() {
  const [errored, setErrored] = useState(false);
  return (
    <div
      className="relative aspect-[4/5]"
      style={{
        background:
          "linear-gradient(135deg, #ffe27a 0%, #ff7a45 50%, #ff7eb5 100%)",
      }}
    >
      {!errored && (
        <img
          src="/photos/team/chirag.jpg"
          alt="Chirag — Founder, PromoGent Solutions"
          className="absolute inset-0 w-full h-full object-cover object-center"
          onError={() => setErrored(true)}
        />
      )}
      {errored && <Silhouette />}
      <span className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-ink-950 text-white text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5">
        Founder
      </span>
      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-white text-ink-950 text-[10px] uppercase tracking-widest font-semibold px-2.5 py-0.5">
        ★ Top-Rated
      </span>
    </div>
  );
}

function OfficeShot({ src, title }: { src: string; title: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <>
      {!errored && (
        <img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setErrored(true)}
        />
      )}
      {errored && (
        <div className="absolute inset-0 grid place-items-center">
          <span className="text-ink-950/35 text-[10px] uppercase tracking-widest font-semibold">
            Drop photo here
          </span>
        </div>
      )}
    </>
  );
}
