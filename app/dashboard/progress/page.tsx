"use client";

import { useMemo } from "react";
import Link from "next/link";
import { BookOpen, Check, Clock } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { useLocalStorageValue } from "@/hooks/useLocalStorageValue";

type QuizAttempt = { score: number; total: number; completedAt: string };
const STORAGE_KEY = "koreaverse.learning.quiz.v1";

export default function ProgressPage() {
  const storedAttempts = useLocalStorageValue(STORAGE_KEY);
  const attempts = useMemo(() => {
    try {
      const data: unknown = storedAttempts ? JSON.parse(storedAttempts) : [];
      return Array.isArray(data) ? (data as QuizAttempt[]).filter((item) => Number.isFinite(item.score) && Number.isFinite(item.total) && typeof item.completedAt === "string") : [];
    } catch { return []; }
  }, [storedAttempts]);
  const latest = attempts[0];

  return (
    <>
      <PageBanner badge="Learning activity" title={<>Your <span className="text-gradient">Progress</span></>} description="Review quiz attempts saved in this browser. Other learning activities are not tracked yet." />
      <section className="py-12 sm:py-16">
        <Container>
          <SectionTitle badge="Local activity" title="Korean quiz practice" description="Only completed quizzes are recorded. Your results stay on this device and are not synced to an account." />
          {latest ? (
            <div className="mx-auto max-w-3xl">
              <article className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-800"><BookOpen size={23} /></span>
                    <div><h2 className="text-lg font-bold text-slate-900">Latest quiz score</h2><p className="mt-1 flex items-center gap-1.5 text-sm text-slate-500"><Clock size={14} />{new Date(latest.completedAt).toLocaleString()}</p></div>
                  </div>
                  <p className="text-3xl font-bold text-blue-900">{latest.score}<span className="text-lg font-semibold text-slate-400"> / {latest.total}</span></p>
                </div>
                <div className="mt-6 h-2.5 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-800" style={{ width: `${latest.total > 0 ? Math.min(100, (latest.score / latest.total) * 100) : 0}%` }} /></div>
              </article>
              <h3 className="mb-3 mt-8 font-bold text-slate-900">Recent attempts</h3>
              <ul className="space-y-2">{attempts.map((attempt, index) => <li key={`${attempt.completedAt}-${index}`} className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm"><span className="flex items-center gap-2 text-slate-600">{index === 0 ? <Check size={16} className="text-emerald-700" /> : <BookOpen size={16} className="text-blue-700" />}{new Date(attempt.completedAt).toLocaleString()}</span><span className="font-bold text-slate-800">{attempt.score} / {attempt.total}</span></li>)}</ul>
              <Link href="/language/quiz" className="mt-6 inline-block"><Button>Practice again</Button></Link>
            </div>
          ) : (
            <div className="mx-auto max-w-3xl rounded-3xl border border-dashed border-slate-300 bg-white/70 px-6 py-12 text-center">
              <BookOpen size={28} className="mx-auto text-slate-400" />
              <h2 className="mt-4 font-bold text-slate-900">No quiz attempts yet</h2>
              <p className="mt-2 text-sm text-slate-600">Complete a Korean quiz and its result will appear here.</p>
              <Link href="/language/quiz" className="mt-5 inline-block"><Button>Start a quiz</Button></Link>
            </div>
          )}
        </Container>
      </section>
    </>
  );
}
