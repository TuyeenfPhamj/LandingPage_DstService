import { Palette, RadioTower, Sparkles } from "lucide-react";
import { services } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      className="section-shell brand-gradient py-20 text-white md:py-28"
      id="dich-vu"
    >
      <div className="content-width">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            description="Các gói dịch vụ có thể triển khai độc lập hoặc kết hợp thành một hệ thống marketing trọn gói theo mục tiêu kinh doanh."
            eyebrow="Dịch vụ"
            tone="dark"
            title="Từ quảng cáo, nội dung, media đến TikTok Shop và setup ngành dịch vụ."
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Chiến lược", icon: Sparkles },
              { label: "Sáng tạo", icon: Palette },
              { label: "Tăng trưởng", icon: RadioTower },
            ].map((item) => (
              <div
                className="rounded-xl border border-white/15 bg-white/12 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.16)] backdrop-blur"
                key={item.label}
              >
                <GradientIcon className="size-11" icon={item.icon} label={item.label} />
                <p className="mt-4 text-sm font-semibold">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-fr gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
