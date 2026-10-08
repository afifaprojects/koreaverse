"use client";

import { Wallet, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { useCurrency } from "@/context/CurrencyContext";

const items = [
  { city: "Seoul", rent: [400, 900], food: [300, 500], total: [1200, 1800] },
  { city: "Busan", rent: [300, 700], food: [250, 450], total: [900, 1500] },
  { city: "Incheon", rent: [300, 650], food: [250, 400], total: [850, 1400] },
  { city: "Daegu", rent: [250, 600], food: [200, 400], total: [800, 1300] },
  { city: "Daejeon", rent: [250, 600], food: [200, 400], total: [800, 1300] },
  { city: "Jeju", rent: [300, 650], food: [250, 450], total: [900, 1500] },
];

export default function CostOfLivingPage() {
  const { format, currency } = useCurrency();

  return (
    <>
      <PageBanner
        badge="Cost of Living"
        title={
          <>
            Cost of Living by <span className="text-gradient">City</span> ✨
          </>
        }
        description="Compare the estimated monthly living costs across different Korean cities."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Comparison"
            title="Monthly Costs by City"
            description={`Approximate monthly costs for a single international student (in ${currency}).`}
          />

          <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full min-w-[640px] text-left">
              <thead className="bg-slate-50">
                <tr>
                  <th className="p-5 font-bold text-slate-900">City</th>
                  <th className="p-5 font-bold text-slate-900">Rent</th>
                  <th className="p-5 font-bold text-slate-900">Food</th>
                  <th className="p-5 font-bold text-slate-900">Total</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {items.map((item) => (
                  <tr key={item.city} className="cute-card transient-all hover:bg-blue-50/50">
                    <td className="p-5 font-semibold text-slate-800">{item.city}</td>
                    <td className="p-5 text-slate-600">
                      {format(item.rent[0], { decimals: 0 })}–{format(item.rent[1], { decimals: 0 })}
                    </td>
                    <td className="p-5 text-slate-600">
                      {format(item.food[0], { decimals: 0 })}–{format(item.food[1], { decimals: 0 })}
                    </td>
                    <td className="p-5 font-bold text-blue-700">
                      {format(item.total[0], { decimals: 0 })}–{format(item.total[1], { decimals: 0 })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="animate-gradient-shift mt-8 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-500 to-red-600 p-8 text-white">
            <p className="flex items-center gap-2 text-xl font-bold">
              <Sparkles size={20} className="animate-sparkle" /> Note
            </p>
            <p className="mt-2 max-w-3xl text-white/85">
              These are estimates. Actual costs depend on your lifestyle, housing
              type, and daily spending habits. Seoul is the most expensive city.
              💡 Switch currency in the navbar to view amounts in USD, INR or Won.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
