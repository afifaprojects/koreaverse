import Link from "next/link";
import {
  FileText,
  GraduationCap,
  Calendar,
  ArrowRight,
  Globe,
  Languages,
  BookOpen,
  ScrollText,
  TrendingUp,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { universities } from "@/data/universities";
import { scholarships } from "@/data/scholarships";

const requirements = [
  {
    title: "Academic Transcripts",
    description:
      "Academic records may be requested. Confirm translation, certification, and submission requirements with each institution.",
    icon: ScrollText,
  },
  {
    title: "Academic history",
    description:
      "Admission criteria differ by institution, department, and degree level. Check the current admission guide.",
    icon: TrendingUp,
  },
  {
    title: "MOI (Medium of Instruction)",
    description:
      "Some programs request proof of language proficiency. Check the current requirements for your chosen program.",
    icon: Globe,
  },
  {
    title: "TOPIK Certificate",
    description:
      "Language test requirements vary by university and program. Confirm whether a TOPIK result is required.",
    icon: Languages,
  },
  {
    title: "English Test",
    description:
      "English proficiency documentation may be requested by some programs. Check the current admission guide.",
    icon: BookOpen,
  },
  {
    title: "Recommendation Letters",
    description:
      "Recommendation letters may be required. Confirm the number, format, and eligible referees with the institution.",
    icon: FileText,
  },
];

const admissionSteps = [
  {
    step: "01",
    title: "Research & Choose",
    description:
      "Research universities and programs that match your academic goals, budget, and career aspirations.",
  },
  {
    step: "02",
    title: "Prepare Documents",
    description:
      "Prepare documents listed in the university's current admission guide.",
  },
  {
    step: "03",
    title: "Submit Application",
    description:
      "Submit through the university or scholarship application channel before the published deadline.",
  },
  {
    step: "04",
    title: "Interview & Results",
    description:
      "Interview and result procedures vary by institution and program.",
  },
  {
    step: "05",
    title: "Visa & Arrival",
    description:
      "Receive your admission letter, apply for the D-2 student visa, and make arrangements for arrival.",
  },
];

const timeline = [
  { term: "Admission cycle", deadline: "Check official dates", note: "Dates vary by university and program" },
];

export default function StudyPage() {
  return (
    <>
      <PageBanner
        badge="Study in Korea"
        title={
          <>
            Begin Your <span className="text-gradient">Academic Journey</span>{" "}
            in South Korea
          </>
        }
        description="From admission requirements to document preparation, here's everything you need to know to study at top Korean universities."
      />

      {/* Admission Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Admission Process"
            title="How to Get Admitted"
            description="Follow this step-by-step admission process to increase your chances of getting into a Korean university."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {admissionSteps.map((s, i) => (
              <FadeIn key={s.step} delay={i * 0.1}>
                <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <span className="text-4xl font-extrabold text-blue-100">{s.step}</span>
                  <h3 className="mt-4 text-lg font-bold text-slate-900">{s.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{s.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-slate-50 py-16 sm:py-20">
        <Container>
          <SectionTitle badge="Study options" title="Start with the KoreaVerse directory" description="Compare university locations and browse named scholarship programs. Confirm current academic and funding details directly with each provider." />
          <div className="grid gap-8 lg:grid-cols-2">
            <div><h3 className="mb-4 text-xl font-bold text-slate-900">Universities</h3><div className="space-y-3">{universities.slice(0, 4).map((university) => <a key={university.id} href={university.officialWebsite} target="_blank" rel="noreferrer" className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 hover:border-blue-300"><span>{university.name}<span className="mt-1 block text-sm font-normal text-slate-500">{university.city}</span></span><Globe size={18} className="shrink-0 text-blue-700" aria-hidden="true" /></a>)}</div><Link href="/universities" className="mt-4 inline-flex min-h-10 items-center font-semibold text-blue-800">View all {universities.length} universities<ArrowRight size={16} className="ml-2" /></Link></div>
            <div><h3 className="mb-4 text-xl font-bold text-slate-900">Scholarships</h3><div className="space-y-3">{scholarships.map((scholarship) => <a key={scholarship.id} href={scholarship.officialWebsite} target="_blank" rel="noreferrer" className="flex min-h-16 items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white p-4 font-semibold text-slate-800 hover:border-blue-300"><span>{scholarship.name}<span className="mt-1 block text-sm font-normal text-slate-500">{scholarship.degreeLevel.join(", ")}</span></span><Globe size={18} className="shrink-0 text-blue-700" aria-hidden="true" /></a>)}</div><Link href="/scholarships" className="mt-4 inline-flex min-h-10 items-center font-semibold text-blue-800">View all listed programs<ArrowRight size={16} className="ml-2" /></Link></div>
          </div>
        </Container>
      </section>

      {/* Timeline & Key Dates */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <div>
                <Badge variant="red">Application Timeline</Badge>
                <h2 className="mt-4 text-3xl font-bold text-slate-900">
                  Key Application Deadlines
                </h2>
                <p className="mt-4 leading-8 text-slate-600">
                  Intake availability and application dates vary by university and program. Use the current official admission guide to plan your application.
                </p>

                <div className="mt-8 space-y-4">
                  {timeline.map((t) => (
                    <div
                      key={t.term}
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 p-5"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                          <Calendar size={22} />
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{t.term}</p>
                          <p className="text-sm text-slate-500">{t.note}</p>
                        </div>
                      </div>
                      <span className="rounded-full bg-red-100 px-4 py-2 text-sm font-semibold text-red-700">
                        {t.deadline}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-red-600 p-8 text-white sm:p-10">
                <h3 className="text-2xl font-bold">Pro Study Tip</h3>
                <p className="mt-4 leading-8 text-white/85">
                  Review the current university or scholarship notice early so you can confirm the required documents, tests, and deadlines for your application.
                </p>
                <div className="mt-6 flex items-center gap-3 rounded-2xl bg-white/10 p-4 backdrop-blur">
                  <GraduationCap size={28} />
                  <p className="text-sm">
                    Compare program fit, admission requirements, and application dates directly with each university.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* Requirements */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Requirements"
            title="Document Requirements"
            description="These are the essential documents you'll need to prepare for your Korean university application."
          />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {requirements.map((req, i) => {
              const Icon = req.icon;
              return (
                <FadeIn key={req.title} delay={i * 0.08}>
                  <div className="h-full rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{req.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {req.description}
                    </p>
                  </div>
                </FadeIn>
              );
            })}
          </div>

          <div className="mt-12 text-center">
            <Link href="/scholarships">
              <Button variant="secondary">
                Explore Scholarships
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
