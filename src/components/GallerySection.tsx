import { Maximize2, X } from "lucide-react";
import { useEffect, useState } from "react";
import { documentImages, galleryImages } from "../data/site";
import type { GalleryImage } from "../types/site";
import { SectionHeading } from "./SectionHeading";

export function GallerySection() {
  const [selected, setSelected] = useState<GalleryImage | null>(null);

  useEffect(() => {
    if (!selected) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelected(null);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selected]);

  return (
    <section className="section-shell bg-white pb-24 pt-20 md:pb-28 md:pt-28" id="thu-vien">
      <div className="content-width">
        <SectionHeading
          align="center"
          description="Khám phá các hạng mục hình ảnh, ấn phẩm, nội dung và tài liệu truyền thông DST đã triển khai để hình dung rõ hơn cách từng giải pháp được ứng dụng cho doanh nghiệp."
          eyebrow="Thư viện"
          title={
            <>
              Xem các hạng mục DST đã triển khai trước khi chọn{" "}
              <span className="bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                giải pháp phù hợp.
              </span>
            </>
          }
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <article
              className="overflow-hidden rounded-xl border border-[#183f40]/10 bg-[#f6f3ec] shadow-sm"
              key={`${image.title}-${image.src}`}
            >
              <button
                aria-label={`Phóng lớn sản phẩm ${image.title}`}
                className="group block w-full text-left"
                onClick={() => setSelected(image)}
                title="Xem chi tiết"
                type="button"
              >
                <div className="relative flex aspect-[16/11] items-center justify-center bg-[#e9e2d4] p-3">
                  <img
                    alt={image.alt}
                    className="h-full w-full rounded-lg object-cover transition duration-300 group-hover:scale-[1.015]"
                    loading="lazy"
                    src={image.src}
                  />
                  <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-lg bg-white/90 text-[#173f40] shadow">
                    <Maximize2 aria-hidden="true" className="size-4" />
                  </span>
                </div>
                <div className="grid min-h-[136px] gap-2 p-5">
                  <p className="text-[13px] font-bold uppercase text-[#b87924]">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-semibold leading-6 text-[#173f40]">
                    {image.title}
                  </h3>
                  {image.detail ? (
                    <p className="text-sm leading-6 text-[#5e7070]">{image.detail}</p>
                  ) : null}
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-[#183f40]/10 bg-[#f3efe6] p-4 md:p-6">
          <div className="mb-5 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[#b87924]">
                Hồ sơ năng lực & tài liệu dịch vụ
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#173f40]">
                Tham khảo phạm vi dịch vụ, hồ sơ năng lực và tài liệu DST sử dụng
                trong quá trình tư vấn, triển khai.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5e7070]">
              Nhấp vào từng tài liệu để xem chi tiết hạng mục, phạm vi triển khai
              và nội dung bàn giao.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {documentImages.map((image) => (
              <article
                className="overflow-hidden rounded-xl border border-[#183f40]/10 bg-white shadow-sm"
                key={`${image.title}-${image.src}`}
              >
                <button
                  aria-label={`Phóng lớn tài liệu ${image.title}`}
                  className="group block w-full text-left"
                  onClick={() => setSelected(image)}
                  title="Xem chi tiết"
                  type="button"
                >
                  <div className="relative flex aspect-[16/10] items-center justify-center bg-[#e9e2d4] p-3">
                    <img
                      alt={image.alt}
                      className="h-full w-full rounded-lg object-contain transition duration-300 group-hover:scale-[1.015]"
                      loading="lazy"
                      src={image.src}
                    />
                    <span className="absolute right-4 top-4 inline-flex size-10 items-center justify-center rounded-lg bg-white/90 text-[#173f40] shadow">
                      <Maximize2 aria-hidden="true" className="size-4" />
                    </span>
                  </div>
                  <div className="grid min-h-[96px] gap-2 p-5">
                    <p className="text-[13px] font-bold uppercase text-[#b87924]">
                      {image.category}
                    </p>
                    <h3 className="text-lg font-semibold leading-6 text-[#173f40]">
                      {image.title}
                    </h3>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>

      {selected ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#102f30]/90 p-3 md:p-6"
          role="dialog"
        >
          <div className="flex h-full w-full max-w-6xl flex-col rounded-xl bg-[#f6f3ec] shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#183f40]/10 px-4 py-3 md:px-5">
              <div>
                <p className="text-xs font-semibold uppercase text-[#b87924]">
                  {selected.category}
                </p>
                <h3 className="text-base font-semibold text-[#173f40] md:text-lg">
                  {selected.title}
                </h3>
              </div>
              <button
                aria-label="Đóng ảnh"
                className="inline-flex size-10 items-center justify-center rounded-lg bg-[#173f40] text-white"
                onClick={() => setSelected(null)}
                type="button"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>
            <div className="portfolio-scroll flex min-h-0 flex-1 items-start justify-center overflow-auto p-3 md:p-5">
              <img
                alt={selected.alt}
                className="max-h-none w-auto max-w-full rounded-lg object-contain shadow-lg md:max-w-[92%]"
                src={selected.src}
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
