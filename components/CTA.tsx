"use client";

import { useState } from "react";
import { ArrowRight, Mail, CheckCircle, AlertCircle } from "lucide-react";

export default function CTA() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
      } else {
        setErrorMessage(data.error || "An error occurred while sending your request.");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMessage(err.message || "A network error occurred. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 lg:py-32 bg-ink-950 text-white overflow-hidden"
    >
      <div aria-hidden="true" className="absolute inset-0 bg-grid-dark opacity-50" />
      <div
        aria-hidden="true"
        className="absolute -top-32 -right-32 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(255,226,122,.30), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(110,168,255,.25), transparent 60%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs text-white/80">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              Free · No-obligation
            </div>
            <h2 className="mt-4 font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
              Find out exactly where your revenue is{" "}
              <span className="underline decoration-accent-warm decoration-[6px] underline-offset-[6px]">
                leaking
              </span>
              .
            </h2>
            <p className="mt-4 text-white/70 text-lg max-w-xl">
              Book a 30-minute strategy call. We&apos;ll screen-share your
              analytics, point out the three biggest leaks, and tell you
              whether we&apos;re a fit. No pitch deck.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="mailto:info@promogent.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-7 py-3.5 text-base font-semibold hover:bg-paper-100 transition"
              >
                Book free audit
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:info@promogent.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition"
              >
                <Mail size={18} />
                info@promogent.com
              </a>
            </div>
          </div>

          <div className="relative">
            {status === "success" ? (
              <div className="rounded-2xl bg-white text-ink-950 p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-lift min-h-[380px] transition-all duration-300 animate-fade-up">
                <div className="h-16 w-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 shadow-sm animate-bounce">
                  <CheckCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950">
                  Audit Request Received!
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed max-w-sm">
                  Thank you! We&apos;ve received your request. Our conversion team will screen-share your website audit and reply to you at your work email within 1 business day.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-2 inline-flex items-center gap-2 rounded-xl bg-ink-950 text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink-800 transition"
                >
                  Submit another request
                </button>
              </div>
            ) : status === "error" ? (
              <div className="rounded-2xl bg-white text-ink-950 p-8 flex flex-col items-center justify-center text-center space-y-4 shadow-lift min-h-[380px] transition-all duration-300 animate-fade-up">
                <div className="h-16 w-16 bg-rose-50 rounded-full flex items-center justify-center text-rose-500 shadow-sm">
                  <AlertCircle size={36} />
                </div>
                <h3 className="font-display text-2xl font-bold tracking-tight text-ink-950">
                  Submission Failed
                </h3>
                <p className="text-ink-600 text-sm leading-relaxed max-w-sm">
                  {errorMessage || "We ran into an issue submitting your audit request. Please try again."}
                </p>
                <div className="mt-2 flex gap-3">
                  <button
                    onClick={() => setStatus("idle")}
                    className="inline-flex items-center gap-2 rounded-xl bg-ink-950 text-white px-5 py-2.5 text-sm font-semibold hover:bg-ink-800 transition"
                  >
                    Try again
                  </button>
                  <a
                    href="mailto:info@promogent.com"
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-paper-50 px-5 py-2.5 text-sm font-semibold hover:bg-paper-100 transition text-ink-700"
                  >
                    Email directly
                  </a>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl bg-white text-ink-950 p-6 space-y-4 shadow-lift relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  <Field
                    label="Full name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                  />
                  <Field
                    label="Work email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@brand.com"
                  />
                </div>
                <Field
                  label="Website"
                  name="website"
                  type="url"
                  required
                  placeholder="https://yourbrand.com"
                />
                <div>
                  <label className="text-xs font-medium text-ink-600">
                    What&apos;s the #1 thing holding you back?
                  </label>
                  <textarea
                    rows={3}
                    name="message"
                    required
                    placeholder="e.g. We get 50k visitors a month but only 1.2% convert..."
                    className="mt-1 w-full rounded-xl bg-paper-50 border border-line px-4 py-3 text-sm placeholder:text-ink-600 focus:outline-none focus:border-ink-950 transition"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 text-white px-5 py-3 text-sm font-semibold hover:bg-ink-800 disabled:bg-ink-800/80 disabled:cursor-not-allowed transition"
                >
                  {status === "submitting" ? (
                    <>
                      <div className="h-4 w-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      Request my audit
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
                <p className="text-[11px] text-ink-600 text-center">
                  We reply within 1 business day. NDA available on request.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

interface FieldProps {
  label: string;
  placeholder: string;
  name: string;
  type: string;
  required?: boolean;
}

function Field({ label, placeholder, name, type, required }: FieldProps) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-600">{label}</label>
      <input
        type={type}
        name={name}
        required={required}
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-paper-50 border border-line px-4 py-3 text-sm placeholder:text-ink-600 focus:outline-none focus:border-ink-950 transition"
      />
    </div>
  );
}
