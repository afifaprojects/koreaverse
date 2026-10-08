import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { scholarships } from "@/data/scholarships";

export default function ScholarshipSection() {
  return <section className="bg-slate-50/80 py-16 sm:py-20 lg:py-24"><Container>
    <SectionTitle badge="Government programs" title="Scholarship opportunities" description="Browse named Korean government scholarship programs. Eligibility and benefits depend on the current official program notice." />
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
      {scholarships.map((scholarship, index) => <FadeIn key={scholarship.id} delay={index * 0.08}><article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
        <div className={`bg-gradient-to-br ${scholarship.gradient} min-h-44 p-5 text-white sm:p-6`}><div className="flex items-center justify-between"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/20"><Award size={26} aria-hidden="true" /></span><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{scholarship.type}</span></div><h3 className="mt-5 text-lg font-bold leading-snug sm:text-xl">{scholarship.name}</h3><p className="mt-1 text-sm leading-5 text-white/90">{scholarship.provider}</p></div>
        <div className="flex flex-1 flex-col p-5 sm:p-6"><p className="text-sm leading-6 text-slate-700">{scholarship.description}</p><p className="mt-4 text-sm font-semibold text-slate-800">Degree levels</p><div className="mt-2 flex flex-wrap gap-2">{scholarship.degreeLevel.map((level) => <span key={level} className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-800">{level}</span>)}</div><p className="mt-4 text-xs leading-5 text-slate-600">Check the current official notice for eligibility, benefits, and application dates.</p><a href={scholarship.officialWebsite} target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-10 items-center gap-2 self-start rounded-lg px-2 pt-3 text-sm font-semibold text-blue-800 hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">Official program information<ArrowUpRight size={16} aria-hidden="true" /></a></div>
      </article></FadeIn>)}
    </div>
    <div className="mt-12 text-center"><Link href="/scholarships"><Button variant="outline">View scholarship directory<ArrowRight className="ml-2" size={18} /></Button></Link></div>
  </Container></section>;
}
