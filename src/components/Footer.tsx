import { Globe2, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { company, navItems } from "../data/site";

export function Footer() {
  return (
    <footer className="section-shell bg-[#102f30] py-12 text-white">
      <div className="content-width grid gap-10 md:grid-cols-[1.2fr_0.8fr_1fr]">
        <div>
          <img alt="DST Group" className="h-14 w-auto object-contain" src={company.logo} />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/68">{company.slogan}</p>
          <p className="mt-5 text-xs text-white/45">
            © 2026 {company.fullName}. All rights reserved.
          </p>
        </div>

        <div>
          <h2 className="text-base font-semibold">Điều hướng</h2>
          <div className="mt-4 grid gap-3">
            {navItems.map((item) => (
              <a
                className="text-sm text-white/68 transition hover:text-white"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-base font-semibold">Thông tin</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/68">
            <a
              className="inline-flex items-center gap-3 hover:text-white"
              href={`tel:${company.phone.replaceAll(" ", "")}`}
            >
              <Phone aria-hidden="true" className="size-4" />
              {company.phone}
            </a>
            <a
              className="inline-flex items-center gap-3 hover:text-white"
              href={`mailto:${company.email}`}
            >
              <Mail aria-hidden="true" className="size-4" />
              {company.email}
            </a>
            <a
              className="inline-flex items-center gap-3 hover:text-white"
              href={`https://${company.website}`}
            >
              <Globe2 aria-hidden="true" className="size-4" />
              {company.website}
            </a>
            <a
              className="inline-flex items-center gap-3 hover:text-white"
              href={company.facebook}
              rel="noreferrer"
              target="_blank"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
              Facebook
            </a>
            <p className="inline-flex items-start gap-3">
              <MapPin aria-hidden="true" className="mt-1 size-4 shrink-0" />
              {company.headquarters}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
