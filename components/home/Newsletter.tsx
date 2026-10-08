"use client";

import { useState, type FormEvent } from "react";
import { Info, Mail, Send } from "lucide-react";
import Container from "@/components/common/Container";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [notice, setNotice] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!event.currentTarget.reportValidity()) return;
    setNotice("Newsletter delivery is not connected yet, so no email was sent. Please check back later.");
  }

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 p-8 sm:p-14">
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10" />
          <div className="pointer-events-none absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-white/10" />
          <div className="relative mx-auto max-w-2xl text-center text-white">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
              <Mail size={26} />
            </div>
            <h2 className="text-3xl font-bold sm:text-4xl">Stay Updated with KoreaVerse</h2>
            <p className="mt-4 leading-7 text-blue-100">
              Get the latest scholarships, university admissions, TOPIK tips, and travel guides delivered straight to your inbox.
            </p>
            <form onSubmit={handleSubmit} className="mx-auto mt-8 flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="newsletter-email">Email address</label>
              <input
                id="newsletter-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(event) => { setEmail(event.target.value); setNotice(""); }}
                placeholder="Enter your email address"
                className="h-12 w-full min-w-0 flex-1 rounded-xl border border-white/20 bg-white px-5 text-slate-900 outline-none placeholder:text-slate-400 focus:ring-4 focus:ring-white/30"
              />
              <button type="submit" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-white px-7 font-semibold text-blue-900 transition hover:bg-blue-50 active:scale-[0.98]">
                Subscribe <Send size={17} />
              </button>
            </form>
            {notice && (
              <p role="status" aria-live="polite" className="mx-auto mt-4 flex max-w-xl items-start gap-2 rounded-xl bg-white/10 p-4 text-left text-sm font-medium text-white">
                <Info size={18} className="mt-0.5 shrink-0" />{notice}
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
