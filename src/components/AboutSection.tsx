import { BriefcaseBusiness, Landmark, MapPin, Target } from "lucide-react";
import { company, proofPoints } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { label: "Mã số doanh nghiệp", value: company.license, icon: Landmark },
  { label: "Trụ sở chính", value: company.headquarters, icon: MapPin },
  {
    label: "Lĩnh vực triển khai",
    value: "Nhà hàng · Khách sạn · Sự kiện · Dịch vụ",
    icon: BriefcaseBusiness,
  },
  { label: "Vốn điều lệ", value: company.capital, icon: Target },
];

export function AboutSection() {
  return (
    <section className="section-shell py-20 md:py-28" id="gioi-thieu">
      <div className="content-width grid gap-10 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <div>
          <SectionHeading
            description="DST Group là đầu mối triển khai marketing - media cho doanh nghiệp, từ định hướng, sản xuất hình ảnh, xây dựng nội dung, thiết kế đến triển khai chiến dịch. Các hạng mục được kết nối để hỗ trợ truyền thông rõ ràng hơn và phục vụ mục tiêu bán hàng."
            eyebrow="Giới thiệu"
            title={
              <>
                Đội ngũ <span className="whitespace-nowrap">marketing - media</span>{" "}
                đồng hành theo{" "}
                <span className="bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                  mục tiêu kinh doanh của bạn.
                </span>
              </>
            }
          />
          <div className="mt-8 grid grid-cols-2 gap-4">
            {proofPoints.map((point) => (
              <div
                className="rounded-xl border border-[#183f40]/10 bg-white/70 p-5 shadow-sm"
                key={point.label}
              >
                <p className="text-2xl font-semibold leading-tight text-[#173f40]">
                  {point.value}
                </p>
                <p className="mt-2 text-sm leading-6 text-[#607071]">{point.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-sm font-semibold uppercase text-[#b87924]">
            Năng lực & thông tin doanh nghiệp
          </p>
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
      </div>
    </section>
  );
}
