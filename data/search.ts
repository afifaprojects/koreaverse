import { cities } from "@/data/cities";
import { newsArticles } from "@/data/news";
import { scholarships } from "@/data/scholarships";
import { universities } from "@/data/universities";
import { learningResources } from "@/data/learningResources";

export type SearchItem = {
  title: string;
  category: string;
  description: string;
  href: string;
  keywords?: string;
};

export const searchItems: SearchItem[] = [
  ...universities.map((university) => ({
    title: university.name,
    category: "University",
    description: `${university.description} City: ${university.city}.`,
    href: university.href,
    keywords: `${university.koreanName} ${university.type}`,
  })),
  ...scholarships.map((scholarship) => ({
    title: scholarship.name,
    category: "Scholarship",
    description: scholarship.description,
    href: scholarship.officialWebsite,
    keywords: `${scholarship.provider} ${scholarship.type} ${scholarship.degreeLevel.join(" ")}`,
  })),
  ...cities.map((city) => ({
    title: city.name,
    category: "City",
    description: `${city.description} Attractions: ${city.attractions.join(", ")}.`,
    href: city.href,
    keywords: `${city.koreanName} ${city.region} ${city.category}`,
  })),
  ...learningResources.map((resource) => ({
    title: resource.title,
    category: `Korean learning · ${resource.category}`,
    description: resource.description,
    href: resource.href,
    keywords: `${resource.level} ${resource.category}`,
  })),
  ...newsArticles.map((article) => ({
    title: article.title,
    category: article.category,
    description: article.excerpt,
    href: article.href,
    keywords: article.date,
  })),
  { title: "Learn Hangul", category: "Korean learning", description: "Start reading and writing Korean with the Hangul alphabet guide.", href: "/language/hangul", keywords: "alphabet consonants vowels" },
  { title: "Korean Grammar", category: "Korean learning", description: "Learn Korean sentence structure and common grammar patterns.", href: "/language/grammar", keywords: "language study" },
  { title: "Korean Vocabulary", category: "Korean learning", description: "Build practical Korean vocabulary with essential words and phrases.", href: "/language/vocabulary", keywords: "words phrases" },
  { title: "TOPIK Guide", category: "Korean learning", description: "Prepare for the Test of Proficiency in Korean with levels and study guidance.", href: "/language/topik", keywords: "exam test preparation" },
  { title: "Korea Travel Guide", category: "Travel", description: "Plan transportation, destinations, budgets, and practical travel details.", href: "/travel", keywords: "trip transport budget places" },
  { title: "Korean Food Guide", category: "Culture", description: "Discover Korean dishes, dining customs, and popular local food.", href: "/food", keywords: "cuisine dishes restaurants" },
  { title: "Korean Culture", category: "Culture", description: "Explore Korean customs, traditions, and contemporary culture.", href: "/culture", keywords: "traditions experiences" },
];
