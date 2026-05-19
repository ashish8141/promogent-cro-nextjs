const rows = [
  {
    label: "Outcomes tied to revenue",
    us: "Every engagement",
    cheap: "Sometimes",
    big: "In the SOW only",
    bold: true,
  },
  {
    label: "First measurable win by",
    us: "Week 2",
    cheap: "Whenever",
    big: "Month 3+",
    highlight: true,
  },
  {
    label: "A/B testing program",
    us: "Always-on, codified",
    cheap: "One-off",
    big: "Pricey add-on",
  },
  {
    label: "Full stack (web + mobile + cloud)",
    us: "Yes — one team",
    cheap: "No",
    big: "Sub-contracted",
  },
  {
    label: "Pricing transparency",
    us: "Fixed scope, fixed price",
    cheap: "Hourly, ambiguous",
    big: "Retainer w/ surcharges",
  },
  {
    label: "Reporting cadence",
    us: "Weekly + live dashboard",
    cheap: "Email when asked",
    big: "Quarterly deck",
  },
  {
    label: "NDA, MSA on day one",
    us: "Yes, templates ready",
    cheap: "Rare",
    big: "Legal review weeks",
  },
];

export default function Comparison() {
  return (
    <section
      id="compare"
      className="relative py-24 lg:py-32 bg-paper-50 border-y border-line overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-dots opacity-40 [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Why us, plainly
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            We&apos;re not{" "}
            <span className="marker">&quot;just another agency&quot;.</span>
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Honest side-by-side. The boxes we tick — and the ones we don&apos;t
            bother with.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full min-w-[720px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-5 font-medium text-ink-600 w-1/3"></th>
                <th className="p-5 bg-ink-950 text-white font-display text-base rounded-t-2xl border-x border-t border-ink-950">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-white text-ink-950 text-xs font-bold">
                      P
                    </span>{" "}
                    PromoGent
                  </div>
                </th>
                <th className="p-5 font-medium text-ink-700 bg-white border-t border-x border-line rounded-t-2xl">
                  Cheap freelancers
                </th>
                <th className="p-5 font-medium text-ink-700 bg-white border-t border-x border-line rounded-t-2xl">
                  Big agencies
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => {
                const last = i === rows.length - 1;
                return (
                  <tr key={r.label}>
                    <td className="p-5 border-b border-line text-ink-700 font-medium">
                      {r.label}
                    </td>
                    <td
                      className={`p-5 border-x border-ink-950 bg-ink-950 text-white ${
                        last ? "rounded-b-2xl border-b" : "border-b"
                      }`}
                    >
                      {r.highlight ? (
                        <b className="text-accent-lemon">{r.us}</b>
                      ) : r.bold ? (
                        <span className="font-bold">✓ {r.us}</span>
                      ) : (
                        r.us
                      )}
                    </td>
                    <td className="p-5 border-b border-line bg-white">
                      {r.cheap}
                    </td>
                    <td className="p-5 border-b border-line bg-white">
                      {r.big}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
