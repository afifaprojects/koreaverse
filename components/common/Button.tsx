import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline" | "gradient" | "pink" | "amber";
};

export default function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const baseStyle =
    "inline-flex min-h-11 items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition duration-200 ease-out active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 sm:text-base";

  const variants = {
    primary:
      "bg-blue-800 text-white shadow-md shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-lg",

    secondary:
      "bg-rose-700 text-white shadow-md shadow-rose-900/15 hover:-translate-y-0.5 hover:bg-rose-800 hover:shadow-lg",

    gradient:
      "bg-blue-800 text-white shadow-md shadow-blue-900/15 hover:-translate-y-0.5 hover:bg-blue-900 hover:shadow-lg",

    pink:
      "bg-rose-700 text-white shadow-md shadow-rose-900/15 hover:bg-rose-800 hover:shadow-lg",

    amber:
      "bg-blue-700 text-white shadow-md shadow-blue-900/15 hover:bg-blue-800 hover:shadow-lg",

    outline:
      "border border-slate-300 bg-white text-slate-800 hover:border-blue-300 hover:bg-blue-50",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
