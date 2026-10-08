import {
  Music,
  Film,
  Utensils,
  Landmark,
  Palette,
  Heart,
  Sparkles,
  Users,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const culture = [
  { title: "K-Pop", desc: "Global phenomenon with groups like BTS and Blackpink, shaping modern Korean identity.", icon: Music },
  { title: "K-Drama", desc: "Award-winning series that have captured global audiences on Netflix and beyond.", icon: Film },
  { title: "Korean Cuisine", desc: "From kimchi to Korean BBQ, a rich culinary tradition recognized worldwide.", icon: Utensils },
  { title: "Historic Palaces", desc: "Gyeongbokgung, Changdeokgung and more — windows into Korea's royal past.", icon: Landmark },
  { title: "Traditional Arts", desc: "Hanbok, calligraphy, and traditional music preserve Korea's heritage.", icon: Palette },
  { title: "Festivals & Holidays", desc: "Seollal, Chuseok, and vibrant festivals celebrated throughout the year.", icon: Sparkles },
  { title: "Warm Hospitality", desc: "Koreans are known for their generosity, respect, and community spirit.", icon: Heart },
  { title: "Modern Pop Culture", desc: "A unique blend of tradition and futuristic innovation in everyday life.", icon: Users },
];

export default function CulturePage() {
  return (
    <>
      <PageBanner
        badge="Korean Culture"
        title={
          <>
            Immerse in <span className="text-gradient">Korean Culture</span>
          </>
        }
        description="From K-pop to traditional palaces, explore the vibrant and fascinating culture of South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Culture"
            title="The Heart of Korean Culture"
            description="Discover the elements that make Korean culture unique, dynamic, and beloved around the world."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {culture.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 0.06}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
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
