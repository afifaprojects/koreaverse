"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { faqs } from "@/data/faqs";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
<section className="bg-white py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Got Questions? We've Got Answers"
          description="Everything you need to know about studying, living, and exploring South Korea."
        />

        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={faq.question}
className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                  isOpen ? "border-indigo-200 bg-indigo-50/50" : "border-slate-200 bg-white"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  aria-controls={`home-faq-${i}`}
                  className="flex w-full items-center justify-between gap-4 p-5 text-left"
                >
                  <h3 className="text-base font-bold text-slate-900 sm:text-lg">
                    {faq.question}
                  </h3>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full ${
                      isOpen ? "bg-gradient-to-br from-indigo-600 to-pink-600 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Plus size={18} />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`home-faq-${i}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:text-base">
                        {faq.answer}
                      </p>
                        <a href={faq.sourceUrl} target="_blank" rel="noreferrer" className="mx-5 mb-5 inline-flex min-h-10 items-center font-semibold text-blue-800 underline-offset-4 hover:underline">{faq.sourceLabel}</a>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
