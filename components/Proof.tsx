"use client";

import { useState } from "react";
import { FIVERR_URL } from "./AnnouncementBar";

const testimonials = [
  {
    q: "It was a pleasure working with Chirag. He made a good professional looking website, he also trained me on a couple of things that needed to be updated periodically based upon the products that we are selling.",
    name: "Kivyaglobal",
    country: "Canada",
    bg: "linear-gradient(135deg,#ff7a45,#ffe27a)",
  },
  {
    q: "I’m not someone who usually leaves reviews, but Chirag absolutely deserves one. He built a completely customised Shopify store for us, exactly to our design specifications, and was incredibly responsive to every change request along the way. The level of detail and care he put into the project made the whole process seamless. What stood out most was his professionalism, clear communication, and ability to solve problems quickly without cutting corners. Despite the complexity of the build, he delivered everything on time and at a cost that was far more competitive than what we were quoted by local developers, without compromising on quality. The end result was a store that not only matched our expectations but exceeded them.",
    name: "Dionv123",
    country: "Australia",
    bg: "linear-gradient(135deg,#6ea8ff,#9be7c4)",
  },
  {
    q: "Had a great experience working with Chirag on my store. He was extremely patient, understanding, and very cooperative throughout the whole process. What I liked the most is that he really took the time to understand what I needed and even asked the right questions to guide me in the right direction. The final outcome came out exactly how I wanted. Highly recommend working with Chirag!",
    name: "Tanbirk",
    country: "Canada",
    bg: "linear-gradient(135deg,#a78bfa,#ff7eb5)",
  },
  {
    q: "Chirag truly excelled in delivering top-notch website development services. His professionalism and attention to detail were unmatched, consistently exceeding expectations. The proactive communication and timely delivery made for a smooth collaboration. Fantastic experience - can't recommend him enough! 🙌 Thank you, Chirag!",
    name: "Shiftstack",
    country: "South Africa",
    bg: "linear-gradient(135deg,#ff7eb5,#a78bfa)",
  },
  {
    q: "Chirag truly impressed with his website development skills, exceeding all expectations with professionalism and attention to detail. Easy to work with as he always made sure he understood what I was going for and figured out how to best accommodate, and he quickly developed a deep understanding of the project's needs. A pleasure to work with and I plan to re-hire again for future projects.",
    name: "Speakhard",
    country: "United States",
    bg: "linear-gradient(135deg,#9be7c4,#6ea8ff)",
  },
  {
    q: "Chirag and the whole process was so amazing, I would highly recommend him and his work. He went above and beyond and worked so well with us to get the delivery done and we are so happy with the final website. I have used so many other platforms and developers before, and it can be a hard, long process... not with Chirag, he was outstanding and if anyone wants a 100% great WordPress developer and designer, then I recommend him. Feel free to contact me, if you have any questions... he was superb A1++++",
    name: "Russosullivan",
    country: "United Kingdom",
    bg: "linear-gradient(135deg,#ffe27a,#ff7a45)",
  },
];

