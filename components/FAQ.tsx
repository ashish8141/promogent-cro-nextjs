const faqs = [
  {
    q: "How fast will I see results?",
    a: "For SMB engagements, the first measurable lift typically lands in the first 14 days — usually from hero / CTA / page speed fixes. CRO programs compound monthly after that.",
  },
  {
    q: "Do you replace my current developer or marketer?",
    a: "No. We work alongside your team. We hand over documented changes, tests and dashboards so your team can keep the engine running between sprints.",
  },
  {
    q: "What tools do you work with?",
    a: "Analytics: GA4, Mixpanel, Amplitude, Posthog. Heatmaps & replays: Hotjar, Microsoft Clarity. A/B testing: VWO, Convert, GrowthBook. Stacks: WordPress, Shopify, Next.js, React Native, Flutter, AWS.",
  },
  {
    q: "How is pricing structured?",
    a: "SMB engagements start at $899 for a one-time audit and fix sprint. Ongoing CRO retainers are scoped per traffic volume. Enterprise AWS work is project- or retainer-based.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. We have shipped projects in 30+ countries. We invoice in USD/EUR/GBP/INR. Most of our SMB & enterprise clients are based in the US, UK and EU.",
  },
  {
    q: "Can you sign an NDA?",
    a: "Always. We sign an NDA before any audit call and a mutual MSA before engagement kickoff. Both are available as templates on request.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24 lg:py-32 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute -left-24 top-24 w-[360px] opacity-[0.15]"
        viewBox="0 0 360 360"
        fill="none"
      >
        <circle cx="180" cy="180" r="170" stroke="#0a0a0a" />
        <circle cx="180" cy="180" r="120" stroke="#0a0a0a" />
        <circle cx="180" cy="180" r="70" stroke="#0a0a0a" />
      </svg>

      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            FAQ
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            Common questions,{" "}
            <span className="text-flow">straight answers.</span>
          </h2>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="faq card-surface rounded-2xl p-5 open:shadow-lift transition"
            >
              <summary className="flex items-center justify-between gap-4">
                <span className="font-display text-lg font-semibold text-ink-950">
                  {f.q}
                </span>
                <span className="chev inline-flex h-7 w-7 items-center justify-center rounded-full bg-paper-50 border border-line transition-transform text-ink-950 text-xl leading-none">
                  +
                </span>
              </summary>
              <div className="mt-3 text-sm text-ink-700 leading-relaxed">
                {f.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
