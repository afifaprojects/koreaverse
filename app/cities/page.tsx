import { MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { cities, officialTourismUrl } from "@/data/cities";

export default function CitiesPage() {
  return (
    <>
      <PageBanner
        badge="Explore Cities"
        title={
          <>
            Discover <span className="text-gradient">Korean Cities</span>
          </>
        }
                description={`Explore ${cities.length} Korean cities and destinations. Use official tourism information to plan current visits.`}
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Popular Cities"
            title="Cities to Study, Live & Explore"
            description="Each city in South Korea offers a unique experience. Find the one that fits you best."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city, i) => (
              <FadeIn key={city.id} delay={i * 0.08}>
                <a id={city.id} href={city.href} className="relative block h-80 overflow-hidden rounded-2xl shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
                  <div className={`absolute inset-0 bg-gradient-to-br ${city.gradient}`} />
                  <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />

                  <div className="absolute inset-0 flex flex-col justify-between p-6 text-white">
                    <div className="flex items-start justify-between">
                      <span className="text-4xl font-bold">{city.koreanName}</span>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-white/70">{city.region}</p>
                      <h3 className="mt-1 text-3xl font-bold">{city.name}</h3>
                      <p className="mt-2 text-sm text-white/80">{city.description}</p>
                      <div className="mt-4 flex items-center gap-4 border-t border-white/20 pt-4 text-sm">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={16} /> {city.region}
                        </span>
                      </div>
                    </div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>
          <div className="mt-10 text-center"><a href={officialTourismUrl} target="_blank" rel="noreferrer" className="inline-flex min-h-11 items-center rounded-xl border border-blue-200 px-5 py-3 font-semibold text-blue-800 hover:bg-blue-50">Check official Korea Tourism Organization guides</a></div>
        </Container>
      </section>
    </>
  );
}
