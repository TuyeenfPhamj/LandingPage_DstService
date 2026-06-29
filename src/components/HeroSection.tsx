import { BarChart3, Film, Handshake, LayoutTemplate } from "lucide-react";
import type { ReactNode } from "react";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";
import { GradientIcon } from "./GradientIcon";

interface HeroSectionProps {
  nav: ReactNode;
}

const asset = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\//, "")}`;

const heroVisuals = [
  asset("assets/project-photos/profile-p68-357.webp"),
  asset("assets/project-photos/profile-p70-552.webp"),
];

const heroCapabilities = [
  {
    label: "Hình ảnh & nội dung",
    description: "Quay chụp, thiết kế, bài viết và video dùng được ngay cho social.",
    icon: Film,
  },
  {
    label: "Hồ sơ năng lực",
    description: "Profile, proposal và tài liệu tư vấn giúp khách hiểu nhanh năng lực.",
    icon: LayoutTemplate,
  },
  {
    label: "Quảng cáo đa kênh",
    description: "Thiết lập, theo dõi ngân sách và tối ưu theo mục tiêu chiến dịch.",
    icon: BarChart3,
  },
  {
    label: "Setup truyền thông F&B",
    description: "Định hướng điểm chạm cho nhà hàng, khách sạn và sự kiện.",
    icon: Handshake,
  },
];

export function HeroSection({ nav }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-[#183f40] text-white"
      id="top"
    >
      <div className="absolute inset-0">
        <img
          alt="Dự án truyền thông và sự kiện DST Group"
          className="h-full w-full object-cover"
          src={heroVisuals[0]}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#102f30]/96 via-[#183f40]/88 to-[#102f30]/72" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#183f40] to-transparent" />
      </div>

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {nav}

        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div className="mx-auto grid w-full max-w-[1180px] gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end">
            <div className="max-w-3xl">
              <FadeIn delay={300} duration={800}>
                <p className="mb-5 inline-flex rounded-lg border border-white/16 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-[#f4c77f] backdrop-blur">
                  DST Marketing - Media
                </p>
              </FadeIn>

              <AnimatedHeading
                className="mb-5 text-[34px] font-normal leading-[1.06] text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-[56px]"
                highlightedLineIndexes={[2]}
                text={"Truyền thông rõ ràng\nđể khách hàng hiểu, tin\nvà chọn thương hiệu của bạn"}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
                  DST Group đồng hành cùng doanh nghiệp xây dựng hình ảnh, nội dung,
                  social media, quảng cáo và các tài liệu truyền thông hỗ trợ khách
                  hàng hiểu rõ dịch vụ và ra quyết định nhanh hơn.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    className="rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#lien-he"
                  >
                    Nhận tư vấn
                  </a>
                  <a
                    className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#dich-vu"
                  >
                    Xem năng lực
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1000} duration={1000}>
              <div className="grid gap-4 lg:max-w-[500px]">
                <div className="overflow-hidden rounded-2xl border border-white/16 bg-white/10 p-2 backdrop-blur">
                  <img
                    alt="Chất liệu dự án DST Group"
                    className="h-[220px] w-full rounded-xl object-cover md:h-[280px] lg:h-[240px]"
                    src={heroVisuals[1]}
                  />
                </div>

                <div className="rounded-2xl border border-white/16 bg-white/10 p-5 backdrop-blur md:p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#f4c77f]">
                    Một đầu mối triển khai
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-3xl">
                    Từ hình ảnh đầu tiên đến{" "}
                    <span className="bg-gradient-to-r from-[#f7c76f] via-white to-[#82dce3] bg-clip-text text-transparent">
                      nội dung hỗ trợ bán hàng.
                    </span>
                  </h2>
                  <p className="mt-4 max-w-md text-sm leading-6 text-white/72 md:text-base md:leading-7">
                    DST kết nối media, nội dung, quảng cáo và tài liệu tư vấn trong
                    cùng một kế hoạch để thương hiệu xuất hiện rõ ràng hơn ở mọi điểm
                    chạm.
                  </p>
                </div>

                <div className="grid gap-3">
                  {heroCapabilities.map((item) => (
                    <div
                      className="rounded-xl border border-white/14 bg-white/9 p-4 backdrop-blur md:p-5"
                      key={item.label}
                    >
                      <div className="flex items-start gap-4">
                        <GradientIcon
                          className="size-10"
                          icon={item.icon}
                          label={item.label}
                          tone="dark"
                        />
                        <div className="min-w-0">
                          <h3 className="text-base font-semibold leading-6 text-white">
                            {item.label}
                          </h3>
                          <p className="mt-1.5 text-sm leading-6 text-white/72">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
