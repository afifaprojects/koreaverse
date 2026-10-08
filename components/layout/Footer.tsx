import Link from "next/link";
import { Heart } from "lucide-react";
import Container from "@/components/common/Container";
import Logo from "@/components/layout/Logo";

const quickLinks = [
  { title: "Home", href: "/" },
  { title: "Explore South Korea", href: "/explore" },
  { title: "Study in Korea", href: "/study" },
  { title: "Scholarships", href: "/scholarships" },
  { title: "Universities", href: "/universities" },
  { title: "Travel Guide", href: "/travel" },
  { title: "Learn Korean", href: "/learn-korean" },
  { title: "Latest News", href: "/news" },
];

const resources = [
  { title: "GKS Scholarship", href: "/scholarships/gks" },
  { title: "Student Visa", href: "/visa" },
  { title: "Cost of Living", href: "/tools/cost-of-living" },
  { title: "TOPIK Guide", href: "/language/topik" },
  { title: "Korean Food", href: "/food" },
  { title: "Scholarship FAQ", href: "/scholarships/faq" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="h-0.5 w-full bg-gradient-to-r from-blue-800 via-blue-500 to-rose-600" />
      <Container>
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr] lg:gap-14 lg:py-16">
          <div>
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600">
              A guide to South Korea for students, travelers, language learners, and anyone curious about Korean culture.
            </p>
            <Link href="/about" className="mt-4 inline-flex min-h-10 items-center rounded-lg px-2 text-sm font-semibold text-blue-800 transition hover:bg-blue-50">
              About KoreaVerse
            </Link>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold text-slate-900">Explore</h2>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-800">{link.title}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-base font-bold text-slate-900">Useful resources</h2>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.href}><Link href={link.href} className="text-sm text-slate-600 transition hover:text-blue-800">{link.title}</Link></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-200 py-5 sm:flex-row">
          <p className="text-xs text-slate-500">© {new Date().getFullYear()} KoreaVerse</p>
          <p className="flex items-center text-xs text-slate-500">Made with <Heart size={13} className="mx-1 text-rose-600" fill="currentColor" /> for Korea lovers</p>
        </div>
      </Container>
    </footer>
  );
}
