import {
  Briefcase,
  GraduationCap,
  TrendingUp,
  Users,
  DollarSign,
  Globe,
  Check,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";

const jobs = [
  { title: "Technology & IT", desc: "Software, AI, and data roles in Korea's booming tech industry.", icon: TrendingUp },
  { title: "Teaching English", desc: "Popular opportunity for international graduates with English proficiency.", icon: GraduationCap },
  { title: "Business & Finance", desc: "Roles with chaebols, startups, and global firms in Seoul.", icon: Briefcase },
  { title: "Research & Academia", desc: "Research positions at universities and think tanks.", icon: Users },
  { title: "Startups", desc: "Korea's vibrant startup ecosystem offers dynamic opportunities.", icon: Globe },
  { title: "Korean Companies", desc: "Work for global brands like Samsung, LG, and Hyundai.", icon: DollarSign },
];

const tips = [
  "Learn basic Korean (TOPIK Level 2-3) to stand out",
  "Build a strong LinkedIn and network online",
  "Attend university career fairs",
  "Apply for the D-10 job seeker visa after graduation",
  "Leverage internships during your studies",
  "Tailor your resume to Korean standards",
];

export default function JobsPage() {
  return (
    <>
      <PageBanner
        badge="Jobs & Career"
        title={
          <>
            Build Your Career in <span className="text-gradient">South Korea</span>
          </>
        }
        description="Explore career opportunities available to international students and graduates in South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Career Opportunities"
            title="Job Opportunities in Korea"
            description="Discover the sectors and roles where international talent is in demand."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {jobs.map((job, i) => {
              const Icon = job.icon;
              return (
                <FadeIn key={job.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{job.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{job.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Tips to Land a Job in Korea
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  International graduates can succeed in the Korean job market
                  with the right preparation and strategy.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-3">
                {tips.map((tip) => (
                  <div key={tip} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                    <Check size={18} className="mt-0.5 shrink-0 text-blue-600" />
                    <span className="text-sm font-medium text-slate-700">{tip}</span>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
