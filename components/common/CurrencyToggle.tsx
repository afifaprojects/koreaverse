"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useCurrency, CurrencyCode, EMOJIS } from "@/context/CurrencyContext";

const OPTIONS: { code: CurrencyCode; label: string }[] = [
  { code: "USD", label: "USD" },
  { code: "INR", label: "INR" },
  { code: "KRW", label: "Won" },
];

export default function CurrencyToggle() {
  const { currency, setCurrency } = useCurrency();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      {/* Cute pill button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="group flex min-h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-2.5 text-sm font-semibold text-slate-700 transition duration-200 hover:border-blue-300 hover:bg-blue-50/70 hover:text-blue-800 sm:px-3"
        aria-label="Switch currency"
      >
        <span className="inline-block transition-transform duration-300 group-hover:scale-125 group-hover:rotate-12">
          {EMOJIS[currency]}
        </span>
        <span className="hidden sm:inline">{currency === "KRW" ? "Won" : currency}</span>
        <ChevronDown
          size={14}
          className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="animate-pop-in absolute right-0 top-full mt-2 w-36 overflow-hidden rounded-2xl border border-slate-200 bg-white p-1.5 shadow-xl">
          {OPTIONS.map((opt) => {
            const active = opt.code === currency;
            return (
              <button
                key={opt.code}
                onClick={() => {
                  setCurrency(opt.code);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold transition-all duration-200 ${
                  active
                    ? "bg-gradient-to-r from-blue-600 to-red-500 text-white"
                    : "text-slate-700 hover:bg-blue-50"
                }`}
              >
                <span className="animate-bounce-soft text-base">{EMOJIS[opt.code]}</span>
                {opt.label}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
