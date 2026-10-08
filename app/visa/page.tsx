"use client";

import {
  FileText,
  Check,
  Clock,
  Plane,
  Shield,
  Wallet,
  AlertCircle,
} from "lucide-react";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Badge from "@/components/common/Badge";
import { useCurrency } from "@/context/CurrencyContext";

const steps = [
  { title: "Get Admission", desc: "Receive your Certificate of Admission from a Korean university.", icon: FileText },
  { title: "Prepare Documents", desc: "Gather passport, photos, application form, and financial proof.", icon: Check },
  { title: "Apply at Embassy", desc: "Submit your D-2 visa application at the Korean embassy.", icon: Plane },
  { title: "Wait for Processing", desc: "Processing typically takes 2-4 weeks.", icon: Clock },
  { title: "Receive Visa", desc: "Collect your visa and make travel arrangements.", icon: Shield },
];

const requiredDocs = [
  "Valid passport",
  "Visa application form",
  "Certificate of Admission",
  "Proof of financial capability",
  "Visa photos",
  "Application fee",
  "Health certificate (sometimes)",
];

export default function VisaPage() {
  const { formatRange } = useCurrency();
  return (
    <>
      <PageBanner
        badge="Student Visa"
        title={
          <>
            Get Your <span className="text-gradient">D-2 Student Visa</span>
          </>
        }
        description="Everything you need to know about applying for the D-2 student visa to study in South Korea."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Visa Process"
            title="Step-by-Step Visa Application"
            description="Follow these steps to successfully obtain your D-2 student visa."
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-5">
            {steps.map((s, i) => {
              const Icon = s.icon;
              return (
                <FadeIn key={s.title} delay={i * 0.1}>
                  <div className="relative h-full rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                    <span className="absolute left-4 top-4 text-3xl font-extrabold text-blue-100">
                      {i + 1}
                    </span>
                    <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                      <Icon size={26} />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">{s.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{s.desc}</p>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <Badge variant="red">Required Documents</Badge>
                <h2 className="mt-4 text-2xl font-bold text-slate-900">
                  Documents for D-2 Visa
                </h2>
                <div className="mt-6 space-y-3">
                  {requiredDocs.map((doc) => (
                    <div key={doc} className="flex items-center gap-3 rounded-xl bg-slate-50 p-4">
                      <Check size={18} className="shrink-0 text-emerald-500" />
                      <span className="text-sm font-medium text-slate-700">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
                    <Wallet size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Financial Requirements</h3>
<p className="mt-3 leading-8 text-slate-600">
                    You&apos;ll need to show proof of funds covering tuition and living
                    expenses, typically around{" "}
                    <strong>{formatRange("$10,000–$20,000")}</strong> depending on
                    your program and location.
                  </p>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-100 text-amber-700">
                    <AlertCircle size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Important Notes</h3>
                  <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                    <li>• Apply as soon as you receive your admission letter</li>
                    <li>• D-2 visas allow part-time work (up to 20 hrs/week)</li>
                    <li>• Visa validity is tied to your study period</li>
                    <li>• Extensions can be requested through immigration</li>
                  </ul>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
