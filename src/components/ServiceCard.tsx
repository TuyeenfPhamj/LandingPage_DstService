import type { Service } from "../types/site";
import { GradientIcon } from "./GradientIcon";

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group flex h-full min-h-[314px] flex-col rounded-xl border border-[#183f40]/10 bg-white p-6 shadow-[0_18px_60px_rgba(24,63,64,0.08)] transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(24,63,64,0.12)]">
      <GradientIcon icon={service.icon} label={service.title} />
      <h3 className="mt-6 text-xl font-semibold text-[#173f40]">{service.title}</h3>
      <p className="mt-3 flex-1 text-sm leading-7 text-[#5e7070]">{service.description}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {service.items.map((item) => (
          <span
            className="rounded-full bg-[#f3eadb] px-3 py-1 text-xs font-medium text-[#7a501d]"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
