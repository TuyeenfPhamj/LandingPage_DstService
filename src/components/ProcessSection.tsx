import { processSteps } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-shell bg-[#f6f3ec] py-20 md:py-28" id="quy-trinh">
      <div className="content-width">
        <SectionHeading
          align="center"
          description="DST Group đánh giá hiện trạng doanh nghiệp trước khi đề xuất hạng mục ưu tiên, kế hoạch triển khai và chỉ số cần theo dõi. Khách hàng luôn nắm rõ việc đang thực hiện, mục tiêu của từng hạng mục và sản phẩm được bàn giao."
          eyebrow="Quy trình"
          title={
            <>
              DST không triển khai theo cảm tính. Mỗi kế hoạch bắt đầu từ việc
              làm rõ{" "}
              <span className="rounded-xl bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                mục tiêu kinh doanh cần đạt.
              </span>
            </>
          }
        />

        <div className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-3">
          {["Đánh giá hiện trạng", "Kế hoạch ưu tiên", "Triển khai + báo cáo"].map(
            (item) => (
              <span
                className="rounded-full border border-[#183f40]/12 bg-white/70 px-5 py-2.5 text-sm font-semibold text-[#244d4e]"
                key={item}
              >
                {item}
              </span>
            ),
          )}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <article
              className="grid min-h-[214px] grid-cols-[72px_1fr] rounded-xl border border-[#183f40]/10 bg-white p-5 shadow-sm"
              key={step.step}
            >
              <div className="flex size-14 items-center justify-center rounded-xl border border-[#e09d37]/28 bg-[#f8ead3] text-lg font-semibold text-[#9a651f]">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#173f40]">{step.title}</h3>
                <p className="mt-3 text-[15px] leading-7 text-[#5e7070]">
                  {step.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
