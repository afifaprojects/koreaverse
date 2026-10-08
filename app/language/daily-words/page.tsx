import { BookOpenText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { languageData } from "@/data/language";

export default function DailyWordsPage() {
  return (
    <>
      <PageBanner
        badge="Daily Words"
        title={
          <>
            Learn a New <span className="text-gradient">Word Daily</span>
          </>
        }
        description="Expand your Korean vocabulary one word at a time with these daily curations."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Daily Words"
            title="Your Daily Korean Words"
            description="Practice these common words to steadily build your vocabulary."
          />

          <div className="mx-auto max-w-3xl space-y-3">
            {languageData.essentialWords.map((word, i) => (
              <FadeIn key={word.korean} delay={i * 0.04}>
                <div className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {i + 1}
                    </div>
                    <div>
                      <p className="text-xl font-bold text-slate-900">{word.korean}</p>
                      <p className="text-sm text-slate-500">{word.romanization}</p>
                    </div>
                  </div>
                  <p className="font-semibold text-slate-700">{word.english}</p>
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
