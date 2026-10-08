import Link from "next/link";
import { MapPin, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { cities } from "@/data/cities";

export default function PopularCities() {
  return (
<section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="Popular Cities"
          title="Explore Korea's Most Vibrant Cities"
          description={`Browse ${cities.length} Korean cities and destinations, with attractions listed in the shared destination guide.`}
        />

<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cities.slice(0, 6).map((city, i) => (
            <FadeIn key={city.id} delay={i * 0.08}>
              <Link href={city.href} className="group block h-full">
                <div className="relative h-72 overflow-hidden rounded-2xl shadow-sm">
                  {/* Gradient background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient}`} />

                  {/* Decorative circles */}
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />

                  {/* Content */}
                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold">{city.koreanName}</span>
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
                        <ArrowUpRight size={20} />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white/70">{city.region}</p>
                      <h3 className="mt-1 text-3xl font-bold">{city.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{city.category}</p>

                      <div className="mt-4 flex items-center gap-4 border-t border-white/20 pt-4 text-sm">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={16} /> {city.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
