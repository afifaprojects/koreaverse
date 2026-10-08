"use client";

import { useState } from "react";
import { Check, X, Award } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function EligibilityCheckerPage() {
  const [gpa, setGpa] = useState<string>("");
  const [topik, setTopik] = useState<string>("");
  const [gpaScale, setGpaScale] = useState<"4" | "5">("4");
  const [result, setResult] = useState<string | null>(null);

  const check = () => {
    const gpaValue = Number(gpa);
    const topikValue = Number(topik);

    if (!gpa.trim() || !topik.trim() || !Number.isFinite(gpaValue) || !Number.isInteger(topikValue) || gpaValue < 0 || gpaValue > Number(gpaScale) || topikValue < 1 || topikValue > 6) {
      setResult("Enter a GPA within the selected scale and a whole TOPIK level from 1 to 6.");
      return;
    }

    const normalizedGpa = (gpaValue / Number(gpaScale)) * 4;

    if (normalizedGpa >= 3.0 && topikValue >= 3) {
      setResult("Your self-reported scores are a solid starting point for researching many programs. Each university and scholarship has its own criteria; verify the official requirements.");
    } else if (normalizedGpa >= 2.5 && topikValue >= 2) {
      setResult("Your scores may meet some program requirements. Compare official GPA conversions and language requirements for each option.");
    } else {
      setResult("You may need to improve your GPA or TOPIK score. Consider a Korean language program first.");
    }
  };

  return (
    <>
      <PageBanner
        badge="Eligibility Checker"
        title={
          <>
            Check Your <span className="text-gradient">Eligibility</span>
          </>
        }
        description="Use this general self-check as a starting point. Program requirements and GPA conversions vary; verify details with each university and scholarship provider."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                <Award size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">Eligibility Checker</h2>
            </div>

            <label htmlFor="eligibility-gpa" className="mb-2 block text-sm font-semibold text-slate-600">
              Your GPA / CGPA
            </label>
            <Input
              id="eligibility-gpa"
              type="number"
              min="0"
              max={gpaScale}
              step="any"
              required
              placeholder="e.g. 3.5"
              value={gpa}
              onChange={(e) => setGpa(e.target.value)}
              className="mb-4"
            />

            <label htmlFor="gpa-scale" className="mb-2 block text-sm font-semibold text-slate-600">
              GPA scale
            </label>
            <select id="gpa-scale" value={gpaScale} onChange={(event) => setGpaScale(event.target.value as "4" | "5")} className="mb-4 h-12 w-full rounded-xl border border-slate-300 bg-white px-4 text-slate-900 focus:border-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-100">
              <option value="4">Out of 4.0</option>
              <option value="5">Out of 5.0</option>
            </select>

            <label htmlFor="eligibility-topik" className="mb-2 block text-sm font-semibold text-slate-600">
              Your TOPIK Level (1-6)
            </label>
            <Input
              id="eligibility-topik"
              type="number"
              min="1"
              max="6"
              step="1"
              required
              placeholder="e.g. 3"
              value={topik}
              onChange={(e) => setTopik(e.target.value)}
              className="mb-6"
            />

            <Button onClick={check} className="w-full">
              Check Eligibility
            </Button>

            {result && (
              <div className={`mt-6 flex items-start gap-3 rounded-2xl p-5 ${
                result.startsWith("Excellent") || result.startsWith("Good")
                  ? "bg-emerald-50"
                  : "bg-amber-50"
              }`}>
                {result.startsWith("Excellent") || result.startsWith("Good") ? (
                  <Check size={20} className="mt-0.5 shrink-0 text-emerald-500" />
                ) : (
                  <X size={20} className="mt-0.5 shrink-0 text-amber-500" />
                )}
                <p className="text-sm leading-7 text-slate-700">{result}</p>
              </div>
            )}
          </div>
        </Container>
      </section>
    </>
  );
}
