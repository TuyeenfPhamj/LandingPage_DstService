import { Mail, MapPin, Phone, Send } from "lucide-react";
import { company } from "../data/site";
import { GradientIcon } from "./GradientIcon";

const contactItems = [
  {
    label: "Hotline",
    value: `${company.phone} (${company.representative})`,
    href: `tel:${company.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    label: "Email",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
  },
  {
    label: "Địa chỉ",
    value: company.serviceAddress,
    href: "https://maps.google.com/?q=S%E1%BB%91%202%20-%20%C3%94%201%20Ng%C3%B5%2016%20Cao%20Th%E1%BA%AFng%20H%C3%A0%20L%E1%BA%A7m%20Qu%E1%BA%A3ng%20Ninh",
    icon: MapPin,
  },
];

export function ContactCTA() {
  return (
    <section className="section-shell brand-gradient py-20 text-white md:py-28" id="lien-he">
      <div className="content-width grid gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[#f1c67d]">Liên hệ</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Sẵn sàng xây một chiến dịch marketing gọn, rõ và có thể triển khai ngay.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 md:text-lg">
            Trao đổi trực tiếp với DST Group để chọn đúng gói dịch vụ: quản trị
            fanpage, xây kênh TikTok, quảng cáo online, thiết kế, media, website
            hoặc giải pháp cho nhà hàng - khách sạn - trung tâm sự kiện.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              className="inline-flex items-center gap-2 rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-100"
              href={`tel:${company.phone.replaceAll(" ", "")}`}
            >
              <Phone aria-hidden="true" className="size-4" />
              Gọi hotline
            </a>
            <a
              className="liquid-glass inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black"
              href={`mailto:${company.email}`}
            >
              <Send aria-hidden="true" className="size-4" />
              Gửi email
            </a>
          </div>
        </div>

        <div className="grid gap-4">
          {contactItems.map((item) => (
            <a
              className="flex min-h-[112px] items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-5 text-white backdrop-blur transition hover:bg-white/15"
              href={item.href}
              key={item.label}
              rel={item.label === "Địa chỉ" ? "noreferrer" : undefined}
              target={item.label === "Địa chỉ" ? "_blank" : undefined}
            >
              <GradientIcon icon={item.icon} label={item.label} />
              <span>
                <span className="block text-sm font-semibold uppercase text-[#f1c67d]">
                  {item.label}
                </span>
                <span className="mt-1 block text-base leading-7 text-white/86">
                  {item.value}
                </span>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
