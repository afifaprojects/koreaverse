"use client";

import { useMemo, useState, type FormEvent } from "react";
import Link from "next/link";
import { Bookmark, ArrowRight, Trash2, Plus } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";
import { useLocalStorageValue, writeLocalStorageValue } from "@/hooks/useLocalStorageValue";

type SavedResource = { id: string; name: string; category: string; href: string };
const STORAGE_KEY = "koreaverse.bookmarks.v1";
const pages = [
  { name: "Explore destinations", category: "Travel", href: "/explore" },
  { name: "Korean cities", category: "Travel", href: "/cities" },
  { name: "Travel guide", category: "Travel", href: "/travel" },
  { name: "GKS Scholarship", category: "Scholarship", href: "/scholarships/gks" },
  { name: "Scholarship finder", category: "Scholarship", href: "/scholarships/finder" },
  { name: "Universities", category: "Study", href: "/universities" },
  { name: "Seoul National University", category: "Study", href: "/universities/seoul-national" },
  { name: "Learn Korean", category: "Language", href: "/learn-korean" },
  { name: "TOPIK Guide", category: "Language", href: "/language/topik" },
  { name: "Korean food", category: "Culture", href: "/food" },
];

export default function BookmarkPage() {
  const storedBookmarks = useLocalStorageValue(STORAGE_KEY);
  const bookmarks = useMemo(() => {
    try {
      const parsed: unknown = storedBookmarks ? JSON.parse(storedBookmarks) : [];
      return Array.isArray(parsed) ? parsed as SavedResource[] : [];
    } catch { return []; }
  }, [storedBookmarks]);
  const [name, setName] = useState("");
  const [href, setHref] = useState(pages[0].href);
  const [error, setError] = useState("");

  function persist(next: SavedResource[]) {
    try {
      writeLocalStorageValue(STORAGE_KEY, JSON.stringify(next));
      setError("");
    } catch {
      setError("Your browser could not save this list. Check its storage settings.");
    }
  }

  function addBookmark(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    const page = pages.find((item) => item.href === href);
    if (!page) return;
    if (bookmarks.some((item) => item.href === href)) {
      setError("That page is already saved.");
      return;
    }
    persist([{ id: crypto.randomUUID(), name: name.trim() || page.name, category: page.category, href }, ...bookmarks]);
    setName("");
  }

  return (
    <>
      <PageBanner badge="Saved resources" title={<>Your <span className="text-gradient">Bookmarks</span></>} description="Keep useful KoreaVerse guides together on this device for quick access." />
      <section className="py-12 sm:py-16">
        <Container>
          <form onSubmit={addBookmark} className="mx-auto mb-10 grid max-w-4xl gap-4 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-[1fr_1fr_auto] sm:items-end sm:p-6">
            <Input label="Your label (optional)" value={name} maxLength={80} onChange={(event) => setName(event.target.value)} placeholder="e.g. Review before applying" />
            <label className="block text-sm font-semibold text-slate-700">KoreaVerse page<select value={href} onChange={(event) => setHref(event.target.value)} className="mt-2 h-12 w-full rounded-xl border border-slate-300 bg-white px-3 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100">{pages.map((page) => <option key={page.href} value={page.href}>{page.name}</option>)}</select></label>
            <Button type="submit"><Plus size={18} className="mr-2" />Save page</Button>
          </form>
          {error && <p role="alert" className="mx-auto mb-6 max-w-4xl rounded-xl bg-rose-50 p-4 text-sm text-rose-800">{error}</p>}
          <SectionTitle badge="Private on this device" title="Saved for later" description="Bookmarks are stored in this browser only and are not synced across devices or accounts." />
          {bookmarks.length ? (
            <ul className="mx-auto max-w-4xl space-y-3">
              {bookmarks.map((bookmark) => (
                <li key={bookmark.id} className="flex items-center justify-between gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:p-5">
                  <Link href={bookmark.href} className="group flex min-w-0 flex-1 items-center gap-3 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-800"><Bookmark size={20} /></span>
                    <span className="min-w-0"><span className="block break-words font-bold text-slate-900 group-hover:text-blue-800">{bookmark.name}</span><span className="text-xs font-semibold text-slate-500">{bookmark.category}</span></span>
                    <ArrowRight size={18} className="ml-auto shrink-0 text-slate-400" />
                  </Link>
                  <button type="button" aria-label={`Remove ${bookmark.name}`} onClick={() => persist(bookmarks.filter((item) => item.id !== bookmark.id))} className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-slate-500 transition hover:bg-rose-50 hover:text-rose-700"><Trash2 size={17} /></button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="mx-auto max-w-4xl rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center">
              <Bookmark size={28} className="mx-auto text-slate-400" />
              <h3 className="mt-4 font-bold text-slate-900">No saved pages yet</h3>
              <p className="mt-2 text-sm text-slate-600">Choose a KoreaVerse page above to start your list. No sample bookmarks are shown.</p>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
