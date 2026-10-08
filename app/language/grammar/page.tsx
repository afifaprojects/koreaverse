import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

const grammarTopics = [
  {
    title: "Sentence Structure",
    desc: "Korean follows Subject-Object-Verb (SOV) word order, unlike English.",
    example: "저는 사과를 먹어요 (I eat an apple)",
    level: "Beginner",
  },
  {
    title: "Particles",
    desc: "Particles like 은/는, 이/가, 을/를 mark grammatical roles in sentences.",
    example: "저는 학생이에요 (I am a student)",
    level: "Beginner",
  },
  {
    title: "Verb Conjugation",
    desc: "Korean verbs change based on tense, formality, and politeness level.",
    example: "가다 → 가요 → 갔어요 (go)",
    level: "Intermediate",
  },
  {
    title: "Honorifics",
    desc: "Korean has a complex honorific system that reflects social hierarchy.",
    example: "밥을 먹다 vs 진지를 드시다 (to eat)",
    level: "Advanced",
  },
  {
    title: "Politeness Levels",
    desc: "Formal (합니다체) and informal (해요체) speech levels are essential.",
    example: "감사합니다 vs 고마워요 (thank you)",
    level: "Intermediate",
  },
  {
    title: "Connectors",
    desc: "Learn how to connect clauses with 그리고, 하지만, 그래서, etc.",
    example: "비가 오지만 나가요 (It's raining but I'm going out)",
    level: "Intermediate",
  },
];

export default function GrammarPage() {
  return (
    <>
      <PageBanner
        badge="Korean Grammar"
        title={
          <>
            Understand <span className="text-gradient">Korean Grammar</span>
          </>
        }
        description="Grammar is the backbone of the Korean language. Master these essential patterns step by step."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Grammar Topics"
            title="Essential Grammar Concepts"
            description="Explore the fundamental grammar patterns you need to build Korean sentences."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grammarTopics.map((topic, i) => (
              <FadeIn key={topic.title} delay={i * 0.08}>
                <div className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <BookOpen size={22} />
                    </div>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                      {topic.level}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{topic.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-6 text-slate-600">{topic.desc}</p>
                  <div className="mt-4 rounded-xl bg-slate-50 p-3">
                    <p className="text-sm font-semibold text-slate-800">{topic.example}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/language">
              <Button variant="outline">
                Back to Language
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
