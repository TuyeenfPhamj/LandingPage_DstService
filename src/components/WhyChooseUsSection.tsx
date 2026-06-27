import { whyChooseUs } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-shell bg-white py-20 md:py-28">
      <div className="content-width grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div className="rounded-2xl bg-[#183f40] p-4 shadow-[0_24px_80px_rgba(24,63,64,0.22)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <article
                className="min-h-[242px] rounded-xl border border-white/10 bg-white/[0.07] p-5 text-white"
                key={item.title}
              >
                <GradientIcon icon={item.icon} label={item.title} />
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-white/72">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <SectionHeading
          description="Điểm mạnh của DST Group nằm ở khả năng gom nhiều hạng mục marketing vào một luồng làm việc: từ tư vấn, sáng tạo nội dung, sản xuất media, quảng cáo đến vận hành kênh bán hàng."
          eyebrow="Lợi thế"
          title="Một đầu mối triển khai, nhiều năng lực bổ trợ cho thương hiệu."
        />
      </div>
    </section>
  );
}
