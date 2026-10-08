import { ArrowUpRight, Landmark } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { scholarships } from "@/data/scholarships";

export default function GovernmentScholarshipsPage() {
  const programs = scholarships.filter((scholarship) => scholarship.type === "Government");
  return <>
    <PageBanner badge="Government scholarships" title={<><span className="text-gradient">Government</span> programs</>} description="Browse named government scholarship programs in the KoreaVerse directory and verify current terms with the official provider." />
    <section className="py-16 sm:py-20"><Container><SectionTitle badge="Official programs" title="Government scholarship directory" description={`${programs.length} programs currently have structured records in this directory.`} />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">{programs.map((program, index) => <FadeIn key={program.id} delay={index * 0.08}><article className="flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-800"><Landmark size={23} /></span><h2 className="mt-5 text-xl font-bold text-slate-900">{program.name}</h2><p className="mt-2 text-sm leading-6 text-slate-600">{program.description}</p><p className="mt-4 text-sm font-semibold text-slate-800">Degree levels</p><p className="mt-1 text-sm text-slate-600">{program.degreeLevel.join(", ")}</p><a href={program.officialWebsite} target="_blank" rel="noreferrer" className="mt-auto inline-flex min-h-10 items-center gap-2 pt-5 text-sm font-semibold text-blue-800">Official information<ArrowUpRight size={16} /></a></article></FadeIn>)}</div>
      <div className="mt-12 text-center"><Link href="/scholarships"><Button variant="outline">Back to scholarships</Button></Link></div>
    </Container></section>
  </>;
}
