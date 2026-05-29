import { Linkedin, Github, Facebook, Instagram, Mail } from "lucide-react";
import { LogoWordmark } from "./Logo";
import { FIVERR_URL } from "./AnnouncementBar";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="/" className="inline-block text-ink-950">
              <LogoWordmark className="h-8 w-auto" />
            </a>
            <p className="mt-4 text-ink-600 max-w-md text-sm leading-relaxed">
              PromoGent Solutions PVT LTD is an India-based digital studio
              specializing in CRO, traffic optimization and modern web, mobile
              and cloud engineering.{" "}
              <a
                href={FIVERR_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink-950 font-semibold"
              >
                Top-Rated on Fiverr
              </a>{" "}
              with 6,200+ reviews and{" "}
              <a
                href="https://clutch.co/profile/promogent"
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-ink-950 font-semibold"
              >
                5-star rated on Clutch
              </a>
              .
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { I: Linkedin, href: "https://www.linkedin.com/company/promogent/" },
                { I: Facebook, href: "https://www.facebook.com/promogent" },
                { I: Instagram, href: "https://www.instagram.com/ipromogent/" },
                { I: Github, href: "https://github.com/promogent" },
                { I: Mail, href: "mailto:info@promogent.com" },
              ].map(({ I, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={I !== Mail ? "_blank" : undefined}
                  rel={I !== Mail ? "noopener noreferrer" : undefined}
                  className="h-9 w-9 grid place-items-center rounded-lg border border-line bg-white hover:bg-paper-50 transition"
                >
                  <I size={16} className="text-ink-700" />
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <FooterCol
              title="Services"
              items={[
                { name: "CRO & Traffic", href: "/#services" },
                { name: "WordPress", href: "/#services" },
                { name: "Shopify", href: "/#services" },
                { name: "Next.js", href: "/#services" },
                { name: "React Native", href: "/#services" },
                { name: "Flutter", href: "/#services" },
                { name: "AWS Cloud", href: "/#services" },
              ]}
            />
            <FooterCol
              title="Company"
              items={[
                { name: "About", href: "/" },
                { name: "Process", href: "/#process" },
                { name: "Case studies", href: "/wins" },
                { name: "Careers", href: "/" },
                { name: "Contact", href: "/#contact" },
              ]}
            />
            <FooterCol
              title="Legal"
              items={[
                { name: "Privacy", href: "/privacy" },
                { name: "Terms", href: "/terms" },
                { name: "Cookie policy", href: "/cookies" },
                { name: "MSA template", href: "#" },
              ]}
            />
          </div>
        </div>

        <div className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-600">
          <div>
            © {new Date().getFullYear()} PromoGent Solutions PVT LTD. All
            rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Made in India 🇮🇳</span>
            <span>·</span>
            <span>Serving globally</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  items,
}: {
  title: string;
  items: { name: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-950">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-ink-600">
        {items.map((i) => (
          <li key={i.name}>
            <a href={i.href} className="hover:text-ink-950 transition-colors">
              {i.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
