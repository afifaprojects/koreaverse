"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Container from "@/components/common/Container";
import SectionTitle from "@/components/common/SectionTitle";
import { roadmap } from "@/data/studyRoadmap";

export default function RoadmapTimeline() {
  return (
<section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          badge="Study Roadmap"
          title="Your Journey to Studying in Korea"
          description="Follow this step-by-step roadmap from dreaming about Korea to landing your dream job after graduation."
        />

        <div className="mx-auto max-w-3xl">
          {roadmap.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="flex gap-5"
              >
                {/* Icon & line column */}
<div className="flex flex-col items-center">
                  <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full text-white shadow-lg ${
                    ["bg-gradient-to-br from-indigo-600 to-pink-600", "bg-gradient-to-br from-pink-600 to-amber-500", "bg-gradient-to-br from-amber-500 to-emerald-600", "bg-gradient-to-br from-emerald-600 to-indigo-600"][i % 4]
                  }`}>
                    <Icon size={24} />
                  </div>
                  {i < roadmap.length - 1 && (
                    <div className="my-1 flex flex-col items-center">
                      <div className="h-8 w-0.5 bg-gradient-to-b from-indigo-600 to-pink-600" />
                      <ChevronDown size={18} className="text-slate-300" />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="mb-8 flex-1 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="flex items-center gap-3">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-100 text-sm font-bold text-blue-700">
                      {i + 1}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900">{step.title}</h3>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
