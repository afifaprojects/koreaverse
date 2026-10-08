"use client";

import { Flame, Utensils, DollarSign } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Badge from "@/components/common/Badge";
import { foods } from "@/data/foods";
import { useCurrency } from "@/context/CurrencyContext";

export default function FoodPage() {
  const { formatRange } = useCurrency();
  return (
    <>
      <PageBanner
        badge="Korean Food"
        title={
          <>
            A Journey Through <span className="text-gradient">Korean Cuisine</span>
          </>
        }
        description="From sizzling Korean BBQ to comforting stews and vibrant street food, discover the flavors of South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Popular Dishes"
            title="Must-Try Korean Foods"
            description="These iconic dishes are essential to any Korean food experience."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {foods.map((food, i) => (
              <FadeIn key={food.name} delay={i * 0.06}>
                <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`bg-gradient-to-br ${food.gradient} relative flex h-32 items-center justify-center`}>
                    <span className="text-5xl">🍜</span>
                    <Badge variant="amber" className="absolute left-3 top-3 !bg-white/90 !text-slate-800">
                      {food.category}
                    </Badge>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-bold text-slate-900">{food.name}</h3>
                      <span className="text-lg font-bold text-slate-400">{food.korean}</span>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{food.description}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm">
                      <span className="flex items-center gap-1 text-slate-500">
                        <Flame size={16} className="text-red-600" />
                        {food.spiceLevel}
                      </span>
<span className="flex items-center gap-1 font-semibold text-blue-700">
                        <DollarSign size={16} />
                        {formatRange(food.price)}
                      </span>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
