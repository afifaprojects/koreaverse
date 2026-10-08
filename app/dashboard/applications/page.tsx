"use client";

import { useMemo, useState, type FormEvent } from "react";
import { FileText, Clock, Plus, Trash2 } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useLocalStorageValue, writeLocalStorageValue } from "@/hooks/useLocalStorageValue";

type ApplicationStatus = "Planning" | "Submitted" | "In Review" | "Interview" | "Accepted" | "Rejected";
type Application = { id: string; name: string; type: "Scholarship" | "University"; status: ApplicationStatus; updatedAt: string };
const STORAGE_KEY = "koreaverse.applications.v1";
const statuses: ApplicationStatus[] = ["Planning", "Submitted", "In Review", "Interview", "Accepted", "Rejected"];
const statusStyle: Record<ApplicationStatus, string> = {
  Planning: "bg-slate-100 text-slate-700", Submitted: "bg-blue-100 text-blue-800", "In Review": "bg-amber-100 text-amber-800", Interview: "bg-violet-100 text-violet-800", Accepted: "bg-emerald-100 text-emerald-800", Rejected: "bg-rose-100 text-rose-800",
};

export default function ApplicationsPage() {
  const storedApplications = useLocalStorageValue(STORAGE_KEY);
  const applications = useMemo(() => {
    try {
      const parsed: unknown = storedApplications ? JSON.parse(storedApplications) : [];
      return Array.isArray(parsed) ? parsed as Application[] : [];
    } catch { return []; }
  }, [storedApplications]);
  const [name, setName] = useState("");
  const [type, setType] = useState<Application["type"]>("University");
  const [storageError, setStorageError] = useState(false);

  function save(next: Application[]) {
    try {
      writeLocalStorageValue(STORAGE_KEY, JSON.stringify(next));
      setStorageError(false);
    } catch {
      setStorageError(true);
    }
  }

  function addApplication(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity() || !name.trim()) return;
    const app: Application = { id: crypto.randomUUID(), name: name.trim(), type, status: "Planning", updatedAt: new Date().toLocaleDateString() };
    save([app, ...applications]);
    setName("");
  }

  function updateStatus(id: string, status: ApplicationStatus) {
    save(applications.map((app) => app.id === id ? { ...app, status, updatedAt: new Date().toLocaleDateString() } : app));
  }

  function removeApplication(id: string) {
    save(applications.filter((app) => app.id !== id));
  }

  return (
    <>
      <PageBanner badge="Application tracker" title={<>Track your <span className="text-gradient">next steps</span></>} description="Keep a private checklist of university and scholarship applications on this device." />
      <section className="py-12 sm:py-16">
        <Container>
          <form onSubmit={addApplication} className="mx-auto mb-10 grid max-w-4xl gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_190px_auto] sm:items-end sm:p-6">
            <Input label="Application name" name="applicationName" required maxLength={100} value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Seoul National University" />
            <label className="block text-sm font-semibold text-slate-700">Application type<select value={type} onChange={(event) => setType(event.target.value as Application["type"])} className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100"><option>University</option><option>Scholarship</option></select></label>
            <Button type="submit"><Plus size={18} className="mr-2" />Add application</Button>
          </form>
          {storageError && <p role="alert" className="mx-auto mb-6 max-w-4xl rounded-xl bg-rose-50 p-4 text-sm text-rose-800">Your browser could not save this tracker. Check local storage settings; changes may not persist.</p>}
          <SectionTitle badge="Private on this device" title="Your applications" description="Update a status as your application moves forward. This list is stored in this browser and is not synced to an account." />
          {applications.length ? (
            <div className="mx-auto max-w-4xl space-y-3">
              {applications.map((app) => (
                <article key={app.id} className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex min-w-0 items-start gap-3">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800"><FileText size={21} /></span>
                    <div className="min-w-0"><p className="break-words font-bold text-slate-900">{app.name}</p><p className="mt-1 text-sm text-slate-500">{app.type} <span aria-hidden="true">·</span> <Clock size={13} className="inline" /> Updated {app.updatedAt}</p></div>
                  </div>
                  <div className="flex items-center gap-2 sm:shrink-0">
                    <label className="sr-only" htmlFor={`status-${app.id}`}>Status for {app.name}</label>
                    <select id={`status-${app.id}`} value={app.status} onChange={(event) => updateStatus(app.id, event.target.value as ApplicationStatus)} className={`min-h-10 flex-1 rounded-full border-0 px-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 sm:flex-none ${statusStyle[app.status]}`}>
                      {statuses.map((status) => <option key={status} value={status}>{status}</option>)}
                    </select>
                    <button type="button" onClick={() => removeApplication(app.id)} aria-label={`Remove ${app.name}`} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-rose-50 hover:text-rose-700"><Trash2 size={18} /></button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center">
              <FileText size={28} className="mx-auto text-slate-400" />
              <h3 className="mt-4 font-bold text-slate-900">No applications added</h3>
              <p className="mt-2 text-sm text-slate-600">Add an application above to start a tracker. No sample statuses are shown.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
