import { processSteps } from "../data/site";
import { SectionHeading } from "./SectionHeading";

export function ProcessSection() {
  return (
    <section className="section-shell bg-[#f6f3ec] py-20 md:py-28" id="quy-trinh">
      <div className="content-width">
        <SectionHeading
          align="center"
          description="Quy trình được chia thành các bước rõ ràng để đội ngũ và khách hàng cùng theo dõi tiến độ, chi phí và kết quả."
          eyebrow="Quy trình"
          title={
            <>
              Làm rõ mục tiêu trước khi triển khai, tối ưu trong suốt{" "}
              <span className="rounded-xl bg-gradient-to-r from-[#e09d37] to-[#245354] bg-clip-text text-transparent">
                chiến dịch.
              </span>
            </>
          }
        />

        <div className="mx-auto mt-8 grid max-w-4xl gap-3 sm:grid-cols-3">
          {["Rõ mục tiêu", "Đúng kênh", "Tối ưu liên tục"].map((item) => (
            <div
              className="rounded-xl border border-[#183f40]/10 bg-white/80 px-5 py-4 text-center text-sm font-semibold text-[#244d4e] shadow-sm"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step) => (
            <article
              className="grid min-h-[214px] grid-cols-[72px_1fr] rounded-xl border border-[#183f40]/10 bg-white p-5 shadow-sm"
              key={step.step}
            >
              <div className="flex size-14 items-center justify-center rounded-xl bg-gradient-to-br from-[#e09d37] via-[#c98727] to-[#20484a] text-lg font-semibold text-white">
                {step.step}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#173f40]">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#5e7070]">
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
