import { ClipboardCheck, Film, TrendingUp } from "lucide-react";
import { services } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";
import { ServiceCard } from "./ServiceCard";

export function ServicesSection() {
  return (
    <section
      className="section-shell brand-gradient py-24 text-white md:py-28"
      id="dich-vu"
    >
      <div className="content-width">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            description="Mỗi doanh nghiệp có một điểm cần ưu tiên khác nhau: có bên cần hình ảnh, có bên cần nội dung đều đặn, có bên cần tài liệu bán hàng hoặc định hướng triển khai trước khi đầu tư ngân sách."
            eyebrow="Dịch vụ DST triển khai"
            tone="dark"
            title={
              <>
                DST giúp doanh nghiệp chọn đúng hạng mục cần triển khai trước, rồi
                mở rộng khi kênh bắt đầu{" "}
                <span className="bg-gradient-to-r from-[#f7c76f] via-white to-[#82dce3] bg-clip-text text-transparent">
                  tạo chuyển đổi.
                </span>
              </>
            }
          />
          <div className="grid gap-3 sm:grid-cols-3">
            {[
              { label: "Định hướng", icon: ClipboardCheck },
              { label: "Sản xuất nội dung", icon: Film },
              { label: "Triển khai & tối ưu", icon: TrendingUp },
            ].map((item) => (
              <div
                className="rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur"
                key={item.label}
              >
                <GradientIcon className="size-10" icon={item.icon} label={item.label} tone="dark" />
                <p className="mt-4 text-sm font-semibold leading-5">{item.label}</p>
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
