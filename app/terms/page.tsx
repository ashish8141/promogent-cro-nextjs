import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Scale, Mail, Globe, Clock, ShieldAlert } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions — PromoGent Solutions",
  description: "Read the commercial terms, service agreements, intellectual property guidelines, and governing rules of PromoGent Solutions PVT LTD.",
};

const sections = [
  { id: "1-acceptance", name: "1. Acceptance of Terms" },
  { id: "2-intellectual", name: "2. Intellectual Property" },
  { id: "3-responsibilities", name: "3. Client Responsibilities" },
  { id: "4-fees-billing", name: "4. Fees & Settlements" },
  { id: "5-disclaimer", name: "5. Disclaimers & Liability" },
  { id: "6-termination", name: "6. Agreement Termination" },
  { id: "7-governing-law", name: "7. Governing Law" },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-paper text-ink-950">
      <ScrollProgress />
      <AnnouncementBar />
      <Navbar />

      {/* Hero Header */}
      <section className="relative overflow-hidden border-b border-line bg-paper-50 py-20 lg:py-24">
        {/* Subtle grid backdrop */}
        <div className="bg-grid-light absolute inset-0 opacity-[0.4]" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 text-xs font-semibold text-ink-600 shadow-soft">
            <Scale size={14} className="text-accent-sky" />
            Legal Documentation
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-950">
            Terms of <span className="text-flow">Service.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-600 leading-relaxed">
            Please read these terms and conditions carefully before engaging PromoGent Solutions
            for CRO campaigns, website design, or cloud infrastructure setups.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-ink-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={14} />
              Last updated: May 20, 2026
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Globe size={14} />
              Jurisdiction: India & Global
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <ShieldAlert size={14} />
              Version: 1.1
            </span>
          </div>
        </div>
      </section>

      {/* Main Documentation Area */}
      <section className="mx-auto max-w-7xl px-6 lg:px-10 py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Table of Contents - Sidebar */}
          <aside className="lg:col-span-3">
            <div className="sticky top-24 border border-line bg-white/70 backdrop-blur rounded-2xl p-6 shadow-soft">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-ink-600 mb-4 pb-2 border-b border-line">
                On this page
              </h3>
              <nav className="space-y-3">
                {sections.map((s) => (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    className="block text-sm text-ink-600 hover:text-ink-950 font-medium transition-colors hover:translate-x-1 duration-200"
                  >
                    {s.name}
                  </a>
                ))}
              </nav>

              <div className="mt-8 pt-6 border-t border-line">
                <p className="text-xs text-ink-600 leading-relaxed">
                  Need a custom Master Service Agreement (MSA)?
                </p>
                <a
                  href="mailto:info@promogent.com"
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-ink-950 hover:text-accent-warm transition"
                >
                  <Mail size={12} />
                  info@promogent.com
                </a>
              </div>
            </div>
          </aside>

          {/* Policy Markdown-like content */}
          <article className="lg:col-span-9 space-y-16 text-sm sm:text-base text-ink-700 leading-relaxed">
            {/* Section 1 */}
            <section id="1-acceptance" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                1. Acceptance of Terms & Services
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  By accessing our diagnostic website, ordering a custom conversion audit, signing a service retainer, or booking a developer via our partner profiles (including Fiverr), you explicitly accept and agree to be bound by these Terms of Service.
                </p>
                <p>
                  These terms govern all custom deliverable pipelines managed by PromoGent Solutions PVT LTD. If you are accepting these terms on behalf of a corporate entity, you represent and warrant that you hold appropriate delegation privileges.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="2-intellectual" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                2. Intellectual Property & Ownership
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We build highly customized modern websites, conversion funnel components, and serverless AWS configurations. Ownership of assets operates as follows:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Pre-existing Assets:</b> PromoGent retains all rights, titles, and interests in our pre-existing proprietary codebase utilities, boilerplate designs, diagnostic tools, and internal analytical algorithms.
                  </li>
                  <li>
                    <b className="text-ink-950">Client Deliverables:</b> Upon complete clearance of all project invoices or corresponding platform escrow payments, PromoGent assigns all copyright ownership of unique custom graphics, custom code, copy layouts, and landing pages to the Client.
                  </li>
                  <li>
                    <b className="text-ink-950">Open Source Compliance:</b> Certain deliverables make use of open-source frameworks (Next.js, Tailwind CSS, WordPress cores, Flutter libraries). These are subject to their respective licenses (MIT, GPL) and are not covered under private IP transfers.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="3-responsibilities" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                3. Client Responsibilities & Access
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  To secure lightning-fast speed and conversion optimizations (such as A/B testing and SEO fixes), the Client agrees to provide:
                </p>
                <ul className="list-decimal pl-5 space-y-2 mt-3">
                  <li>
                    Timely access to performance accounts (e.g. Google Analytics 4, Shopify administrative consoles, WordPress admin levels, AWS sandboxes).
                  </li>
                  <li>
                    A verified staging/sandbox website environment. PromoGent strongly discourages implementing direct alterations to production servers without thorough backup validations.
                  </li>
                  <li>
                    Clear and active communication during feedback sprints to avoid pipeline delays.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="4-fees-billing" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                4. Fees, Retainers, & Settlement
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Engagements with our studio are billed either through direct bank settlements or through certified third-party service brokerages (such as Fiverr):
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">One-Time Audits:</b> Diagnostic audit fees must be cleared in full prior to kickoff.
                  </li>
                  <li>
                    <b className="text-ink-950">Ongoing CRO Retainers:</b> Scoped based on your digital domain traffic levels, invoiced monthly at the beginning of each billing cycle.
                  </li>
                  <li>
                    <b className="text-ink-950">Fiverr Orders:</b> Governed directly by Fiverr Escrow protocols. Deliveries must be formally reviewed and released in line with platform timelines.
                  </li>
                  <li>
                    <b className="text-ink-950">Taxation:</b> Invoices will include applicable GST for clients operating in India. Global clients are responsible for local compliance and withholding levies.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="5-disclaimer" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                5. Disclaimer of Warranties & Limitation of Liability
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  While our teams have delivered over 6,200+ top-rated projects, marketing outcomes and performance environments depend heavily on independent external factors.
                </p>
                <div className="bg-paper-50 border border-line rounded-2xl p-5 my-4">
                  <h4 className="font-display text-sm font-bold text-ink-950 mb-2">
                    Scope of Liability
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                    IN NO EVENT SHALL PROMOGENT SOLUTIONS PVT LTD BE LIABLE TO THE CLIENT FOR ANY INDIRECT, SPECIAL, OR CONSEQUENTIAL DAMAGES (INCLUDING LOSS OF REVENUES, PLATFORM UPTIME DROP, AND ALGORITHMIC SEO CRASHES) ARISING FROM SERVICES DELIVERED. OUR AGGREGATE LIABILITY UNDER ANY CONTRACT SPRINT SHALL NOT EXCEED THE ACTUAL FEES CLEARED BY THE CLIENT FOR THAT SPECIFIC SERVICE SPRINT.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="6-termination" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                6. Agreement Termination
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Either party may terminate an ongoing retainer agreement by serving a written 30-day notice.
                </p>
                <p>
                  In the event of cancellation, the Client will clear payments for all hours and milestones achieved up to the formal termination date. Upon complete settlement, we will hand over all ongoing code branches, staging assets, and configurations.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="7-governing-law" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                7. Governing Law & Arbitration
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  These Terms of Service are construed, interpreted, and governed under the laws of the Republic of India.
                </p>
                <p>
                  Any dispute, controversy, or claim arising out of or relating to this contract, including its formation or breach, shall be settled through mutual negotiation. If unresolved, the conflict will be referred to exclusive arbitration in Ahmedabad, Gujarat, India, in accordance with the Indian Arbitration and Conciliation Act.
                </p>
                <p className="mt-8 text-xs text-ink-600">
                  If you have questions or require modifications to a custom contract, please reach out to us at:
                  <br />
                  <span className="font-semibold text-ink-950">PromoGent Solutions PVT LTD Legal Officer</span>
                  <br />
                  Email: <a href="mailto:info@promogent.com" className="underline hover:text-accent-warm">info@promogent.com</a>
                </p>
              </div>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
