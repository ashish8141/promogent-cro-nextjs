"use client";

import { useState } from "react";
import { Linkedin } from "lucide-react";

/**
 * Team and Office section with high-fidelity circular avatar grid and premium styles.
 */

const team = [
  { name: "Chirag Patel", role: "Founder & Lead Engineer", slug: "chirag-patel", ext: "png", linkedin: "https://www.linkedin.com/in/chirag8838/", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { name: "Ashish Jat", role: "Senior Cloud & Full-Stack Architect", slug: "ashish-jat", ext: "jpg", linkedin: "https://www.linkedin.com/in/ashish-jat-7b1ab396/", bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)" },
  { name: "Gaurav Jat", role: "CRO & Web Performance Lead", slug: "gaurav-jat", ext: "webp", linkedin: "https://www.linkedin.com/in/gaurav-jat/", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { name: "Vaishali Pitroda", role: "Sr. UX/UI Designer", slug: "vaishali-pitroda", ext: "webp", linkedin: "https://www.linkedin.com/in/vaishali-pitroda-6906b412b/", bg: "linear-gradient(135deg,#ff7eb5,#a78bfa)" },
  { name: "Ekta Jesani", role: "Sr. Content Writer & Strategist", slug: "ekta-jesani", ext: "webp", linkedin: "https://www.linkedin.com/in/ekta-jesani-contentwriter2310/", bg: "linear-gradient(135deg,#6ea8ff,#9be7c4)" },
  { name: "Khushi Prajapati", role: "UX/UI & Graphics Designer", slug: "khushi-prajapati", ext: "webp", linkedin: "https://www.linkedin.com/in/khushi-prajapati-451371176/", bg: "linear-gradient(135deg,#a78bfa,#ff7eb5)" },
  { name: "Yash Barot", role: "Shopify & WordPress Developer", slug: "yash-barot", ext: "webp", linkedin: "https://www.linkedin.com/in/yash-barot-1903ab227/", bg: "linear-gradient(135deg,#ff7a45,#ffe27a)" },
  { name: "Janvi Goranni", role: "Business Development Executive", slug: "janvi-goranni", ext: "webp", linkedin: "https://www.linkedin.com/in/janvi-gorani/", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { name: "Mansi Jethudi", role: "Digital Marketer", slug: "mansi-jethudi", ext: "webp", bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)" },
  { name: "Mansi Purohit", role: "Shopify Developer", slug: "mansi-purohit", ext: "webp", bg: "linear-gradient(135deg,#ff7eb5,#a78bfa)" },
];

const office = [
  { title: "Making Intelligent Tech", slug: "making-intelligent-tech", ext: "webp", bg: "linear-gradient(135deg,#ffe27a,#ff7a45)" },
  { title: "With Innovation & Transparency", slug: "with-innovation-transparency-1", ext: "webp", bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)" },
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
}: {
  src: string;
  alt: string;
  bg: string;
}) {
  const [errored, setErrored] = useState(false);
  return (
    <div className="p-4 flex justify-center items-center">
      <div
        className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-md transition-all duration-500 group-hover:scale-[1.04] group-hover:shadow-lg flex-shrink-0"
        style={{ background: bg }}
      >
        {!errored && (
          <img
            src={src}
            alt={alt}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            onError={() => setErrored(true)}
          />
        )}
        {errored && <Silhouette />}
      </div>
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

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {team.map((m) => (
            <article
              key={m.slug}
              className="group relative card-surface rounded-3xl overflow-hidden card-hover p-6 flex flex-col justify-between transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <PhotoFallback
                  src={`/photos/team/${m.slug}.${m.ext || "jpg"}?v=2`}
                  alt={`${m.name} — ${m.role}`}
                  bg={m.bg}
                />
                <div className="mt-4 flex flex-col items-center">
                  <h4 className="text-base font-bold text-ink-950 leading-snug tracking-tight">
                    {m.name}
                  </h4>
                  <p className="text-xs text-ink-600 mt-1.5 font-medium leading-relaxed">{m.role}</p>
                  {m.linkedin && (
                    <a
                      href={m.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3.5 h-7 w-7 rounded-full border border-line bg-paper-50 hover:bg-white hover:border-ink-950 text-ink-700 hover:text-ink-950 grid place-items-center transition-all duration-300 shadow-soft"
                      title={`${m.name}'s LinkedIn Profile`}
                    >
                      <Linkedin size={13} />
                    </a>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Office strip */}
        <div className="mt-20">
          <div className="flex items-end justify-between flex-wrap gap-3 mb-6">
            <div>
              <div className="text-[10px] uppercase tracking-widest text-ink-600 font-bold">
                Behind the scenes
              </div>
              <h3 className="mt-1 font-display text-xl font-bold text-ink-950">
                Where the work actually happens.
              </h3>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {office.map((o) => (
              <figure
                key={o.slug}
                className="relative card-surface rounded-3xl overflow-hidden aspect-[16/10] shadow-md hover:shadow-xl transition-all duration-300 group"
                style={{ background: o.bg }}
              >
                <OfficeShot src={`/photos/office/${o.slug}.${o.ext || "jpg"}?v=2`} title={o.title} />
                <figcaption className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs">
                  <span className="rounded-full bg-white/90 backdrop-blur-md text-ink-950 px-3 py-1.5 font-bold shadow-sm group-hover:scale-105 transition-transform duration-300">
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

function OfficeShot({ src, title }: { src: string; title: string }) {
  const [errored, setErrored] = useState(false);
  return (
    <>
      {!errored && (
        <img
          src={src}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
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
