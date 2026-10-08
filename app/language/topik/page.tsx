import { Award, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

const levels = [
  { level: "TOPIK I", grade: "Level 1-2", desc: "Beginner level. Basic conversations and simple sentences.", score: "80+ / 200" },
  { level: "TOPIK II", grade: "Level 3-4", desc: "Intermediate level. Everyday and some academic language.", score: "120+ / 300" },
  { level: "TOPIK II", grade: "Level 5-6", desc: "Advanced level. Academic and professional fluency.", score: "200+ / 300" },
];

const tips = [
  "Take mock tests to get familiar with the format",
  "Focus on vocabulary and reading comprehension",
  "Practice with past papers",
  "Improve your listening with Korean media",
  "LEarn writing formats for the essay section",
];

export default function TopikPage() {
  return (
    <>
      <PageBanner
        badge="TOPIK"
        title={
          <>
            Prepare for the <span className="text-gradient">TOPIK Exam</span>
          </>
        }
        description="The Test of Proficiency in Korean (TOPIK) measures your ability to use Korean. Essential for university admission and scholarships."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="TOPIK Levels"
            title="Understanding TOPIK Levels"
            description="TOPIK is divided into two tests with six total levels."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {levels.map((l, i) => (
              <FadeIn key={l.grade} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white">
                    <Award size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{l.level}</h3>
                  <span className="mt-1 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">
                    {l.grade}
                  </span>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{l.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">Passing: {l.score}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center text-2xl font-bold text-slate-900">Preparation Tips</h2>
            <div className="mt-6 space-y-3">
              {tips.map((tip) => (
                <FadeIn key={tip}>
                  <div className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-5">
                    <Check size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                    <span className="leading-7 text-slate-700">{tip}</span>
                  </div>
                </FadeIn>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link href="/language">
                <Button variant="outline">
                  Back to Language
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
