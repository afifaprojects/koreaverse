export interface LearningResource {
  id: string;
  title: string;
  category: "Hangul" | "Vocabulary" | "Grammar" | "Reading" | "Listening" | "TOPIK" | "Beginner Korean" | "Korean numbers" | "Study resources";
  level: "Beginner" | "Intermediate" | "All levels";
  description: string;
  href: string;
  /** These entries link to KoreaVerse learning pages, not external certifications. */
  source: "KoreaVerse";
}

export const learningResources: LearningResource[] = [
  { id: "hangul", title: "Hangul alphabet", category: "Hangul", level: "Beginner", description: "Learn the Korean writing system with consonant and vowel reference charts.", href: "/language/hangul", source: "KoreaVerse" },
  { id: "vocabulary", title: "Korean vocabulary", category: "Vocabulary", level: "Beginner", description: "Review common Korean words with romanization and English meanings.", href: "/language/vocabulary", source: "KoreaVerse" },
  { id: "grammar", title: "Korean grammar", category: "Grammar", level: "Beginner", description: "Explore introductory Korean grammar and sentence patterns.", href: "/language/grammar", source: "KoreaVerse" },
  { id: "daily-words", title: "Daily words", category: "Vocabulary", level: "Beginner", description: "Study a small selection of everyday Korean vocabulary.", href: "/language/daily-words", source: "KoreaVerse" },
  { id: "flashcards", title: "Vocabulary flashcards", category: "Beginner Korean", level: "Beginner", description: "Practice Korean words and phrases using interactive flashcards.", href: "/language/flashcards", source: "KoreaVerse" },
  { id: "quiz", title: "Korean practice quiz", category: "Beginner Korean", level: "Beginner", description: "Check recall of Hangul and introductory Korean vocabulary.", href: "/language/quiz", source: "KoreaVerse" },
  { id: "topik", title: "TOPIK overview", category: "TOPIK", level: "All levels", description: "Read an introduction to TOPIK levels and preparation topics.", href: "/language/topik", source: "KoreaVerse" },
  { id: "topik-guide", title: "TOPIK study guide", category: "Study resources", level: "All levels", description: "Use the KoreaVerse TOPIK guide to plan exam preparation.", href: "/tools/topik-guide", source: "KoreaVerse" },
  { id: "phrases", title: "Common Korean phrases", category: "Vocabulary", level: "Beginner", description: "Review common expressions with written Korean and romanization.", href: "/language/flashcards", source: "KoreaVerse" },
];
