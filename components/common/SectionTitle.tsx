import { ReactNode } from "react";

type SectionTitleProps = {
  badge?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
};

export default function SectionTitle({
  badge,
  title,
  description,
  align = "center",
}: SectionTitleProps) {
  return (
<div
      className={`mx-auto mb-10 max-w-4xl sm:mb-12 ${
        align === "center" ? "text-center" : "text-left"
      }`}
    >
      {badge && (
        <span className="mb-4 inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-blue-800">
          {badge}
        </span>
      )}

      <h2 className="text-balance text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem]">
        {title}
      </h2>

      {description && (
        <p className={`${align === "center" ? "mx-auto" : ""} mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8`}>
          {description}
        </p>
      )}
    </div>
  );
}
