"use client";

import { useState } from "react";
import { ArrowDownUp } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Input from "@/components/common/Input";
import { useCurrency, type CurrencyCode, convertCurrency, currencySymbol, EMOJIS } from "@/context/CurrencyContext";

const options: { code: CurrencyCode; label: string }[] = [
  { code: "USD", label: "US Dollar" },
  { code: "INR", label: "Indian Rupee" },
  { code: "KRW", label: "South Korean Won" },
];

export default function CurrencyConverterPage() {
  const [amount, setAmount] = useState("100");
  const [inputCurrency, setInputCurrency] = useState<CurrencyCode>("USD");
  const { currency: outputCurrency } = useCurrency();
  const numericAmount = Number(amount);
  const validAmount = amount.trim() !== "" && Number.isFinite(numericAmount) && numericAmount >= 0;
  const converted = validAmount ? convertCurrency(numericAmount, inputCurrency, outputCurrency) : null;
  const rate = convertCurrency(1, inputCurrency, outputCurrency);

  return (
    <>
      <PageBanner badge="Currency Converter" title={<><span className="text-gradient">Currency</span> Converter</>} description="Convert between US dollars, Indian rupees, and South Korean won using the site's indicative estimates." />
      <section className="py-12 sm:py-16">
        <Container>
          <div className="mx-auto max-w-lg rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800"><ArrowDownUp size={23} /></div>
              <div><h2 className="text-xl font-bold text-slate-900">{inputCurrency} to {outputCurrency}</h2><p className="text-sm text-slate-500">Indicative estimate</p></div>
            </div>
            <fieldset>
              <legend className="mb-2 text-sm font-semibold text-slate-700">From currency</legend>
              <div className="grid grid-cols-3 gap-2">
                {options.map((option) => (
                  <button key={option.code} type="button" aria-pressed={inputCurrency === option.code} onClick={() => setInputCurrency(option.code)} className={`min-h-12 rounded-xl border px-2 py-2 text-xs font-semibold transition sm:text-sm ${inputCurrency === option.code ? "border-blue-800 bg-blue-800 text-white" : "border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-blue-50"}`}>
                    <span aria-hidden="true">{EMOJIS[option.code]}</span><span className="ml-1">{option.code}</span>
                  </button>
                ))}
              </div>
            </fieldset>
            <Input id="currency-amount" label={`Amount (${inputCurrency})`} type="number" inputMode="decimal" min="0" step="any" value={amount} onChange={(event) => setAmount(event.target.value)} className="mt-5" error={validAmount ? undefined : "Enter a valid amount of zero or more."} />
            <div aria-live="polite" className="mt-6 rounded-2xl bg-gradient-to-br from-blue-950 to-blue-800 p-6 text-center text-white">
              <p className="text-sm text-blue-100">Estimated amount in {outputCurrency}</p>
              {converted === null ? (
                <p className="mt-2 text-lg font-semibold">Enter a valid amount</p>
              ) : (
                <p className="mt-2 break-words text-3xl font-bold">{currencySymbol(outputCurrency)}{converted.toLocaleString("en-US", { maximumFractionDigits: outputCurrency === "USD" ? 2 : 0 })}</p>
              )}
              <p className="mt-3 text-xs leading-5 text-blue-100">Indicative rate: 1 {inputCurrency} ≈ {currencySymbol(outputCurrency)}{rate.toLocaleString("en-US", { maximumFractionDigits: 2 })} {outputCurrency}</p>
            </div>
            <p className="mt-4 text-center text-xs leading-5 text-slate-500">Rates are fixed estimates in this app and are not refreshed automatically. This converter is for reference only, not payments or financial decisions.</p>
          </div>
        </Container>
      </section>
    </>
  );
}
