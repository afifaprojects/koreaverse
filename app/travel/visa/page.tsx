import { Check, Plane, Shield, Clock, AlertCircle } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const visaTypes = [
  { name: "C-1 (Tourist)", desc: "For tourism and short visits. Usually valid for 90 days.", icon: Plane },
  { name: "D-2 (Study)", desc: "For international students pursuing degrees in Korea.", icon: Shield },
  { name: "D-4 (Language)", desc: "For students enrolled in Korean language programs.", icon: Clock },
  { name: "E-2 (Teaching)", desc: "For English teachers at schools and language institutes.", icon: Check },
];

export default function TravelVisaPage() {
  return (
    <>
      <PageBanner
        badge="Travel Visa"
        title={
          <>
            Korean <span className="text-gradient">Visas</span>
          </>
        }
        description="Understanding the visa types and requirements for traveling to South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Visa Types"
            title="Common Korean Visa Types"
            description="Choose the right visa for your purpose of visit."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visaTypes.map((v, i) => {
              const Icon = v.icon;
              return (
                <FadeIn key={v.name} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{v.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{v.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-12 rounded-3xl bg-gradient-to-br from-blue-600 to-red-600 p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <AlertCircle size={24} /> Visa-Free Travel
            </h2>
            <p className="mt-3 max-w-3xl text-white/85">
              Citizens of many countries, including the US, UK, most EU nations,
              Canada, Australia, and Japan, can enter Korea visa-free for tourism
              for up to 90 days. Always check the latest requirements with the
              Korean embassy in your country.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
