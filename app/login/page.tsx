import type { Metadata } from "next";
import Link from "next/link";
import { LockKeyhole, ArrowRight, CircleHelp } from "lucide-react";
import Container from "@/components/common/Container";

export const metadata: Metadata = {
  title: "Login | KoreaVerse",
  description: "Account sign-in information for KoreaVerse.",
};

export default function LoginPage() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-rose-50/60 py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-7 shadow-sm sm:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-800"><LockKeyhole size={23} /></div>
          <h1 className="mt-5 text-3xl font-bold tracking-tight text-slate-950">Sign in to KoreaVerse</h1>
          <p className="mt-3 leading-7 text-slate-600">Account sign-in is not available yet. KoreaVerse does not have an authentication provider or account service configured, so this site will not collect or pretend to authenticate a password.</p>
          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-blue-50 p-4 text-sm leading-6 text-blue-950">
            <CircleHelp size={19} className="mt-0.5 shrink-0 text-blue-700" />
            <p>To enable real accounts, configure an authentication provider and its server-side credentials, then connect the profile and dashboard to that provider.</p>
          </div>
          <Link href="/explore" className="mt-7 inline-flex min-h-11 items-center gap-2 rounded-xl bg-blue-800 px-5 font-semibold text-white transition hover:bg-blue-900">
            Continue exploring <ArrowRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
