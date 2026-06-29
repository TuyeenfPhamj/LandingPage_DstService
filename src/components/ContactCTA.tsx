import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { company } from "../data/site";
import { GradientIcon } from "./GradientIcon";

const contactItems = [
  {
    label: "Hotline tư vấn",
    value: company.phone,
    href: `tel:${company.phone.replaceAll(" ", "")}`,
    icon: Phone,
  },
  {
    label: "Email tư vấn",
    value: company.email,
    href: `mailto:${company.email}`,
    icon: Mail,
  },
  {
    label: "Văn phòng",
    value: company.serviceAddress,
    href: "https://maps.google.com/?q=S%E1%BB%91%202%20-%20%C3%94%201%20Ng%C3%B5%2016%20Cao%20Th%E1%BA%AFng%20H%C3%A0%20L%E1%BA%A7m%20Qu%E1%BA%A3ng%20Ninh",
    icon: MapPin,
  },
];

export function ContactCTA() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section-shell brand-gradient py-20 text-white md:py-28" id="lien-he">
      <div className="content-width grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase text-[#f1c67d]">Liên hệ</p>
          <h2 className="text-balance text-3xl font-semibold leading-tight md:text-5xl">
            Nhận tư vấn miễn phí để xác định{" "}
            <span className="bg-gradient-to-r from-[#f7c76f] via-white to-[#82dce3] bg-clip-text text-transparent">
              hạng mục cần ưu tiên.
            </span>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/76 md:text-lg">
            Chia sẻ tình trạng hiện tại của thương hiệu. DST Group sẽ đề xuất
            hướng triển khai phù hợp, từ media, nội dung, Fanpage, TikTok, quảng
            cáo đến hồ sơ năng lực và giải pháp marketing tổng thể.
          </p>
          <div className="mt-8 grid gap-3">
            {contactItems.map((item) => (
              <a
                className="flex min-h-[96px] items-center gap-4 rounded-xl border border-white/15 bg-white/10 p-4 text-white backdrop-blur transition hover:bg-white/15"
                href={item.href}
                key={item.label}
                rel={item.label === "Văn phòng" ? "noreferrer" : undefined}
                target={item.label === "Văn phòng" ? "_blank" : undefined}
              >
                <GradientIcon icon={item.icon} label={item.label} tone="dark" />
                <span>
                  <span className="block text-sm font-semibold uppercase text-[#f1c67d]">
                    {item.label}
                  </span>
                  <span className="mt-1 block text-base leading-7 text-white/86">
                    {item.value}
                  </span>
                </span>
              </a>
            ))}
          </div>
        </div>

        <form
          className="rounded-2xl border border-white/15 bg-white p-5 text-[#173f40] shadow-[0_24px_80px_rgba(0,0,0,0.22)] md:p-6"
          onSubmit={(event) => {
            event.preventDefault();
            setSubmitted(true);
          }}
        >
          <div className="grid gap-4">
            <label className="grid gap-2 text-sm font-semibold">
              Họ tên
              <input
                className="rounded-lg border border-[#183f40]/16 px-4 py-3 text-base font-normal outline-none transition focus:border-[#b87924]"
                name="name"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Số điện thoại hoặc email
              <input
                className="rounded-lg border border-[#183f40]/16 px-4 py-3 text-base font-normal outline-none transition focus:border-[#b87924]"
                name="contact"
                required
                type="text"
              />
            </label>
            <label className="grid gap-2 text-sm font-semibold">
              Nhu cầu tư vấn
              <textarea
                className="min-h-32 rounded-lg border border-[#183f40]/16 px-4 py-3 text-base font-normal leading-7 outline-none transition focus:border-[#b87924]"
                name="message"
                placeholder="Ví dụ: Cần xây dựng Fanpage, quay chụp hình ảnh hoặc chạy quảng cáo cho chương trình sắp tới."
                required
              />
            </label>
          </div>

          {submitted ? (
            <p className="mt-4 rounded-lg bg-[#edf8f2] px-4 py-3 text-sm font-medium leading-6 text-[#1e6240]">
              Yêu cầu đã được ghi nhận trên giao diện. Khi publish, cần kết nối form
              với email, Google Sheet, CRM hoặc hệ thống DST đang theo dõi.
            </p>
          ) : null}

          <button
            className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-[#173f40] px-8 py-3 font-medium text-white transition hover:bg-[#245354]"
            type="submit"
          >
            <Send aria-hidden="true" className="size-4" />
            Gửi yêu cầu tư vấn
          </button>
          <p className="mt-3 text-xs leading-5 text-[#607071]">
            Thông tin được DST Group sử dụng để liên hệ, tư vấn và đề xuất hạng mục
            phù hợp với nhu cầu của doanh nghiệp.{" "}
            <a className="font-semibold text-[#9a651f] underline-offset-4 hover:underline" href="#top">
              Chính sách bảo mật
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
