import { ArrowUpRight, Building2, MapPin } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { universities } from "@/data/universities";

export default function UniversityScholarshipsPage() {
  return <>
    <PageBanner badge="University funding" title={<><span className="text-gradient">University</span> scholarship information</>} description="Scholarship offerings and conditions are set by each institution and can change. Use official university information to confirm current awards." />
    <section className="py-16 sm:py-20"><Container><SectionTitle badge="Check at the source" title="University websites" description={`Open any institution's official site to find its current scholarship and admissions information. The directory currently lists ${universities.length} universities.`} />
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">{universities.map((university, index) => <FadeIn key={university.id} delay={index * 0.04}><a href={university.officialWebsite} target="_blank" rel="noreferrer" className="group block h-full rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700"><article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-md"><span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-800"><Building2 size={21} /></span><h2 className="mt-4 font-bold text-slate-900">{university.name}</h2><p className="mt-1 flex items-center gap-1.5 text-sm text-slate-600"><MapPin size={14} />{university.city}</p><span className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-blue-800">Official website<ArrowUpRight size={15} /></span></article></a></FadeIn>)}</div>
      <div className="mt-12 text-center"><Link href="/scholarships"><Button variant="outline">Back to scholarships</Button></Link></div>
    </Container></section>
  </>;
}
