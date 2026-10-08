"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, Sparkles } from "lucide-react";
import Container from "@/components/common/Container";
import Button from "@/components/common/Button";
import { universities } from "@/data/universities";
import { scholarships } from "@/data/scholarships";

export default function Hero() {
  return (
<section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-rose-50/60">
      {/* Glowing colorful shapes */}
      <div className="pointer-events-none absolute -left-28 top-16 h-72 w-72 rounded-full bg-blue-300/20 blur-3xl animate-pulse-glow" />
      <div className="pointer-events-none absolute -right-28 bottom-0 h-80 w-80 rounded-full bg-rose-300/15 blur-3xl animate-pulse-glow" />

      <Container>
<div className="grid min-h-[min(760px,calc(100svh-4.75rem))] grid-cols-1 items-center gap-12 py-16 sm:py-20 lg:grid-cols-2 lg:gap-10 lg:py-24">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
{/* Badge */}
            <div className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border border-blue-200 bg-white/85 px-4 py-2 text-xs font-bold tracking-wide text-blue-800 shadow-sm backdrop-blur sm:text-sm">
              <Sparkles size={16} className="shrink-0 text-rose-600" />
              🇰🇷 South Korea Knowledge Portal
            </div>

            {/* Heading */}
            <h1 className="max-w-2xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Everything About{" "}
              <span className="text-gradient">South Korea</span>{" "}
              in One Place
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-xl text-pretty text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
              Study, Scholarships, Universities, Travel, Language, Culture and
              everything international students need to know about South Korea.
            </p>

            {/* Search Bar */}
            <div className="mt-8 max-w-xl">
              <form action="/search" method="get" role="search" className="flex items-center gap-2 rounded-2xl border border-slate-200 bg-white p-2 shadow-[0_12px_36px_-24px_rgba(23,78,166,0.45)]">
                <div className="flex flex-1 items-center px-3">
                  <Search className="mr-3 shrink-0 text-slate-400" size={20} />
                  <input
                    type="text"
                    name="q"
                    aria-label="Search KoreaVerse"
                    placeholder="Search universities, scholarships, TOPIK..."
                    className="h-11 w-full min-w-0 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-400 sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="min-h-11 shrink-0 rounded-xl bg-blue-800 px-5 text-sm font-semibold text-white transition hover:bg-blue-900 active:scale-[0.98] sm:px-6"
                >
                  Search
                </button>
              </form>
            </div>

            {/* Buttons */}
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link href="/explore" className="w-full sm:w-auto">
                <Button variant="gradient" className="w-full sm:w-auto">
                  Explore Korea
                  <ArrowRight className="ml-2" size={18} />
                </Button>
              </Link>
              <Link href="/study" className="w-full sm:w-auto">
                <Button variant="secondary" className="w-full sm:w-auto">
                  Study in Korea
                </Button>
              </Link>
            </div>

{/* Tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {["GKS Scholarship", "Study Visa", "TOPIK", "Universities"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/80 px-3.5 py-1.5 text-xs font-medium text-slate-600 sm:text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </motion.div>

          {/* Right Column - SVG Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative hidden lg:block"
          >
            <div className="relative mx-auto max-w-md">
              {/* Floating glow card */}
              <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-200 via-indigo-100 to-red-200 opacity-60 blur-2xl" />

              <svg viewBox="0 0 500 500" className="w-full animate-float" fill="none">
                {/* Skyline */}
                <g>
                  <rect x="60" y="260" width="40" height="120" rx="4" fill="#2563eb" opacity="0.85" />
                  <rect x="110" y="220" width="50" height="160" rx="4" fill="#dc2626" opacity="0.8" />
                  <rect x="175" y="240" width="45" height="140" rx="4" fill="#f59e0b" opacity="0.85" />
                  <rect x="235" y="200" width="55" height="180" rx="4" fill="#2563eb" opacity="0.9" />
                  <rect x="305" y="250" width="40" height="130" rx="4" fill="#dc2626" opacity="0.75" />
                  <rect x="360" y="230" width="55" height="150" rx="4" fill="#7c3aed" opacity="0.8" />
                  <rect x="430" y="270" width="35" height="110" rx="4" fill="#2563eb" opacity="0.7" />
                </g>

                {/* Antenna on top */}
                <line x1="262" y1="200" x2="262" y2="160" stroke="#2563eb" strokeWidth="3" />
                <circle cx="262" cy="155" r="10" fill="#dc2626" className="" />

                {/* N Seoul Tower */}
                <g>
                  <rect x="137" y="60" width="18" height="90" rx="3" fill="#64748b" />
                  <ellipse cx="146" cy="150" rx="28" ry="12" fill="#94a3b8" />
                  <rect x="120" y="55" width="52" height="16" rx="6" fill="#dc2626" />
                  <circle cx="146" cy="63" r="4" fill="#fff" />
                </g>

                {/* Cherry blossoms */}
                <g className="animate-float-slow" fill="#f472b6">
                  <circle cx="80" cy="190" r="8" />
                  <circle cx="92" cy="182" r="8" />
                  <circle cx="88" cy="198" r="8" />
                  <circle cx="400" cy="180" r="8" />
                  <circle cx="412" cy="172" r="8" />
                  <circle cx="408" cy="188" r="8" />
                </g>

                {/* Students */}
                <g>
                  <circle cx="130" cy="380" r="16" fill="#fbbf24" />
                  <rect x="116" y="400" width="28" height="45" rx="8" fill="#2563eb" />
                  <circle cx="330" cy="380" r="16" fill="#f9a8d4" />
                  <rect x="316" y="400" width="28" height="45" rx="8" fill="#dc2626" />
                </g>

                {/* Books */}
                <g>
                  <rect x="60" y="420" width="60" height="12" rx="3" fill="#2563eb" />
                  <rect x="60" y="432" width="50" height="12" rx="3" fill="#dc2626" />
                  <rect x="60" y="444" width="55" height="12" rx="3" fill="#f59e0b" />
                </g>

                {/* Airplane */}
                <g className="animate-float-slow">
                  <path
                    d="M380 120 L460 100 L452 116 L390 132 Z"
                    fill="#2563eb"
                  />
                  <path d="M380 132 L452 116 L460 100 Z" fill="#1e40af" />
                  <circle cx="420" cy="116" r="3" fill="#fff" />
                </g>

                {/* Flag colors accent */}
                <rect x="250" y="330" width="80" height="6" rx="3" fill="#2563eb" />
                <rect x="250" y="340" width="80" height="6" rx="3" fill="#dc2626" />
              </svg>

              {/* Floating mini cards */}
              <div className="absolute -left-8 top-16 animate-float rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur">
                <div className="text-2xl">🎓</div>
                <p className="mt-1 text-xs font-semibold text-slate-700">{universities.length} universities listed</p>
              </div>
              <div
                className="absolute -right-6 top-40 animate-float-slow rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-2xl">🏆</div>
                <p className="mt-1 text-xs font-semibold text-slate-700">{scholarships.length} official programs</p>
              </div>
              <div
                className="absolute -bottom-4 left-10 animate-float rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-xl backdrop-blur"
                style={{ animationDelay: "3s" }}
              >
                <div className="text-2xl">✈️</div>
                <p className="mt-1 text-xs font-semibold text-slate-700">Travel & Study</p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
