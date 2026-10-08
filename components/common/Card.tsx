import { ReactNode } from "react";

type CardProps = {
  children: ReactNode;
  className?: string;
};

export default function Card({
  children,
  className = "",
}: CardProps) {
  return (
    <div
      className={`
        rounded-2xl
        border
        border-slate-200
        bg-white
        p-6
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:shadow-xl
        hover:shadow-indigo-200/50
        hover:border-indigo-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
