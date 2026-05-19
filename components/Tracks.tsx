import { Check, Building2, Rocket, ArrowRight } from "lucide-react";

export default function Tracks() {
  return (
    <section id="tracks" className="relative py-24 lg:py-32 overflow-hidden">
      <svg
        aria-hidden="true"
        className="absolute -top-20 left-1/2 -translate-x-1/2 w-[1100px] opacity-[0.20]"
        viewBox="0 0 1100 200"
        fill="none"
      >
        <path
          className="anim-dash"
          d="M0 100 Q 275 0, 550 100 T 1100 100"
          stroke="#0a0a0a"
          strokeWidth="1.4"
          fill="none"
        />
      </svg>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            Who we serve
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            Two engagements.{" "}
            <span className="text-flow">One outcome — growth.</span>
          </h2>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-6">
          {/* SMB */}
          <div className="relative card-surface card-hover rounded-3xl p-8 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-20 -right-20 h-60 w-60 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(255,226,122,.7), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 group">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                  <span className="ic ic-rotate">
                    <Rocket size={20} strokeWidth={2.2} />
                  </span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-600">
                    Track 01
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-950">
                    SMBs & DTC Brands
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-ink-700">
                You have traffic. You have a product. Conversions are flatlining
                and you can&apos;t pinpoint why. We find the leak, fix it, and
                ship a CRO program that compounds.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "Full revenue-leak audit (analytics + heatmaps + UX)",
                  "CRO sprints with A/B testing on hero, PDP and checkout",
                  "Traffic optimization — SEO, paid social and PPC",
                  "WordPress, Shopify or Next.js builds when needed",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-800 text-sm"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-ink-950 text-white">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="text-xs text-ink-600">Starts from</div>
                  <div className="font-display text-2xl font-bold text-flow-ink">
                    $899{" "}
                    <span className="text-sm text-ink-600 font-normal">
                      / engagement
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="shine-btn inline-flex items-center gap-2 rounded-full bg-ink-950 text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink-800 transition"
                >
                  Book SMB audit
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Enterprise */}
          <div className="relative card-surface card-hover rounded-3xl p-8 overflow-hidden">
            <div
              aria-hidden="true"
              className="absolute -top-20 -left-20 h-60 w-60 rounded-full blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(110,168,255,.55), transparent 60%)",
              }}
            />
            <div className="relative">
              <div className="flex items-center gap-3 group">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-ink-950 bg-white text-ink-950">
                  <span className="ic ic-bounce">
                    <Building2 size={20} strokeWidth={2.2} />
                  </span>
                </div>
                <div>
                  <div className="text-[11px] uppercase tracking-widest text-ink-600">
                    Track 02
                  </div>
                  <h3 className="font-display text-2xl font-bold text-ink-950">
                    Enterprise Cloud Adoption
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-ink-700">
                Workloads stuck on legacy infra? We architect your AWS landing
                zone, migrate workloads with zero-downtime patterns and hand
                back a cost-optimized, observable platform.
              </p>

              <ul className="mt-6 space-y-3">
                {[
                  "AWS Well-Architected discovery & 6R migration plan",
                  "Multi-account landing zones with IaC (Terraform / CDK)",
                  "Containerization, EKS/ECS, serverless modernization",
                  "FinOps guardrails, observability and DevOps enablement",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-ink-800 text-sm"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-full border border-ink-950 text-ink-950">
                      <Check size={12} />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <div className="text-xs text-ink-600">Engagement type</div>
                  <div className="font-display text-2xl font-bold text-ink-950">
                    Project / Retainer
                  </div>
                </div>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-full border border-ink-950 bg-white px-5 py-2.5 text-sm font-semibold text-ink-950 hover:bg-paper-50 transition"
                >
                  Talk to architect
                  <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
