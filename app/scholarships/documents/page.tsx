import { Check, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";
import Container from "@/components/common/Container";
import PageBanner from "@/components/common/PageBanner";
import SectionTitle from "@/components/common/SectionTitle";
import FadeIn from "@/components/common/FadeIn";
import Button from "@/components/common/Button";

const documents = [
  "Completed application form",
  "Valid passport copy",
  "Official academic transcripts",
  "Certificate of graduation / enrollment",
  "Study plan / Statement of purpose (OSK/OPS)",
  "Recommendation letters (1-2)",
  "TOPIK or English proficiency scores",
  "GPA/CGPA certificate",
  "Medium of Instruction (MOI) certificate",
  "Medical evaluation / health form",
  "Bank statement / proof of financial support",
  "Personal essays",
];

const tips = [
  "Notarize all official documents",
  "Get documents translated into English or Korean",
  "Make multiple copies of everything",
  "Check embassy-specific requirements",
  "Submit documents well before the deadline",
];

export default function DocumentsPage() {
  return (
    <>
      <PageBanner
        badge="Required Documents"
        title={
          <>
            Documents You&apos;ll <span className="text-gradient">Need</span>
          </>
        }
        description="A complete checklist of documents required for Korean university and scholarship applications."
      />

      <section className="py-16 sm:py-20">
        <Container>
          <SectionTitle
            badge="Checklist"
            title="Complete Document Checklist"
            description="Prepare all these documents to ensure a smooth application process."
          />
          <div className="mx-auto max-w-3xl space-y-3">
            {documents.map((doc, i) => (
              <FadeIn key={doc} delay={i * 0.03}>
                <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">
                    {i + 1}
                  </span>
                  <p className="font-medium text-slate-700">{doc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <FadeIn>
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                  <FileText size={24} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Pro Tips</h3>
                <div className="mt-5 space-y-3">
                  {tips.map((tip) => (
                    <div key={tip} className="flex items-start gap-3">
                      <Check size={18} className="mt-1 shrink-0 text-emerald-500" />
                      <span className="text-sm leading-6 text-slate-600">{tip}</span>
                    </div>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.15}>
              <div className="flex h-full flex-col items-center justify-center rounded-3xl bg-gradient-to-br from-blue-600 to-red-600 p-10 text-center text-white">
                <h3 className="text-2xl font-bold">Stay Organized</h3>
                <p className="mt-4 max-w-md text-white/85">
                  Keep all documents organized in a folder and track their status.
                  Missing documents are the most common reason for application delays.
                </p>
                <Link href="/scholarships" className="mt-8">
                  <Button className="bg-white text-blue-700 hover:bg-blue-50">
                    Back to Scholarships
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>
        </Container>
      </section>
    </>
  );
}
