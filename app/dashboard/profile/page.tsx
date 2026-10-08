"use client";

import { useMemo, useState, type FormEvent } from "react";
import { User, CheckCircle2 } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useLocalStorageValue, writeLocalStorageValue } from "@/hooks/useLocalStorageValue";

type Profile = { name: string; email: string; location: string; fieldOfStudy: string };
const STORAGE_KEY = "koreaverse.profile.v1";
const emptyProfile: Profile = { name: "", email: "", location: "", fieldOfStudy: "" };

export default function ProfilePage() {
  const storedProfile = useLocalStorageValue(STORAGE_KEY);
  const profile = useMemo(() => {
    try { return { ...emptyProfile, ...(storedProfile ? JSON.parse(storedProfile) as Partial<Profile> : {}) }; }
    catch { return emptyProfile; }
  }, [storedProfile]);
  const [message, setMessage] = useState("");

  function update(field: keyof Profile, value: string) {
    setMessage("");
    try { writeLocalStorageValue(STORAGE_KEY, JSON.stringify({ ...profile, [field]: value })); }
    catch { setMessage("This browser could not save your changes. Check its storage settings and try again."); }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setMessage("Profile saved in this browser. It is not synced to an account or another device.");
  }

  return (
    <>
      <PageBanner badge="Personal details" title={<>Your <span className="text-gradient">Profile</span></>} description="Save study preferences on this device to make your KoreaVerse planning tools easier to use." />
      <section className="py-12 sm:py-16">
        <Container>
          <form onSubmit={handleSubmit} className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
            <div className="mb-7 flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-blue-800"><User size={27} /></div>
              <div><h2 className="text-xl font-bold text-slate-900">Local profile</h2><p className="mt-1 text-sm text-slate-500">Stored on this browser only</p></div>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Input label="Full name" name="name" autoComplete="name" value={profile.name} onChange={(event) => update("name", event.target.value)} placeholder="Your name" />
              <Input label="Email" name="email" type="email" autoComplete="email" value={profile.email} onChange={(event) => update("email", event.target.value)} placeholder="you@example.com" />
              <Input label="Location" name="location" value={profile.location} onChange={(event) => update("location", event.target.value)} placeholder="City or country" />
              <Input label="Field of study" name="fieldOfStudy" value={profile.fieldOfStudy} onChange={(event) => update("fieldOfStudy", event.target.value)} placeholder="Your intended field" />
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto">Save profile</Button>
            {message && <p role="status" aria-live="polite" className="mt-4 flex items-start gap-2 text-sm text-slate-600">{message.startsWith("Profile saved") && <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-emerald-700" />}{message}</p>}
          </form>
          <p className="mx-auto mt-4 max-w-2xl text-xs leading-5 text-slate-500">This feature does not use an account or backend. Do not save sensitive information here.</p>
        </Container>
      </section>
    </>
  );
}
