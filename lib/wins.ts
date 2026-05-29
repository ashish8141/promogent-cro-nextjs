/**
 * Shared case study data.
 *
 * Imported by:
 *   - components/Wins.tsx       (homepage section, 6 cards)
 *   - app/wins/page.tsx         (index page)
 *   - app/wins/[slug]/page.tsx  (detail pages)
 *
 * To add a new case study: append an entry below. The detail page is
 * generated automatically via generateStaticParams.
 */

export type WinTag = "CRO" | "Cloud" | "Web" | "Mobile";
export type WinSub = "eCom" | "SaaS" | "Health" | "Coffee";

export interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
}

export interface TimelineStep {
  week: string;
  title: string;
  body: string;
}

export interface Win {
  slug: string;
  brand: string;
  cat: string;
  tag: WinTag;
  sub?: WinSub;
  headline: string;
  detail: string;

  // Detail-page fields
  industry: string;
  region: string;
  engagement: string;
  duration: string;
  stack: string[];
  services: string[];
  heroGradient: string;
  accent: string;

  summary: string;
  problem: string;
  approach: string[];

  metrics: Metric[];
  timeline: TimelineStep[];
  deliverables: string[];

  testimonial: {
    quote: string;
    author: string;
    role: string;
  };
}

export const wins: Win[] = [
  {
    slug: "glow-and-co",
    brand: "Glow & Co.",
    cat: "Shopify · DTC",
    tag: "CRO",
    sub: "eCom",
    headline: "Conversion 1.6% → 4.2%",
    detail:
      "Hero rebuild, PDP A/B testing, checkout shortened to 2 steps. Same traffic, 2.6× revenue in 6 weeks.",
    industry: "Skincare · DTC",
    region: "US + UK",
    engagement: "Fixed-scope CRO sprint",
    duration: "6 weeks",
    stack: ["Shopify", "Liquid", "Klaviyo", "GA4", "Hotjar"],
    services: ["CRO audit", "A/B testing", "UX redesign", "Checkout rebuild"],
    heroGradient: "linear-gradient(135deg,#ffe27a 0%,#ff7a45 50%,#ff7eb5 100%)",
    accent: "#ff7a45",
    summary:
      "Glow & Co. was paying for traffic that bounced. We rebuilt the hero, ran 11 A/B tests across the PDP, and collapsed checkout to two steps — taking conversion from 1.6% to 4.2% on the same ad spend.",
    problem:
      "Glow & Co. had spent two years optimising acquisition and almost nothing on the on-site funnel. Paid CAC was creeping up every quarter, the PDP had four competing CTAs, and the checkout asked for an account before payment. Bounce on mobile was 71% and add-to-cart from PDP was a flat 3.4% — even on returning visitors. The founders were considering pausing Meta ads entirely.",
    approach: [
      "Ran a 5-day teardown: session replays, funnel maths, heatmaps, and a heuristic review of the top 6 PDPs. Found 14 leaks, ranked by expected revenue impact and dev cost.",
      "Rebuilt the hero around a single value-prop and a one-shot CTA. Killed the carousel — replaced it with a static lifestyle shot and a benefits strip above the fold.",
      "Ran 11 A/B tests on the PDP across 6 weeks: review placement, sticky ATC, size selector, social proof copy, urgency framing, and bundle pricing. Shipped only winners (statistical significance ≥95%).",
      "Collapsed checkout from 4 steps to 2 — guest by default, Shop Pay first, address autofill, and a single shipping rate above the free-ship threshold.",
      "Wired GA4 + server-side events so Meta and Klaviyo finally saw the same conversion numbers.",
    ],
    metrics: [
      { label: "Conversion rate", before: "1.6%", after: "4.2%", delta: "+162%" },
      { label: "Revenue / visitor", before: "$1.36", after: "$3.57", delta: "+162%" },
      { label: "Mobile bounce", before: "71%", after: "44%", delta: "−27pp" },
      { label: "Checkout completion", before: "38%", after: "71%", delta: "+87%" },
    ],
    timeline: [
      { week: "Week 1", title: "Teardown", body: "Funnel audit, 14 leaks ranked, sprint plan signed off." },
      { week: "Week 2", title: "Hero + nav", body: "Hero rebuild and IA cleanup shipped to 50% of traffic." },
      { week: "Week 3-4", title: "PDP testing", body: "11 A/B tests live in parallel. 6 winners shipped." },
      { week: "Week 5", title: "Checkout", body: "2-step checkout, Shop Pay default, address autofill." },
      { week: "Week 6", title: "Lift in the bank", body: "Conversion stabilised at 4.2%. Same ad spend, 2.6× revenue." },
    ],
    deliverables: [
      "30-page CRO audit (Loom + PDF)",
      "Hero, PDP and checkout rebuild",
      "11 A/B test reports with raw data",
      "GA4 + server-side tracking",
      "30-day post-launch monitoring",
    ],
    testimonial: {
      quote:
        "We thought we needed more traffic. Turns out we needed to stop leaking the traffic we had. PromoGent paid for itself in 18 days.",
      author: "Riya Mahajan",
      role: "Co-founder, Glow & Co.",
    },
  },
  {
    slug: "northstack",
    brand: "NorthStack",
    cat: "AWS · SaaS",
    tag: "Cloud",
    sub: "SaaS",
    headline: "−38% cloud spend",
    detail:
      "Multi-account landing zone, right-sized EKS, FinOps guardrails. Zero downtime migration.",
    industry: "B2B SaaS · Logistics",
    region: "EU + US",
    engagement: "Cloud adoption + FinOps",
    duration: "11 weeks",
    stack: ["AWS", "Terraform", "EKS", "RDS", "CloudWatch", "Datadog"],
    services: ["Landing zone", "Migration", "FinOps", "IaC", "Observability"],
    heroGradient: "linear-gradient(135deg,#02152A 0%,#03162D 50%,#6ea8ff 100%)",
    accent: "#6ea8ff",
    summary:
      "NorthStack's AWS bill was growing faster than ARR. We stood up a multi-account landing zone, right-sized everything, and put FinOps guardrails in place — cutting spend 38% with zero downtime.",
    problem:
      "NorthStack ran everything in a single AWS account with no tagging, oversized EKS nodes, and three idle RDS replicas. The bill had grown 4× in 18 months while revenue grew 1.8×. There were no budgets, no anomaly alerts, and SOC 2 auditors had flagged the lack of account separation. Two engineers were spending ~30% of their week on infra firefighting.",
    approach: [
      "Designed a 4-account landing zone (prod / staging / shared-services / sandbox) using AWS Control Tower and Terraform modules.",
      "Right-sized EKS node groups based on 90 days of CloudWatch + Datadog data. Moved batch workloads to Spot, dev to t-family on schedule.",
      "Decommissioned two of three RDS replicas, moved analytics reads to a read-only replica with smaller instance class, enabled Performance Insights.",
      "Set up Cost Anomaly Detection, per-team budgets, and a weekly FinOps digest that emails engineering leads. Every resource is now tagged owner+env+service.",
      "Migrated 47 services account-by-account over 6 weekends. Zero customer-visible downtime; one 11-minute internal maintenance window.",
    ],
    metrics: [
      { label: "Monthly AWS spend", before: "$148k", after: "$92k", delta: "−38%" },
      { label: "Compute / customer", before: "$2.40", after: "$1.10", delta: "−54%" },
      { label: "Untagged resources", before: "62%", after: "0%", delta: "−62pp" },
      { label: "Infra incidents / mo", before: "9", after: "2", delta: "−78%" },
    ],
    timeline: [
      { week: "Week 1-2", title: "Discovery", body: "Cost + architecture audit. SOC 2 gap analysis. Roadmap signed off." },
      { week: "Week 3-4", title: "Landing zone", body: "Control Tower, 4 accounts, Terraform modules, SSO." },
      { week: "Week 5-8", title: "Migration", body: "47 services moved account-by-account. Zero customer downtime." },
      { week: "Week 9-10", title: "Right-sizing", body: "EKS, RDS, networking. Spot for batch. Reserved Instances re-purchased." },
      { week: "Week 11", title: "FinOps handover", body: "Budgets, anomaly alerts, weekly digest, runbook." },
    ],
    deliverables: [
      "Terraform-managed landing zone (4 accounts)",
      "Migration runbook + post-mortem",
      "FinOps dashboard + weekly digest",
      "Datadog observability rollout",
      "SOC 2 evidence pack for auditors",
    ],
    testimonial: {
      quote:
        "They cut our bill 38% and gave us a cloud setup the auditors actually liked. Two of our engineers got their weeks back.",
      author: "Arjun Pillai",
      role: "CTO, NorthStack",
    },
  },
  {
    slug: "brewly",
    brand: "Brewly",
    cat: "WordPress · D2C coffee",
    tag: "Web",
    sub: "Coffee",
    headline: "+311% CTA CTR",
    detail:
      "Hero rewrite, copy testing and Core Web Vitals fixes. LCP from 4.1s to 1.2s.",
    industry: "D2C · Specialty coffee",
    region: "Australia + NZ",
    engagement: "Web rebuild + CRO",
    duration: "5 weeks",
    stack: ["WordPress", "WooCommerce", "PHP", "Cloudflare", "Hotjar"],
    services: ["Performance", "Copy testing", "Headless WP", "Core Web Vitals"],
    heroGradient: "linear-gradient(135deg,#554226 0%,#ff7a45 60%,#ffe27a 100%)",
    accent: "#ff7a45",
    summary:
      "Brewly's site looked beautiful and loaded like a brochure on a 56k modem. We trimmed it down, rewrote the hero, and ran four copy tests — CTA click-through went up 311% and LCP went under 1.2s.",
    problem:
      "Brewly had a gorgeous photography-heavy WordPress build that scored 28 on mobile Lighthouse. LCP was 4.1s, CLS was 0.31, and the hero CTA — \"Discover our story\" — was clicked by 0.6% of visitors. Most users never saw the subscription offer because they bounced first. Google's Core Web Vitals report was flashing red, and organic traffic had been sliding for two quarters.",
    approach: [
      "Audited the homepage and top 4 product pages with Lighthouse, WebPageTest, and Hotjar. Identified 27 perf wins.",
      "Replaced hero JPGs with responsive AVIF + LQIP placeholders. Lazy-loaded everything below the fold. Cut JS by 62%.",
      "Moved WordPress to headless via WP REST API + a static front-end fronted by Cloudflare. TTFB dropped from 480ms to 60ms.",
      "Ran 4 hero copy tests over 3 weeks: outcome-led vs. story-led vs. urgency-led vs. price-led. Outcome-led won by 4×.",
      "Rebuilt the subscription PDP with single-question quiz flow → recommended bag → one-click subscribe.",
    ],
    metrics: [
      { label: "Hero CTA CTR", before: "0.6%", after: "2.47%", delta: "+311%" },
      { label: "LCP (mobile)", before: "4.1s", after: "1.2s", delta: "−71%" },
      { label: "Lighthouse perf", before: "28", after: "96", delta: "+68pts" },
      { label: "Subscription starts / wk", before: "31", after: "118", delta: "+281%" },
    ],
    timeline: [
      { week: "Week 1", title: "Perf audit", body: "27 wins ranked. Headless plan signed off." },
      { week: "Week 2", title: "Asset pipeline", body: "AVIF + lazy load + JS budget. LCP under 2s." },
      { week: "Week 3", title: "Headless cutover", body: "Cloudflare in front. TTFB to 60ms." },
      { week: "Week 4", title: "Copy testing", body: "4 hero tests live. Outcome-led wins 4×." },
      { week: "Week 5", title: "Subscription flow", body: "Quiz → recommend → subscribe. Live." },
    ],
    deliverables: [
      "Headless WordPress + Cloudflare stack",
      "Asset pipeline (AVIF, LQIP, responsive)",
      "4 A/B test reports (hero copy)",
      "Subscription quiz + PDP rebuild",
      "Core Web Vitals monitoring dashboard",
    ],
    testimonial: {
      quote:
        "Our site finally feels as fast as our espresso. Subscription signups tripled and Google stopped yelling at us.",
      author: "Mark Halliday",
      role: "Founder, Brewly",
    },
  },
  {
    slug: "plateup",
    brand: "PlateUp",
    cat: "React Native · iOS+Android",
    tag: "Mobile",
    headline: "4.8★ rating, 220k installs",
    detail:
      "One codebase, two stores. Crash-free sessions >99.6%. OTA updates on day-zero.",
    industry: "Consumer · Food discovery",
    region: "India + SEA",
    engagement: "Greenfield mobile build",
    duration: "14 weeks",
    stack: ["React Native", "Expo", "TypeScript", "Supabase", "Sentry", "EAS"],
    services: ["Mobile dev", "CI/CD", "OTA updates", "App store launch"],
    heroGradient: "linear-gradient(135deg,#9be7c4 0%,#6ea8ff 60%,#a78bfa 100%)",
    accent: "#9be7c4",
    summary:
      "PlateUp wanted to ship iOS and Android without two teams. We built a single React Native codebase, set up OTA + CI/CD on day one, and launched to 220k installs and a 4.8★ rating in three months.",
    problem:
      "PlateUp had a Figma file, a 12-week investor deadline, and no mobile engineers. Their previous attempt — two native teams — had burned 6 months and shipped nothing. They needed to be live on both stores with social login, map discovery, offline mode, and analytics. And they needed to ship hotfixes without store-review delays.",
    approach: [
      "Picked Expo + EAS for managed builds, OTA updates, and zero-config CI. Set up TypeScript-strict with shared eslint config.",
      "Built 38 screens behind a shared design system (NativeWind + custom primitives). Single component layer across iOS and Android.",
      "Map discovery via Mapbox + Supabase PostGIS. Offline mode with a write-behind queue so users in spotty 4G still get every feature.",
      "Wired Sentry from day one — every release ships with source-maps so we can debug production crashes to the line.",
      "Set up EAS Update channels for staging and prod. Hotfixes ship in 4 minutes, not 4 days.",
    ],
    metrics: [
      { label: "Install base (90 days)", before: "0", after: "220k", delta: "—" },
      { label: "Avg rating", before: "—", after: "4.8★", delta: "iOS + Android" },
      { label: "Crash-free sessions", before: "—", after: "99.62%", delta: "Sentry verified" },
      { label: "Hotfix ship time", before: "4 days", after: "4 min", delta: "OTA" },
    ],
    timeline: [
      { week: "Week 1-2", title: "Foundations", body: "Expo, TypeScript, EAS, Sentry, design system." },
      { week: "Week 3-8", title: "Core build", body: "Auth, feed, map discovery, offline queue." },
      { week: "Week 9-11", title: "Polish", body: "Animations, empty states, accessibility, perf." },
      { week: "Week 12", title: "Store submission", body: "Both stores submitted. Approved without rejection." },
      { week: "Week 13-14", title: "Launch + iterate", body: "Public launch. 4 OTA fixes shipped in week one." },
    ],
    deliverables: [
      "iOS + Android apps (single codebase)",
      "Design system (NativeWind + primitives)",
      "EAS Update + CI/CD pipelines",
      "Sentry + analytics integration",
      "App store assets + submission",
    ],
    testimonial: {
      quote:
        "Two store launches, one team, zero rejections. Our hotfixes ship before competitors finish writing them.",
      author: "Priya Sundaram",
      role: "Head of Product, PlateUp",
    },
  },
  {
    slug: "lumen-health",
    brand: "Lumen Health",
    cat: "Next.js · B2B SaaS",
    tag: "Web",
    sub: "Health",
    headline: "CAC payback 41 → 19 days",
    detail:
      "New hero, pricing page rewrite, intent-based routing. CAC payback halved in one quarter.",
    industry: "B2B SaaS · Healthtech",
    region: "US",
    engagement: "Marketing site rebuild",
    duration: "8 weeks",
    stack: ["Next.js 14", "TypeScript", "Tailwind", "Vercel", "Segment", "HubSpot"],
    services: ["Positioning", "Site rebuild", "Pricing design", "Conversion routing"],
    heroGradient: "linear-gradient(135deg,#6ea8ff 0%,#9be7c4 60%,#ffe27a 100%)",
    accent: "#6ea8ff",
    summary:
      "Lumen Health was generating leads but burning cash to close them. We rewrote the positioning, rebuilt the marketing site on Next.js 14, and routed visitors by intent — CAC payback dropped from 41 days to 19.",
    problem:
      "Lumen Health's site treated every visitor identically — clinicians, hospital admins, and curious investors all landed on the same hero. Demo-request rate was 1.1%, but the SDR team was burning hours on bad-fit leads. CAC payback sat at 41 days against a 30-day target. The marketing team had been A/B testing button colours for six months with no movement.",
    approach: [
      "Ran 12 customer interviews and re-segmented the audience into three jobs-to-be-done. Rewrote messaging for each.",
      "Rebuilt the site on Next.js 14 App Router with three distinct landing experiences routed by traffic source and UTM.",
      "Redesigned the pricing page around outcomes rather than feature checklists. Added an ROI calculator that emails the result.",
      "Wired Segment + HubSpot so every form fill knows the visitor's journey. SDRs see context before the first call.",
      "Built a self-serve demo (interactive product tour) for top-of-funnel and an SDR-routed demo for high-intent.",
    ],
    metrics: [
      { label: "CAC payback", before: "41d", after: "19d", delta: "−54%" },
      { label: "Demo request rate", before: "1.1%", after: "3.6%", delta: "+227%" },
      { label: "SQL → opportunity", before: "22%", after: "44%", delta: "+22pp" },
      { label: "Page LCP", before: "3.2s", after: "0.9s", delta: "−72%" },
    ],
    timeline: [
      { week: "Week 1-2", title: "Research", body: "12 customer interviews, JTBD framework, positioning v1." },
      { week: "Week 3-5", title: "Site rebuild", body: "Next.js 14, three landing experiences, design system." },
      { week: "Week 6", title: "Pricing + ROI", body: "Outcome-led pricing, interactive ROI calculator." },
      { week: "Week 7", title: "Routing + analytics", body: "Segment + HubSpot. SDR context handoff." },
      { week: "Week 8", title: "Launch + measure", body: "Cutover. CAC payback drops within 3 weeks." },
    ],
    deliverables: [
      "Positioning + messaging doc",
      "Next.js 14 marketing site",
      "ROI calculator + outcome-led pricing",
      "Segment + HubSpot integration",
      "Self-serve demo experience",
    ],
    testimonial: {
      quote:
        "Our SDRs stopped complaining and our CFO stopped grimacing. Payback halved in one quarter — that's the only metric that mattered.",
      author: "Jon Reilly",
      role: "VP Marketing, Lumen Health",
    },
  },
  {
    slug: "kartkart",
    brand: "KartKart",
    cat: "Shopify · DTC",
    tag: "CRO",
    sub: "eCom",
    headline: "AOV $45 → $62",
    detail:
      "Cross-sells, free-ship threshold, bundle PDP. AOV up 38% with the same traffic mix.",
    industry: "DTC · Home & kitchen",
    region: "US + Canada",
    engagement: "AOV uplift sprint",
    duration: "4 weeks",
    stack: ["Shopify", "Liquid", "Rebuy", "Klaviyo", "Triple Whale"],
    services: ["Cross-sell design", "Bundle PDPs", "Cart logic", "Email flows"],
    heroGradient: "linear-gradient(135deg,#ff7a45 0%,#ffe27a 50%,#9be7c4 100%)",
    accent: "#ff7a45",
    summary:
      "KartKart had healthy traffic and a low AOV that was eating their margin. In four weeks we redesigned the cart, launched bundle PDPs, and set a smart free-ship threshold — pushing AOV from $45 to $62.",
    problem:
      "KartKart sold home goods with a $14 fulfilment cost per order. AOV had drifted down to $45 as discount-driven traffic grew. They were profitable on subscription customers but losing money on first orders. Cross-sells existed but were dumped at the bottom of the cart where 80% of users never scrolled. Email flows pushed single-product offers, not baskets.",
    approach: [
      "Modelled margin against AOV. Identified $58 as the break-even threshold and $62 as the target for healthy margin.",
      "Rebuilt the cart with sticky cross-sell shelf above the fold, plus a progress bar to the free-ship threshold at $65.",
      "Launched 4 bundle PDPs (kitchen starter, bath set, etc.) priced 18% below sum-of-parts.",
      "Reworked Klaviyo flows to recommend bundles, not single SKUs. Browse-abandon now sends the bundle the user almost completed.",
      "Triple Whale integration so the team sees AOV by channel daily and can pause underperforming creatives fast.",
    ],
    metrics: [
      { label: "AOV", before: "$45", after: "$62", delta: "+38%" },
      { label: "Items per order", before: "1.6", after: "2.4", delta: "+50%" },
      { label: "Free-ship attach", before: "12%", after: "47%", delta: "+35pp" },
      { label: "First-order margin", before: "−$2", after: "+$11", delta: "Flipped to profit" },
    ],
    timeline: [
      { week: "Week 1", title: "Margin model", body: "Break-even at $58, target $62. Sprint backlog." },
      { week: "Week 2", title: "Cart rebuild", body: "Sticky cross-sells, progress bar, free-ship threshold." },
      { week: "Week 3", title: "Bundle PDPs", body: "4 bundles live. Klaviyo flows rewritten." },
      { week: "Week 4", title: "Measurement", body: "Triple Whale, daily AOV dashboard, win locked in." },
    ],
    deliverables: [
      "Cart rebuild (Liquid + Rebuy)",
      "4 bundle PDPs",
      "Klaviyo flow rewrite",
      "Triple Whale integration",
      "Margin + AOV model (Sheets)",
    ],
    testimonial: {
      quote:
        "First orders went from a loss leader to a profit centre in a month. We finally stopped fearing scale.",
      author: "Vikas Ramachandran",
      role: "Founder, KartKart",
    },
  },
];

export function getWin(slug: string): Win | undefined {
  return wins.find((w) => w.slug === slug);
}

export function getAdjacentWins(slug: string): { prev: Win; next: Win } | null {
  const idx = wins.findIndex((w) => w.slug === slug);
  if (idx === -1) return null;
  const prev = wins[(idx - 1 + wins.length) % wins.length];
  const next = wins[(idx + 1) % wins.length];
  return { prev, next };
}

export const winFilters = ["All", "CRO", "Cloud", "Web", "Mobile", "eCom"] as const;
export type WinFilter = (typeof winFilters)[number];
