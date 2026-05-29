import { Linkedin, Github, Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";
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

        {/* Office addresses section */}
        <div className="mt-12 pt-10 border-t border-line grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div className="flex gap-3">
            <div className="mt-0.5 text-ink-500">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-ink-950 flex items-center gap-2">
                India Office <span className="text-xs font-normal text-ink-500">🇮🇳</span>
              </h4>
              <p className="mt-1.5 text-ink-600 leading-relaxed max-w-md">
                Shilp Aaron, B-207, Sindhu Bhavan Marg, opposite Armieda Complex, Bodakdev, Ahmedabad, Gujarat 380059
              </p>
              <a
                href="tel:+917016605285"
                className="inline-flex items-center gap-1.5 mt-2 text-ink-600 hover:text-ink-950 transition"
              >
                <Phone size={14} className="text-ink-400" />
                <span className="font-semibold">+91 70166 05285</span>
              </a>
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-0.5 text-ink-500">
              <MapPin size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-ink-950 flex items-center gap-2">
                US Office <span className="text-xs font-normal text-ink-500">🇺🇸</span>
              </h4>
              <p className="mt-1.5 text-ink-600 leading-relaxed max-w-md">
                2810 N Church St PMB 233552, Wilmington, Delaware 19802-4447
              </p>
              <a
                href="tel:+13026183557"
                className="inline-flex items-center gap-1.5 mt-2 text-ink-600 hover:text-ink-950 transition"
              >
                <Phone size={14} className="text-ink-400" />
                <span className="font-semibold">+1 302 618 3557</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-line pt-6 text-xs text-ink-600">
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
