import { ArrowRight, Mail } from "lucide-react";

export default function CTA() {
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
                href="mailto:hello@promogent.com"
                className="group inline-flex items-center gap-2 rounded-full bg-white text-ink-950 px-7 py-3.5 text-base font-semibold hover:bg-paper-100 transition"
              >
                Book free audit
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </a>
              <a
                href="mailto:hello@promogent.com"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition"
              >
                <Mail size={18} />
                hello@promogent.com
              </a>
            </div>
          </div>

          <form className="rounded-2xl bg-white text-ink-950 p-6 space-y-4 shadow-lift">
            <div className="grid grid-cols-2 gap-4">
              <Field label="Full name" placeholder="Your name" />
              <Field label="Work email" placeholder="you@brand.com" />
            </div>
            <Field label="Website" placeholder="https://yourbrand.com" />
            <div>
              <label className="text-xs font-medium text-ink-600">
                What&apos;s the #1 thing holding you back?
              </label>
              <textarea
                rows={3}
                placeholder="e.g. We get 50k visitors a month but only 1.2% convert..."
                className="mt-1 w-full rounded-xl bg-paper-50 border border-line px-4 py-3 text-sm placeholder:text-ink-600 focus:outline-none focus:border-ink-950 transition"
              />
            </div>
            <button
              type="button"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-ink-950 text-white px-5 py-3 text-sm font-semibold hover:bg-ink-800 transition"
            >
              Request my audit
              <ArrowRight size={16} />
            </button>
            <p className="text-[11px] text-ink-600 text-center">
              We reply within 1 business day. NDA available on request.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-ink-600">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="mt-1 w-full rounded-xl bg-paper-50 border border-line px-4 py-3 text-sm placeholder:text-ink-600 focus:outline-none focus:border-ink-950 transition"
      />
    </div>
  );
}
