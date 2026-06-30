import type { ReactNode } from "react";
import { heroContent } from "../data/hero";
import { AnimatedHeading } from "./AnimatedHeading";
import { FadeIn } from "./FadeIn";

interface HeroSectionProps {
  nav: ReactNode;
}

export function HeroSection({ nav }: HeroSectionProps) {
  return (
    <section
      className="relative flex min-h-[760px] overflow-hidden bg-[#143d3d] text-white lg:min-h-screen"
      id="top"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#102f30_0%,#173f40_48%,#245354_100%)]" />
      <div className="hero-grid absolute inset-0" />
      <div className="hero-glow absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#0c292a]/60 to-transparent" />
      <div className="absolute right-0 top-0 hidden h-full w-[46%] bg-[linear-gradient(110deg,transparent,rgba(244,199,127,0.10)_42%,rgba(255,255,255,0.05))] lg:block" />

      <div className="relative z-10 flex w-full flex-1 flex-col">
        {nav}

        <div className="flex flex-1 items-center px-6 pb-10 pt-8 md:px-12 md:pb-14 lg:px-16 lg:pb-16">
          <div className="mx-auto grid w-full max-w-[1180px] gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,380px)] lg:items-center lg:gap-12">
            <div className="max-w-[640px]">
              <FadeIn delay={240} duration={700}>
                <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-black/15 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f3b94e] backdrop-blur-sm">
                  {heroContent.badge}
                </p>
              </FadeIn>

              <AnimatedHeading
                className="mb-6 max-w-[15ch] pb-4 text-left text-[clamp(2.5rem,4.45vw,4.6rem)] font-medium leading-[1.15] tracking-[-0.04em] text-white [overflow-wrap:anywhere] [text-wrap:balance] drop-shadow-[0_4px_24px_rgba(0,0,0,0.22)]"
                highlightedPhrases={[heroContent.highlightedPhrase]}
                text={heroContent.title}
              />

              <FadeIn delay={720} duration={900}>
                <p className="max-w-[560px] text-sm leading-relaxed text-white/85 drop-shadow-[0_2px_12px_rgba(0,0,0,0.22)] md:text-base">
                  {heroContent.description}
                </p>
              </FadeIn>

              <FadeIn delay={1040} duration={900}>
                <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
                  <a
                    className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 font-semibold text-slate-950 shadow-lg shadow-black/20 transition hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#lien-he"
                  >
                    {heroContent.primaryCta}
                  </a>
                  <a
                    className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-black/20 px-6 py-3.5 font-medium text-white backdrop-blur-sm transition-all hover:bg-white hover:text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    href="#dich-vu"
                  >
                    {heroContent.secondaryCta}
                  </a>
                </div>
              </FadeIn>
            </div>

            <FadeIn delay={880} duration={900}>
              <aside className="mx-auto w-full max-w-[380px] rounded-[28px] border border-white/12 bg-[#2d3f3c]/42 p-3 shadow-[0_24px_70px_rgba(0,0,0,0.20)] backdrop-blur-md lg:mx-0 lg:justify-self-end">
                <img
                  alt="Chất liệu truyền thông thực tế DST Group"
                  className="aspect-[16/9] w-full rounded-[22px] object-cover"
                  src={heroContent.cardImage}
                />

                <div className="px-2 pb-2 pt-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#f3b94e]">
                    Năng lực nổi bật
                  </p>
                  <h2 className="mt-3 text-2xl font-semibold leading-tight text-white md:text-[26px]">
                    Từ hình ảnh đầu tiên đến hành trình bán hàng rõ ràng.
                  </h2>
                  <p className="mt-3 text-sm leading-6 text-white/74">
                    DST kết nối media, nội dung, quảng cáo và tài liệu tư vấn
                    thành một hệ thống truyền thông dễ hiểu, dễ triển khai.
                  </p>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {heroContent.capabilities.map((item) => (
                      <div
                        className="min-h-[92px] rounded-xl border border-white/10 bg-white/[0.07] p-3 transition hover:bg-white/[0.11]"
                        key={item.label}
                      >
                        <item.icon
                          aria-hidden="true"
                          className="size-5 text-[#f3b94e]"
                          strokeWidth={2}
                        />
                        <p className="mt-3 text-[12px] font-semibold leading-4 text-white">
                          {item.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
