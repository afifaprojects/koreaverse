import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { quickAccess } from "@/data/quickAccess";

export default function QuickAccess() {
  return (
<section className="py-20 sm:py-24">
      <Container>
        <SectionTitle
          badge="Explore KoreaVerse"
          title="Everything You Need in One Place"
          description="Whether you're planning to study, travel, learn Korean, or explore Korean culture, everything starts here."
        />

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {quickAccess.map((item, i) => {
            const Icon = item.icon;
            return (
              <FadeIn key={item.title} delay={i * 0.06}>
                <Link href={item.href} className="group block h-full">
                  <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-200 hover:shadow-xl hover:shadow-indigo-200/50">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-100 via-pink-100 to-amber-100 text-indigo-700 transition-all duration-300 group-hover:from-indigo-600 group-hover:via-pink-600 group-hover:to-amber-500 group-hover:text-white">
                      <Icon size={30} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>

                    <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-700 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
