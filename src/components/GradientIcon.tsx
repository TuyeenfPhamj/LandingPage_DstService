import type { LucideIcon } from "lucide-react";

interface GradientIconProps {
  icon: LucideIcon;
  label: string;
  className?: string;
}

export function GradientIcon({ icon: Icon, label, className = "" }: GradientIconProps) {
  return (
    <span
      aria-label={label}
      className={`icon-gradient relative inline-flex size-12 shrink-0 items-center justify-center rounded-xl text-white ring-1 ring-white/45 ${className}`}
    >
      <span className="pointer-events-none absolute right-1.5 top-1.5 size-2 rounded-full bg-[#42d4ff]" />
      <span className="pointer-events-none absolute bottom-1.5 left-1.5 size-2 rounded-full bg-[#f36a5a]" />
      <Icon aria-hidden="true" className="size-5" strokeWidth={2.1} />
    </span>
  );
}
