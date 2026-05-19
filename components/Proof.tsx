import Avatar from "./Avatar";
import { FIVERR_URL } from "./AnnouncementBar";

const testimonials = [
  {
    q: "Our Shopify store had 80k visitors a month and 1.6% conversion. Six weeks with PromoGent and we were at 4.2% — same traffic, 2.6× the revenue.",
    name: "Riya Mehta",
    role: "Founder, DTC skincare brand",
    slug: "riya",
  },
  {
    q: "They migrated our workload to AWS with zero downtime, then knocked 38% off our cloud bill in Q1. Genuinely a partner.",
    name: "Arjun Khanna",
    role: "VP Eng, SaaS scale-up",
    slug: "arjun",
  },
  {
    q: "I came for a WordPress rebuild. I left with a CRO program that 3× our lead volume. They understand revenue, not just code.",
    name: "Mark D.",
    role: "Agency owner, US",
    slug: "mark",
  },
  {
    q: "Our checkout drop-off went from 71% to 38% in five weeks. PromoGent's audit paid for itself in two weeks.",
    name: "Priya S.",
    role: "COO, fashion DTC",
    slug: "priya-s",
  },
  {
    q: "They redesigned our hero and PDP — bounce rate dropped 22 points and our CAC payback fell to 19 days.",
    name: "Jon W.",
    role: "Founder, B2B SaaS",
    slug: "jon",
  },
  {
    q: "We saved ~$8k/month after PromoGent re-architected our EKS clusters. Total game-changer for our runway.",
    name: "Vikas R.",
    role: "CTO, fintech",
    slug: "vikas-r",
  },
];

export default function Proof() {
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
              className="card-surface rounded-2xl p-6 w-[360px] shrink-0"
            >
              <div className="flex items-center gap-1 text-accent-warm">
                ★★★★★
              </div>
              <p className="mt-3 text-sm text-ink-800 leading-relaxed">
                &ldquo;{t.q}&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <Avatar
                  src={`/photos/clients/${t.slug}.jpg`}
                  alt={t.name}
                  fallback={t.name.charAt(0)}
                  className="h-10 w-10 rounded-full overflow-hidden"
                />
                <div>
                  <div className="text-sm font-semibold text-ink-950">
                    {t.name}
                  </div>
                  <div className="text-xs text-ink-600">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="mt-10 mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-center gap-4">
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
      </div>
    </section>
  );
}
