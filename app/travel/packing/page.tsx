import { Check, Luggage, AlertCircle } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const essentials = [
  "Passport & visa documents",
  "Printed copies of admission letter",
  "T-money card",
  "Universal power adapter (Type C/F)",
  "Seasonal clothing (4 seasons)",
  "Phonetically translated documents",
  "Korean KRW cash for first week",
  "Prescription medications",
  "Personal toiletries",
  "Portable charger",
];

const winter = [
  "Heavy winter coat",
  "Thermal layers",
  "Gloves, scarf & beanie",
  "Warm boots",
];

const dontBring = [
  "Large amounts of cash",
  "Illegal substances",
  "Banned food items (meat/dairy)",
  "Excessive valuables",
];

export default function PackingPage() {
  return (
    <>
      <PageBanner
        badge="Packing Guide"
        title={
          <>
            What to <span className="text-gradient">Pack</span>
          </>
        }
        description="A complete packing checklist to help you prepare for your journey to South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Essentials"
            title="Essential Items to Pack"
            description="Don't forget these important items for your trip to Korea."
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {essentials.map((item, i) => (
              <FadeIn key={item} delay={i * 0.04}>
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <Check size={20} className="shrink-0 text-emerald-500" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <Luggage size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Winter Essentials</h3>
                <div className="mt-4 space-y-3">
                  {winter.map((w) => (
                    <div key={w} className="flex items-center gap-3">
                      <Check size={18} className="shrink-0 text-blue-600" />
                      <span className="text-sm text-slate-700">{w}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700">
                  <AlertCircle size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900">Don&apos;t Bring</h3>
                <div className="mt-4 space-y-3">
                  {dontBring.map((d) => (
                    <div key={d} className="flex items-center gap-3">
                      <AlertCircle size={18} className="shrink-0 text-red-600" />
                      <span className="text-sm text-slate-700">{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
