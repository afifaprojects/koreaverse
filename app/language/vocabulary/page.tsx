import { BookOpenText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { languageData } from "@/data/language";

export default function VocabularyPage() {
  return (
    <>
      <PageBanner
        badge="Korean Vocabulary"
        title={
          <>
            Build Your <span className="text-gradient">Vocabulary</span>
          </>
        }
        description="Start with these essential Korean words and phrases to build a strong foundation."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Essential Words"
            title="Essential Korean Vocabulary"
            description="Learn the most common and useful Korean words for daily life."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {languageData.essentialWords.map((word, i) => (
              <FadeIn key={word.korean} delay={i * 0.06}>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div>
                    <p className="text-2xl font-bold text-slate-900">{word.korean}</p>
                    <p className="text-sm text-slate-500">{word.romanization}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-slate-700">{word.english}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Common Phrases"
            title="Useful Korean Phrases"
            description="These phrases will help you in everyday conversations."
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {languageData.commonPhrases.map((p, i) => (
              <FadeIn key={p.korean} delay={i * 0.04}>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5">
                  <div>
                    <p className="text-lg font-bold text-slate-900">{p.korean}</p>
                    <p className="text-sm text-slate-500">{p.romanization}</p>
                  </div>
                  <p className="font-medium text-slate-700">{p.english}</p>
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
