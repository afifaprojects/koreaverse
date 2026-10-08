import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Button from "@/components/common/Button";
import { universities } from "@/data/universities";

export default function UniversityProfile({ id }: { id: string }) {
  const university = universities.find((entry) => entry.id === id);
  if (!university) return null;

  return <>
    <PageBanner badge="University profile" title={<><span className="text-gradient">{university.name}</span></>} description={university.description} />
    <section className="py-16 sm:py-20"><Container>
      <div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
        <p className="text-2xl font-semibold text-slate-800" lang="ko">{university.koreanName}</p>
        <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-700"><span className="rounded-full bg-blue-50 px-4 py-2">{university.type}</span><span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2"><MapPin size={16} aria-hidden="true" />{university.city}</span></div>
        <p className="mt-6 leading-7 text-slate-600">This directory provides a starting point. Confirm campus locations, academic departments, admissions, and current costs with the university.</p>
        <a href={university.officialWebsite} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-700">Visit official university website<ArrowUpRight size={17} aria-hidden="true" /></a>
        <div className="mt-8"><Link href="/universities"><Button variant="outline"><ArrowLeft className="mr-2" size={17} />Back to universities</Button></Link></div>
      </div>
    </Container></section>
  </>;
}
