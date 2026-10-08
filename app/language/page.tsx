import Link from "next/link";
import {
  PenLine,
  BookOpen,
  BookOpenText,
  Award,
  Layers,
  HelpCircle,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

import { learningResources } from "@/data/learningResources";

const resourceIcons = {
  "Hangul": PenLine,
  "Vocabulary": BookOpenText,
  "Grammar": BookOpen,
  "Reading": BookOpen,
  "Listening": BookOpen,
  "TOPIK": Award,
  "Beginner Korean": Layers,
  "Korean numbers": BookOpenText,
  "Study resources": HelpCircle,
};

export default function LanguagePage() {
  return (
    <>
      <PageBanner
        badge="Learn Korean"
        title={
          <>
            Master the <span className="text-gradient">Korean Language</span>
          </>
        }
        description="Explore KoreaVerse learning resources, from Hangul to TOPIK preparation."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Learning Resources"
            title="Available learning resources"
            description="Browse the KoreaVerse learning guides and practice activities currently available."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {learningResources.map((resource, i) => {
              const Icon = resourceIcons[resource.category];
              return (
                <FadeIn key={resource.id} delay={i * 0.08}>
                  <Link href={resource.href} className="group block h-full">
                    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="bg-gradient-to-br from-blue-700 to-indigo-800 p-6 text-white">
                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                          <Icon size={28} />
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col p-6">
                        <h3 className="text-xl font-bold text-slate-900">{resource.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{resource.description}</p>
                        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-blue-700">
                          {resource.level} · {resource.category}
                          <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="pb-16 sm:pb-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-red-600 p-10 text-center text-white sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Learn Korean?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Start with Hangul today and build your foundation for TOPIK and
              everyday conversations.
            </p>
            <Link href="/language/hangul" className="mt-8 inline-block">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Start with Hangul
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