/** Returns up to 2 capitalised initials from a full name (e.g. "Riya Mehta" → "RM"). */
function getInitials(name: string): string {
  const cleaned = name.replace(/\./g, "").trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

export default function Proof() {
  const [activeTestimonial, setActiveTestimonial] = useState<typeof testimonials[number] | null>(null);
  const items = [...testimonials, ...testimonials];

  return (
    <section
      id="proof"
      className="relative py-24 lg:py-32 bg-paper-50 border-y border-line overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Proof, not promises
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            <span className="text-flow">Top-Rated</span> on Fiverr. Battle-tested
            in production.
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            7+ years, <b className="text-ink-950">6,200+ Fiverr reviews</b>, 500+
            projects shipped across 30+ countries. Hover to pause.
          </p>
        </div>
      </div>

      <div className="mt-12 relative [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
        <div className="marquee-track flex gap-5 animate-marquee-slow hover:[animation-play-state:paused]">
          {items.map((t, i) => (
            <article
              key={i}
              onClick={() => setActiveTestimonial(t)}
              className="card-surface rounded-2xl p-6 w-[360px] shrink-0 cursor-pointer transition hover:border-ink-950/30 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-accent-warm">
                  ★★★★★
                </div>
                <p className="mt-3 text-sm text-ink-800 leading-relaxed line-clamp-3">
                  &ldquo;{t.q}&rdquo;
                </p>
                <button
                  className="mt-2 text-xs font-bold text-ink-950 hover:underline flex items-center gap-1 focus:outline-none"
                >
                  Read review →
                </button>
              </div>
              <div className="mt-5 flex items-center gap-3">
                <div
                  className="relative h-10 w-10 rounded-full overflow-hidden ring-1 ring-line shadow-soft grid place-items-center"
                  style={{ background: t.bg }}
                  aria-hidden="true"
                >
                  <span className="font-display text-xs font-extrabold text-ink-950 tracking-tight drop-shadow-sm">
                    {getInitials(t.name)}
                  </span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink-950">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-600">{t.country}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-10 flex flex-wrap items-center justify-center gap-6">
        <a
          href={FIVERR_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl border border-ink-950 bg-white px-5 py-3 hover:bg-paper-50 transition"
        >
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-ink-950 text-white">
            ★
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-950 flex items-center gap-1.5">
              Fiverr Top-Rated Seller{" "}
              <span className="text-ink-600 group-hover:translate-x-0.5 transition">
                →
              </span>
            </div>
            <div className="text-xs text-ink-600">
              6,200+ verified reviews · @chirag8838
            </div>
          </div>
        </a>

        <a
          href="https://clutch.co/profile/promogent"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 rounded-2xl border border-ink-950 bg-white px-5 py-3 hover:bg-paper-50 transition"
        >
          <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#002f56] text-[#00E5FF] font-black text-xs">
            C
          </div>
          <div>
            <div className="text-sm font-semibold text-ink-950 flex items-center gap-1.5">
              Clutch 5-Star Agency{" "}
              <span className="text-ink-600 group-hover:translate-x-0.5 transition">
                →
              </span>
            </div>
            <div className="text-xs text-ink-600">
              5.0 ★ Rating · clutch.co/profile/promogent
            </div>
          </div>
        </a>
      </div>

      {/* Testimonial Modal */}
      {activeTestimonial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink-950/60 backdrop-blur-md animate-in fade-in duration-200">
          <div
            className="absolute inset-0 cursor-default"
            onClick={() => setActiveTestimonial(null)}
          />
          <div className="relative w-full max-w-xl card-surface rounded-3xl p-8 lg:p-10 shadow-2xl bg-white border border-line animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveTestimonial(null)}
              className="absolute top-5 right-5 h-8 w-8 rounded-full border border-line bg-paper-50 hover:bg-paper-100 flex items-center justify-center text-ink-600 hover:text-ink-950 transition focus:outline-none"
              aria-label="Close modal"
            >
              ✕
            </button>

            <div className="flex items-center gap-1 text-accent-warm text-lg">
              ★★★★★
            </div>

            <blockquote className="mt-6 font-display text-xl sm:text-2xl font-bold text-ink-950 leading-snug">
              &ldquo;{activeTestimonial.q}&rdquo;
            </blockquote>

            <div className="mt-8 flex items-center gap-4 border-t border-line pt-6">
              <div
                className="relative h-12 w-12 rounded-full overflow-hidden ring-1 ring-line shadow-soft grid place-items-center"
                style={{ background: activeTestimonial.bg }}
                aria-hidden="true"
              >
                <span className="font-display text-sm font-extrabold text-ink-950 tracking-tight drop-shadow-sm">
                  {getInitials(activeTestimonial.name)}
                </span>
              </div>
              <div>
                <div className="font-semibold text-ink-950 text-base">
                  {activeTestimonial.name}
                </div>
                <div className="text-xs text-ink-600 mt-0.5">
                  {activeTestimonial.country}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
