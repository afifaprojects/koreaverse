import Link from "next/link";
import {
  Globe,
  GraduationCap,
  Landmark,
  Plane,
  BookOpen,
  Utensils,
  Briefcase,
  Film,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

const exploreItems = [
  { title: "Study in Korea", desc: "Admissions, requirements & student life.", icon: GraduationCap, href: "/study" },
  { title: "Scholarships", desc: "GKS, KOICA & university funding.", icon: Landmark, href: "/scholarships" },
  { title: "Universities", desc: "Korea's top-ranked institutions.", icon: Globe, href: "/universities" },
  { title: "Travel Guide", desc: "Visa, places & transportation.", icon: Plane, href: "/travel" },
  { title: "Learn Korean", desc: "Hangul, grammar & TOPIK.", icon: BookOpen, href: "/language" },
  { title: "Korean Culture", desc: "Traditions & modern lifestyle.", icon: Film, href: "/culture" },
  { title: "Korean Food", desc: "BBQ, kimchi & street food.", icon: Utensils, href: "/food" },
  { title: "Jobs & Career", desc: "Work opportunities & career.", icon: Briefcase, href: "/jobs" },
];

export default function AboutPage() {
  return (
    <>
      <PageBanner
        badge="Explore Korea"
        title={
          <>
            Discover <span className="text-gradient">Everything</span> About Korea
          </>
        }
        description="Your complete resource for studying, living, traveling, and experiencing South Korea. Explore all that KoreaVerse offers."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Explore"
            title="Explore KoreaVerse Sections"
            description="Dive into any section to get the information you need about South Korea."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {exploreItems.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.title} delay={i * 0.06}>
                  <Link href={item.href} className="group block h-full">
                    <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700 transition-all duration-300 group-hover:from-blue-600 group-hover:to-red-600 group-hover:text-white">
                        <Icon size={30} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{item.desc}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
