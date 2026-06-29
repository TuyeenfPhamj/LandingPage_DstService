import type { LucideIcon } from "lucide-react";

interface GradientIconProps {
  icon: LucideIcon;
  label: string;
  className?: string;
  tone?: "light" | "dark";
}

export function GradientIcon({
  icon: Icon,
  label,
  className = "",
  tone = "light",
}: GradientIconProps) {
  const isDark = tone === "dark";

  return (
    <span
      aria-label={label}
      className={`relative inline-flex size-11 shrink-0 items-center justify-center rounded-lg border ${
        isDark
          ? "border-white/18 bg-white/8 text-[#f4c77f]"
          : "border-[#183f40]/12 bg-[#f6f3ec] text-[#9a651f]"
      } ${className}`}
    >
      <Icon aria-hidden="true" className="size-5" strokeWidth={2} />
    </span>
  );
}
