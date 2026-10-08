import { ArrowUpRight, Calendar } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import { scholarships } from "@/data/scholarships";

export default function ScholarshipTimelinePage() {
  return <>
    <PageBanner badge="Scholarship planning" title={<><span className="text-gradient">Application</span> timelines</>} description="There is no single calendar that applies to every Korean scholarship. Each provider publishes its own current schedule." />
    <section className="py-16 sm:py-20"><Container><SectionTitle badge="Current official notices" title="Check dates for each program" description="Use the latest provider notice for application windows, documents, and selection steps. KoreaVerse does not publish guessed deadlines." />
      <div className="mx-auto max-w-3xl space-y-4">{scholarships.map((scholarship, index) => <FadeIn key={scholarship.id} delay={index * 0.06}><article className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blue-50 text-blue-800"><Calendar size={21} aria-hidden="true" /></span><div className="flex-1"><h2 className="font-bold text-slate-900">{scholarship.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">Check the current official notice for the latest dates and application steps.</p><a href={scholarship.officialWebsite} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-10 items-center gap-2 text-sm font-semibold text-blue-800">{scholarship.provider}<ArrowUpRight size={15} aria-hidden="true" /></a></div></article></FadeIn>)}</div>
    </Container></section>
  </>;
}
