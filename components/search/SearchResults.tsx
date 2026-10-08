"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Search, X } from "lucide-react";
import Container from "@/components/common/Container";
import { searchItems } from "@/data/search";

type SearchResultsProps = { initialQuery: string };

export default function SearchResults({ initialQuery }: SearchResultsProps) {
  const [query, setQuery] = useState(initialQuery);
  const normalizedQuery = query.trim().toLocaleLowerCase();
  const results = useMemo(() => {
    if (!normalizedQuery) return [];
    return searchItems.filter((item) =>
      `${item.title} ${item.category} ${item.description} ${item.keywords ?? ""}`
        .toLocaleLowerCase()
        .includes(normalizedQuery)
    );
  }, [normalizedQuery]);

  return (
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-rose-50/60 py-14 sm:py-20">
        <Container>
          <p className="text-sm font-bold uppercase tracking-wider text-blue-800">KoreaVerse search</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-5xl">Find your next step in Korea</h1>
          <p className="mt-4 max-w-2xl leading-7 text-slate-600">Search universities, scholarships, cities, travel, Korean learning, and more.</p>
          <form action="/search" method="get" role="search" className="mt-7 flex max-w-3xl items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
            <Search size={20} className="ml-3 shrink-0 text-slate-400" aria-hidden="true" />
            <input
              type="search"
              name="q"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              aria-label="Search KoreaVerse"
              placeholder="Try Seoul, GKS, engineering, TOPIK..."
              className="h-12 min-w-0 flex-1 bg-transparent text-slate-900 outline-none placeholder:text-slate-400"
            />
            {query && (
              <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700">
                <X size={18} />
              </button>
            )}
            <button type="submit" className="min-h-11 shrink-0 rounded-xl bg-blue-800 px-5 font-semibold text-white transition hover:bg-blue-900">Search</button>
          </form>
        </Container>
      </section>

      <section className="py-12 sm:py-16">
        <Container>
          {!normalizedQuery ? (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <Search size={28} className="mx-auto text-blue-700" />
              <h2 className="mt-4 text-xl font-bold text-slate-900">Search across KoreaVerse</h2>
              <p className="mt-2 text-slate-600">Enter a university, scholarship, destination, or learning topic above.</p>
            </div>
          ) : results.length ? (
            <>
              <p className="mb-5 text-sm font-medium text-slate-500" aria-live="polite">{results.length} {results.length === 1 ? "result" : "results"} for <span className="font-semibold text-slate-800">“{query}”</span></p>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                {results.map((item) => (
                  <Link key={`${item.category}-${item.title}`} href={item.href} className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md sm:p-6">
                    <span className="text-xs font-bold uppercase tracking-wider text-rose-700">{item.category}</span>
                    <h2 className="mt-2 flex items-center justify-between gap-4 text-lg font-bold text-slate-900 group-hover:text-blue-800">
                      {item.title}<ArrowRight size={18} className="shrink-0 text-slate-400 transition group-hover:translate-x-1 group-hover:text-blue-800" />
                    </h2>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <div className="rounded-3xl border border-slate-200 bg-white px-6 py-12 text-center shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">No results for “{query}”</h2>
              <p className="mt-2 text-slate-600">Try a broader phrase, or search for a city, university, scholarship, or Korean learning topic.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
