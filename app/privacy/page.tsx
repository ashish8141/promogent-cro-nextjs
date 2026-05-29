import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { ShieldCheck, Mail, Globe, Clock, FileText } from "lucide-react";

export const metadata = {
  title: "Privacy Policy — PromoGent Solutions",
  description: "Learn how PromoGent Solutions PVT LTD collects, protects, and utilizes client data in accordance with GDPR, CCPA, and industry standards.",
};

const sections = [
  { id: "1-overview", name: "1. Overview & Scope" },
  { id: "2-data-collect", name: "2. Data We Collect" },
  { id: "3-how-we-use", name: "3. How We Use Data" },
  { id: "4-retention", name: "4. Data Retention" },
  { id: "5-third-party", name: "5. Third-Party Sharing" },
  { id: "6-gdpr-ccpa", name: "6. GDPR & CCPA Rights" },
  { id: "7-updates-contact", name: "7. Updates & Contact" },
];

export default function PrivacyPage() {
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
            <ShieldCheck size={14} className="text-accent-warm" />
            Legal Documentation
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-950">
            Privacy <span className="text-flow">Policy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-600 leading-relaxed">
            At PromoGent Solutions, we prioritize transparency and privacy. This policy
            outlines how we process personal data when you visit our website, engage our
            services, or collaborate with us.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-ink-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={14} />
              Last updated: May 20, 2026
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Globe size={14} />
              Applicable: Globally
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <FileText size={14} />
              Version: 1.2
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
                  Have questions about our privacy practices?
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
            <section id="1-overview" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                1. Overview & Scope
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  PromoGent Solutions PVT LTD ("we," "our," or "PromoGent") is a digital studio specializing in Conversion Rate Optimization (CRO), traffic acquisition, and performance-tuned web and mobile applications. We operate as the Data Controller under European Union (GDPR) and Indian information technology guidelines.
                </p>
                <p>
                  This Privacy Policy applies to our website (
                  <a href="/" className="font-medium text-ink-950 underline hover:text-accent-warm transition">
                    promogent.com
                  </a>
                  ) and all digital services, diagnostic calculators, audits, and communication channels managed by our team. By using our platform, you consent to the processing terms highlighted here.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="2-data-collect" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                2. Data We Collect
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  To deliver premium digital engineering, audits, and performance tracking, we collect both direct identifiers and implicit technological markers:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Direct Inquiries:</b> When you fill out contact sheets, sign up for a free CRO audit, or use our ROI calculator, we collect your name, email, company domain, target revenues, and communication history.
                  </li>
                  <li>
                    <b className="text-ink-950">Usage and Analytical Metadata:</b> We log IP addresses, geographic locales (country/city level), browser signatures, referring channels, specific page paths viewed, click pathways, and site interactions (such as screen recordings and heatmaps).
                  </li>
                  <li>
                    <b className="text-ink-950">Third-Party Platform Traces:</b> If you navigate to or engage our services via verified partner systems (e.g., our top-rated Fiverr agency services), we may receive transaction and communication metadata in accordance with their privacy policies.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="3-how-we-use" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                3. How We Use Your Data
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Your information is processed in line with legal foundations (contract performance, legitimate interests, or explicit consent). We process details to:
                </p>
                <ul className="list-decimal pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Compile Audits & Diagnostics:</b> Calculate and generate the custom ROI leakage audits and conversion roadmap reports.
                  </li>
                  <li>
                    <b className="text-ink-950">Enhance Site Performance:</b> Monitor real-time performance diagnostics, Core Web Vitals, screen responsiveness, and UI layouts to ensure seamless speeds and transitions.
                  </li>
                  <li>
                    <b className="text-ink-950">Secure Transactions:</b> Support client boarding, NDAs, Master Service Agreements (MSA), and secure billing operations.
                  </li>
                  <li>
                    <b className="text-ink-950">Marketing Communications:</b> Deliver rare, premium insights on CRO trends, engineering stacks, and cloud efficiency (only if you opt-in; you can unsubscribe instantly at any time).
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4 */}
            <section id="4-retention" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                4. Data Retention & Security
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We keep personal identifiers only as long as necessary to complete your audit pipeline, service agreement, or satisfy statutory compliance (typically up to 5 years from the last communication). Analytical metadata (non-identifying) may be retained longer to benchmark system improvements.
                </p>
                <div className="bg-paper-50 border border-line rounded-2xl p-5 my-4">
                  <h4 className="font-display text-sm font-bold text-ink-950 mb-2">
                    Security Architecture
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 leading-relaxed">
                    All client interactions and forms are protected with industry-standard TLS encryption. Customer data resides in access-controlled environments under secure AWS cloud infrastructure. We conduct periodic audits of access logs to prevent data leaks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="5-third-party" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                5. Third-Party Sharing & Transfers
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We never lease, sell, or rent your database entries. Your data is shared exclusively with critical SaaS sub-processors necessary to run the website and fulfill our services:
                </p>
                <div className="overflow-x-auto mt-4">
                  <table className="min-w-full divide-y divide-line border border-line rounded-xl overflow-hidden">
                    <thead className="bg-paper-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-ink-950">
                          Partner / Provider
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-ink-950">
                          Purpose
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-ink-950">
                          Data Scope
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-line bg-white">
                      <tr>
                        <td className="px-4 py-3 text-xs font-semibold text-ink-950">
                          Amazon Web Services (AWS)
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Secure Cloud Hosting & Infrastructure
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Encrypted application databases & logs
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-xs font-semibold text-ink-950">
                          Microsoft Clarity / GA4
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Interaction heatmaps & analytics
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Anonymized click events & browsing metrics
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-xs font-semibold text-ink-950">
                          Fiverr International
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Service Booking & Escrow Escort
                        </td>
                        <td className="px-4 py-3 text-xs text-ink-600">
                          Contractual order metadata
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section id="6-gdpr-ccpa" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                6. GDPR & CCPA Rights
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Regardless of your home territory, we respect global privacy frameworks. You have the following operational rights:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-line rounded-xl p-4 bg-white hover:border-ink-950 transition">
                    <h5 className="font-semibold text-ink-950 text-sm">EU / UK Rights (GDPR)</h5>
                    <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                      Request access, deletion, rectification, or porting of your personal data. You may object to processing or withdraw consent at any point without impacting legality prior to withdrawal.
                    </p>
                  </div>
                  <div className="border border-line rounded-xl p-4 bg-white hover:border-ink-950 transition">
                    <h5 className="font-semibold text-ink-950 text-sm">California Rights (CCPA)</h5>
                    <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                      Know what details we gather, opt-out of data sale (which we do not engage in), and receive equal pricing. Email us with "CCPA Request" in the subject.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 7 */}
            <section id="7-updates-contact" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                7. Updates & Contact Information
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We may tweak this policy from time to time to accommodate fresh performance tools or legal mandates. We will announce significant modifications by updating the "Last Updated" stamp above.
                </p>
                <p>
                  For any requests regarding your rights, data erasure, or clarifications, contact our designated privacy compliance officer at:
                </p>
                <div className="mt-6 border border-line rounded-2xl p-6 bg-paper-50 max-w-md">
                  <h4 className="font-display text-sm font-bold text-ink-950">
                    PromoGent Solutions PVT LTD
                  </h4>
                  <p className="text-xs sm:text-sm text-ink-600 mt-1.5">
                    Data Protection & Legal Team
                  </p>
                  <p className="text-xs sm:text-sm text-ink-600">
                    Shilp Aaron, B-207, Sindhu Bhavan Marg, opposite Armieda Complex, Bodakdev, Ahmedabad, Gujarat 380059
                  </p>
                  <a
                    href="mailto:info@promogent.com"
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-950 hover:text-accent-warm transition"
                  >
                    <Mail size={14} />
                    info@promogent.com
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
}
