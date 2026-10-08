import { ReactNode } from "react";
import Container from "@/components/common/Container";
import Badge from "@/components/common/Badge";

type PageBannerProps = {
  badge: string;
  title: ReactNode;
  description: string;
  gradient?: string;
  children?: ReactNode;
};

export default function PageBanner({
  badge,
  title,
  description,
  gradient = "from-blue-600 via-indigo-600 to-red-600",
  children,
}: PageBannerProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-pink-50">
      {/* Glow shapes */}
      <div className="pointer-events-none absolute -left-20 top-10 h-64 w-64 rounded-full bg-indigo-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-pink-400/20 blur-3xl" />
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-52 w-52 rounded-full bg-amber-300/20 blur-3xl" />

      <Container>
        <div className="py-16 sm:py-20">
          <Badge variant="gradient">{badge}</Badge>
          <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            {description}
          </p>
          {children && <div className="mt-8">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
