import { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "blue" | "red" | "green" | "amber" | "slate" | "pink" | "indigo" | "gradient";
  className?: string;
};

const variants: Record<string, string> = {
  blue: "bg-blue-100 text-blue-700 border-blue-200",
  red: "bg-red-100 text-red-700 border-red-200",
  green: "bg-emerald-100 text-emerald-700 border-emerald-200",
  amber: "bg-amber-100 text-amber-700 border-amber-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  pink: "bg-pink-100 text-pink-700 border-pink-200",
  indigo: "bg-indigo-100 text-indigo-700 border-indigo-200",
  gradient:
    "bg-gradient-to-r from-indigo-600 via-pink-500 to-amber-500 text-white border-transparent",
};

export default function Badge({
  children,
  variant = "blue",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-sm font-semibold ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
