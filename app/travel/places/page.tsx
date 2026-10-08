import { MapPin, Star } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const places = [
  { name: "Gyeongbokgung Palace", city: "Seoul", desc: "The grandest of Seoul's five palaces, with beautiful gardens and the changing of the guard.", tag: "Historic" },
  { name: "N Seoul Tower", city: "Seoul", desc: "Iconic tower on Namsan Mountain offering panoramic views of the city and famous love locks.", tag: "Iconic" },
  { name: "Bukchon Hanok Village", city: "Seoul", desc: "Traditional Korean houses (hanok) nestled in the heart of the city.", tag: "Culture" },
  { name: "Myeongdong", city: "Seoul", desc: "Vibrant shopping and street food district popular with tourists.", tag: "Shopping" },
  { name: "Haeundae Beach", city: "Busan", desc: "Korea's most famous beach with soft sand and a lively boardwalk.", tag: "Nature" },
  { name: "DMZ & Panmunjom", city: "Gyeonggi", desc: "The heavily guarded border zone between North and South Korea.", tag: "History" },
  { name: "Jeju Island", city: "Jeju", desc: "Volcanic island with stunning landscapes, waterfalls, and Hallasan mountain.", tag: "Nature" },
  { name: "Hongdae", city: "Seoul", desc: "Youthful district known for street performances, indie music, and nightlife.", tag: "Nightlife" },
];

export default function PlacesPage() {
  return (
    <>
      <PageBanner
        badge="Places to Visit"
        title={
          <>
            Must-Visit <span className="text-gradient">Places</span>
          </>
        }
        description="Explore the iconic landmarks, natural wonders, and vibrant districts across South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Destinations"
            title="Top Places to Visit in Korea"
            description="From historic palaces to stunning beaches, discover the best of South Korea."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {places.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.06}>
                <div className="group h-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="flex h-28 items-center justify-center bg-gradient-to-br from-blue-100 to-red-100">
                    <MapPin size={36} className="text-blue-700" />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between">
                      <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">{p.tag}</span>
                      <span className="flex items-center gap-1 text-sm font-semibold text-slate-500">
                        <Star size={14} className="text-amber-400" /> {p.city}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-slate-900">{p.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
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
