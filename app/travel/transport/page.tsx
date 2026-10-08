import { Bus, TrainFront, Plane, Car, Smartphone, Check } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const transport = [
  { name: "Subway / Metro", desc: "Fast, efficient and affordable. Seoul's subway is the best way to get around.", icon: TrainFront, tip: "Use T-money card for discounted fares" },
  { name: "Buses", desc: "Extensive network covering cities and rural areas. Two types: blue and green.", icon: Bus, tip: "Download Kakao Bus app for live tracking" },
  { name: "KTX High-Speed Rail", desc: "Travel between major cities at 300km/h. Seoul to Busan in ~2.5 hours.", icon: TrainFront, tip: "Book early for cheaper fares" },
  { name: "Taxis", desc: "Convenient and reasonably priced. Available day and night.", icon: Car, tip: "Use Kakao T app to book" },
  { name: "Domestic Flights", desc: "Fly between Seoul, Jeju, and Busan quickly.", icon: Plane, tip: "Jeju flights are very frequent" },
  { name: "T-money Card", desc: "Prepaid transit card usable on subway, bus, and taxi.", icon: Smartphone, tip: "Buy at any convenience store" },
];

export default function TransportPage() {
  return (
    <>
      <PageBanner
        badge="Transportation"
        title={
          <>
            Getting Around <span className="text-gradient">Korea</span>
          </>
        }
        description="Everything you need to know about Seoul's world-class public transportation system."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Transport Options"
            title="Transportation in Korea"
            description="Korea has one of the most efficient public transportation systems in the world."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {transport.map((t, i) => {
              const Icon = t.icon;
              return (
                <FadeIn key={t.name} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900">{t.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{t.desc}</p>
                    <div className="mt-4 flex items-start gap-2 rounded-xl bg-blue-50 p-3">
                      <Check size={16} className="mt-0.5 shrink-0 text-blue-700" />
                      <span className="text-xs font-medium text-blue-800">{t.tip}</span>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
