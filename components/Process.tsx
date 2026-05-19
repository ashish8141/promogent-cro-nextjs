import { Search, Wrench, FlaskConical, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnose",
    body: "We plug into your analytics, ad accounts and session replays. You get a written audit pinpointing exactly where revenue is leaking.",
    week: "Week 1",
  },
  {
    icon: Wrench,
    title: "Fix",
    body: "We ship the highest-leverage fixes first — hero, CTAs, PDPs, checkout, page speed, broken tracking.",
    week: "Week 2–3",
  },
  {
    icon: FlaskConical,
    title: "Test",
    body: "Always-on A/B testing. Every change is measured against revenue per visitor — not vanity clicks.",
    week: "Week 4+",
  },
  {
    icon: Rocket,
    title: "Scale",
    body: "Once conversion is fixed, we open the traffic taps — SEO, paid social, PPC and email.",
    week: "Ongoing",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            How we work
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            The <span className="marker">PromoGent</span> revenue recovery
            method.
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            A four-phase system we&apos;ve refined across 500+ SMB engagements.
            No fluff, no 12-week roadmaps — outcomes start landing in week one.
          </p>
        </div>

        <div className="relative mt-16">
          <svg
            aria-hidden="true"
            className="absolute top-6 left-0 right-0 mx-auto w-[88%] h-6 hidden lg:block"
            viewBox="0 0 1000 20"
            preserveAspectRatio="none"
          >
            <path
              className="anim-dash"
              d="M0 10 H 1000"
              stroke="#0a0a0a"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <div
                key={s.title}
                className="relative card-surface card-hover rounded-2xl p-6"
              >
                <div className="absolute -top-3 left-6 inline-flex h-7 w-7 items-center justify-center rounded-full bg-ink-950 text-white text-xs font-bold border-2 border-white">
                  {i + 1}
                </div>
                <div className="flex items-center justify-between mt-2">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-950 bg-white">
                    <s.icon size={18} className="text-ink-950" />
                  </div>
                  <span className="text-[11px] uppercase tracking-widest text-ink-600">
                    {s.week}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-ink-950">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
