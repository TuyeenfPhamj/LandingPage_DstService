import { whyChooseUs } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";

export function WhyChooseUsSection() {
  return (
    <section className="section-shell bg-white py-20 md:py-28">
      <div className="content-width grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="rounded-2xl bg-[#183f40] p-4 shadow-[0_24px_80px_rgba(24,63,64,0.22)]">
          <div className="grid gap-4 sm:grid-cols-2">
            {whyChooseUs.map((item) => (
              <article
                className="min-h-[224px] rounded-xl border border-white/10 bg-white/[0.07] p-5 text-white"
                key={item.title}
              >
                <GradientIcon icon={item.icon} label={item.title} tone="dark" />
                <h3 className="mt-5 text-lg font-semibold leading-6">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-white/74">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <SectionHeading
          description="DST Group kết nối tư vấn, sản xuất media, nội dung, thiết kế, quảng cáo và vận hành kênh vào một quy trình triển khai rõ ràng, giúp doanh nghiệp dễ theo dõi tiến độ và sử dụng hiệu quả từng hạng mục."
          eyebrow="Lợi thế"
          title={
            <>
              Một đối tác triển khai, nhiều năng lực hỗ trợ cho{" "}
              <span className="bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                mục tiêu bán hàng.
              </span>
            </>
          }
        />
      </div>
    </section>
  );
}
