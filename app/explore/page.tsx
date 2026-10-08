"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Bus,
  Cherry,
  CircleHelp,
  Landmark,
  MapPin,
  Search,
  Sparkles,
  TrainFront,
  Utensils,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Button from "@/components/common/Button";
import Container from "@/components/common/Container";
import FadeIn from "@/components/common/FadeIn";
import SectionTitle from "@/components/common/SectionTitle";

import { cities } from "@/data/cities";

const destinations = cities;
const places = cities.flatMap((city) => city.attractions.map((name) => ({ name, city: city.name, type: city.category })));

const experiences = [
  {
    title: "Step into tradition",
    text: "Visit a palace, wander a hanok neighborhood, or try on a hanbok for the day.",
    icon: Landmark,
  },
  {
    title: "Find your K-culture moment",
    text: "Browse music shops, catch a live performance, or explore a neighborhood from your favorite show.",
    icon: Sparkles,
  },
  {
    title: "Slow down outdoors",
    text: "Walk a coastal trail, picnic by the river, or take a mountain path above the city.",
    icon: Cherry,
  },
];

const foods = ["Korean barbecue", "Bibimbap", "Kimchi jjigae", "Tteokbokki", "Hotteok", "Market snacks"];

export default function ExplorePage() {
  const [query, setQuery] = useState("");

  const filteredDestinations = useMemo(() => {
    const term = query.trim().toLocaleLowerCase();
    if (!term) return destinations;
    return destinations.filter((destination) =>
      [
        destination.name,
        destination.region,
        destination.category,
        destination.description,
        ...destination.attractions,
      ]
        .join(" ")
        .toLocaleLowerCase()
        .includes(term)
    );
  }, [query]);

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    document.getElementById("destinations")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <>
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50/70">
        <div className="pointer-events-none absolute -left-24 top-16 -z-10 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-rose-300/15 blur-3xl" />
        <Container>
          <div className="grid min-h-[540px] items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
            <div className="max-w-2xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/80 px-4 py-2 text-sm font-semibold text-blue-800 shadow-sm">
                <MapPin size={16} className="text-rose-600" />
                Your Korea, your way
              </div>
              <h1 className="text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Explore <span className="text-gradient">South Korea</span>
              </h1>
              <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                Browse city guides, landmarks, travel planning tips, and Korean culture from one place.
              </p>

              <form
                onSubmit={handleSearch}
                className="mt-8 flex max-w-xl items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_14px_40px_-26px_rgba(23,78,166,0.45)]"
              >
                <Search size={20} className="ml-3 shrink-0 text-slate-400" aria-hidden="true" />
                <input
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  aria-label="Search Korean destinations and attractions"
                  placeholder="Search cities, places, experiences..."
                  className="h-11 min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                />
                <button
                  type="submit"
                  className="min-h-11 shrink-0 rounded-xl bg-blue-800 px-4 text-sm font-semibold text-white transition hover:bg-blue-900 active:scale-[0.98] sm:px-6"
                >
                  Explore
                </button>
              </form>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href="#destinations">
                  <Button className="w-full sm:w-auto">
                    Explore places <ArrowDown className="ml-2" size={17} />
                  </Button>
                </a>
                <Link href="/travel">
                  <Button variant="outline" className="w-full sm:w-auto">
                    Plan your trip <ArrowRight className="ml-2" size={17} />
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative mx-auto grid w-full max-w-lg grid-cols-2 gap-3 sm:gap-4">
              <div className="col-span-2 flex min-h-40 flex-col justify-between rounded-3xl bg-gradient-to-br from-blue-950 via-blue-800 to-sky-700 p-6 text-white shadow-xl shadow-blue-950/10 sm:min-h-48 sm:p-8">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/15">
                  <Landmark size={23} />
                </span>
                <div>
                  <p className="text-sm font-medium text-white/75">Old stories, new energy</p>
                  <p className="mt-1 text-2xl font-bold sm:text-3xl">Find your Korea</p>
                </div>
              </div>
              <div className="flex min-h-32 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:min-h-36 sm:p-6">
                <Utensils className="text-rose-700" size={22} />
                <div>
                  <p className="font-bold text-slate-900">Taste the local life</p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Markets, cafés & comfort food</p>
                </div>
              </div>
              <div className="flex min-h-32 flex-col justify-between rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:min-h-36 sm:p-6">
                <TrainFront className="text-blue-800" size={22} />
                <div>
                  <p className="font-bold text-slate-900">Go a little further</p>
                  <p className="mt-1 text-xs text-slate-500 sm:text-sm">Easy journeys across Korea</p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="destinations" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle
            badge="Choose your next stop"
            title="Explore Korean cities and destinations"
            description={`Browse ${cities.length} destinations from the shared city directory, each with attractions and region details.`}
          />
          {filteredDestinations.length > 0 ? (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 xl:gap-6">
              {filteredDestinations.map((destination, index) => {
                const Icon = MapPin;
                return (
                  <FadeIn key={destination.id} delay={index * 0.05}>
                    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_8px_30px_-24px_rgba(15,23,42,0.4)] transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_20px_42px_-24px_rgba(23,78,166,0.3)]">
                      <div className={`relative flex min-h-44 flex-col justify-between overflow-hidden bg-gradient-to-br ${destination.gradient} p-6 text-white`}>
                        <div className="absolute -right-8 -top-10 h-36 w-36 rounded-full border border-white/15" />
                        <div className="absolute -bottom-16 right-14 h-40 w-40 rounded-full border border-white/10" />
                        <div className="relative flex items-start justify-between gap-4">
                          <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold tracking-wide text-white/90 backdrop-blur">
                            {destination.region}
                          </span>
                          <Icon size={21} className="text-white/80" aria-hidden="true" />
                        </div>
                        <div className="relative">
                          <h3 className="text-3xl font-bold tracking-tight">{destination.name}</h3>
                          <p className="mt-1 text-sm font-medium text-white/80">{destination.category}</p>
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-5 sm:p-6">
                        <p className="text-sm leading-6 text-slate-600">{destination.description}</p>
                        <div className="mt-5 flex flex-wrap gap-2">
                          {destination.attractions.map((highlight) => (
                            <span key={highlight} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-600">
                              {highlight}
                            </span>
                          ))}
                        </div>
                        <Link href="/cities" className="mt-6 inline-flex min-h-10 items-center gap-2 self-start rounded-lg px-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
                          City guide <ArrowUpRight size={16} />
                        </Link>
                      </div>
                    </article>
                  </FadeIn>
                );
              })}
            </div>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <CircleHelp size={28} className="mx-auto text-slate-400" />
              <p className="mt-3 font-semibold text-slate-800">No destinations match “{query}”</p>
              <p className="mt-1 text-sm text-slate-500">Try a city name, attraction, or region.</p>
              <button
                type="button"
                onClick={() => setQuery("")}
                className="mt-4 min-h-10 rounded-lg px-4 text-sm font-semibold text-blue-800 hover:bg-blue-50"
              >
                Clear search
              </button>
            </div>
          )}
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle
            badge="Make it memorable"
            title="Experiences beyond the itinerary"
            description="Leave room for the little discoveries: a neighborhood walk, a shared meal, or an unexpected view."
          />
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {experiences.map((experience, index) => {
              const Icon = experience.icon;
              return (
                <FadeIn key={experience.title} delay={index * 0.08}>
                  <article className="h-full rounded-3xl border border-slate-200 bg-slate-50/70 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:bg-white hover:shadow-lg sm:p-7">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800">
                      <Icon size={23} />
                    </span>
                    <h3 className="mt-5 text-xl font-bold tracking-tight text-slate-900">{experience.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{experience.text}</p>
                  </article>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section id="places" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
        <Container>
          <SectionTitle
            badge="Worth the stop"
            title="Famous places to add to your map"
            description="A few memorable landmarks to help shape your first Korea itinerary."
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((place, index) => (
              <FadeIn key={place.name} delay={index * 0.05}>
                <article className="h-full rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-md">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-700">{place.type}</span>
                  <h3 className="mt-3 font-bold leading-snug text-slate-900">{place.name}</h3>
                  <p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><MapPin size={14} />{place.city}</p>
                </article>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50/80 py-16 sm:py-20 lg:py-24">
        <Container>
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div>
              <SectionTitle
                align="left"
                badge="A taste of Korea"
                title="Come hungry. Leave with favorites."
                description="Korean food is regional, seasonal, and made for sharing. Start with a few classics and follow your curiosity."
              />
              <div className="flex flex-wrap gap-2.5">
                {foods.map((food) => (
                  <span key={food} className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm">{food}</span>
                ))}
              </div>
              <Link href="/food" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl px-3 font-semibold text-blue-800 transition hover:bg-blue-100/70">
                Discover Korean food <ArrowRight size={17} />
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-rose-50 text-rose-700"><CircleHelp size={22} /></span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-700">Before you go</p>
                  <h3 className="mt-1 text-xl font-bold text-slate-900">A few useful travel tips</h3>
                </div>
              </div>
              <ul className="mt-6 space-y-4">
                {[
                  [TrainFront, "Get a transit card", "A rechargeable card makes local buses and subway rides easier."],
                  [Bus, "Check the last departure", "Transit schedules vary by route, especially late at night and outside city centers."],
                  [MapPin, "Save key addresses", "Keep your accommodation and key stops saved for quick reference."],
                  [Utensils, "Explore local markets", "Markets are a great place to sample regional dishes and everyday favorites."],
                ].map(([Icon, title, description]) => {
                  const TipIcon = Icon as LucideIcon;
                  return (
                    <li key={title as string} className="flex items-start gap-3">
                      <TipIcon size={18} className="mt-0.5 shrink-0 text-blue-800" />
                      <div>
                        <p className="text-sm font-semibold text-slate-900">{title as string}</p>
                        <p className="mt-0.5 text-sm leading-5 text-slate-600">{description as string}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <Link href="/travel" className="mt-6 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-50 px-4 text-sm font-semibold text-blue-800 transition hover:bg-blue-100">
                Open the travel guide <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 sm:py-20">
        <Container>
          <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-7 text-white shadow-xl shadow-blue-950/15 sm:p-10 lg:flex-row lg:items-center lg:p-12">
            <div className="max-w-2xl">
              <p className="text-sm font-bold uppercase tracking-wider text-blue-200">Your next chapter starts here</p>
              <h2 className="mt-3 text-balance text-2xl font-bold leading-tight tracking-tight sm:text-3xl">Ready to turn inspiration into a Korea trip?</h2>
              <p className="mt-3 text-sm leading-6 text-blue-100 sm:text-base">Explore practical transport, budgeting, and destination guidance for your journey.</p>
            </div>
            <Link href="/travel" className="shrink-0">
              <Button variant="secondary" className="bg-white text-blue-900 shadow-none hover:bg-blue-50">
                Plan your trip <ArrowRight className="ml-2" size={17} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
