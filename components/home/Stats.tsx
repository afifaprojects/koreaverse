"use client";

import { motion } from "framer-motion";
import { GraduationCap, Building2, MapPinned, BookOpen } from "lucide-react";
import Container from "@/components/common/Container";
import { stats } from "@/data/stats";

const icons = [GraduationCap, Building2, MapPinned, BookOpen];

export default function Stats() {
  return (
<section className="py-16 sm:py-20">
      <Container>
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((item, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
<div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 via-pink-100 to-amber-100 transition group-hover:from-indigo-600 group-hover:via-pink-600 group-hover:to-amber-500">
                  <Icon
                    size={28}
                    className="text-indigo-700 transition group-hover:text-white"
                  />
                </div>

                <h3 className="text-3xl font-bold text-slate-900 sm:text-4xl">
                  {item.number}{item.suffix}
                </h3>

                <p className="mt-2 text-lg font-semibold text-slate-800">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-slate-500">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
