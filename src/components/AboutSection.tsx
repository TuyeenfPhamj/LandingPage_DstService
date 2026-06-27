import { Building2, CalendarDays, Landmark, MapPin } from "lucide-react";
import { company, proofPoints } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Thành lập", value: company.established, icon: CalendarDays },
  { label: "Giấy phép kinh doanh", value: company.license, icon: Landmark },
  { label: "Trụ sở chính", value: company.headquarters, icon: MapPin },
  { label: "Tên doanh nghiệp", value: company.fullName, icon: Building2 },
];

export function AboutSection() {
  return (
    <section className="section-shell py-20 md:py-28" id="gioi-thieu">
      <div className="content-width grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div>
          <SectionHeading
            description="DST Group được thành lập tại Quảng Ninh, phát triển theo hướng cung cấp dịch vụ marketing, media và giải pháp thương hiệu trọn gói cho doanh nghiệp."
            eyebrow="Giới thiệu"
            title={
              <>
                Một đội ngũ <span className="whitespace-nowrap">marketing - media</span>{" "}
                đồng hành từ ý tưởng đến triển khai.
              </>
            }
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {proofPoints.map((point) => (
              <div
                className="rounded-xl border border-[#183f40]/10 bg-white/70 p-5 shadow-sm"
                key={point.label}
              >
                <p className="text-2xl font-semibold text-[#173f40]">{point.value}</p>
                <p className="mt-2 text-sm leading-6 text-[#607071]">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {facts.map((fact) => (
            <article
              className="min-h-[178px] rounded-xl border border-[#183f40]/10 bg-white p-5 shadow-[0_18px_60px_rgba(24,63,64,0.08)]"
              key={fact.label}
            >
              <GradientIcon icon={fact.icon} label={fact.label} />
              <p className="mt-5 text-sm font-semibold uppercase text-[#b87924]">
                {fact.label}
              </p>
              <p className="mt-2 text-base leading-7 text-[#244d4e]">{fact.value}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
