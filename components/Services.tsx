import {
  Globe,
  ShoppingBag,
  Code2,
  Smartphone,
  Cloud,
  LineChart,
} from "lucide-react";

const services = [
  {
    icon: LineChart,
    anim: "ic-rotate",
    name: "CRO & Traffic Optimization",
    tag: "Core service",
    isCore: true,
    result: "+47% conv. avg",
    description:
      "Funnel teardowns, heatmap-driven UX fixes, paid + organic traffic engineering and analytics that pay for themselves in 30 days.",
    deliverables: ["Revenue-leak audit", "A/B testing", "SEO + paid mix"],
  },
  {
    icon: Globe,
    anim: "ic-spin",
    name: "WordPress Development",
    tag: "SMB & content sites",
    isCore: false,
    result: "<1.2s LCP",
    description:
      "Lightning-fast WordPress builds — headless, WooCommerce, or classic — engineered for Core Web Vitals and lead gen.",
    deliverables: ["Custom themes", "WooCommerce", "Headless WP"],
  },
  {
    icon: ShoppingBag,
    anim: "ic-bounce",
    name: "Shopify Development",
    tag: "DTC & eCom",
    isCore: false,
    result: "+38% AOV avg",
    description:
      "Custom Shopify themes, app integrations and CRO-tuned product pages built to push AOV and repeat rate up.",
    deliverables: ["Custom themes", "Hydrogen", "App integrations"],
  },
  {
    icon: Code2,
    anim: "ic-spin",
    name: "Next.js Web Apps",
    tag: "Modern web",
    isCore: false,
    result: "95+ Lighthouse",
    description:
      "Production-grade Next.js apps — App Router, RSC, edge-rendered marketing sites and SaaS products that scale.",
    deliverables: ["Marketing sites", "SaaS dashboards", "Storefronts"],
  },
  {
    icon: Smartphone,
    anim: "ic-rotate",
    name: "Cross-Platform Mobile",
    tag: "iOS + Android",
    isCore: false,
    result: "1 codebase, 2 stores",
    description:
      "One codebase, both stores. React Native and Flutter apps with native performance, OTA updates and CI/CD baked in.",
    deliverables: ["React Native", "Flutter", "App Store launch"],
  },
  {
    icon: Cloud,
    anim: "ic-bounce",
    name: "AWS Cloud Adoption",
    tag: "Enterprise",
    isCore: false,
    result: "-38% cloud bill",
    description:
      "Lift-and-shift, refactor or greenfield — we land your workloads on AWS with cost guardrails, IaC and a clean operating model.",
    deliverables: ["Migration", "Landing zones", "FinOps"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1 text-xs text-ink-700">
            <span className="h-1.5 w-1.5 rounded-full bg-ink-950" />
            What we do
          </div>
          <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-ink-950">
            One studio.{" "}
            <span className="text-flow">Six high-leverage services.</span>
          </h2>
          <p className="mt-4 text-ink-600 text-lg">
            Our core is CRO + Traffic Optimization. Everything else exists so we
            can fix the leak end-to-end — from the marketing page to the mobile
            app to the cloud it runs on.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <article
              key={s.name}
              className="group relative card-surface card-hover rounded-2xl p-6"
            >
              {s.isCore && (
                <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-ink-950 text-white text-[10px] uppercase tracking-widest font-semibold px-2 py-0.5">
                  Core
                </span>
              )}

              <div className="flex items-center gap-3">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink-950 text-white">
                  <span className={`ic ${s.anim}`}>
                    <s.icon size={20} strokeWidth={2.2} />
                  </span>
                </div>
                <div className="text-[11px] uppercase tracking-widest text-ink-600">
                  {s.tag}
                </div>
              </div>

              <h3 className="mt-4 font-display text-xl font-bold text-ink-950">
                {s.name}
              </h3>

              <p className="mt-2 text-sm text-ink-700 leading-relaxed">
                {s.description}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <li
                    key={d}
                    className="text-[11px] rounded-full bg-paper-50 border border-line px-2.5 py-1 text-ink-700"
                  >
                    {d}
                  </li>
                ))}
              </ul>

              <div className="mt-5 pt-4 border-t border-line flex items-center justify-between">
                <span className="text-[11px] uppercase tracking-widest text-ink-600">
                  Typical result
                </span>
                <span className="font-display font-bold text-flow-ink">
                  {s.result}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
