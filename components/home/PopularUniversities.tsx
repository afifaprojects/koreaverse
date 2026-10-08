"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Landmark, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";
import { universities } from "@/data/universities";

export default function PopularUniversities() {
  return <section className="bg-white py-16 sm:py-20 lg:py-24"><Container>
    <SectionTitle badge="University directory" title="Explore Korean Universities" description="Browse the university directory and verify current programs and admissions details on each institution's official website." />
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:gap-6 xl:grid-cols-3">
      {universities.slice(0, 6).map((university, index) => <FadeIn key={university.id} delay={index * 0.06}><a href={university.officialWebsite} target="_blank" rel="noreferrer" className="group block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
        <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg">
          <div className={`bg-gradient-to-br ${university.gradient} min-h-40 p-5 text-white sm:p-6`}><div className="flex items-center justify-between"><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{university.type}</span><Landmark size={21} aria-hidden="true" /></div><h3 className="mt-5 text-xl font-bold leading-snug sm:text-2xl">{university.name}</h3><p className="mt-1 text-sm text-white/85">{university.koreanName}</p></div>
          <div className="flex flex-1 flex-col p-5 sm:p-6"><p className="flex items-center gap-2 text-sm text-slate-600"><MapPin size={16} className="text-blue-700" aria-hidden="true" />{university.city}</p><p className="mt-3 flex-1 text-sm leading-6 text-slate-600">{university.description}</p><div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-blue-800"><span>Official website</span><ArrowUpRight size={17} aria-hidden="true" /></div></div>
        </article>
      </a></FadeIn>)}
    </div>
    <div className="mt-12 text-center"><Link href="/universities"><Button>View all {universities.length} universities<ArrowRight className="ml-2" size={18} /></Button></Link></div>
  </Container></section>;
}
