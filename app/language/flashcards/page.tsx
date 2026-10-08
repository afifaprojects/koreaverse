"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RotateCw, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Button from "@/components/common/Button";
import { commonPhrases } from "@/data/language";

const flashcards = commonPhrases.map(({ korean, english, romanization }) => ({ korean, english, roman: romanization }));

export default function FlashcardsPage() {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const card = flashcards[index];

  function next() {
    setFlipped(false);
    setIndex((value) => (value + 1) % flashcards.length);
  }

  return (
    <>
      <PageBanner badge="Korean practice" title={<>Korean <span className="text-gradient">Flashcards</span></>} description="Review useful Korean words and phrases. Select a card with your mouse, touch, or keyboard to reveal its meaning." />
      <section className="py-14 sm:py-18">
        <Container>
          <div className="mx-auto flex max-w-md flex-col items-center">
            <p className="mb-5 text-sm font-semibold text-slate-500" aria-live="polite">Card {index + 1} of {flashcards.length}</p>
            <button type="button" aria-pressed={flipped} aria-label={flipped ? "Show Korean side of flashcard" : "Show English side of flashcard"} onClick={() => setFlipped((value) => !value)} className="block h-72 w-full rounded-3xl text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600" style={{ perspective: 1000 }}>
              <AnimatePresence mode="wait">
                <motion.div key={flipped ? "back" : "front"} initial={{ rotateY: 90, opacity: 0 }} animate={{ rotateY: 0, opacity: 1 }} exit={{ rotateY: -90, opacity: 0 }} transition={{ duration: 0.25 }} className="flex h-full w-full flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-lg">
                  {!flipped ? <><span className="text-sm font-semibold text-blue-800">Korean</span><p lang="ko" className="mt-3 text-4xl font-bold text-slate-900">{card.korean}</p><p className="mt-2 text-slate-500">{card.roman}</p><p className="mt-6 text-sm text-slate-400">Select to flip</p></> : <><span className="text-sm font-semibold text-rose-700">English</span><p className="mt-3 text-3xl font-bold text-slate-900">{card.english}</p><p className="mt-6 text-sm text-slate-400">Select to flip back</p></>}
                </motion.div>
              </AnimatePresence>
            </button>
            <button type="button" onClick={next} className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-800 px-6 font-semibold text-white shadow-sm transition hover:bg-blue-900"><RotateCw size={17} />Next card</button>
            <Link href="/learn-korean" className="mt-6"><Button variant="outline">Back to learning hub <ArrowRight className="ml-2" size={17} /></Button></Link>
          </div>
        </Container>
      </section>
    </>
  );
}
