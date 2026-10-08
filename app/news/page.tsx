import Link from "next/link";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import { newsArticles } from "@/data/news";

export default function NewsPage() {
  return (
    <>
      <PageBanner
        badge="KoreaVerse resources"
        title={
          <>
            Korea information & <span className="text-gradient">updates</span>
          </>
        }
        description="Browse locally maintained Korea study, scholarship, and travel summaries. This page is not connected to a live news feed; verify time-sensitive announcements with official sources."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.map((article, i) => (
              <FadeIn key={article.id} delay={i * 0.08}>
                <Link href={article.href} className="group block h-full">
                  <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className={`bg-gradient-to-br ${article.gradient} relative flex h-44 items-center justify-center`}>
                      <Newspaper size={42} className="text-white/85" aria-hidden="true" />
                      <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-slate-800">
                        {article.category}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col p-6">
                      <div className="mb-3 flex items-center gap-2 text-xs text-slate-400">
                        <Calendar size={14} /> {article.date}
                      </div>
                      <h3 className="mb-3 text-lg font-bold leading-snug text-slate-900 transition group-hover:text-blue-700">
                        {article.title}
                      </h3>
                      <p className="mb-5 flex-1 text-sm leading-6 text-slate-600">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-blue-700">
                        Read More
                        <ArrowRight size={16} className="transition group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
