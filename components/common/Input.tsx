import { InputHTMLAttributes, ReactNode, useId } from "react";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string;
  icon?: ReactNode;
  error?: string;
};

export default function Input({
  label,
  icon,
  error,
  className = "",
  ...props
}: InputProps) {
  const generatedId = useId();
  const inputId = props.id ?? generatedId;
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={inputId} className="mb-2 block text-sm font-medium text-slate-700">
          {label}
        </label>
      )}

      <div className="relative">
        {icon && (
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">
            {icon}
          </span>
        )}

        <input
          id={inputId}
          className={`h-12 w-full rounded-xl border bg-white px-4 text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 ${
            icon ? "pl-11" : ""
          } ${error ? "border-red-500" : "border-slate-300"} ${className}`}
          {...props}
        />
      </div>

      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
}
