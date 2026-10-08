import { cities } from "@/data/cities";
import { learningResources } from "@/data/learningResources";
import { scholarships } from "@/data/scholarships";
import { universities } from "@/data/universities";

export interface Stat {
  number: number;
  suffix: string;
  title: string;
  description: string;
}

/** Counts are always derived from the same source records used by the pages. */
export const stats: Stat[] = [
  { number: universities.length, suffix: "", title: "Universities", description: "Listed with official university links" },
  { number: scholarships.length, suffix: "", title: "Scholarships", description: "Named government programs" },
  { number: cities.length, suffix: "", title: "Major Cities", description: "Destinations in South Korea" },
  { number: learningResources.length, suffix: "", title: "Learning Resources", description: "KoreaVerse learning guides" },
];
