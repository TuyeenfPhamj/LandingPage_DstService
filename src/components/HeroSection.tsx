import type { ReactNode } from "react";
import { company, serviceGroups } from "../data/site";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";
import { GradientIcon } from "./GradientIcon";

interface HeroSectionProps {
  nav: ReactNode;
}

const heroVideo =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4";

export function HeroSection({ nav }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-[#183f40] text-white"
      id="top"
    >
      <video
        aria-label="DST Group visual background"
        autoPlay
        className="absolute inset-0 h-full w-full object-cover"
        loop
        muted
        playsInline
        src={heroVideo}
      />

      <div className="relative z-10 flex min-h-screen w-full flex-col">
        {nav}

        <div className="flex flex-1 flex-col justify-end px-6 pb-12 md:px-12 lg:px-16 lg:pb-16">
          <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <FadeIn delay={300} duration={800}>
                <div className="liquid-glass mb-5 hidden items-center gap-3 rounded-xl px-4 py-2 md:inline-flex">
                  <img
                    alt="DST Group"
                    className="h-8 w-auto object-contain"
                    src={company.logo}
                  />
                  <span className="text-sm font-medium text-white/90">
                    {company.slogan}
                  </span>
                </div>
              </FadeIn>

              <AnimatedHeading
                className="mb-4 text-[34px] font-normal leading-[1.06] text-white sm:text-4xl md:text-5xl lg:text-5xl xl:text-[56px]"
                text={"Dịch vụ tận tâm\nNâng tầm thương hiệu"}
              />

              <FadeIn delay={800} duration={1000}>
                <p className="max-w-2xl text-base leading-7 text-gray-200 md:text-lg">
                  DST Group đồng hành cùng doanh nghiệp trong marketing đa kênh,
                  media, TikTok Shop, thiết kế, quảng cáo và giải pháp truyền
                  thông cho nhà hàng, khách sạn, trung tâm sự kiện.
                </p>
              </FadeIn>

              <FadeIn delay={1200} duration={1000}>
                <div className="mt-6 flex flex-wrap gap-4">
                  <a
                    className="rounded-lg bg-white px-8 py-3 font-medium text-black transition hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#lien-he"
                  >
                    Liên hệ ngay
                  </a>
                  <a
                    className="liquid-glass rounded-lg border border-white/20 px-8 py-3 font-medium text-white transition hover:bg-white hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#dich-vu"
                  >
                    Xem dịch vụ
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={1400} duration={1000}>
              <div className="grid gap-4 sm:grid-cols-2 lg:justify-items-end">
                <div className="liquid-glass w-full rounded-xl border border-white/20 p-5 sm:col-span-2 lg:max-w-md">
                  <p className="text-lg font-light leading-relaxed text-white md:text-xl lg:text-2xl">
                    Tư vấn. Triển khai. Tối ưu. Đồng hành.
                  </p>
                </div>
                {serviceGroups.map((item) => (
                  <div
                    className="liquid-glass flex min-h-24 w-full items-center gap-3 rounded-xl p-4 lg:max-w-[190px]"
                    key={item.label}
                  >
                    <GradientIcon icon={item.icon} label={item.label} />
                    <span className="text-sm font-medium text-white/90">{item.label}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
