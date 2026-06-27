import { ExternalLink, Sparkles, Store, UsersRound } from "lucide-react";
import { featuredCases } from "../data/site";
import { GradientIcon } from "./GradientIcon";
import { SectionHeading } from "./SectionHeading";

export function PortfolioOrPartnersSection() {
  return (
    <section className="section-shell bg-[#f6f3ec] py-20 md:py-28" id="du-an">
      <div className="content-width">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            description="Một số dự án và nhóm khách hàng DST Group đã triển khai trong lĩnh vực F&B, khách sạn, trung tâm tiệc cưới, giáo dục, vận tải và thương mại."
            eyebrow="Dự án"
            title={
              <>
                Các case nổi bật trong hệ sinh thái{" "}
                <span className="whitespace-nowrap">marketing - media.</span>
              </>
            }
          />
          <div className="rounded-2xl border border-[#183f40]/10 bg-white p-4 shadow-[0_18px_60px_rgba(24,63,64,0.08)]">
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                { label: "F&B", icon: Store },
                { label: "Sự kiện", icon: Sparkles },
                { label: "Cộng đồng", icon: UsersRound },
              ].map((item) => (
                <div
                  className="rounded-xl bg-[#f6f3ec] p-4 text-center"
                  key={item.label}
                >
                  <GradientIcon className="mx-auto" icon={item.icon} label={item.label} />
                  <p className="mt-3 text-sm font-semibold text-[#244d4e]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-[#173f40] via-[#245354] to-[#e09d37] p-5 text-white">
              <p className="text-sm font-semibold uppercase text-white/68">
                Phạm vi triển khai
              </p>
              <p className="mt-2 text-2xl font-semibold">Nhà hàng, khách sạn, tiệc cưới, bar, cafe</p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredCases.map((item) => (
            <article
              className="flex min-h-[430px] flex-col overflow-hidden rounded-xl border border-[#183f40]/10 bg-white shadow-[0_18px_60px_rgba(24,63,64,0.08)]"
              key={item.title}
            >
              <div className="flex aspect-[4/3] items-center justify-center bg-[#e9e2d4] p-3">
                <img
                  alt={item.title}
                  className="h-full w-full rounded-lg object-contain"
                  loading="lazy"
                  src={item.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-xl font-semibold text-[#173f40]">{item.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-[#5e7070]">
                  {item.description}
                </p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9a651f] transition hover:text-[#173f40]"
                  href="#thu-vien"
                >
                  Xem hình ảnh <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
