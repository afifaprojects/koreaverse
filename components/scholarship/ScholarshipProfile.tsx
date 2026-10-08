import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Button from "@/components/common/Button";
import { scholarships } from "@/data/scholarships";

export default function ScholarshipProfile({ id }: { id: string }) {
  const scholarship = scholarships.find((entry) => entry.id === id);
  if (!scholarship) return null;

  return <>
    <PageBanner badge="Government scholarship" title={<><span className="text-gradient">{scholarship.name}</span></>} description={scholarship.description} />
    <section className="py-16 sm:py-20"><Container><div className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
      <p className="font-semibold text-slate-800">Provider</p><p className="mt-1 text-slate-600">{scholarship.provider}</p>
      <p className="mt-6 font-semibold text-slate-800">Degree levels</p><div className="mt-2 flex flex-wrap gap-2">{scholarship.degreeLevel.map((level) => <span key={level} className="rounded-full bg-blue-50 px-3 py-1.5 text-sm text-blue-800">{level}</span>)}</div>
      <p className="mt-6 font-semibold text-slate-800">Eligibility</p><ul className="mt-2 list-disc space-y-2 pl-5 text-slate-600">{scholarship.eligibility.map((item) => <li key={item}>{item}</li>)}</ul>
      <p className="mt-6 font-semibold text-slate-800">Funding details</p><p className="mt-2 leading-7 text-slate-600">{scholarship.funding}</p>
      <p className="mt-6 text-sm leading-6 text-slate-500">Application details, benefits, participating programs, and dates can change. Use the current official notice as the source of truth.</p>
      <a href={scholarship.officialWebsite} target="_blank" rel="noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-700 px-5 py-3 font-semibold text-white transition hover:bg-blue-800">Official program information<ArrowUpRight size={17} aria-hidden="true" /></a>
      <div className="mt-8"><Link href="/scholarships"><Button variant="outline"><ArrowLeft className="mr-2" size={17} />Back to scholarships</Button></Link></div>
    </div></Container></section>
  </>;
}
