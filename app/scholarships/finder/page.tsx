"use client";

import { useState } from "react";
import { ArrowRight, Award } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import FadeIn from "@/components/common/FadeIn";
import { scholarships } from "@/data/scholarships";

const questions = ["What degree level are you planning to pursue?"];

export default function ScholarshipFinderPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [complete, setComplete] = useState(false);

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[step] = answer;
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      setComplete(true);
    }
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const reset = () => {
    setStep(0);
    setAnswers([]);
    setComplete(false);
  };

  const recommendations = scholarships.filter((scholarship) => {
    if (answers[0] === "Undergraduate") return scholarship.degreeLevel.some((level) => ["Associate", "Bachelor's"].includes(level));
    if (answers[0] === "Graduate") return scholarship.degreeLevel.some((level) => ["Master's", "Doctoral"].includes(level));
    return false;
  });

  return (
    <>
      <PageBanner
        badge="Scholarship Finder"
        title={
          <>
            Find Your <span className="text-gradient">Perfect Scholarship</span>
          </>
        }
        description="Filter named scholarship programs by intended degree level. This directory does not determine individual eligibility."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl">
            {!complete ? (
              <FadeIn>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                  {/* Progress */}
                  <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold text-slate-500">
                      Select your degree level
                    </p>
                    <div className="h-2 overflow-hidden rounded-full bg-slate-100">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-blue-600 to-red-600 transition-all duration-500"
                        style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                      />
                    </div>
                  </div>

                  <h2 className="text-xl font-bold text-slate-900">
                    {questions[step]}
                  </h2>

                  <div className="mt-6 grid grid-cols-1 gap-3">
                    {step === 1 && ["Undergraduate", "Graduate"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                      >
                        {opt}
                      </button>
                    ))}
                    {step === 0 && ["Undergraduate", "Graduate"].map((opt) => (
                      <button key={opt} type="button" onClick={() => handleAnswer(opt)} className="min-h-12 rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50">{opt}</button>
                    ))}
                    {step === 2 && ["South Asia", "Southeast Asia", "Africa", "Middle East", "Other"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                      >
                        {opt}
                      </button>
                    ))}
                    {step === 3 && ["Yes", "No"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                      >
                        {opt}
                      </button>
                    ))}
                    {step === 4 && ["Full funding", "Partial funding"].map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleAnswer(opt)}
                        className="rounded-xl border border-slate-200 p-4 text-left font-medium text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {step > 0 && (
                    <button
                      onClick={handleBack}
                      className="mt-6 text-sm font-semibold text-slate-500 transition hover:text-blue-700"
                    >
                      ← Back
                    </button>
                  )}
                </div>
              </FadeIn>
            ) : (
              <FadeIn>
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-red-600 text-white">
                      <Award size={24} />
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-slate-900">Your Matches</h2>
                      <p className="text-sm text-slate-500">
                        Programs shown list this degree level; this is not an eligibility decision.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    {recommendations.map((s) => {
                      const note = `${s.description} Check the latest official notice for requirements and application details.`;
                      return (
                      <div key={s.id} className="rounded-2xl border border-slate-200 p-5">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-slate-900">{s.name}</h3>
                          <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-800">Option to explore</span>
                        </div>
                        <p className="mt-2 text-sm text-slate-600">{note}</p>
                        <a href={s.officialWebsite} target="_blank" rel="noreferrer" className="mt-3 inline-flex min-h-10 items-center gap-1 text-sm font-semibold text-blue-700">Official information <ArrowRight size={16} /></a>
                      </div>
                    );})}
                  </div>

                  <button
                    onClick={reset}
                    className="mt-8 w-full rounded-xl border border-slate-200 p-4 font-semibold text-slate-700 transition hover:border-blue-600 hover:bg-blue-50"
                  >
                    Start Over
                  </button>
                </div>
              </FadeIn>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
