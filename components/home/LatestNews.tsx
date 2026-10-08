import Link from "next/link";
import { ArrowRight, Calendar, Newspaper } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { newsArticles } from "@/data/news";

export default function LatestNews() {
  const articles = newsArticles.slice(0, 3);

  return (
<section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="KoreaVerse resources"
          title="Guides and updates for your Korea plans"
          description="Browse our locally maintained study, scholarship, university, and travel guides. This resource list is not a live news feed."
        />

<div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {articles.map((article, i) => (
            <FadeIn key={article.id} delay={i * 0.1}>
              <Link href={article.href} className="group block h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  {/* Image area */}
                  <div className={`bg-gradient-to-br ${article.gradient} relative h-44`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Newspaper size={42} className="text-white/85" aria-hidden="true" />
                    </div>
                    <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                      {article.category}
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                      <Calendar size={14} /> {article.date}
                    </div>
                    <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-indigo-700">
                      {article.title}
                    </h3>
                    <p className="mb-5 text-sm leading-6 text-slate-600">
                      {article.excerpt}
                    </p>
                    <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-indigo-700">
                        View guide
                      <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/news">
            <Button variant="outline">
              Browse all resources
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
}
