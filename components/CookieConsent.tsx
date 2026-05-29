"use client";

import { useState, useEffect } from "react";
import { Cookie, X } from "lucide-react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Check if consent has already been given or declined
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay showing the banner slightly for a premium, non-intrusive entry
      const timer = setTimeout(() => {
        setVisible(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 right-6 md:left-auto md:right-8 md:max-w-md z-50 animate-fade-up">
      <div className="card-surface rounded-2xl p-6 shadow-lift border border-line bg-white/95 backdrop-blur-md relative overflow-hidden">
        {/* Subtle top brand line */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-warm via-accent-sky to-accent-mint" />

        <div className="flex gap-4">
          <div className="h-10 w-10 flex-shrink-0 grid place-items-center rounded-xl bg-paper-100 border border-line text-ink-950">
            <Cookie size={20} className="text-accent-warm" />
          </div>

          <div className="flex-1">
            <div className="flex items-start justify-between">
              <h4 className="font-display text-sm font-bold text-ink-950">
                Cookie preferences
              </h4>
              <button
                onClick={handleDecline}
                className="text-ink-600 hover:text-ink-950 transition p-1 -mr-2 -mt-1"
                aria-label="Close"
              >
                <X size={16} />
              </button>
            </div>
            <p className="mt-2 text-xs text-ink-600 leading-relaxed">
              We use analytical and performance cookies (like Microsoft Clarity and
              Fiverr trackers) to refine your experience. Read our{" "}
              <a
                href="/cookies"
                className="underline underline-offset-2 font-semibold text-ink-950 hover:text-accent-warm transition"
              >
                Cookie Policy
              </a>{" "}
              to learn more.
            </p>

            <div className="mt-4 flex items-center justify-end gap-3">
              <button
                onClick={handleDecline}
                className="text-xs font-semibold text-ink-600 hover:text-ink-950 transition px-3 py-1.5 rounded-lg hover:bg-paper-50"
              >
                Decline
              </button>
              <button
                onClick={handleAccept}
                className="shine-btn text-xs font-semibold bg-ink-950 text-white hover:bg-ink-800 transition px-4 py-2 rounded-lg"
              >
                Accept all
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
