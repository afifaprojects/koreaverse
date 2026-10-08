"use client";

import { createContext, useCallback, useContext, useState, type ReactNode } from "react";

export type CurrencyCode = "USD" | "INR" | "KRW";

interface CurrencyContextValue {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  convert: (usd: number) => number;
  format: (usd: number, opts?: { decimals?: number }) => string;
  formatRange: (usdRange: string) => string;
  symbol: string;
  label: string;
}

// Indicative display rates. Replace these fixed estimates with a rates provider
// before using the converter for payments or financial decisions.
const RATES: Record<CurrencyCode, number> = { USD: 1, INR: 84, KRW: 1350 };
const SYMBOLS: Record<CurrencyCode, string> = { USD: "$", INR: "\u20B9", KRW: "\u20A9" };
const LABELS: Record<CurrencyCode, string> = { USD: "USD", INR: "INR", KRW: "Won" };
const FLAGS: Record<CurrencyCode, string> = {
  USD: "\u{1F1FA}\u{1F1F8}",
  INR: "\u{1F1EE}\u{1F1F3}",
  KRW: "\u{1F1F0}\u{1F1F7}",
};

export function convertCurrency(amount: number, from: CurrencyCode, to: CurrencyCode) {
  return (amount / RATES[from]) * RATES[to];
}

export function currencySymbol(currency: CurrencyCode) {
  return SYMBOLS[currency];
}

const CurrencyContext = createContext<CurrencyContextValue | null>(null);

export function CurrencyProvider({ children }: { children: ReactNode }) {
  const [currency, setCurrency] = useState<CurrencyCode>("USD");

  const convert = useCallback((usd: number) => usd * RATES[currency], [currency]);

  const format = useCallback(
    (usd: number, opts?: { decimals?: number }) => {
      const decimals = opts?.decimals ?? (currency === "USD" ? 2 : 0);
      return `${SYMBOLS[currency]}${convert(usd).toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}`;
    },
    [currency, convert]
  );

  const formatRange = useCallback(
    (usdRange: string) => {
      const values = usdRange.match(/[\d,.]+/g);
      if (!values?.length) return usdRange;
      const amounts = values.map((value) => Number(value.replace(/,/g, "")));
      if (amounts.some((amount) => !Number.isFinite(amount))) return usdRange;
      const suffix = usdRange.replace(/[\d,.$\u2013\u2014-]+/g, "").trim();
      return `${amounts.map((amount) => format(amount)).join("\u2013")}${suffix ? ` ${suffix}` : ""}`;
    },
    [format]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, convert, format, formatRange, symbol: SYMBOLS[currency], label: LABELS[currency] }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (!context) throw new Error("useCurrency must be used within a CurrencyProvider");
  return context;
}

export { FLAGS as EMOJIS };
