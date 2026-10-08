"use client";

import { useState } from "react";
import { Calculator, Check } from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import Input from "@/components/common/Input";
import Button from "@/components/common/Button";

export default function GpaCalculatorPage() {
  const [courses, setCourses] = useState([{ grade: "", credit: "3" }]);

  const addCourse = () => setCourses([...courses, { grade: "", credit: "3" }]);

  const updateCourse = (i: number, field: string, value: string) => {
    const updated = [...courses];
    updated[i] = { ...updated[i], [field]: value };
    setCourses(updated);
  };

  const gradePoints: Record<string, number> = {
    "A+": 4.5, A: 4.0, "B+": 3.5, B: 3.0, "C+": 2.5, C: 2.0, D: 1.0, F: 0,
  };

  const calculate = () => {
    let totalPoints = 0;
    let totalCredits = 0;
    courses.forEach((c) => {
      const gp = gradePoints[c.grade.toUpperCase()];
      const cr = parseFloat(c.credit) || 0;
      if (gp !== undefined && cr > 0) {
        totalPoints += gp * cr;
        totalCredits += cr;
      }
    });
    return totalCredits > 0 ? (totalPoints / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <>
      <PageBanner
        badge="GPA Calculator"
        title={
          <>
            <span className="text-gradient">GPA</span> Calculator
          </>
        }
        description="Calculate your GPA based on the Korean 4.5 grading scale."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-100 to-red-100 text-blue-700">
                <Calculator size={24} />
              </div>
              <h2 className="text-xl font-bold text-slate-900">GPA Calculator (4.5 Scale)</h2>
            </div>

            <div className="space-y-4">
              {courses.map((course, i) => (
                <div key={i} className="flex gap-3">
                  <Input
                    placeholder="Grade (A+, A, B+...)"
                    value={course.grade}
                    onChange={(e) => updateCourse(i, "grade", e.target.value)}
                    className="flex-1"
                  />
                  <Input
                    type="number"
                    placeholder="Credits"
                    value={course.credit}
                    onChange={(e) => updateCourse(i, "credit", e.target.value)}
                    className="w-24"
                  />
                </div>
              ))}
            </div>

            <button
              onClick={addCourse}
              className="mt-4 text-sm font-semibold text-blue-700 transition hover:text-blue-800"
            >
              + Add Course
            </button>

            <div className="mt-6 rounded-2xl bg-gradient-to-br from-blue-600 to-red-600 p-6 text-center text-white">
              <p className="text-sm text-white/70">Your GPA</p>
              <p className="mt-2 text-4xl font-bold">{calculate()}</p>
              <p className="mt-2 text-sm text-white/70">out of 4.5</p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
