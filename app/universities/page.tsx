"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Landmark, MapPin, Search } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import { universities } from "@/data/universities";

const locations = ["All", ...new Set(universities.map((university) => university.city))];

export default function UniversitiesPage() {
  const [search, setSearch] = useState("");
  const [location, setLocation] = useState("All");
  const filtered = useMemo(() => universities.filter((university) => {
    const text = `${university.name} ${university.koreanName} ${university.city} ${university.type}`.toLocaleLowerCase();
    return text.includes(search.trim().toLocaleLowerCase()) && (location === "All" || university.city === location);
  }), [search, location]);

  return <>
    <PageBanner badge="University directory" title={<>Find a <span className="text-gradient">Korean University</span></>} description={`Browse ${universities.length} South Korean universities. Follow official links for current program, admissions, and tuition information.`} />
    <section className="py-16 sm:py-20"><Container>
      <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-1 items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
          <Search className="ml-3 shrink-0 text-slate-400" size={20} aria-hidden="true" />
          <input type="search" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search universities, Korean names, or cities" aria-label="Search universities" className="h-11 w-full bg-transparent text-slate-900 outline-none placeholder:text-slate-400" />
        </div>
        <div className="flex flex-wrap gap-2" aria-label="Filter by city">
          {locations.map((city) => <button key={city} type="button" aria-pressed={location === city} onClick={() => setLocation(city)} className={`min-h-10 rounded-full px-4 py-2 text-sm font-semibold transition ${location === city ? "bg-blue-700 text-white" : "border border-slate-200 bg-white text-slate-700 hover:border-blue-400"}`}>{city}</button>)}
        </div>
      </div>
      <p className="mb-5 text-sm text-slate-600" aria-live="polite">Showing {filtered.length} of {universities.length} universities</p>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((university) => <a key={university.id} href={university.officialWebsite} target="_blank" rel="noreferrer" className="group block h-full rounded-3xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-700">
          <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition duration-300 group-hover:-translate-y-1 group-hover:border-blue-200 group-hover:shadow-lg">
            <div className={`bg-gradient-to-br ${university.gradient} p-6 text-white`}><div className="flex items-center justify-between"><span className="rounded-full bg-white/20 px-3 py-1 text-xs font-semibold">{university.type}</span><Landmark size={22} aria-hidden="true" /></div><h2 className="mt-6 text-xl font-bold leading-snug">{university.name}</h2><p className="mt-1 text-sm text-white/85">{university.koreanName}</p></div>
            <div className="flex flex-1 flex-col p-6"><p className="flex items-center gap-2 text-sm font-medium text-slate-600"><MapPin size={16} className="text-blue-700" aria-hidden="true" />{university.city}</p><p className="mt-4 flex-1 text-sm leading-6 text-slate-600">{university.description}</p><div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4 text-sm font-semibold text-blue-800"><span>Official website</span><ArrowUpRight size={17} aria-hidden="true" /></div></div>
          </article>
        </a>)}
      </div>
      {filtered.length === 0 && <p className="py-16 text-center text-slate-600">No universities match those filters.</p>}
    </Container></section>
  </>;
}
