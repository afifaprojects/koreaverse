import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import QuickAccess from "@/components/home/QuickAccess";
import ScholarshipSection from "@/components/home/ScholarshipSection";
import PopularUniversities from "@/components/home/PopularUniversities";
import RoadmapTimeline from "@/components/home/RoadmapTimeline";
import PopularCities from "@/components/home/PopularCities";
import LatestNews from "@/components/home/LatestNews";
import FAQ from "@/components/home/FAQ";
import Newsletter from "@/components/home/Newsletter";

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <QuickAccess />
      <PopularUniversities />
      <ScholarshipSection />
      <RoadmapTimeline />
      <PopularCities />
      <LatestNews />
      <FAQ />
      <Newsletter />
    </>
  );
}
