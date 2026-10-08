export interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  excerpt: string;
  href: string;
  gradient: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "Complete Guide to Applying for the GKS Scholarship 2025",
    category: "Scholarships",
    date: "Feb 12, 2025",
    excerpt:
      "Everything you need to know about the Global Korea Scholarship application process, required documents, and key deadlines for 2025 intake.",
    href: "/scholarships/gks",
    gradient: "from-blue-600 to-indigo-700",
  },
  {
    id: 2,
    title: "TOPIK Exam Dates & Registration Guide for 2025",
    category: "Language",
    date: "Feb 8, 2025",
    excerpt:
      "Find out all the official TOPIK test dates, registration deadlines, and how to prepare effectively for each level.",
    href: "/language/topik",
    gradient: "from-red-600 to-rose-700",
  },
  {
    id: 3,
    title: "Top 10 Best Universities in South Korea for International Students",
    category: "Universities",
    date: "Feb 1, 2025",
    excerpt:
      "A comprehensive ranking of Korea's best universities taking into account academic reputation, international programs, and student satisfaction.",
    href: "/universities",
    gradient: "from-emerald-600 to-teal-700",
  },
  {
    id: 4,
    title: "Student Life in Seoul: What to Expect as an International Student",
    category: "Student Life",
    date: "Jan 25, 2025",
    excerpt:
      "From dorm life to night markets, discover the vibrant day-to-day experience of studying and living in Korea's capital.",
    href: "/study",
    gradient: "from-violet-600 to-purple-700",
  },
  {
    id: 5,
    title: "Essential Student Visa (D-2) Tips & Requirements 2025",
    category: "Visa",
    date: "Jan 18, 2025",
    excerpt:
      "A step-by-step guide to obtaining your D-2 student visa, including required documents, processing times, and common mistakes to avoid.",
    href: "/visa",
    gradient: "from-amber-600 to-orange-700",
  },
  {
    id: 6,
    title: "Korea Increases Support for International Students in STEM Fields",
    category: "Education News",
    date: "Jan 10, 2025",
    excerpt:
      "The Korean government announces new initiatives and expanded scholarships to attract more international students to science and technology programs.",
    href: "/news",
    gradient: "from-cyan-600 to-sky-700",
  },
];
