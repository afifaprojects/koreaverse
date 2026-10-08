"use client";

import Link from "next/link";
import {
  Train,
  MapPin,
  Utensils,
  Wallet,
  Luggage,
  Phone,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { cities } from "@/data/cities";

const transport = [
  { title: "Subway & Metro", desc: "Reliable, extensive metro systems in Seoul, Busan, and other cities.", icon: Train },
  { title: "KTX High-Speed Rail", desc: "Travel between major cities at up to 300 km/h.", icon: Train },
  { title: "Buses", desc: "Extensive intercity and local bus networks across the country.", icon: Train },
  { title: "Taxis", desc: "Affordable and safe, with Kakao T app integration.", icon: Train },
];

const places = cities.flatMap((city) => city.attractions.map((title) => ({ title, city: city.name, icon: MapPin })));

const emergency = [
  { label: "Emergency (Police)", number: "112", icon: Phone },
  { label: "Fire & Ambulance", number: "119", icon: Phone },
  { label: "Medical Hotline", number: "1339", icon: Phone },
  { label: "Tourist Helpline", number: "1330", icon: Phone },
];

export default function TravelPage() {
  return (
    <>
      <PageBanner
        badge="Travel Guide"
        title={
          <>
            Explore the <span className="text-gradient">Wonders</span> of South Korea
          </>
        }
        description="From efficient transportation to must-visit destinations, get the ultimate guide to traveling across South Korea."
      />

      {/* Transportation */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Transportation"
            title="Getting Around Korea"
            description="Korea has one of the world's best transportation systems. Here's how to get around."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {transport.map((t, i) => {
              const Icon = t.icon;
              return (
                <FadeIn key={t.title} delay={i * 0.1}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{t.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{t.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Places to Visit */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Places to Visit"
            title="Must-See Destinations"
            description="Top attractions that showcase Korea's history, culture, and natural beauty."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {places.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900">{p.title}</h3>
                      <p className="text-sm text-slate-500">{p.city}</p>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Food & Budget */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-700">
                  <Utensils size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Korean Food</h3>
                <p className="mt-3 leading-8 text-slate-600">
                  From sizzling Korean BBQ to comforting stews and street food,
                  Korea is a food lover&apos;s paradise. Don&apos;t miss kimchi, bibimbap,
                  tteokbokki, and samgyeopsal.
                </p>
                <Link href="/food" className="mt-6 inline-flex items-center gap-1 font-semibold text-blue-700">
                  Explore Korean Food <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                  <Wallet size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Travel Budget</h3>
<p className="mt-3 leading-8 text-slate-600">
                  Travel costs depend on dates, accommodation, location, and personal choices. Check current prices when planning your trip.
                </p>
                <Link href="/travel/budget" className="mt-6 inline-flex items-center gap-1 font-semibold text-blue-700">
                  View Budget Guide <ArrowRight size={16} />
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Emergency Numbers */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Emergency Numbers"
            title="Important Contacts"
            description="Keep these essential numbers handy during your travels in Korea."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {emergency.map((e, i) => {
              const Icon = e.icon;
              return (
                <FadeIn key={e.label} delay={i * 0.1}>
                  <div className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-700">
                      <Icon size={26} />
                    </div>
                    <h3 className="font-bold text-slate-900">{e.label}</h3>
                    <p className="mt-1 text-3xl font-extrabold text-blue-700">{e.number}</p>
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
