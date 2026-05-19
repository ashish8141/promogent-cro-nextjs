import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { LogoWordmark } from "./Logo";
import { FIVERR_URL } from "./AnnouncementBar";

export default function Footer() {
  return (
    <footer className="relative border-t border-line bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <a href="#" className="inline-block text-ink-950">
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
                className="underline underline-offset-2 hover:text-ink-950"
              >
                Top-Rated on Fiverr
              </a>{" "}
              with 6,200+ reviews.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {[
                { I: Linkedin, href: "#" },
                { I: Twitter, href: "#" },
                { I: Github, href: "#" },
                { I: Mail, href: "mailto:hello@promogent.com" },
              ].map(({ I, href }, i) => (
                <a
                  key={i}
                  href={href}
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
                "CRO & Traffic",
                "WordPress",
                "Shopify",
                "Next.js",
                "React Native",
                "Flutter",
                "AWS Cloud",
              ]}
            />
            <FooterCol
              title="Company"
              items={["About", "Process", "Case studies", "Careers", "Contact"]}
            />
            <FooterCol
              title="Legal"
              items={["Privacy", "Terms", "Cookie policy", "MSA template"]}
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

function FooterCol({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h4 className="text-sm font-semibold text-ink-950">{title}</h4>
      <ul className="mt-4 space-y-2 text-sm text-ink-600">
        {items.map((i) => (
          <li key={i}>
            <a href="#" className="hover:text-ink-950 transition-colors">
              {i}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
