import { Check, X, Minus, Sparkles } from "lucide-react";
import { LogoMark } from "./Logo";

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

        <div className="mt-16 overflow-x-auto rounded-3xl border border-line/75 shadow-lift bg-white/70 backdrop-blur-md">
          <table className="w-full min-w-[800px] border-separate border-spacing-0 text-sm">
            <thead>
              <tr className="text-left">
                <th className="p-6 font-semibold text-ink-600 w-1/3 bg-paper-50/50 border-b border-line/60 align-top pt-8">
                  Feature / Capability
                </th>
                <th className="p-6 bg-ink-950 text-white font-display text-base border-x border-ink-900 relative shadow-2xl align-top">
                  <div className="flex flex-col gap-2.5 items-start">
                    <div>
                      <span className="inline-flex items-center gap-1 bg-gradient-to-r from-accent-warm to-amber-500 text-white text-[9px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-md animate-pulse">
                        <Sparkles size={9} /> Recommended Partner
                      </span>
                    </div>
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 grid place-items-center rounded-lg bg-white/10 text-accent-mint backdrop-blur">
                        <LogoMark className="w-4 h-4" />
                      </div>
                      <span className="font-extrabold tracking-tight text-lg">PromoGent</span>
                    </div>
                  </div>
                </th>
                <th className="p-6 font-semibold text-ink-800 bg-paper-50/80 border-b border-line/60 border-t border-r border-line/60 align-top pt-14">
                  Cheap Freelancers
                </th>
                <th className="p-6 font-semibold text-ink-800 bg-paper-50/80 border-b border-line/60 border-t border-r border-line/60 align-top pt-14">
                  Big Agencies
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-line/45">
              {rows.map((r, i) => {
                const last = i === rows.length - 1;
                return (
                  <tr key={r.label} className="group hover:bg-paper-50/40 transition-colors duration-150">
                    <td className="p-6 text-ink-950 font-bold border-r border-line/45 bg-white/40">
                      {r.label}
                    </td>
                    
                    {/* US (PromoGent) Column */}
                    <td
                      className={`p-6 border-x border-ink-900 bg-ink-950 text-white relative ${
                        last ? "border-b border-ink-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)]" : ""
                      }`}
                    >
                      {r.highlight ? (
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent-lemon/20 text-accent-lemon ring-4 ring-accent-lemon/10">
                            <Sparkles size={12} className="stroke-[2.5]" />
                          </div>
                          <span className="font-extrabold text-accent-lemon text-[15px] bg-accent-lemon/10 border border-accent-lemon/25 px-2.5 py-1 rounded-lg">
                            {r.us}
                          </span>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2.5">
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent-mint/20 text-accent-mint">
                            <Check size={12} className="stroke-[3]" />
                          </div>
                          <span className={`font-semibold text-white ${r.bold ? "text-accent-mint" : ""}`}>
                            {r.us}
                          </span>
                        </div>
                      )}
                    </td>

                    {/* Cheap Freelancers Column */}
                    <td className="p-6 text-ink-600 bg-white/30 border-r border-line/45">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper-100 text-ink-400">
                          <Minus size={11} className="stroke-[2.5]" />
                        </div>
                        <span className="font-medium text-ink-600">{r.cheap}</span>
                      </div>
                    </td>

                    {/* Big Agencies Column */}
                    <td className="p-6 text-ink-600 bg-white/30">
                      <div className="flex items-center gap-2.5">
                        <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-paper-100 text-ink-400">
                          <X size={11} className="stroke-[2.5]" />
                        </div>
                        <span className="font-medium text-ink-600">{r.big}</span>
                      </div>
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
