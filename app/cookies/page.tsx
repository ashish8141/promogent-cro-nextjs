"use client";

import { useState, useEffect } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { Cookie, Mail, Clock, Globe, Shield, RefreshCw, CheckCircle, AlertTriangle } from "lucide-react";

const sections = [
  { id: "1-what-are-cookies", name: "1. What Are Cookies" },
  { id: "2-how-we-use", name: "2. How We Use Them" },
  { id: "3-cookie-types", name: "3. Cookie Classifications" },
  { id: "4-third-party", name: "4. Third-Party Trackers" },
  { id: "5-manage-cookies", name: "5. Managing Preferences" },
];

export default function CookiesPage() {
  const [consentStatus, setConsentStatus] = useState<string>("not_set");
  const [statusUpdated, setStatusUpdated] = useState<boolean>(false);

  useEffect(() => {
    const val = localStorage.getItem("cookie-consent");
    if (val === "accepted") {
      setConsentStatus("accepted");
    } else if (val === "declined") {
      setConsentStatus("declined");
    } else {
      setConsentStatus("not_set");
    }
  }, []);

  const handleUpdate = (newStatus: string) => {
    if (newStatus === "clear") {
      localStorage.removeItem("cookie-consent");
      setConsentStatus("not_set");
    } else {
      localStorage.setItem("cookie-consent", newStatus);
      setConsentStatus(newStatus);
    }
    setStatusUpdated(true);
    setTimeout(() => {
      setStatusUpdated(false);
    }, 2000);
  };

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
            <Cookie size={14} className="text-accent-warm" />
            Legal Documentation
          </div>
          <h1 className="mt-4 font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-ink-950">
            Cookie <span className="text-flow">Policy.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-ink-600 leading-relaxed">
            PromoGent Solutions uses cookies and caching mechanisms to secure site speed,
            track performance diagnostics, and optimize user experience layouts.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-xs text-ink-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Clock size={14} />
              Last updated: May 20, 2026
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Globe size={14} />
              Version: 1.0
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
                  Have questions about cookie settings?
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
            {/* Interactive Preference Card */}
            <section className="bg-paper-50 border border-line rounded-2xl p-6 relative overflow-hidden shadow-soft">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-warm to-accent-sky" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <h3 className="font-display text-base font-bold text-ink-950 flex items-center gap-2">
                    <Shield size={18} className="text-accent-warm" />
                    Interactive Consent Control
                  </h3>
                  <p className="text-xs text-ink-600 mt-1">
                    Manage your analytical tracking preferences live on this browser cache.
                  </p>
                </div>

                <div className="flex items-center gap-2 self-start sm:self-center">
                  <span className="text-xs font-semibold text-ink-600">Consent Status:</span>
                  {consentStatus === "accepted" && (
                    <span className="inline-flex items-center gap-1 bg-accent-mint/20 border border-accent-mint text-ink-950 px-2 py-0.5 rounded-full text-xs font-bold">
                      <CheckCircle size={10} className="text-emerald-600" />
                      Accepted All
                    </span>
                  )}
                  {consentStatus === "declined" && (
                    <span className="inline-flex items-center gap-1 bg-ink-600/10 border border-ink-600/30 text-ink-600 px-2 py-0.5 rounded-full text-xs font-bold">
                      <AlertTriangle size={10} />
                      Declined
                    </span>
                  )}
                  {consentStatus === "not_set" && (
                    <span className="inline-flex items-center gap-1 bg-accent-lemon/35 border border-accent-lemon text-ink-950 px-2 py-0.5 rounded-full text-xs font-bold">
                      Not Configured
                    </span>
                  )}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  onClick={() => handleUpdate("accepted")}
                  className="shine-btn text-xs font-semibold bg-ink-950 text-white hover:bg-ink-800 transition px-4 py-2 rounded-xl"
                >
                  Accept All Cookies
                </button>
                <button
                  onClick={() => handleUpdate("declined")}
                  className="text-xs font-semibold border border-line bg-white text-ink-700 hover:bg-paper-50 transition px-4 py-2 rounded-xl"
                >
                  Decline Analytical Caching
                </button>
                <button
                  onClick={() => handleUpdate("clear")}
                  className="text-xs font-semibold text-ink-600 hover:text-ink-950 hover:bg-paper-100 transition px-3 py-2 rounded-xl flex items-center gap-1.5"
                >
                  <RefreshCw size={12} className={statusUpdated ? "animate-spin" : ""} />
                  Reset Preferences
                </button>
              </div>

              {statusUpdated && (
                <div className="mt-4 text-xs font-medium text-emerald-600 animate-pulse-soft">
                  Preferences updated and synchronized with local storage successfully!
                </div>
              )}
            </section>

            {/* Section 1 */}
            <section id="1-what-are-cookies" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                1. What Are Cookies
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  Cookies are tiny text identifiers saved on your local browser memory whenever you load pages. They allow digital platforms to retain parameters (like device width, chosen configurations, or referral indices) over consecutive visits to avoid redundant API transfers.
                </p>
                <p>
                  In addition to standard cookies, we may make use of modern local web storage keys (`localStorage`) which operate similarly but store files with longer retention schedules directly on your device.
                </p>
              </div>
            </section>

            {/* Section 2 */}
            <section id="2-how-we-use" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                2. How We Use Them
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  PromoGent does not use cookies to track personal lives or compile marketing directories for third-party brokers. We use caching parameters to:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Maintain Page Speeds:</b> Cache static assets and fonts (Google Fonts caching) to ensure page renders remain under 1.2s.
                  </li>
                  <li>
                    <b className="text-ink-950">Save Interactive Selections:</b> Retain parameters inputs in our diagnostic ROI Calculator and remember Cookie Consent choices to prevent duplicate popups.
                  </li>
                  <li>
                    <b className="text-ink-950">Analyze Visual Paths:</b> Measure engagement hotspots, scroll distributions, and layout errors using secure heatmap trackers.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3 */}
            <section id="3-cookie-types" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                3. Cookie Classifications
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  The cookies utilized by our domain generally fall under the following structural brackets:
                </p>
                <div className="grid sm:grid-cols-2 gap-4 mt-4">
                  <div className="border border-line rounded-xl p-4 bg-white hover:border-ink-950 transition">
                    <h5 className="font-semibold text-ink-950 text-sm">Essential & Functional</h5>
                    <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                      Absolutely critical to run basic routing, prevent visual layout shifting, and handle user choices (like declining analytical trackers). These do not require opt-in consents.
                    </p>
                  </div>
                  <div className="border border-line rounded-xl p-4 bg-white hover:border-ink-950 transition">
                    <h5 className="font-semibold text-ink-950 text-sm">Performance & Analytics</h5>
                    <p className="text-xs text-ink-600 mt-1.5 leading-relaxed">
                      Observe general click aggregates, screen sizes, and country origins. We anonymize IP logs before caching them. You can opt-out of these using the toggles above.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section id="4-third-party" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                4. Third-Party Trackers & Integrations
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  We deploy specific, verified third-party utilities that may save cookies to optimize analytics and support our client acquisition systems:
                </p>
                <ul className="list-disc pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Microsoft Clarity & GA4:</b> Collects real-time scroll maps and UX friction parameters. Anonymized at capture.
                  </li>
                  <li>
                    <b className="text-ink-950">Fiverr Widgets:</b> Supports secure referral pathways and counts conversions for customers arriving from our top-rated platform profile.
                  </li>
                  <li>
                    <b className="text-ink-950">Font Delivery (Google Fonts):</b> Uses browser fonts caching. No identifier logging is conducted.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 5 */}
            <section id="5-manage-cookies" className="scroll-mt-24">
              <h2 className="font-display text-2xl font-bold text-ink-950 tracking-tight pb-3 border-b border-line">
                5. Managing Preferences & Settings
              </h2>
              <div className="mt-5 space-y-4">
                <p>
                  You are in absolute control of your data footprint. You can edit your settings at any time:
                </p>
                <ol className="list-decimal pl-5 space-y-2 mt-3">
                  <li>
                    <b className="text-ink-950">Using Our Live Portal:</b> Click the "Decline" or "Reset Preferences" button in the Interactive Consent Control card above.
                  </li>
                  <li>
                    <b className="text-ink-950">Using Browser Configurations:</b> You can instruct your browser to discard or reject cookies globally. Note that clearing cookies will reset your saved calculator numbers and repeat the initial consent prompt.
                  </li>
                </ol>
                <p className="mt-6">
                  For further clarification, read our complete privacy policy at{" "}
                  <a href="/privacy" className="font-semibold text-ink-950 underline hover:text-accent-warm transition">
                    Privacy Policy
                  </a>
                  , or email us at{" "}
                  <a href="mailto:info@promogent.com" className="font-semibold text-ink-950 underline hover:text-accent-warm transition">
                    info@promogent.com
                  </a>
                  .
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
