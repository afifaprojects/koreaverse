"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import Button from "@/components/common/Button";
import { hangulConsonants, hangulVowels } from "@/data/language";

export default function HangulPage() {
  const [selected, setSelected] = useState<{ char: string; sound: string } | null>(null);

  return (
    <>
      <PageBanner badge="Learn Korean" title={<>Master <span className="text-gradient">Hangul</span></>} description="Explore the basic Korean consonants and vowels. Select a character to review its romanized name and approximate sound." />
      <section className="py-14 sm:py-18">
        <Container>
          <SectionTitle badge="Consonants" title="Basic Korean consonants" description="Select a character to see its romanized name and sound guide." />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {hangulConsonants.map((character, index) => (
              <motion.button key={character.char} type="button" aria-pressed={selected?.char === character.char} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }} onClick={() => setSelected(character)} className={`min-h-32 rounded-2xl border p-4 text-center transition ${selected?.char === character.char ? "border-blue-700 bg-blue-50 shadow-md" : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"}`}>
                <span lang="ko" className="text-4xl font-bold text-slate-900">{character.char}</span>
                <span className="mt-2 block text-sm font-semibold text-slate-700">{character.name}</span>
                <span className="mt-0.5 block text-xs text-slate-500">/{character.sound}/</span>
              </motion.button>
            ))}
          </div>
          {selected && <div aria-live="polite" className="mx-auto mt-6 max-w-lg rounded-2xl border border-blue-100 bg-blue-50 p-5 text-center text-blue-950"><span lang="ko" className="text-3xl font-bold">{selected.char}</span><p className="mt-2 text-sm">Approximate sound: /{selected.sound}/</p></div>}
        </Container>
      </section>
      <section className="bg-white py-14 sm:py-18">
        <Container>
          <SectionTitle badge="Vowels" title="Basic Korean vowels" description="Learn the vowel sounds used to build Hangul syllable blocks." />
          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-5">
            {hangulVowels.map((vowel, index) => (
              <motion.div key={vowel.char} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.025 }} className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
                <span lang="ko" className="text-4xl font-bold text-slate-900">{vowel.char}</span>
                <span className="mt-2 block text-sm font-semibold text-slate-700">{vowel.name}</span>
                <span className="mt-0.5 block text-xs text-slate-500">/{vowel.sound}/</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 text-center"><Link href="/learn-korean"><Button>Continue learning <ArrowRight className="ml-2" size={18} /></Button></Link></div>
        </Container>
      </section>
    </>
  );
}
