import type { Metadata } from "next";
import LanguagePage from "@/app/language/page";

export const metadata: Metadata = {
  title: "Learn Korean | KoreaVerse",
  description: "Learn Hangul, Korean vocabulary and grammar, and prepare for TOPIK with KoreaVerse resources.",
};

export default function LearnKoreanPage() {
  return <LanguagePage />;
}
