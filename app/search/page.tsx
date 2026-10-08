import type { Metadata } from "next";
import SearchResults from "@/components/search/SearchResults";

export const metadata: Metadata = {
  title: "Search KoreaVerse",
  description: "Search Korean universities, scholarships, cities, travel, and learning resources.",
};

type SearchPageProps = {
  searchParams: Promise<{ q?: string | string[] }>;
};

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = Array.isArray(params.q) ? params.q[0] ?? "" : params.q ?? "";
  return <SearchResults initialQuery={query} />;
}
