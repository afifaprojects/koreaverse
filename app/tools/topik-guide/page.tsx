import { Award, Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

const levels = [
  { level: "TOPIK I", grade: "Level 1-2", desc: "Basic conversational skills. Understand simple sentences.", score: "80+ / 200" },
  { level: "TOPIK II", grade: "Level 3-4", desc: "Intermediate. Handle routine and some academic tasks.", score: "120+ / 300" },
  { level: "TOPIK II", grade: "Level 5-6", desc: "Advanced. Professional and academic fluency.", score: "200+ / 300" },
];

export default function TopikGuidePage() {
  return (
    <>
      <PageBanner
        badge="TOPIK Guide"
        title={
          <>
            Complete <span className="text-gradient">TOPIK Guide</span>
          </>
        }
        description="Your comprehensive guide to the TOPIK exam - levels, format, and preparation tips."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="TOPIK Levels"
            title="TOPIK Test Structure"
            description="Understand the different levels and requirements of the TOPIK exam."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {levels.map((l, i) => (
              <FadeIn key={l.grade} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-slate-200 bg-white p-7 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white">
                    <Award size={26} />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{l.level}</h3>
                  <span className="mt-1 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-bold text-blue-700">{l.grade}</span>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{l.desc}</p>
                  <p className="mt-4 text-sm font-semibold text-slate-500">Passing: {l.score}</p>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/language">
              <Button variant="outline">
                Go to Language Hub
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
