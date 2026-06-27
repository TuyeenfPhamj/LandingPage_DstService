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
    <section className="section-shell bg-white py-20 md:py-28" id="thu-vien">
      <div className="content-width">
        <SectionHeading
          align="center"
          description="Hình ảnh dự án, bảng dịch vụ và các hạng mục năng lực được chọn lọc để khách hàng nắm nhanh phạm vi triển khai."
          eyebrow="Thư viện"
          title="Dự án, bảng dịch vụ và năng lực triển khai của DST Group."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {galleryImages.map((image) => (
            <article
              className="overflow-hidden rounded-xl border border-[#183f40]/10 bg-[#f6f3ec] shadow-sm"
              key={`${image.title}-${image.src}`}
            >
              <button
                aria-label={`Xem lớn ${image.title}`}
                className="group block w-full text-left"
                onClick={() => setSelected(image)}
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
                <div className="grid min-h-[104px] gap-2 p-5">
                  <p className="text-xs font-semibold uppercase text-[#b87924]">
                    {image.category}
                  </p>
                  <h3 className="text-lg font-semibold text-[#173f40]">{image.title}</h3>
                </div>
              </button>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[#183f40]/10 bg-[#f6f3ec] p-4 md:p-5">
          <div className="mb-5 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase text-[#b87924]">
                Hồ sơ & bảng dịch vụ
              </p>
              <h3 className="mt-2 text-2xl font-semibold text-[#173f40]">
                Tài liệu năng lực trình bày trong khung riêng để dễ đọc.
              </h3>
            </div>
            <p className="max-w-md text-sm leading-6 text-[#5e7070]">
              Các ảnh dạng bảng hoặc trang tài liệu được giữ nguyên tỉ lệ và có
              nút phóng lớn.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {documentImages.map((image) => (
              <article
                className="overflow-hidden rounded-xl border border-[#183f40]/10 bg-white shadow-sm"
                key={`${image.title}-${image.src}`}
              >
                <button
                  aria-label={`Xem lớn ${image.title}`}
                  className="group block w-full text-left"
                  onClick={() => setSelected(image)}
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
                    <p className="text-xs font-semibold uppercase text-[#b87924]">
                      {image.category}
                    </p>
                    <h3 className="text-lg font-semibold text-[#173f40]">
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
