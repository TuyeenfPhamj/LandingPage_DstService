import type { ReactNode } from "react";

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  tone = "light",
}: SectionHeadingProps) {
  const isDark = tone === "dark";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p
        className={`mb-3 text-sm font-semibold uppercase ${
          isDark ? "text-[#f4c77f]" : "text-[#b87924]"
        }`}
      >
        {eyebrow}
      </p>
      <h2
        className={`text-balance text-3xl font-semibold leading-tight md:text-5xl ${
          isDark ? "text-white" : "text-[#173f40]"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`mt-5 text-base leading-7 md:text-lg ${
            isDark ? "text-white/78" : "text-[#5e7070]"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
