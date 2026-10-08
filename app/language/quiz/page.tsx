"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, RotateCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Button from "@/components/common/Button";
import { writeLocalStorageValue } from "@/hooks/useLocalStorageValue";

const PROGRESS_KEY = "koreaverse.learning.quiz.v1";
const questions = [
  { q: "What does '\uC548\uB155\uD558\uC138\uC694' mean?", options: ["Goodbye", "Hello", "Thank you", "Sorry"], answer: 1 },
  { q: "Which is the correct Hangul for 'water'?", options: ["\uD559\uAD50", "\uC0AC\uB791", "\uBB3C", "\uCE5C\uAD6C"], answer: 2 },
  { q: "What is the Korean word for 'friend'?", options: ["\uAC00\uC871", "\uCE5C\uAD6C", "\uC120\uC0DD\uB2D8", "\uD559\uC0DD"], answer: 1 },
  { q: "How do you say 'thank you'?", options: ["\uAC10\uC0AC\uD569\uB2C8\uB2E4", "\uC8C4\uC1A1\uD569\uB2C8\uB2E4", "\uC548\uB155", "\uC798 \uAC00\uC694"], answer: 0 },
  { q: "What does '\uD559\uAD50' mean?", options: ["House", "School", "Store", "Hospital"], answer: 1 },
];

type QuizAttempt = { score: number; total: number; completedAt: string };

export default function QuizPage() {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [finished, setFinished] = useState(false);
  const question = questions[current];

  function handleSelect(index: number) {
    if (selected !== null) return;
    setSelected(index);
    if (index === question.answer) setScore((value) => value + 1);
  }

  function next() {
    if (current < questions.length - 1) {
      setCurrent((value) => value + 1);
      setSelected(null);
      return;
    }
    try {
      const previous = JSON.parse(window.localStorage.getItem(PROGRESS_KEY) ?? "[]") as QuizAttempt[];
      const attempt: QuizAttempt = { score, total: questions.length, completedAt: new Date().toISOString() };
      writeLocalStorageValue(PROGRESS_KEY, JSON.stringify([attempt, ...previous].slice(0, 20)));
    } catch {
      // The quiz remains usable if this browser blocks storage.
    }
    setFinished(true);
  }

  function reset() {
    setCurrent(0);
    setScore(0);
    setSelected(null);
    setFinished(false);
  }

  return (
    <>
      <PageBanner badge="Korean quiz" title={<>Test your <span className="text-gradient">Korean skills</span></>} description="Try a short set of beginner questions. Your completed scores are saved in this browser to show in your learning progress." />
      <section className="py-14 sm:py-18">
        <Container>
          <div className="mx-auto max-w-2xl">
            {!finished ? (
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
                <div className="mb-5 flex items-center justify-between gap-3"><p className="text-sm font-semibold text-slate-500">Question {current + 1} of {questions.length}</p><p className="text-sm font-bold text-blue-800">Score: {score}</p></div>
                <div className="mb-6 h-2 overflow-hidden rounded-full bg-slate-100"><div className="h-full rounded-full bg-blue-800 transition-all" style={{ width: `${((current + 1) / questions.length) * 100}%` }} /></div>
                <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">{question.q}</h2>
                <div className="mt-6 grid gap-3">
                  {question.options.map((option, index) => {
                    const isCorrect = index === question.answer;
                    const isSelected = selected === index;
                    const style = selected === null ? "border-slate-200 bg-white hover:border-blue-500 hover:bg-blue-50" : isCorrect ? "border-emerald-500 bg-emerald-50" : isSelected ? "border-rose-500 bg-rose-50" : "border-slate-200 bg-white opacity-60";
                    return <button key={option} type="button" onClick={() => handleSelect(index)} disabled={selected !== null} aria-pressed={isSelected} className={`flex min-h-12 items-center justify-between gap-3 rounded-xl border p-4 text-left font-medium text-slate-700 transition ${style}`}><span lang="ko">{option}</span>{selected !== null && isCorrect && <Check size={19} className="shrink-0 text-emerald-700" />}{isSelected && !isCorrect && <X size={19} className="shrink-0 text-rose-700" />}</button>;
                  })}
                </div>
                {selected !== null && <motion.button type="button" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} onClick={next} className="mt-6 min-h-12 w-full rounded-xl bg-blue-800 p-3 font-semibold text-white transition hover:bg-blue-900">{current < questions.length - 1 ? "Next question" : "See results"}</motion.button>}
              </div>
            ) : (
              <div className="rounded-3xl border border-slate-200 bg-white p-7 text-center shadow-sm sm:p-10">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-3xl">{score >= 3 ? "\u{1F389}" : "\u{1F4DA}"}</div>
                <h2 className="mt-5 text-2xl font-bold text-slate-900">You scored {score} / {questions.length}</h2>
                <p className="mt-3 text-slate-600">{score >= 4 ? "Great work. Keep building your Korean vocabulary." : score >= 2 ? "Good practice. Review the words and try again." : "Keep studying and give it another try."}</p>
                <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
                  <button type="button" onClick={reset} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 font-semibold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50"><RotateCw size={17} />Try again</button>
                  <Link href="/dashboard/progress"><Button variant="outline">View progress <ArrowRight className="ml-2" size={17} /></Button></Link>
                  <Link href="/learn-korean"><Button>Learning hub</Button></Link>
                </div>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
