"use client";

import { Wallet, Check, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { useCurrency } from "@/context/CurrencyContext";

const budgetItems = [
  { category: "Accommodation", monthly: [400, 900], note: "Goshiwon, dormitory or share-house" },
  { category: "Food", monthly: [300, 500], note: "Eating out + groceries" },
  { category: "Transportation", monthly: [50, 100], note: "T-money card, subway & bus" },
  { category: "Utilities", monthly: [50, 100], note: "Electricity, water, internet" },
  { category: "Phone & Internet", monthly: [30, 60], note: "Prepaid or contract SIM" },
  { category: "Miscellaneous", monthly: [100, 200], note: "Entertainment, shopping, personal" },
];

const tips = [
  "Use T-money for public transit discounts",
  "Cook at home to save on food costs",
  "Use student discounts at museums and theaters",
  "Shop at local markets like Namdaemun",
  "Track your spending with a budgeting app",
];

export default function BudgetPage() {
  const { format, currency } = useCurrency();

  return (
    <>
      <PageBanner
        badge="Cost of Living"
        title={
          <>
            Plan Your <span className="text-gradient">Budget</span> ✨
          </>
        }
        description="Understand the typical monthly living costs in South Korea to plan your finances effectively."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Monthly Budget"
            title="Estimated Monthly Costs in Korea"
            description={`These are typical monthly costs for an international student in Korea (in ${currency}).`}
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {budgetItems.map((item, i) => (
              <FadeIn key={item.category} delay={i * 0.08}>
                <div className="cute-card h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="animate-bob flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                    <Wallet size={24} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{item.category}</h3>
                  <p className="mt-1 text-2xl font-extrabold text-blue-700">
                    {format(item.monthly[0], { decimals: 0 })}–{format(item.monthly[1], { decimals: 0 })}
                  </p>
                  <p className="mt-2 text-sm text-slate-500">{item.note}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="animate-gradient-shift mt-12 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-500 to-red-600 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold">
              Total Estimated: {format(1000, { decimals: 0 })} – {format(1800, { decimals: 0 })} / month
            </h2>
            <p className="mt-3 max-w-2xl text-white/85">
              Your actual costs will vary based on your city, lifestyle, and housing
              choices. Seoul tends to be more expensive than smaller cities.
              💡 Switch currency in the navbar to view in USD, INR or Won.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="flex items-center justify-center gap-2 text-center text-2xl font-bold text-slate-900">
              <Sparkles size={22} className="animate-sparkle text-blue-600" />
              Money-Saving Tips
            </h2>
            <div className="mt-6 space-y-3">
              {tips.map((tip) => (
                <FadeIn key={tip}>
                  <div className="cute-card flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                    <Check size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span className="leading-7 text-slate-700">{tip}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
