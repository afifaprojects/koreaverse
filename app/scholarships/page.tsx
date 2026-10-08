import Link from "next/link";
import {
  Award,
  Check,
  FileText,
  ArrowRight,
  Landmark,
  User,
  ScrollText,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import Badge from "@/components/common/Badge";
import { scholarships } from "@/data/scholarships";

const process = [
  { title: "Check Eligibility", desc: "Review each scholarship's requirements.", icon: User },
  { title: "Prepare Documents", desc: "Collect transcripts, letters, and scores.", icon: FileText },
  { title: "Submit Application", desc: "Apply via embassy, university, or online.", icon: ScrollText },
  { title: "Interview & Award", desc: "Attend interviews and receive results.", icon: Award },
];

const categories = [...new Set(scholarships.map((scholarship) => scholarship.type))].map((type) => ({
  title: `${type} scholarships`,
  desc: `${scholarships.filter((scholarship) => scholarship.type === type).length} named programs in this directory.`,
  icon: Landmark,
  href: "/scholarships/government",
}));

export default function ScholarshipsPage() {
  return (
    <>
      <PageBanner
        badge="Scholarships"
        title={
          <>
            Fund Your Studies with{" "}
            <span className="text-gradient">Korean Scholarships</span>
          </>
        }
        description={`Browse ${scholarships.length} named government scholarship programs. Always check official notices for current eligibility, benefits, and application dates.`}
      />

      {/* Featured Scholarships */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Official programs"
            title="Scholarship directory"
            description="These program records link to official sources. Terms and selection requirements may change by program and year."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {scholarships.map((s, i) => (
              <FadeIn key={s.id} delay={i * 0.1}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                  <div className={`bg-gradient-to-br ${s.gradient} flex items-center justify-between p-6 text-white`}>
                    <div>
                      <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">
                        {s.type}
                      </span>
                      <h3 className="mt-3 text-xl font-bold">{s.name}</h3>
                      <p className="mt-1 text-sm text-white/80">{s.provider}</p>
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                      <Award size={28} />
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <p className="mb-4 rounded-xl bg-blue-50 px-4 py-3 text-sm font-semibold text-blue-700">
                      {s.funding}
                    </p>
                    <p className="mb-5 text-sm leading-6 text-slate-600">{s.description}</p>

                    <div className="mb-5 space-y-2">
                      {s.eligibility.map((e) => (
                        <div key={e} className="flex items-start gap-2 text-sm text-slate-600">
                          <Check size={16} className="mt-0.5 shrink-0 text-emerald-500" />
                          {e}
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto flex items-center justify-end border-t border-slate-100 pt-4">
                      <a href={s.officialWebsite} target="_blank" rel="noreferrer" className="inline-flex min-h-10 items-center gap-1 rounded-lg px-2 text-sm font-semibold text-blue-700 hover:bg-blue-50">Official information <ArrowRight size={16} /></a>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      {/* Categories */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Scholarship Categories"
            title="Explore by Type"
            description="Find the right scholarship category based on your profile and goals."
          />
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {categories.map((c, i) => {
              const Icon = c.icon;
              return (
                <FadeIn key={c.title} delay={i * 0.1}>
                  <Link href={c.href} className="block h-full">
                    <div className="flex h-full flex-col items-center rounded-2xl border border-slate-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                        <Icon size={30} />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900">{c.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-600">{c.desc}</p>
                    </div>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Application Process */}
      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Application Process"
            title="How to Apply for Scholarships"
            description="Follow this simple process to submit a strong scholarship application."
          />
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((p, i) => {
              const Icon = p.icon;
              return (
                <FadeIn key={p.title} delay={i * 0.1}>
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <span className="absolute left-4 top-4 text-3xl font-extrabold text-blue-100">
                      {i + 1}
                    </span>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{p.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{p.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Required Documents */}
      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <Badge variant="red">Required Documents</Badge>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">
                Documents You&apos;ll Need
              </h2>
              <p className="mt-4 leading-8 text-slate-600">
                Required documents differ by program and application cycle. Use the current official notice for the authoritative checklist, format, and submission instructions.
              </p>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-3">
                {scholarships.map((scholarship) => (
                  <a key={scholarship.id} href={scholarship.officialWebsite} target="_blank" rel="noreferrer" className="flex min-h-12 items-center justify-between gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 font-semibold text-slate-800 hover:border-blue-300">
                    <span>{scholarship.name}</span><ArrowRight size={17} className="shrink-0 text-blue-700" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20">
        <Container>
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-red-600 p-10 text-center text-white sm:p-14">
            <h2 className="text-3xl font-bold sm:text-4xl">Ready to Apply?</h2>
            <p className="mx-auto mt-4 max-w-2xl text-white/85">
              Filter listed programs by degree level, then check the provider&apos;s current official notice for eligibility.
            </p>
            <Link href="/scholarships/finder" className="mt-8 inline-block">
              <Button className="bg-white text-blue-700 hover:bg-blue-50">
                Find My Scholarship
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
