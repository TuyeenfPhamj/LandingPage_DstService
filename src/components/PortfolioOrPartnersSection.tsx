import { ExternalLink, Hotel, Store, UsersRound } from "lucide-react";
import { featuredCases } from "../data/site";
import { SectionHeading } from "./SectionHeading";

const industries = [
  { label: "Nhà hàng & F&B", icon: Store },
  { label: "Khách sạn & dịch vụ", icon: Hotel },
  { label: "Sự kiện & cộng đồng", icon: UsersRound },
];

export function PortfolioOrPartnersSection() {
  return (
    <section className="section-shell bg-[#f6f3ec] py-20 md:py-28" id="du-an">
      <div className="content-width">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            description="Các dự án thực tế giúp khách hàng hình dung rõ năng lực triển khai của DST Group."
            eyebrow="Dự án tiêu biểu"
            title={
              <>
                Những thương hiệu đã đồng hành cùng{" "}
                <span className="whitespace-nowrap bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                  DST Group.
                </span>
              </>
            }
          />
          <div className="rounded-2xl border border-[#183f40]/10 bg-white p-4 shadow-[0_18px_60px_rgba(24,63,64,0.08)]">
            <p className="mb-4 text-sm font-semibold uppercase text-[#b87924]">
              Nhóm ngành DST đã triển khai
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {industries.map((item) => (
                <div
                  className="rounded-xl bg-[#f6f3ec] p-4 text-center"
                  key={item.label}
                >
                  <item.icon
                    aria-hidden="true"
                    className="mx-auto size-6 text-[#9a651f]"
                    strokeWidth={2}
                  />
                  <p className="mt-3 text-sm font-semibold leading-5 text-[#244d4e]">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-4 rounded-xl bg-gradient-to-r from-[#173f40] via-[#245354] to-[#e09d37] p-5 text-white">
              <p className="text-sm font-semibold uppercase text-white/68">
                Phạm vi triển khai
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Nhà hàng, khách sạn, tiệc cưới, bar, cafe
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {featuredCases.map((item) => (
            <article
              className="flex min-h-[452px] flex-col overflow-hidden rounded-xl border border-[#183f40]/10 bg-white shadow-[0_18px_60px_rgba(24,63,64,0.08)]"
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
                <h3 className="text-xl font-semibold leading-7 text-[#173f40]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#9a651f]">
                  {item.scope}
                </p>
                <p className="mt-3 flex-1 text-[15px] leading-7 text-[#5e7070]">
                  {item.description}
                </p>
                <a
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#9a651f] transition hover:text-[#173f40]"
                  href="#thu-vien"
                >
                  Xem dự án <ExternalLink aria-hidden="true" className="size-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
